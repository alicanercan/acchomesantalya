// Türkçe sayfalarda CSS `text-transform:uppercase` İngilizce adlardaki i harfini "İ" yapar
// (INTERNATIONAL → İNTERNATİONAL). Bu adları <span lang="en"> içine alır; yalnızca <body> metin düğümleri.
const RE = /(International Real Estate|International|LinkedIn|Instagram|Telegram|Private|Antalle Concept Houses|Realty World|Danube Properties|Kraft Heinz)/g;
export function enSpan(html) {
  if (!/<html[^>]*lang="tr"/.test(html)) return html;
  const i = html.indexOf('<body');
  if (i < 0) return html;
  const head = html.slice(0, i), body = html.slice(i);
  return head + body.split(/(<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>)/).map((part, k) => (k % 2 ? part : part.replace(/>([^<]+)</g, (m, x) => '>' + x.replace(RE, '<span lang="en">$1</span>') + '<'))).join('');
}
