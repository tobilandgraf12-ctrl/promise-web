/* PROMISE VB — secciones propias para la tienda Tiendanube (plantilla Morelia).
   Se carga desde: Diseño > Pie de página > "Código Javascript o HTML del sello".
   Solo agrega bloques en la página de inicio. Si algo falla, no rompe la tienda. */
(function () {
  'use strict';
  if (window.__promiseLoaded) return;
  window.__promiseLoaded = true;

  var WA = 'https://wa.me/541140563485';
  var MAPS = 'https://maps.google.com/?q=Alvear+2445+Villa+Ballester';

  var CSS = [
    '.pm-sec{background:#0F0F0F;color:#EDEAE4;padding:96px 0;font-family:inherit;position:relative;overflow:hidden}',
    '.pm-wrap{max-width:1240px;margin:0 auto;padding:0 24px}',
    '.pm-kick{display:flex;align-items:center;gap:12px;font-size:12px;letter-spacing:.3em;font-weight:700;color:#FF4A4A;text-transform:uppercase;margin-bottom:14px}',
    '.pm-kick:before{content:"";width:38px;height:2px;background:#D7191F}',
    '.pm-h{font-family:"Oswald",sans-serif;font-weight:700;text-transform:uppercase;font-size:64px;line-height:1.05;margin:0 0 18px;padding-top:.08em;color:#EDEAE4;letter-spacing:.01em}',
    '.pm-h em{font-style:normal;color:#D7191F}',
    '.pm-lead{color:#A8A39B;font-size:16px;max-width:560px;line-height:1.6;margin:0}',
    '.pm-btn{display:inline-flex;align-items:center;gap:10px;background:#D7191F;color:#fff!important;padding:16px 30px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;font-size:13px;text-decoration:none!important;transition:transform .2s,filter .2s}',
    '.pm-btn:hover{transform:translateY(-2px);filter:brightness(1.1)}',
    '.pm-btn.pm-ghost{background:transparent;border:1px solid #EDEAE4}',
    '.pm-rv{opacity:0;transform:translateY(40px);transition:opacity .8s cubic-bezier(.2,.8,.2,1),transform .8s cubic-bezier(.2,.8,.2,1)}',
    '.pm-rv.pm-in{opacity:1;transform:none}',
    /* etiquetas */
    '.pm-tags{position:relative;display:grid;grid-template-columns:repeat(4,1fr);gap:22px;margin-top:56px;padding-top:44px}',
    '.pm-tags:before{content:"";position:absolute;left:0;right:0;top:0;height:3px;background:#2a2a2a;border-radius:2px}',
    '.pm-tag{position:relative;background:#EDEAE4;color:#0F0F0F;padding:46px 22px 18px;clip-path:polygon(16% 0,84% 0,100% 12%,100% 100%,0 100%,0 12%);transform-origin:50% -44px;animation:pm-swing 5s ease-in-out infinite}',
    '.pm-tag:nth-child(2){animation-delay:-1.2s}.pm-tag:nth-child(3){animation-delay:-2.4s}.pm-tag:nth-child(4){animation-delay:-3.6s}',
    '.pm-tagwrap{position:relative}',
    '.pm-tagwrap:before{content:"";position:absolute;left:50%;top:-44px;width:1px;height:52px;background:#7a7570;z-index:2}',
    '.pm-tag i{position:absolute;left:50%;top:14px;width:10px;height:10px;margin-left:-5px;border-radius:50%;background:#0F0F0F;box-shadow:0 0 0 3px #d8d3cb}',
    '.pm-tag b{display:block;font-family:"Oswald",sans-serif;font-size:44px;line-height:1;text-transform:uppercase}',
    '.pm-tag b span{color:#D7191F}',
    '.pm-tag h4{font-size:12px;letter-spacing:.14em;text-transform:uppercase;margin:12px 0 10px;color:#0F0F0F;font-weight:800}',
    '.pm-tag p{font-size:14px;line-height:1.55;color:#3d3a37;margin:0 0 18px;min-height:66px}',
    '.pm-tag .pm-tf{display:flex;justify-content:space-between;align-items:center;border-top:1px dashed #a9a39b;padding-top:10px;font-family:"Courier New",monospace;font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:#5b5752}',
    '.pm-bar{width:58px;height:18px;background:repeating-linear-gradient(90deg,#0F0F0F 0 2px,transparent 2px 4px,#0F0F0F 4px 5px,transparent 5px 8px)}',
    '@keyframes pm-swing{0%,100%{transform:rotate(-1.4deg)}50%{transform:rotate(1.4deg)}}',
    /* preguntas frecuentes */
    '.pm-faq{margin-top:46px;border-top:1px solid #262626}',
    '.pm-q{border-bottom:1px solid #262626}',
    '.pm-q button{all:unset;box-sizing:border-box;cursor:pointer;width:100%;display:flex;justify-content:space-between;align-items:center;gap:20px;padding:24px 0;font-family:"Oswald",sans-serif;font-size:24px;text-transform:uppercase;color:#EDEAE4}',
    '.pm-q button:focus-visible{outline:2px solid #FF4A4A;outline-offset:4px}',
    '.pm-q button span{flex:0 0 34px;height:34px;border:1px solid #3a3a3a;display:flex;align-items:center;justify-content:center;font-family:Arial,sans-serif;font-size:20px;transition:transform .3s,background .3s,border-color .3s}',
    '.pm-q.pm-open button span{transform:rotate(45deg);background:#D7191F;border-color:#D7191F}',
    '.pm-a{max-height:0;overflow:hidden;transition:max-height .45s ease}',
    '.pm-a p{margin:0;padding:0 0 24px;color:#C9C4BC;font-size:16px;line-height:1.65;max-width:760px}',
    '.pm-faq-grid{display:grid;grid-template-columns:1fr 1.6fr;gap:60px;align-items:start}',
    /* local */
    '.pm-local{background:#D7191F;color:#0F0F0F}',
    '.pm-local .pm-kick{color:#0F0F0F}.pm-local .pm-kick:before{background:#0F0F0F}',
    '.pm-local .pm-h{color:#0F0F0F;font-size:96px}',
    '.pm-local .pm-h em{color:#fff}',
    '.pm-local-grid{display:grid;grid-template-columns:1.3fr 1fr;gap:56px;align-items:end}',
    '.pm-steps{display:grid;gap:0;border-top:2px solid #0F0F0F}',
    '.pm-steps div{display:flex;gap:18px;align-items:baseline;padding:18px 0;border-bottom:2px solid #0F0F0F;font-weight:700;font-size:17px}',
    '.pm-steps div b{font-family:"Oswald",sans-serif;font-size:30px;min-width:46px}',
    '.pm-local .pm-btn{background:#0F0F0F}',
    '.pm-local .pm-btn.pm-ghost{background:transparent;border-color:#0F0F0F;color:#0F0F0F!important}',
    '.pm-local .pm-mq{position:absolute;left:0;bottom:-18px;white-space:nowrap;font-family:"Oswald",sans-serif;font-weight:700;font-size:150px;line-height:1;color:transparent;-webkit-text-stroke:1px rgba(15,15,15,.35);animation:pm-mq 40s linear infinite;pointer-events:none}',
    '@keyframes pm-mq{from{transform:translateX(0)}to{transform:translateX(-50%)}}',
    /* cierre */
    '.pm-end{text-align:center;padding:110px 0;border-top:1px solid #262626}',
    '.pm-end .pm-kick{justify-content:center}',
    '.pm-end .pm-h{font-size:84px}',
    '.pm-end .pm-lead{margin:0 auto 34px}',
    '.pm-end .pm-btns{display:flex;gap:14px;justify-content:center;flex-wrap:wrap}',
    /* lo que reemplazamos */
    '[data-store="home-institutional-message"],[data-store="home-welcome-message"]{display:none!important}',
    /* celular */
    /* MENU PRODUCTOS (compu) */
    '@media (min-width:768px){',
    '.pm-mega.desktop-dropdown{background:#141414!important;border-top:2px solid #D7191F;border-bottom:1px solid #2a2a2a;box-shadow:0 30px 60px rgba(0,0,0,.55)}',
    '.pm-mega>.container{max-width:1240px;padding:34px 30px 38px;display:flex;gap:40px;align-items:stretch}',
    '.pm-mega .pm-cols{flex:1;display:grid!important;grid-template-columns:repeat(4,minmax(0,1fr));gap:30px 34px;margin:0;padding:0;width:auto!important;columns:auto!important}',
    '.pm-mega .pm-cols>li{margin:0!important;padding:0!important;width:auto!important;break-inside:avoid}',
    '.pm-mega .pm-cols>li>.nav-item-container>a{display:inline-block;font-family:"Oswald",sans-serif!important;font-size:17px!important;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:#EDEAE4!important;padding:0 0 8px!important;margin-bottom:10px;border-bottom:2px solid #D7191F}',
    '.pm-mega .pm-cols>li>ul{display:block!important;position:static!important;margin:0!important;padding:0!important;columns:auto!important}',
    '.pm-mega .pm-cols>li>ul>li{margin:0!important;padding:0!important}',
    '.pm-mega .pm-cols>li>ul a{display:block;font-size:13px!important;font-weight:500;letter-spacing:.04em;text-transform:none!important;color:#A8A39B!important;padding:5px 0!important;transition:color .2s,transform .2s}',
    '.pm-mega .pm-cols a:before,.pm-mega .pm-cols a:after{content:none!important;display:none!important}',
    '.pm-mega .pm-cols>li>ul a:hover{color:#fff!important;transform:translateX(4px)}',
    '.pm-mega .pm-cols>li>.nav-item-container>a:hover{color:#FF4A4A!important}',
    '.pm-mega .pm-cta{flex:0 0 250px;display:flex;flex-direction:column;justify-content:space-between;background:#D7191F;color:#0F0F0F;padding:24px;text-decoration:none!important;transition:background .2s}',
    '.pm-mega .pm-cta:hover{background:#ec2a30}',
    '.pm-mega .pm-cta small{font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase}',
    '.pm-mega .pm-cta b{font-family:"Oswald",sans-serif;font-size:34px;line-height:1;text-transform:uppercase;color:#fff}',
    '.pm-mega .pm-cta span{font-size:12px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:#0F0F0F}',
    '}',
    '@media (max-width:767px){',
    '.pm-sec{padding:64px 0}.pm-h{font-size:40px}',
    '.pm-tags{grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:34px 12px;align-items:stretch}',
    '.pm-tagwrap{display:flex}.pm-tag{flex:1;display:flex;flex-direction:column}.pm-tag p{flex:1}',
    '.pm-local .pm-btns,.pm-end .pm-btns{display:flex;flex-wrap:wrap;gap:10px}.pm-local .pm-btns a,.pm-end .pm-btns a{flex:1 1 140px;text-align:center;margin:0}',
    '.pm-tag{padding:40px 12px 14px}.pm-tag b{font-size:21px}.pm-tag p{font-size:12px;min-height:0}.pm-tag h4{font-size:10px}',
    '.pm-tag .pm-tf span:first-child{display:none}',
    '.pm-faq-grid{grid-template-columns:1fr;gap:10px}',
    '.pm-q button{font-size:18px;padding:20px 0}',
    '.pm-local .pm-h{font-size:52px}.pm-local-grid{grid-template-columns:1fr;gap:28px}',
    '.pm-local .pm-mq{font-size:80px}',
    '.pm-end .pm-h{font-size:46px}',
    '}',
    '@media (prefers-reduced-motion:reduce){.pm-tag,.pm-mq{animation:none!important}.pm-rv{opacity:1;transform:none;transition:none}}'
  ].join('\n');

  function el(html) {
    var t = document.createElement('template');
    t.innerHTML = html.trim();
    return t.content.firstChild;
  }

  function tagsSection() {
    var tags = [
      ['DESDE <span>2017</span>', 'En Villa Ballester', 'Alvear 2445. Vestimos a la zona con lo que se usa.', 'VB · DESDE 2017'],
      ['<span>PROBADORES</span>', 'En el local', 'Venís, te lo probás y te lo llevás puesto.', 'ALVEAR 2445'],
      ['STOCK <span>REAL</span>', 'Lo que ves, está', 'Todo lo de la web lo tenemos en el local. Y adentro hay más: perfumes, bolsos y accesorios.', 'EN EL LOCAL'],
      ['<span>15</span> DÍAS', 'Para cambiar', 'Compraste en el local y le erraste al talle: lo cambiás con la bolsa original.', 'SIN DRAMA']
    ];
    var html = '<section class="pm-sec pm-why" aria-labelledby="pm-why-t"><div class="pm-wrap">' +
      '<div class="pm-kick pm-rv">Villa Ballester · Alvear 2445</div>' +
      '<h2 class="pm-h pm-rv" id="pm-why-t">Por qué <em>Promise</em></h2>' +
      '<p class="pm-lead pm-rv">Tu próximo outfit ya está colgado acá.</p>' +
      '<div class="pm-tags">';
    tags.forEach(function (t) {
      html += '<div class="pm-tagwrap pm-rv"><div class="pm-tag"><i></i><b>' + t[0] + '</b><h4>' + t[1] + '</h4><p>' + t[2] +
        '</p><div class="pm-tf"><span>' + t[3] + '</span><span class="pm-bar" aria-hidden="true"></span></div></div></div>';
    });
    return el(html + '</div></div></section>');
  }

  function faqSection() {
    var qs = [
      ['¿Cómo sé qué talle soy?', 'Lo mejor es venir a probártelo: el local tiene probadores. Si comprás online, la guía de talles es una referencia para orientarte, y por WhatsApp te ayudamos a elegir.'],
      ['¿Y si me queda mal?', 'Si compraste online tenés 10 días para cambiarlo; si compraste en el local, 15 días. Siempre con la bolsa original y la prenda sin uso. Escribinos por WhatsApp y coordinamos el cambio.'],
      ['¿Puedo devolverlo?', 'En compras online podés arrepentirte dentro de los 10 días desde el botón de arrepentimiento, al pie de la página. Si la prenda tiene una falla, escribinos y lo resolvemos.'],
      ['¿Cuánto tarda en llegar?', 'Aproximadamente 3 días hábiles desde que despachamos.'],
      ['¿Hacen envíos gratis?', 'Sí, en compras desde $150.000, a todo el país.'],
      ['¿Puedo retirar en el local?', 'Sí, sin costo y sin aviso previo, en Alvear 2445, Villa Ballester.'],
      ['¿Cómo aprovecho el 20% OFF?', 'Pagando por transferencia en la web o en efectivo en el local.']
    ];
    var html = '<section id="preguntas" class="pm-sec pm-faqs" aria-labelledby="pm-faq-t"><div class="pm-wrap pm-faq-grid">' +
      '<div><div class="pm-kick pm-rv">Preguntas frecuentes</div><h2 class="pm-h pm-rv" id="pm-faq-t">Lo que siempre <em>nos preguntan</em></h2>' +
      '<p class="pm-lead pm-rv">¿Te quedó otra duda? Escribinos por WhatsApp y te respondemos.</p><p class="pm-rv" style="margin-top:26px"><a class="pm-btn" href="' + WA + '" target="_blank" rel="noopener">Escribinos</a></p></div>' +
      '<div class="pm-faq">';
    qs.forEach(function (q, i) {
      html += '<div class="pm-q pm-rv"><button type="button" aria-expanded="false" aria-controls="pm-a' + i + '">' + q[0] +
        '<span aria-hidden="true">+</span></button><div class="pm-a" id="pm-a' + i + '" role="region"><p>' + q[1] + '</p></div></div>';
    });
    var node = el(html + '</div></div></section>');
    node.querySelectorAll('.pm-q button').forEach(function (b) {
      b.addEventListener('click', function () {
        var q = b.parentNode, a = q.querySelector('.pm-a'), open = !q.classList.contains('pm-open');
        q.classList.toggle('pm-open', open);
        b.setAttribute('aria-expanded', open ? 'true' : 'false');
        a.style.maxHeight = open ? a.scrollHeight + 'px' : '0px';
      });
    });
    return node;
  }

  function localSection() {
    return el('<section id="local" class="pm-sec pm-local" aria-labelledby="pm-local-t">' +
      '<div class="pm-mq" aria-hidden="true">ALVEAR 2445 ✕ VILLA BALLESTER ✕ ALVEAR 2445 ✕ VILLA BALLESTER ✕ ALVEAR 2445 ✕ VILLA BALLESTER ✕ ALVEAR 2445 ✕ VILLA BALLESTER ✕ </div>' +
      '<div class="pm-wrap pm-local-grid"><div>' +
      '<div class="pm-kick pm-rv">El local</div>' +
      '<h2 class="pm-h pm-rv" id="pm-local-t">Venís, te lo probás, <em>te lo llevás puesto</em></h2>' +
      '<p class="pm-rv pm-btns" style="display:flex;gap:12px;flex-wrap:wrap;margin-top:26px"><a class="pm-btn" href="' + MAPS + '" target="_blank" rel="noopener">Cómo llegar</a>' +
      '<a class="pm-btn pm-ghost" href="' + WA + '" target="_blank" rel="noopener">WhatsApp</a></p></div>' +
      '<div class="pm-steps pm-rv"><div><b>01</b>Elegís online o venís directo</div><div><b>02</b>Te lo probás en el probador</div><div><b>03</b>Retirás tu compra sin costo</div></div>' +
      '</div></section>');
  }

  function endSection() {
    return el('<section class="pm-sec pm-end" aria-labelledby="pm-end-t"><div class="pm-wrap">' +
      '<div class="pm-kick pm-rv">Catálogo completo</div>' +
      '<h2 class="pm-h pm-rv" id="pm-end-t">Esto fue <em>una selección</em></h2>' +
      '<p class="pm-lead pm-rv">Lo que viste es una parte. El catálogo entero está a un click, con todo lo que entró esta semana.</p>' +
      '<div class="pm-btns pm-rv"><a class="pm-btn" href="/productos/">Ver el catálogo</a><a class="pm-btn pm-ghost" href="' + WA + '" target="_blank" rel="noopener">Consultar por WhatsApp</a></div>' +
      '</div></section>');
  }

  function reveal(root) {
    var items = root.querySelectorAll('.pm-rv');
    if (!('IntersectionObserver' in window)) { items.forEach(function (n) { n.classList.add('pm-in'); }); return; }
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('pm-in'); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    items.forEach(function (n) { io.observe(n); });
  }

  function megaMenu() {
    var lists = document.querySelectorAll('.js-nav-desktop-list > .js-item-subitems-desktop > .desktop-dropdown');
    lists.forEach(function (dd) {
      if (dd.classList.contains('pm-mega')) return;
      var ul = dd.querySelector('.container > ul.desktop-list-subitems');
      if (!ul) return;
      // Si una categoria tiene sub-sub-categorias (ej. Indumentaria), sus hijas pasan a ser columnas
      Array.prototype.slice.call(ul.children).forEach(function (li) {
        var sub = li.querySelector(':scope > ul');
        if (!sub) return;
        var deep = Array.prototype.some.call(sub.children, function (c) { return c.querySelector(':scope > ul'); });
        if (!deep) return;
        Array.prototype.slice.call(sub.children).forEach(function (c) { ul.insertBefore(c, li); });
        li.parentNode.removeChild(li);
      });
      ul.classList.add('pm-cols');
      dd.classList.add('pm-mega');
      var cta = el('<a class="pm-cta" href="/productos/"><small>Catálogo completo</small><b>Ver todo lo nuevo</b><span>Ver productos →</span></a>');
      ul.parentNode.appendChild(cta);
    });
  }

  function navLinks() {
    var nav = document.querySelector('.js-nav-desktop-list');
    if (!nav || nav.querySelector('.pm-navx')) return;
    var model = nav.querySelector(':scope > li:not(.item-with-subitems)');
    [['Preguntas frecuentes', '/#preguntas'], ['El local', '/#local']].forEach(function (x) {
      var li;
      if (model) {
        li = model.cloneNode(true);
        li.classList.remove('selected', 'active');
        var a = li.querySelector('a'); a.setAttribute('href', x[1]); a.textContent = x[0];
      } else { li = el('<li class="nav-item"><a class="nav-list-link" href="' + x[1] + '">' + x[0] + '</a></li>'); }
      li.classList.add('pm-navx');
      var last = nav.lastElementChild; nav.insertBefore(li, last); // antes de Contacto
    });
  }

  function insertAfter(ref, node) { ref.parentNode.insertBefore(node, ref.nextSibling); return node; }

  function init() {
    if (!document.getElementById('pm-style')) {
      var st = document.createElement('style'); st.id = 'pm-style'; st.textContent = CSS; document.head.appendChild(st);
    }
    try { megaMenu(); } catch (e) {}
    try { navLinks(); } catch (e) {}
    var home = document.querySelector('[data-store="home-slider"], [data-store="home-products-featured"]');
    if (!home || document.querySelector('.pm-why')) return;

    var featured = document.querySelector('[data-store="home-products-featured"]');
    var news = document.querySelector('[data-store="home-newsletter"]');
    var anchor = featured || home;
    var a = insertAfter(anchor, tagsSection());
    var b = insertAfter(a, faqSection());
    var c = insertAfter(b, localSection());
    var endNode = endSection();
    if (news && news.parentNode) news.parentNode.insertBefore(endNode, news); else insertAfter(c, endNode);
    reveal(document);
    if (location.hash === '#preguntas' || location.hash === '#local') {
      var t = document.getElementById(location.hash.slice(1));
      if (t) setTimeout(function () { t.scrollIntoView({ behavior: 'smooth' }); }, 300);
    }
  }

  try {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
    else init();
  } catch (e) { /* nunca romper la tienda */ }
})();
