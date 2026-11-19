<?php
// ACC HOMES — site formları (Turhost). Form verisini info@ adresine mail atar,
// yedek olarak web kökünün DIŞINDA bir CSV'ye yazar ve ziyaretçiyi teşekkür sayfasına döndürür.
declare(strict_types=1);

const TO       = 'info@acchomesantalya.com';
const FROM     = 'web@acchomesantalya.com';
const FORMS    = ['iletisim', 'ilan-talep', 'gosterim-talep', 'degerleme-talep', 'beni-ara', 'danisman-gorusme', 'danismanlik', 'proje-talep', 'rehber-indir'];
const LOG_DIR  = __DIR__ . '/../form-kayitlari';

function back(string $to): void {
  $to = (is_string($to) && str_starts_with($to, '/') && !str_starts_with($to, '//')) ? $to : '/';
  $sep = str_contains($to, '?') ? '&' : '?';
  if (!str_contains($to, 'ok=1')) $to .= $sep . 'ok=1';
  header('Location: ' . $to, true, 303);
  exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') { header('Location: /', true, 302); exit; }

$next = (string)($_POST['_next'] ?? '/');
// bot tuzağı: dolu ise sessizce geç
if (!empty($_POST['bot'])) back($next);

$form = preg_replace('/[^a-z0-9-]/', '', strtolower((string)($_POST['form-name'] ?? 'iletisim')));
if (!in_array($form, FORMS, true)) $form = 'iletisim';

// basit hız sınırı: aynı IP'den dakikada 5 gönderim
$ip = $_SERVER['HTTP_X_FORWARDED_FOR'] ?? $_SERVER['REMOTE_ADDR'] ?? '';
$ip = trim(explode(',', $ip)[0]);
$rl = sys_get_temp_dir() . '/accform_' . md5($ip);
$hits = array_filter(explode(',', (string)@file_get_contents($rl)), fn($t) => $t !== '' && (int)$t > time() - 60);
if (count($hits) >= 5) back($next);
$hits[] = (string)time();
@file_put_contents($rl, implode(',', $hits));

$skip = ['bot', '_next', 'form-name'];
$rows = [];
foreach ($_POST as $k => $v) {
  if (in_array($k, $skip, true)) continue;
  $v = is_array($v) ? implode(', ', $v) : (string)$v;
  $v = trim(mb_substr(str_replace(["\r", "\0"], '', $v), 0, 3000));
  if ($v === '') continue;
  $rows[preg_replace('/[^\p{L}\p{N}_ -]/u', '', (string)$k)] = $v;
}
if (!$rows) back($next);

$page = (string)($_SERVER['HTTP_REFERER'] ?? '');
$body = "Web sitesinden yeni form: {$form}\n\n";
foreach ($rows as $k => $v) $body .= str_pad($k . ':', 12) . " {$v}\n";
$body .= "\nSayfa: {$page}\nTarih: " . date('d.m.Y H:i') . "\n";

$subjectName = $rows['ad'] ?? $rows['name'] ?? '';
$subject = '=?UTF-8?B?' . base64_encode("Web formu: {$form}" . ($subjectName ? " — {$subjectName}" : '')) . '?=';
$headers = [
  'From: ACC HOMES Web <' . FROM . '>',
  'Content-Type: text/plain; charset=UTF-8',
  'MIME-Version: 1.0',
];
$reply = $rows['email'] ?? $rows['eposta'] ?? '';
if ($reply && filter_var($reply, FILTER_VALIDATE_EMAIL)) $headers[] = 'Reply-To: ' . $reply;

$sent = @mail(TO, $subject, $body, implode("\r\n", $headers), '-f' . FROM);

// ACC HOMES Panel'e kayıt (Yönetim → Site formları). Anahtar herkese açık publishable anahtardır; yalnız ekleme yapabilir.
$tel = trim(($rows['ulke_kodu'] ?? '') . ' ' . ($rows['telefon'] ?? ''));
$panelVeri = $rows + ['form' => $form, 'sayfa' => $page, 'telefon' => $tel];
$panelOk = false;
$ch = @curl_init('https://vqsocwdfmvpgdpxkcubz.supabase.co/rest/v1/rpc/site_form_ekle');
if ($ch) {
  curl_setopt_array($ch, [CURLOPT_POST => true, CURLOPT_RETURNTRANSFER => true, CURLOPT_TIMEOUT => 8,
    CURLOPT_HTTPHEADER => ['apikey: sb_publishable_Fv0kalSrYIRLNjCoER1y2Q_31N9fJ_z', 'Content-Type: application/json'],
    CURLOPT_POSTFIELDS => json_encode(['p' => $panelVeri], JSON_UNESCAPED_UNICODE)]);
  $res = curl_exec($ch); $panelOk = curl_getinfo($ch, CURLINFO_HTTP_CODE) === 200 && trim((string)$res) === 'true'; curl_close($ch);
}

// yedek kayıt (web kökü dışında; tarayıcıdan erişilemez)
if (!is_dir(LOG_DIR)) @mkdir(LOG_DIR, 0700, true);
$fh = @fopen(LOG_DIR . '/' . date('Y-m') . '.csv', 'a');
if ($fh) { fputcsv($fh, [date('c'), $form, $sent ? 'mail-ok' : 'mail-HATA', $panelOk ? 'panel-ok' : 'panel-HATA', json_encode($rows, JSON_UNESCAPED_UNICODE), $page]); fclose($fh); }

back($next);
