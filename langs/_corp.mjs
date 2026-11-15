// Kurumsal sayfaları (Biz Kimiz, Ali Caner Can, Ekibimiz, Hizmetlerimiz, Kariyer) kısa veriden üretir.
const ICONS = ['🏠', '🔑', '🛠️', '🏗️', '🌍', '📊', '📈', '🏬'];
export function corpPages(c) {
  const a = c.about, b = c.broker, t = c.team, s = c.services, j = c.join;
  return {
    about: {
      seg: a.seg, nav: a.nav, title: a.title, desc: a.desc, lead: a.lead,
      html: `\n<h2>${a.hStory}</h2>\n<p>${a.story1.replace('{{BROKER}}', `<a href="{{URL:broker}}">${b.name}</a>`)}</p>\n<p>${a.story2}</p>\n{{STATS}}\n<h2>ACC Plaza</h2>\n{{OFFICE}}\n<h2>${a.hHow}</h2>\n<div class="cards3">${a.how.map(([h, p]) => `<div><h3>${h}</h3><p>${p}</p></div>`).join('')}</div>\n<h2>${a.hJourney}</h2>\n{{TIMELINE}}\n<h2>${a.hProj}</h2>\n<p>${a.proj}</p>\n<div class="ctas"><a class="btn" href="{{URL:team}}">${a.cta1}</a><a class="btn ghost" href="{{URL:services}}">${a.cta2}</a></div>`,
    },
    broker: {
      seg: 'ali-caner-can', nav: b.name, title: b.title, desc: b.desc, lead: b.lead,
      html: `\n<div class="bio">\n<div class="biophoto">{{BROKER_PHOTO}}</div>\n<div>${b.bio.map((p) => `<p>${p}</p>`).join('')}<p><a href="{{IG_CANER}}" target="_blank" rel="noopener">Instagram: @alicanercan.therealtor</a></p>\n</div></div>\n<div class="ctas"><a class="btn" href="{{WA}}" target="_blank" rel="noopener">${b.ctaWa}</a><a class="btn ghost" href="{{TEL}}">${b.ctaCall}</a></div>`,
    },
    team: {
      seg: t.seg, nav: t.nav, title: t.title, desc: t.desc, lead: t.lead,
      html: `\n{{TEAMPHOTOS}}\n<h2>${t.hMgmt}</h2>\n{{TEAM}}\n<h2>${t.hPartners}</h2>\n<p>${t.partnersText}</p>\n{{PARTNERS}}\n<h3>${t.hLangs}</h3>\n{{LANGS}}\n<div class="ctas"><a class="btn" href="{{URL:contact}}">${t.cta}</a></div>`,
    },
    services: {
      seg: s.seg, nav: s.nav, title: s.title, desc: s.desc, lead: s.lead,
      html: `\n<h2>${s.hBefore}</h2>\n<div class="svc">${s.svc.map(([h, p], i) => `<div><span>${ICONS[i]}</span><h3>${h}</h3><p>${p}</p></div>`).join('')}</div>\n<h2>${s.hAfter}</h2>\n<ul class="ticks cols2">${s.after.map((x) => `<li>${x}</li>`).join('')}</ul>\n<div class="ctas"><a class="btn" href="{{WA}}" target="_blank" rel="noopener">${s.cta1}</a><a class="btn ghost" href="{{URL:contact}}">${s.cta2}</a></div>`,
    },
    join: {
      seg: j.seg, nav: j.nav, title: j.title, desc: j.desc, lead: j.lead,
      html: `\n<div class="cards3">${j.cards.map(([h, p]) => `<div><h3>${h}</h3><p>${p}</p></div>`).join('')}</div>\n<div class="ctas"><a class="btn" href="{{WA_JOIN}}" target="_blank" rel="noopener">${j.cta}</a></div>`,
    },
  };
}
