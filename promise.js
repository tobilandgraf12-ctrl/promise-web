/* PROMISE VB — secciones propias para la tienda Tiendanube (plantilla Morelia).
   Se carga desde: Diseño > Pie de página > "Código Javascript o HTML del sello".
   Solo agrega bloques en la página de inicio. Si algo falla, no rompe la tienda. */
(function () {
  'use strict';
  if (window.__promiseLoaded) return;
  window.__promiseLoaded = true;

  var WA = 'https://wa.me/541140563485';
  var MAPS = 'https://maps.app.goo.gl/wEB1Gxqx1NC8aVSg7';
  var KIDS = '/promise-kids-kp7mp/';

  var CSS = [
    '.pm-sec{background:#0F0F0F;color:#EDEAE4;padding:96px 0;font-family:inherit;position:relative;overflow:hidden}',
    '.pm-wrap{max-width:1240px;margin:0 auto;padding:0 24px}',
    '.pm-kick{display:flex;align-items:center;gap:12px;font-size:12px;letter-spacing:.3em;font-weight:700;color:#FFD400;text-transform:uppercase;margin-bottom:14px}',
    '.pm-kick:before{content:"";width:38px;height:2px;background:#FFD400}',
    '.pm-h{font-family:"Oswald",sans-serif;font-weight:700;text-transform:uppercase;font-size:64px;line-height:1.05;margin:0 0 18px;padding-top:.08em;color:#EDEAE4;letter-spacing:.01em}',
    '.pm-h em{font-style:normal;color:#FFD400}',
    '.pm-lead{color:#A8A39B;font-size:16px;max-width:560px;line-height:1.6;margin:0}',
    '.pm-btn{display:inline-flex;align-items:center;gap:10px;background:#FFD400;color:#0F0F0F!important;padding:16px 30px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;font-size:13px;text-decoration:none!important;transition:transform .2s,filter .2s}',
    '.pm-btn:hover{transform:translateY(-2px);filter:brightness(1.1)}',
    '.pm-btn.pm-ghost{background:transparent;border:1px solid #EDEAE4;color:#EDEAE4!important}',
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
    '.pm-tag b span{color:#FFD400}',
    '.pm-tag h4{font-size:12px;letter-spacing:.14em;text-transform:uppercase;margin:12px 0 10px;color:#0F0F0F;font-weight:800}',
    '.pm-tag p{font-size:14px;line-height:1.55;color:#3d3a37;margin:0 0 18px;min-height:66px}',
    '.pm-tag .pm-tf{display:flex;justify-content:space-between;align-items:center;border-top:1px dashed #a9a39b;padding-top:10px;font-family:"Courier New",monospace;font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:#5b5752}',
    '.pm-bar{width:58px;height:18px;background:repeating-linear-gradient(90deg,#0F0F0F 0 2px,transparent 2px 4px,#0F0F0F 4px 5px,transparent 5px 8px)}',
    '@keyframes pm-swing{0%,100%{transform:rotate(-1.4deg)}50%{transform:rotate(1.4deg)}}',
    /* preguntas frecuentes */
    '.pm-faq{margin-top:46px;border-top:1px solid #262626}',
    '.pm-q{border-bottom:1px solid #262626}',
    '.pm-q button{all:unset;box-sizing:border-box;cursor:pointer;width:100%;display:flex;justify-content:space-between;align-items:center;gap:20px;padding:24px 0;font-family:"Oswald",sans-serif;font-size:24px;text-transform:uppercase;color:#EDEAE4}',
    '.pm-q button:focus-visible{outline:2px solid #FFD400;outline-offset:4px}',
    '.pm-q button span{flex:0 0 34px;height:34px;border:1px solid #3a3a3a;display:flex;align-items:center;justify-content:center;font-family:Arial,sans-serif;font-size:20px;transition:transform .3s,background .3s,border-color .3s}',
    '.pm-q.pm-open button span{transform:rotate(45deg);background:#FFD400;border-color:#FFD400}',
    '.pm-a{max-height:0;overflow:hidden;transition:max-height .45s ease}',
    '.pm-a p{margin:0;padding:0 0 24px;color:#C9C4BC;font-size:16px;line-height:1.65;max-width:760px}',
    '.pm-faq-grid{display:grid;grid-template-columns:1fr 1.6fr;gap:60px;align-items:start}',
    /* local */
    '.pm-local{background:#FFD400;color:#0F0F0F}',
    '.pm-local .pm-kick{color:#0F0F0F}.pm-local .pm-kick:before{background:#0F0F0F}',
    '.pm-local .pm-h{color:#0F0F0F;font-size:96px}',
    '.pm-local .pm-h em{color:transparent;-webkit-text-stroke:2px #0F0F0F}',
    '.pm-local-grid{display:grid;grid-template-columns:1.3fr 1fr;gap:56px;align-items:end}',
    '.pm-steps{display:grid;gap:0;border-top:2px solid #0F0F0F}',
    '.pm-steps div{display:flex;gap:18px;align-items:baseline;padding:18px 0;border-bottom:2px solid #0F0F0F;font-weight:700;font-size:17px}',
    '.pm-steps div b{font-family:"Oswald",sans-serif;font-size:30px;min-width:46px}',
    '.pm-local .pm-btn{background:#0F0F0F;color:#FFD400!important}',
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
    /* PORTADA ANIMADA (hero) */
    '.pm-hero{position:relative;height:min(720px,max(580px,calc(100vh - 190px)));background:#EDEAE4;overflow:hidden;isolation:isolate}',
    '.pm-hero *{box-sizing:border-box}',
    '.pm-hero-word{position:absolute;left:50%;top:50%;width:78%;max-width:1200px;transform:translate(-50%,-50%);z-index:1;animation:pm-wordin 1.1s cubic-bezier(.2,.8,.2,1) both}',
    '.pm-hero-word img{width:100%;height:auto;display:block}',
    '.pm-post{position:absolute;left:50%;top:50%;width:300px;transform:translate(-72%,-52%);background:#fff;border-radius:14px;box-shadow:0 30px 60px rgba(0,0,0,.18),0 2px 6px rgba(0,0,0,.08);z-index:3;overflow:hidden;color:#111;text-decoration:none!important;display:block;animation:pm-postin .8s .55s cubic-bezier(.2,.8,.2,1) both;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif}',
    '.pm-post-h{display:flex;align-items:center;gap:9px;padding:9px 11px}',
    '.pm-post-av{width:30px;height:30px;border-radius:50%;background:#0F0F0F;display:flex;align-items:center;justify-content:center;box-shadow:0 0 0 2px #fff,0 0 0 3.5px #FFD400;flex:0 0 30px}',
    '.pm-post-av img{height:18px;width:auto}',
    '.pm-post-h b{display:block;font-size:13px;line-height:1.2;color:#111;font-weight:700}',
    '.pm-post-h small{display:block;font-size:11px;color:#737373;line-height:1.2}',
    '.pm-post-h i{margin-left:auto;font-style:normal;letter-spacing:1px;color:#111;font-weight:700}',
    '.pm-post-img{position:relative;aspect-ratio:4/5;background:#ddd;overflow:hidden}',
    '.pm-post-img img{width:100%;height:100%;object-fit:cover;display:block}',
    '.pm-post-a{display:flex;align-items:center;gap:14px;padding:10px 12px 4px}',
    '.pm-post-a svg{width:23px;height:23px;display:block}',
    '.pm-post-a .pm-bm{margin-left:auto}',
    '.pm-heart{animation:pm-beat 1.6s 2.5s ease-in-out infinite;transform-origin:50% 60%}',
    '.pm-post-c{padding:2px 12px 13px;font-size:12.5px;line-height:1.4;color:#111}',
    '.pm-post-c b{font-weight:700}',
    '.pm-hero-main{position:absolute;left:50%;top:50%;width:340px;transform:translate(-18%,-57%) rotate(-8deg);z-index:4;pointer-events:none;animation:pm-pop 1.15s 1.25s cubic-bezier(.18,.9,.25,1.05) both}',
    '.pm-hero-main img{width:100%;height:auto;display:block;filter:drop-shadow(0 34px 34px rgba(0,0,0,.30)) drop-shadow(0 6px 10px rgba(0,0,0,.18));animation:pm-hover 4.6s 2.5s ease-in-out infinite}',
    '.pm-hs{position:absolute;width:128px;z-index:2;perspective:600px;animation:pm-fade .9s both}',
    '.pm-hs-in{position:relative;animation:pm-spin3d 7s ease-in-out infinite}',
    '.pm-hs img{width:100%;height:auto;display:block;filter:grayscale(1) contrast(1.25) brightness(.62) drop-shadow(0 0 1px #FFD400) drop-shadow(0 0 16px rgba(255,212,0,.32))}',
    '.pm-shine{position:absolute;inset:0;background:linear-gradient(105deg,transparent 38%,rgba(255,255,255,.65) 50%,transparent 62%);background-size:260% 100%;-webkit-mask-size:contain;mask-size:contain;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-position:center;mask-position:center;animation:pm-shim 5s ease-in-out infinite;pointer-events:none;mix-blend-mode:screen}',
    '.pm-hs.pm-far{width:112px}.pm-hs.pm-far img{filter:grayscale(1) contrast(1.1) brightness(.75) blur(3.5px);opacity:.75}.pm-hs.pm-far .pm-shine{display:none}',
    '.pm-hs.s1{top:12%;left:8%;animation-delay:2.3s}.pm-hs.s1 .pm-hs-in,.pm-hs.s1 .pm-shine{animation-delay:-1s}',
    '.pm-hs.s2{top:13%;right:9%;animation-delay:2.5s}.pm-hs.s2 .pm-hs-in,.pm-hs.s2 .pm-shine{animation-delay:-3s}',
    '.pm-hs.s3{bottom:15%;right:8%;animation-delay:2.7s}.pm-hs.s3 .pm-hs-in,.pm-hs.s3 .pm-shine{animation-delay:-5s}',
    '.pm-hero-logo{position:absolute;left:7%;bottom:16%;width:140px;z-index:2;animation:pm-fade .9s 2.9s both}',
    '.pm-hero-logo img{width:100%;height:auto;display:block}',
    '.pm-hero-cta{position:absolute;left:0;right:0;margin:0 auto;width:max-content;bottom:22px;z-index:5;display:inline-flex;align-items:center;gap:10px;background:#0F0F0F;color:#fff!important;padding:14px 26px;border-radius:999px;font-size:12px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;text-decoration:none!important;white-space:nowrap;animation:pm-fade .7s 3s both;transition:background .2s}',
    '.pm-hero-cta:hover{background:#FFD400;color:#0F0F0F!important}',
    '@keyframes pm-wordin{from{opacity:0;clip-path:inset(100% 0 0 0);transform:translate(-50%,-30%)}to{opacity:1;clip-path:inset(0 0 0 0);transform:translate(-50%,-50%)}}',
    '@keyframes pm-postin{from{opacity:0;transform:translate(-72%,-46%) scale(.86)}to{opacity:1;transform:translate(-72%,-52%) scale(1)}}',
    '@keyframes pm-pop{0%{opacity:0;transform:translate(-69%,-62%) scale(.42) rotate(0deg)}18%{opacity:1}100%{opacity:1;transform:translate(-18%,-57%) scale(1) rotate(-8deg)}}',
    '@keyframes pm-hover{0%,100%{transform:translateY(0) rotate(0deg)}50%{transform:translateY(-14px) rotate(1.5deg)}}',
    '@keyframes pm-beat{0%,60%,100%{transform:scale(1)}15%{transform:scale(1.25)}30%{transform:scale(.95)}45%{transform:scale(1.12)}}',
    '@keyframes pm-fade{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}',
    '@keyframes pm-spin3d{0%,100%{transform:translateY(0) rotateY(-14deg) rotate(-3deg)}50%{transform:translateY(-12px) rotateY(14deg) rotate(3deg)}}',
    '@keyframes pm-shim{0%{background-position:130% 0}55%,100%{background-position:-30% 0}}',
    '.pm-cta-fade{animation:pm-fade .7s 2.2s both}',
    /* CATEGORIAS CON PRENDA */
    '.pm-cats{background:#0F0F0F}',
    '.pm-cat-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;margin-top:40px}',
    '.pm-cat{position:relative;display:block;aspect-ratio:1/1;overflow:hidden;background:radial-gradient(circle at 50% 42%,#262626 0,#161616 62%);border:1px solid #232323;text-decoration:none!important;transition:border-color .3s,background .4s}',
    '.pm-cat:hover{border-color:#FFD400;background:radial-gradient(circle at 50% 42%,#3a3410 0,#161616 66%)}',
    '.pm-cat .pm-n{position:absolute;top:14px;left:18px;font-family:"Oswald",sans-serif;font-size:64px;font-weight:700;line-height:1;color:transparent;-webkit-text-stroke:1px #3a3a3a;z-index:1}',
    '.pm-cat .pm-media{position:absolute;left:50%;top:46%;width:58%;aspect-ratio:1/1;margin-left:-29%;margin-top:-29%;z-index:2;animation:pm-float 4.2s ease-in-out infinite}',
    '.pm-cat:nth-child(2) .pm-media{animation-delay:-.7s}.pm-cat:nth-child(3) .pm-media{animation-delay:-1.4s}.pm-cat:nth-child(4) .pm-media{animation-delay:-2.1s}.pm-cat:nth-child(5) .pm-media{animation-delay:-2.8s}.pm-cat:nth-child(6) .pm-media{animation-delay:-3.5s}',
    '.pm-cat .pm-media img,.pm-cat .pm-media video{width:100%;height:100%;object-fit:cover;display:block;transition:transform .5s cubic-bezier(.2,.7,.2,1)}',
    '.pm-cat .pm-media.pm-photo{box-shadow:0 26px 40px rgba(0,0,0,.6);border:6px solid #EDEAE4;background:#EDEAE4}',
    '.pm-cat .pm-media.pm-cut img,.pm-cat .pm-media.pm-cut video{object-fit:contain;filter:drop-shadow(0 24px 22px rgba(0,0,0,.6))}',
    '.pm-cat.pm-has-vid{background:#101010}.pm-has-vid .pm-n{z-index:3}.pm-cat .pm-media.pm-vid{left:0;top:0;width:100%;height:100%;margin:0;aspect-ratio:auto;animation:none}',
    '.pm-cat .pm-media.pm-vid video{object-fit:cover;transform:translateY(-5%) scale(.9)}.pm-cat:hover .pm-media.pm-vid video{transform:translateY(-5%) scale(.96)}',
    '.pm-cat:hover .pm-media img,.pm-cat:hover .pm-media video{transform:scale(1.08) rotate(-3deg)}',
    '.pm-cat .pm-lbl{position:absolute;left:18px;right:18px;bottom:16px;display:flex;justify-content:space-between;align-items:flex-end;z-index:3}',
    '.pm-cat .pm-lbl b{font-family:"Oswald",sans-serif;font-size:30px;line-height:1;text-transform:uppercase;color:#EDEAE4;letter-spacing:.02em}',
    '.pm-cat .pm-lbl i{font-style:normal;width:42px;height:42px;display:flex;align-items:center;justify-content:center;background:#FFD400;color:#0F0F0F;font-size:20px;transition:transform .3s}',
    '.pm-cat:hover .pm-lbl i{transform:translateX(4px) rotate(-45deg)}',
    '@keyframes pm-float{0%,100%{transform:translateY(0) rotate(-2deg)}50%{transform:translateY(-14px) rotate(2deg)}}',
    /* MENU PRODUCTOS (compu) */
    '@media (min-width:768px){',
    '.pm-mega.desktop-dropdown{background:#141414!important;border-top:2px solid #FFD400;border-bottom:1px solid #2a2a2a;box-shadow:0 30px 60px rgba(0,0,0,.55)}',
    '.pm-mega>.container{max-width:1240px;padding:34px 30px 38px;display:flex;gap:40px;align-items:stretch}',
    '.pm-mega .pm-cols{flex:1;display:grid!important;grid-template-columns:repeat(4,minmax(0,1fr));gap:30px 34px;margin:0;padding:0;width:auto!important;columns:auto!important}',
    '.pm-mega .pm-cols>li{margin:0!important;padding:0!important;width:auto!important;break-inside:avoid}',
    '.pm-mega .pm-cols>li>a,.pm-mega .pm-cols>li>.nav-item-container>a{display:inline-block;font-family:"Oswald",sans-serif!important;font-size:17px!important;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:#EDEAE4!important;padding:0 0 8px!important;margin-bottom:10px;border-bottom:2px solid #FFD400}',
    '.pm-mega .pm-cols>li>ul{display:block!important;position:static!important;margin:0!important;padding:0!important;columns:auto!important}',
    '.pm-mega .pm-cols>li>ul>li{margin:0!important;padding:0!important}',
    '.pm-mega .pm-cols>li>ul a{display:block;font-size:13px!important;font-weight:500;letter-spacing:.04em;text-transform:none!important;color:#A8A39B!important;padding:5px 0!important;transition:color .2s,transform .2s}',
    '.pm-mega .pm-cols a:before,.pm-mega .pm-cols a:after{content:none!important;display:none!important}',
    '.pm-mega .pm-cols>li>ul a:hover{color:#fff!important;transform:translateX(4px)}',
    '.pm-mega .pm-cols>li>a:hover,.pm-mega .pm-cols>li>.nav-item-container>a:hover{color:#FFD400!important}',
    '.pm-mega .pm-cta{flex:0 0 250px;display:flex;flex-direction:column;justify-content:space-between;background:#FFD400;color:#0F0F0F;padding:24px;text-decoration:none!important;transition:background .2s}',
    '.pm-mega .pm-cta:hover{background:#ffe14d}',
    '.pm-mega .pm-cta small{font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase}',
    '.pm-mega .pm-cta b{font-family:"Oswald",sans-serif;font-size:34px;line-height:1;text-transform:uppercase;color:#0F0F0F}',
    '.pm-mega .pm-cta span{font-size:12px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:#0F0F0F}',
    '.head-main .head-logo-row{margin:10px auto 2px!important}',
    '.nav-desktop-list>li>.nav-item-container>a,.nav-desktop-list>li>a{padding-top:10px!important;padding-bottom:16px!important;position:relative}',
    '.nav-desktop-list>li>.nav-item-container>a:after,.nav-desktop-list>li>a:after{content:"";position:absolute;left:50%;right:50%;bottom:8px;height:2px;background:#FFD400;transition:left .25s,right .25s}',
    '.nav-desktop-list>li:hover>.nav-item-container>a:after,.nav-desktop-list>li:hover>a:after{left:14px;right:14px}',
    '}',
    '@media (max-width:767px){',
    '.pm-hero{height:660px}.pm-hero-word{width:92%;top:16%}',
    '@keyframes pm-wordin{from{opacity:0;clip-path:inset(100% 0 0 0);transform:translate(-50%,-20%)}to{opacity:1;clip-path:inset(0 0 0 0);transform:translate(-50%,-50%)}}',
    '.pm-post{width:190px;border-radius:11px;top:54.5%;transform:translate(-64%,-50%)}',
    '@keyframes pm-postin{from{opacity:0;transform:translate(-64%,-44%) scale(.86)}to{opacity:1;transform:translate(-64%,-50%) scale(1)}}',
    '.pm-post-h{padding:7px 8px;gap:7px}.pm-post-av{width:24px;height:24px;flex-basis:24px}.pm-post-av img{height:14px}.pm-post-h b{font-size:11px}.pm-post-h small{font-size:9.5px}',
    '.pm-post-a{gap:10px;padding:7px 9px 2px}.pm-post-a svg{width:18px;height:18px}.pm-post-c{font-size:10.5px;padding:2px 9px 9px}',
    '.pm-hero-main{width:170px;top:50%;transform:translate(-4%,-50%) rotate(-8deg)}',
    '@keyframes pm-pop{0%{opacity:0;transform:translate(-65%,-37%) scale(.45) rotate(0deg)}18%{opacity:1}100%{opacity:1;transform:translate(-4%,-50%) scale(1) rotate(-8deg)}}',
    '.pm-hs{width:68px}.pm-hs.pm-far{width:60px}.pm-hs.pm-far img{filter:grayscale(1) brightness(.75) blur(2px)}.pm-hs.s1{top:70%;left:3%}.pm-hs.s2{top:72%;right:4%;left:auto}.pm-hs.s3,.pm-hero-logo{display:none}',
    '.pm-hero-cta{bottom:18px;padding:13px 22px;font-size:11px}',
    '.pm-cat-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;margin-top:28px}.pm-cat .pm-n{font-size:40px;top:10px;left:12px}.pm-cat .pm-lbl{left:12px;right:12px;bottom:10px}.pm-cat .pm-lbl b{font-size:15px;letter-spacing:0}.pm-cat .pm-lbl i{width:30px;height:30px;font-size:15px}.pm-cat .pm-media{width:64%;margin-left:-32%;margin-top:-32%}',
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
    '@media (prefers-reduced-motion:reduce){.pm-hero *{animation:none!important}.pm-cat .pm-media,.pm-tag,.pm-mq{animation:none!important}.pm-rv{opacity:1;transform:none;transition:none}}'
  ].join('\n');

  function el(html) {
    var t = document.createElement('template');
    t.innerHTML = html.trim();
    return t.content.firstChild;
  }

  function tagsSection() {
    var tags = [
      ['DESDE <span>2017</span>', 'En Villa Ballester', 'Alvear 2445. Vestimos a la zona con lo que se usa.', 'VB · DESDE 2017'],
      ['<span>PROBADORES</span>', 'En el local', 'Probátelo antes de llevártelo.', 'ALVEAR 2445'],
      ['STOCK <span>REAL</span>', 'Lo que ves, está', 'Todo lo de la web lo tenemos en el local. Y adentro hay más: perfumes, bolsos y accesorios.', 'EN EL LOCAL'],
      ['<span>10</span> DÍAS', 'Para cambiar', '¿Le erraste al talle? Lo cambiás dentro de los 10 días, con la bolsa original.', 'SIN DRAMA']
    ];
    var html = '<section class="pm-sec pm-why" aria-labelledby="pm-why-t"><div class="pm-wrap">' +
      '<div class="pm-kick pm-rv">Villa Ballester · Alvear 2445</div>' +
      '<h2 class="pm-h pm-rv" id="pm-why-t">Por qué <em>Promise</em></h2>' +
      '<p class="pm-lead pm-rv">Tu próximo outfit ya está colgado acá.</p>' +
      '<div class="pm-tags">';
    tags.forEach(function (t) {
      html += '<div class="pm-tagwrap pm-rv"><div class="pm-t3"><span class="pm-tside" aria-hidden="true"></span><div class="pm-tag"><i></i><b>' + t[0] + '</b><h4>' + t[1] + '</h4><p>' + t[2] +
        '</p><div class="pm-tf"><span>' + t[3] + '</span><span class="pm-bar" aria-hidden="true"></span></div></div></div></div>';
    });
    return el(html + '</div></div></section>');
  }

  /* Rendimiento: videos y animaciones solo cuando se ven */
  function perf() {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('video[data-src]').forEach(function (v) { v.src = v.dataset.src; v.play && v.play().catch(function () {}); });
      return;
    }
    var vio = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        var v = e.target;
        if (e.isIntersecting) {
          if (!v.src && v.dataset.src) v.src = v.dataset.src;
          var p = v.play && v.play(); if (p && p.catch) p.catch(function () {});
        } else if (!v.paused) { v.pause(); }
      });
    }, { rootMargin: '0px', threshold: 0.35 });
    document.querySelectorAll('video[data-src]').forEach(function (v) { vio.observe(v); });
    var aio = new IntersectionObserver(function (es) {
      es.forEach(function (e) { e.target.classList.toggle('pm-off', !e.isIntersecting); });
    }, { rootMargin: '100px 0px' });
    document.querySelectorAll('.pm-hero,.pm-wb,.pm-cats,.pm-why,.pm-gift,.pm-faqs,.pm-local,.pm-end').forEach(function (n) { aio.observe(n); });
  }

  function giftSection() {
    var D = [['bronce', 'Bronce', '$50.000'], ['plata', 'Plata', '$100.000'], ['oro', 'Oro', '$150.000'], ['titanio', 'Titanio', '$200.000'], ['black', 'Black', '$300.000']];
    var cards = D.map(function (d, i) {
      return '<figure class="pm-gc pm-gl' + (i + 1) + '" style="--i:' + i + '"><div class="pm-gc-c"><img src="' + ASSETS + 'gift/forja_' + d[0] + '.webp" alt="Gift card ' + d[1] + ' ' + d[2] + '" loading="lazy" width="1000" height="630"><i></i></div><figcaption><b>' + (i + 1) + ' · ' + d[1] + '</b><span>' + d[2] + '</span></figcaption></figure>';
    }).join('');
    return el('<section class="pm-sec pm-gift" id="gift-cards" aria-labelledby="pm-gift-t"><div class="pm-wrap">' +
      '<div class="pm-kick pm-rv">Gift cards</div>' +
      '<h2 class="pm-h pm-rv" id="pm-gift-t">Regalá <em>Promise</em></h2>' +
      '<p class="pm-lead pm-rv">Cuanto más alto el monto, más alto el nivel de la tarjeta. Se la mandamos a quien quieras, con su nombre y tu mensaje.</p>' +
      '<div class="pm-gcs">' + cards + '</div>' +
      '<div class="pm-gc-cta pm-rv"><a class="pm-btn" href="/productos/gift-card/">Regalar una gift card →</a><small>Válida 6 meses · Un solo uso · En la web o en el local</small></div>' +
      '</div></section>');
  }

  function faqSection() {
    var qs = [
      ['¿Cómo sé qué talle soy?', 'Lo mejor es venir a probártelo: el local tiene probadores. Si comprás online, medí una prenda tuya siguiendo la <a href="#" class="pm-open-talles">guía de talles</a> y consultanos las medidas del modelo. Si tenés dudas, te ayudamos por WhatsApp.'],
      ['¿Y si me queda mal?', 'Tenés 10 días para cambiarlo, con la bolsa original y la prenda sin uso. Escribinos por WhatsApp y coordinamos el cambio.'],
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

  /* Promise Kids en el inicio: trae los productos de la categoría Kids con stock (diferido) */
  function kidsSection() {
    var s = el('<section id="kids" class="pm-sec pm-kids" aria-labelledby="pm-kids-t"><div class="pm-wrap">' +
      '<div class="pm-kick pm-rv">Promise Kids · Nuevo</div>' +
      '<h2 class="pm-h pm-rv" id="pm-kids-t">Lo mismo que usás vos, <em>en su talle</em></h2>' +
      '<div class="pm-kids-box"></div>' +
      '<p class="pm-rv pm-kids-cta"><a class="pm-btn" href="' + KIDS + '">Ver todo Kids</a></p></div></section>');
    function go() { fetch(KIDS + '?results_only=true', { credentials: 'same-origin' }).then(function (r) { return r.text(); }).then(function (t) {
      var d = new DOMParser().parseFromString(t, 'text/html');
      var items = Array.prototype.slice.call(d.querySelectorAll('.js-item-product')).filter(function (i) { return !/sin stock/i.test(i.textContent); }).slice(0, 8);
      if (items.length < 2) { s.style.display = 'none'; return; }
      var row = document.createElement('div'); row.className = 'row pm-mv-row';
      items.forEach(function (i) { row.appendChild(document.importNode(i, true)); });
      s.querySelector('.pm-kids-box').appendChild(row);
      if (window.lazySizes && lazySizes.loader) row.querySelectorAll('.lazyload').forEach(function (img) { lazySizes.loader.unveil(img); });
    }).catch(function () {}); }
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (en) { if (en[0].isIntersecting) { io.disconnect(); go(); } }, { rootMargin: '250px 0px' });
      setTimeout(function () { io.observe(s); }, 0);
    } else go();
    return s;
  }

  function localSection() {
    return el('<section id="local" class="pm-sec pm-local" aria-labelledby="pm-local-t">' +
      '<div class="pm-mq" aria-hidden="true">ALVEAR 2445 ✕ VILLA BALLESTER ✕ ALVEAR 2445 ✕ VILLA BALLESTER ✕ ALVEAR 2445 ✕ VILLA BALLESTER ✕ ALVEAR 2445 ✕ VILLA BALLESTER ✕ </div>' +
      '<div class="pm-wrap pm-local-grid"><div>' +
      '<div class="pm-kick pm-rv">El local</div>' +
      '<h2 class="pm-h pm-rv" id="pm-local-t">Venís, te lo probás <em>y te lo llevás puesto</em></h2>' +
      '<p class="pm-rv pm-btns" style="display:flex;gap:12px;flex-wrap:wrap;margin-top:26px"><a class="pm-btn" href="' + MAPS + '" target="_blank" rel="noopener">Cómo llegar</a>' +
      '<a class="pm-btn pm-ghost" href="' + WA + '" target="_blank" rel="noopener">WhatsApp</a></p></div>' +
      '<div class="pm-steps pm-rv"><div><b>01</b>Elegís online o venís directo</div><div><b>02</b>Te lo probás en el probador</div><div><b>03</b>Retirás tu compra sin costo</div></div>' +
      '</div>' +
      '<div class="pm-wrap pm-lg pm-rv">' +
      ['frente|Frente del local Promise en Alvear 2445', 'interior|Adentro del local, con remeras, jeans y buzos', 'jeans|Pared de jeans y buzos del local'].map(function (x) {
        x = x.split('|'); return '<figure><img src="' + ASSETS + 'local/' + x[0] + '.webp" alt="' + x[1] + '" loading="lazy" width="720" height="960"></figure>';
      }).join('') +
      '<figure class="pm-lg-map"><iframe title="Mapa: Promise, Alvear 2445, Villa Ballester" src="https://www.google.com/maps?q=Promise+Alvear+2445+Villa+Ballester&output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></figure>' +
      '</div></section>');
  }

  function endSection() {
    return el('<section class="pm-sec pm-end" aria-labelledby="pm-end-t"><div class="pm-wrap">' +
      '<div class="pm-kick pm-rv">Catálogo completo</div>' +
      '<h2 class="pm-h pm-rv" id="pm-end-t">Hay mucho <em>más</em></h2>' +
      '<p class="pm-lead pm-rv">Entrá al catálogo completo o pasá por el local a ver todo lo que entró.</p>' +
      '<div class="pm-btns pm-rv"><a class="pm-btn" href="/productos/">Ver el catálogo</a><a class="pm-btn pm-ghost" href="' + WA + '" target="_blank" rel="noopener">Escribinos</a></div>' +
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

  // Categorias: [nombre, link, imagen o video, tipo]
  // tipo 'foto' = foto actual del producto (provisoria) | 'recorte' = prenda sin fondo (png/webp) | 'video' = mp4 en loop
  var IMG = 'https://dcdn-us.mitiendanube.com/stores/007/167/228/products/';
  var ASSETS = (function () {
    var sc = document.currentScript || document.querySelector('script[src*="promise-web@"]');
    var m = sc && sc.src.match(/^(.*promise-web@[^/]+\/)/);
    return m ? m[1] + 'assets/' : 'https://cdn.jsdelivr.net/gh/tobilandgraf12-ctrl/promise-web@main/assets/';
  })();
  var CATS = [
    ['Remeras', '/indumentaria/remeras-camisas/', ASSETS + 'cat/remera.mp4', 'video', ASSETS + 'cat/remera.webp'],
    ['Pantalones', '/indumentaria/pantalones/', ASSETS + 'cat/jean.mp4', 'video', ASSETS + 'cat/jean.webp'],
    ['Bermudas', '/indumentaria/shorts-y-bermudas/', ASSETS + 'cat/bermuda.mp4', 'video', ASSETS + 'cat/bermuda.webp'],
    ['Abrigos', '/indumentaria/abrigo/', ASSETS + 'cat/campera.mp4', 'video', ASSETS + 'cat/campera.webp'],
    ['Calzado', '/calzado/', ASSETS + 'cat/zapatilla.mp4', 'video', ASSETS + 'cat/zapatilla.webp'],
    ['Accesorios', '/accesorios/', ASSETS + 'cat/bolso.mp4', 'video', ASSETS + 'cat/bolso.webp']
  ];

  var HERO = {
    producto: '/indumentaria/conjuntos/',
    cta: 'Ver conjuntos',
    usuario: 'promise_vb',
    lugar: 'Villa Ballester',
    texto: 'Conjunto Street 🖤 Pasá a probártelo o pedilo por la web'
  };

  function heroSection() {
    var A = ASSETS + 'hero/';
    function small(cls, file, alt) {
      var pic = /_far\.webp$/.test(file)
        ? '<picture><source media="(max-width:767px)" srcset="' + A + file.replace('_far.webp', '_far_m.webp') + '"><img src="' + A + file + '" alt="" loading="eager"></picture>'
        : '<img src="' + A + file + '" alt="" loading="eager">';
      return '<div class="pm-hs ' + cls + '" aria-hidden="true"><div class="pm-hs-in">' + pic +
        '<span class="pm-shine" style="-webkit-mask-image:url(' + A + file + ');mask-image:url(' + A + file + ')"></span></div></div>';
    }
    var MOB = window.matchMedia && matchMedia('(max-width:767px)').matches;
    var WAI = '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3zm4.4 12.4c-.2.5-1.1 1-1.6 1-.4.1-.9.1-1.5-.1a12 12 0 0 1-5.6-4.9c-.4-.7-.7-1.5-.7-2.2 0-.9.5-1.4.8-1.6.2-.2.4-.2.6-.2h.4c.1 0 .3 0 .5.4l.7 1.6c.1.2.1.3 0 .5l-.4.6c-.1.1-.2.3-.1.5.3.6.8 1.2 1.3 1.6.6.5 1.2.8 1.8 1 .2.1.4.1.5-.1l.7-.8c.2-.2.3-.2.5-.1l1.5.7c.2.1.4.2.4.3.1.1.1.6-.1 1.1z"/></svg>';
    function story(cls, sl) {
      return '<div class="pm-sty ' + cls + '" aria-hidden="true"><div class="pm-sty-in">' +
        sl.map(function (x, i) { return '<img class="pm-sl pm-sl' + i + '" src="' + A + x[0] + '" alt="' + x[1] + '" loading="lazy">'; }).join('') +
        '<div class="pm-sty-bars"><i><u></u></i><i><u></u></i></div><div class="pm-sty-h"><span><img src="' + A + 'mano.webp" alt=""></span><b>promise_vb</b></div></div></div>';
    }
    var heart = '<svg class="pm-heart" viewBox="0 0 24 24"><path fill="#ED4956" d="M12 21s-7.5-4.6-9.6-9.2C.9 8.4 3 4.5 6.7 4.5c2.1 0 3.6 1.2 4.3 2.4.7-1.2 2.2-2.4 4.3-2.4 3.7 0 5.8 3.9 4.3 7.3C19.5 16.4 12 21 12 21z"/></svg>';
    var st = 'fill="none" stroke="#111" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"';
    var com = '<svg viewBox="0 0 24 24"><path ' + st + ' d="M20.6 16.2A9 9 0 1 0 17 20l3.7 1-1-3.7z"/></svg>';
    var snd = '<svg viewBox="0 0 24 24"><path ' + st + ' d="M21.5 3 10 13.5M21.5 3l-7 18-4.5-7.5L2.5 9z"/></svg>';
    var bm = '<svg class="pm-bm" viewBox="0 0 24 24"><path ' + st + ' d="M19 21l-7-5-7 5V3h14z"/></svg>';
    return el('<section class="pm-hero" aria-label="Conjunto Street, nuevo en Promise">' +
      '<div class="pm-hero-word" aria-hidden="true"><img src="' + A + 'logo_big_white.webp" alt="" fetchpriority="high"></div>' +
      /* compu: charla de WhatsApp */
      (MOB ? '' : '<a class="pm-chat" href="' + WA + '" target="_blank" rel="noopener" aria-label="Escribinos por WhatsApp"><div class="pm-chat-in"><span class="pm-chat-notch"></span>' +
        '<div class="pm-chat-h"><span class="pm-chat-bk">‹</span><span class="pm-chat-av"><img src="' + A + 'mano.webp" alt=""></span><span><b>Promise</b><small>en línea</small></span></div>' +
        '<div class="pm-chat-b"><div class="pm-m pm-me pm-m1 pm-mimg"><img src="' + A + 'post.webp" alt=""></div><div class="pm-m pm-me pm-m2">Hola! Tenés este conjunto?</div>' +
        '<div class="pm-m pm-pv pm-m3">Buen día amigo! Sí, tenemos 🙌🏼 Pasate a probarlo o te lo mandamos por moto en el día 🛵</div><div class="pm-m pm-me pm-m4">Joya, paso a la tarde 👌🏼</div></div>' +
        '<div class="pm-chat-f"><span>Mensaje</span><i>' + WAI + '</i></div></div></a>') +
      '<a class="pm-wabtn" href="' + WA + '" target="_blank" rel="noopener"><span class="pm-wabtn-i">' + WAI + '</span><span><small>Talles, stock o envíos</small><b>Escribinos</b></span></a>' +
      /* celular: PROMISE en contorno gigante atrás */
      (MOB ? '<div class="pm-m2bg" aria-hidden="true"><span>PROMISE PROMISE </span></div><div class="pm-m2bg pm-m2b2" aria-hidden="true"><span>PROMISE PROMISE </span></div>' : '') +
      '<div class="pm-hero-logo" aria-hidden="true"><img src="' + A + 'logo_small_white.webp" alt=""></div>' +
      '<a class="pm-post" href="' + HERO.producto + '">' +
        '<div class="pm-post-h"><span class="pm-post-av"><img src="' + A + 'mano.webp" alt=""></span><span><b>' + HERO.usuario + '</b><small>' + HERO.lugar + '</small></span><i>···</i></div>' +
        '<div class="pm-post-img"><img src="' + A + 'post.webp" alt="Conjunto Street negro con remera blanca en el local de Promise" fetchpriority="high"></div>' +
        '<div class="pm-post-a">' + heart + com + snd + bm + '</div>' +
        '<div class="pm-post-c"><b>' + HERO.usuario + '</b> ' + HERO.texto + '</div>' +
      '</a>' +
      (MOB ? '<div class="pm-wind" aria-hidden="true" data-src="' + A + 'short_viento_alpha.mp4"><img src="' + A + 'short_viento_poster.webp" alt=""><canvas width="526" height="444"></canvas></div>'
        : '<div class="pm-hero-main" aria-hidden="true"><img src="' + A + 'short-negro.webp" alt=""></div>') +
      '<a class="pm-hero-cta" href="' + HERO.producto + '">' + HERO.cta + ' <span aria-hidden="true">→</span></a>' +
      '</section>');
  }

  /* short al viento: el MP4 trae arriba el color y abajo la máscara; WebGL los combina (anda en iPhone y Android) */
  function alphaVideo(box) {
    var cv = box.querySelector('canvas'), gl = cv.getContext('webgl', { premultipliedAlpha: true, alpha: true, antialias: false });
    if (!gl) return;
    var v = document.createElement('video');
    v.crossOrigin = 'anonymous'; v.muted = true; v.loop = true; v.playsInline = true; v.autoplay = true; v.preload = 'auto';
    v.setAttribute('muted', ''); v.setAttribute('playsinline', ''); v.setAttribute('webkit-playsinline', '');
    v.style.cssText = 'position:absolute;width:1px;height:1px;opacity:0;pointer-events:none';
    v.src = box.getAttribute('data-src'); box.appendChild(v);
    function sh(t, src) { var o = gl.createShader(t); gl.shaderSource(o, src); gl.compileShader(o); return o; }
    var pr = gl.createProgram();
    gl.attachShader(pr, sh(gl.VERTEX_SHADER, 'attribute vec2 p;varying vec2 uv;void main(){uv=vec2((p.x+1.)*.5,(1.-p.y)*.5);gl_Position=vec4(p,0.,1.);}'));
    gl.attachShader(pr, sh(gl.FRAGMENT_SHADER, 'precision mediump float;varying vec2 uv;uniform sampler2D t;void main(){vec3 c=texture2D(t,vec2(uv.x,uv.y*.5)).rgb;float a=texture2D(t,vec2(uv.x,.5+uv.y*.5)).r;gl_FragColor=vec4(c,a);}'));
    gl.linkProgram(pr); gl.useProgram(pr);
    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    var loc = gl.getAttribLocation(pr, 'p'); gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    gl.bindTexture(gl.TEXTURE_2D, gl.createTexture());
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    var on = false;
    function draw() {
      if (v.readyState >= 2) {
        try {
          gl.viewport(0, 0, cv.width, cv.height); gl.clearColor(0, 0, 0, 0); gl.clear(gl.COLOR_BUFFER_BIT);
          gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, v); gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
          if (!on) { on = true; box.classList.add('pm-av-on'); }
        } catch (e) { return; }
      }
      if (v.requestVideoFrameCallback) v.requestVideoFrameCallback(draw); else requestAnimationFrame(draw);
    }
    var pp = v.play(); if (pp && pp.catch) pp.catch(function () {});
    if (v.requestVideoFrameCallback) v.requestVideoFrameCallback(draw); else requestAnimationFrame(draw);
    document.addEventListener('visibilitychange', function () { if (!document.hidden) v.play().catch(function () {}); });
  }

  function catsSection() {
    var tiles = CATS.map(function (c, i) {
      var media = c[3] === 'video'
        ? '<video data-src="' + c[2] + '"' + (c[4] ? ' poster="' + c[4] + '"' : '') + ' muted loop playsinline webkit-playsinline disablepictureinpicture disableremoteplayback preload="none" aria-label="' + c[0] + '"></video>'
        : '<img src="' + c[2] + '" alt="' + c[0] + '" loading="lazy">';
      return '<a class="pm-cat pm-rv' + (c[3] === 'video' ? ' pm-has-vid' : '') + '" href="' + c[1] + '"><span class="pm-n">0' + (i + 1) + '</span>' +
        '<span class="pm-media ' + (c[3] === 'foto' ? 'pm-photo' : c[3] === 'video' ? 'pm-vid' : 'pm-cut') + '">' + media + '</span>' +
        '<span class="pm-lbl"><b>' + c[0] + '</b><i>→</i></span></a>';
    }).join('');
    return el('<section id="categorias" class="pm-sec pm-cats" aria-labelledby="pm-cats-t"><div class="pm-wrap">' +
      '<div class="pm-kick pm-rv">Elegí por prenda</div>' +
      '<h2 id="pm-cats-t" class="pm-h pm-rv">Comprá por <em>categoría</em></h2>' +
      '<div class="pm-cat-grid">' + tiles + '</div></div></section>');
  }

  // ===== Ajustes generales (todas las paginas) =====
  // Guía de talles: imágenes de Promise (adultos, Promise JR, calzado)
  var GUIAS = [['adultos', 'Adultos'], ['jr', 'Promise JR'], ['calzado', 'Calzado']];
  function guessTalle() {
    var n = ((document.querySelector('.js-product-name') || {}).textContent || '').toLowerCase();
    var crumbs = ((document.querySelector('.breadcrumbs') || {}).textContent || '').toLowerCase();
    if (/zapatilla|ojota|calzado|botin|bot\u00edn|zapato|chancla/.test(n + ' ' + crumbs)) return 'calzado';
    if (/kids|ni\u00f1o|nene|\bjr\b|junior/.test(n + ' ' + crumbs)) return 'jr';
    return 'adultos';
  }

  function tallesModal(sel) {
    var m = document.getElementById('pm-talles');
    if (!m) {
      m = el('<div id="pm-talles" class="pm-tm" role="dialog" aria-modal="true" aria-label="Guía de talles"><div class="pm-tm-box">' +
        '<button type="button" class="pm-tm-x" aria-label="Cerrar">✕</button>' +
        '<div class="pm-tm-tabs" role="tablist">' + GUIAS.map(function (g) { return '<button type="button" role="tab" data-g="' + g[0] + '">' + g[1] + '</button>'; }).join('') + '</div>' +
        '<div class="pm-tm-img"><img alt="" decoding="async"></div>' +
        '<p class="pm-tm-n">¿Dudas con el talle? <a href="' + WA + '" target="_blank" rel="noopener">Escribinos por WhatsApp</a> y te pasamos las medidas del modelo, o vení a probártelo al local.</p>' +
        '</div></div>');
      document.body.appendChild(m);
      var show = function (id) {
        var g = GUIAS.filter(function (x) { return x[0] === id; })[0] || GUIAS[0];
        var img = m.querySelector('.pm-tm-img img');
        img.src = ASSETS + 'talles/' + g[0] + '.webp';
        img.alt = 'Guía de talles Promise: ' + g[1];
        m.querySelectorAll('.pm-tm-tabs button').forEach(function (b) { var on = b.getAttribute('data-g') === g[0]; b.classList.toggle('pm-on', on); b.setAttribute('aria-selected', on); });
        m.querySelector('.pm-tm-box').scrollTop = 0;
      };
      m.querySelectorAll('.pm-tm-tabs button').forEach(function (b) { b.addEventListener('click', function () { show(b.getAttribute('data-g')); }); });
      var close = function () { m.classList.remove('pm-tm-on'); document.documentElement.style.overflow = ''; };
      m.querySelector('.pm-tm-x').addEventListener('click', close);
      m.addEventListener('click', function (e) { if (e.target === m) close(); });
      document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
      m._show = show;
    }
    m._show(sel || 'adultos');
    m.classList.add('pm-tm-on');
    document.documentElement.style.overflow = 'hidden';
  }
  window.pmTalles = tallesModal;

  function siteFixes() {
    // Guia de talles: links
    document.addEventListener('click', function (e) {
      var a = e.target.closest && e.target.closest('.pm-open-talles');
      if (a) { e.preventDefault(); tallesModal(a.getAttribute('data-t') || (document.querySelector('#single-product') ? guessTalle() : 'adultos')); }
    });
    var prod = document.querySelector('#single-product');
    if (prod && !prod.querySelector('.pm-talles-link')) {
      var form = prod.querySelector('.js-product-form, form');
      var link = el('<a href="#" class="pm-open-talles pm-talles-link">📏 Guía de talles</a>');
      var variants = prod.querySelector('.js-product-variants');
      if (variants) variants.parentNode.insertBefore(link, variants.nextSibling);
      else if (form) form.insertBefore(link, form.firstChild);
    }
    // Banda de beneficios: 10 dias
    document.querySelectorAll('[data-store^="home-informative"] *, .section-informative-banners *').forEach(function (n) {
      if (n.children.length === 0 && /15 d[ií]as/.test(n.textContent)) n.textContent = n.textContent.replace(/15 d[ií]as/, '10 días');
    });
    // Pie: contacto
    var footer = document.querySelector('footer, .js-footer');
    if (footer && !footer.querySelector('.pm-ig')) {
      footer.querySelectorAll('a.contact-link').forEach(function (a) {
        var h = a.getAttribute('href') || '', li = a.closest('li') || a;
        if (/^tel:/.test(h)) li.parentNode && li.parentNode.removeChild(li);
        else if (/wa\.me/.test(h)) { a.innerHTML = '<span class="pm-ci">WhatsApp</span>+54 11 4056-3485'; }
        else if (/^mailto:/.test(h)) { a.setAttribute('href', 'mailto:promisenj.ok@gmail.com'); a.innerHTML = '<span class="pm-ci">Mail</span>promisenj.ok@gmail.com'; }
      });
      footer.querySelectorAll('li').forEach(function (li) {
        if (/^Alvear 2445/.test(li.textContent.trim()) && !li.querySelector('a')) li.innerHTML = '<a class="contact-link" href="' + MAPS + '" target="_blank" rel="noopener"><span class="pm-ci">Local</span>Alvear 2445, Villa Ballester</a>';
      });
      var mailLi = footer.querySelector('a[href^="mailto:"]');
      if (mailLi) {
        var li2 = mailLi.closest('li');
        var ig = el('<li class="d-block mb-3 pm-ig"><a class="contact-link" href="https://www.instagram.com/promise_vb/" target="_blank" rel="noopener"><span class="pm-ci">Instagram</span>@promise_vb</a></li>');
        if (li2) li2.parentNode.insertBefore(ig, li2.nextSibling);
      }
    }
  }

  var CSS2 = [
    /* Ruido de fondo detrás del contenido (no tapa fotos ni colores) */
    '#pm-transfer{margin:6px 0 14px;text-align:center}#pm-transfer .pm-tr-btn{display:block;border:2px solid #0F0F0F;border-radius:999px;padding:12px 16px;font-weight:700;text-transform:uppercase;letter-spacing:.04em;font-size:13px;color:#FFD400!important;background:transparent;border-color:#FFD400;text-decoration:none!important}#pm-transfer .pm-tr-btn:hover{background:#FFD400;color:#0F0F0F!important}#pm-transfer .pm-tr-note{font-size:12px;opacity:.7;margin:8px 4px 0;line-height:1.35}',
    '.pm-gift .pm-wrap{text-align:center}.pm-gift .pm-kick{display:flex;justify-content:center}.pm-gift .pm-lead{margin-left:auto!important;margin-right:auto!important;text-align:center}.pm-gcs{display:grid;grid-template-columns:repeat(5,1fr);gap:22px;margin:46px auto 34px;perspective:1100px;max-width:1220px}.pm-gc{margin:0}.pm-gc-c{position:relative;border-radius:12px;overflow:hidden;box-shadow:0 22px 40px rgba(0,0,0,.6);animation:pm-gcf 6s ease-in-out infinite;animation-delay:calc(var(--i)*-.7s);will-change:transform}.pm-gc-c img{display:block;width:100%;height:auto}.pm-gc-c i{position:absolute;top:-50%;bottom:-50%;width:22%;left:-40%;background:linear-gradient(90deg,transparent,rgba(255,255,255,.08) 30%,rgba(255,255,255,.75) 50%,rgba(255,255,255,.08) 70%,transparent);transform:rotate(20deg);mix-blend-mode:overlay;animation:pm-gcb 3.6s cubic-bezier(.5,0,.3,1) infinite;animation-delay:calc(var(--i)*-.7s)}.pm-gl4 .pm-gc-c i{background:linear-gradient(90deg,transparent,rgba(255,240,170,.15) 30%,rgba(255,250,220,.95) 50%,rgba(255,240,170,.15) 70%,transparent)}.pm-gl5 .pm-gc-c{box-shadow:0 22px 40px rgba(0,0,0,.6),0 0 30px rgba(255,212,0,.25)}.pm-gl5 .pm-gc-c i{width:28%;background:linear-gradient(90deg,transparent,rgba(255,212,0,.2) 30%,#fff 50%,rgba(255,212,0,.2) 70%,transparent);mix-blend-mode:screen;opacity:.85}.pm-gc figcaption{margin-top:14px;display:flex;justify-content:space-between;font-size:13px}.pm-gc figcaption b{color:#FFD400;letter-spacing:.08em;text-transform:uppercase;font-size:12px}.pm-gc figcaption span{opacity:.85}@keyframes pm-gcf{0%,100%{transform:translateY(0) rotateX(7deg) rotateY(-9deg)}50%{transform:translateY(-10px) rotateX(-4deg) rotateY(9deg)}}@keyframes pm-gcb{0%{left:-40%}55%,100%{left:130%}}.pm-gc-cta small{display:block;margin-top:14px;opacity:.6;font-size:13px}@media(max-width:767px){.pm-gc figcaption{flex-direction:column;align-items:center;gap:3px;margin-top:10px}.pm-gcs{grid-template-columns:repeat(2,1fr);gap:22px 14px;margin-top:30px}.pm-gl5{grid-column:1/-1;max-width:62%;margin:0 auto!important}}@media(prefers-reduced-motion:reduce){.pm-gc-c,.pm-gc-c i{animation:none}}',
    '.pm-off,.pm-off *,.pm-off::before,.pm-off::after,.pm-off *::before,.pm-off *::after{animation-play-state:paused!important}',
    '.pm-hero .pm-hs.pm-far img{filter:none!important;opacity:1!important;width:135.3%!important;max-width:none!important;margin:-17.65% 0 0 -17.65%!important}',
    '.pm-cat .pm-media.pm-vid{position:absolute}.pm-cat .pm-media.pm-vid::after{content:"";position:absolute;inset:0;pointer-events:none;z-index:1;background:radial-gradient(ellipse 75% 75% at 50% 48%,transparent 58%,#101010 100%)}',
    '.pm-hs-in{-webkit-backface-visibility:hidden;backface-visibility:hidden}',
    '/* Ruido solo en body: las secciones son transparentes para que no se apilen capas y cambien de tono */',
    'body{background-color:#0F0F0F!important;background-image:url(__NOISE__)!important;background-size:180px 180px!important;background-repeat:repeat!important}',
    '.pm-sec:not(.pm-local):not(.pm-hero),.pm-wb,[data-store="banner-services"],.section-featured-home,[data-store^="home-products"],.section-institutional-home,.js-newsletter-home,.section-newsletter-home{background-color:transparent!important;background-image:none!important}',
    '.head-main,.js-footer,footer{background-image:url(__NOISE__)!important;background-size:180px 180px!important;background-color:#0F0F0F!important}',
    '.js-footer,footer{background-image:url(__NOISE__),linear-gradient(to bottom,#0F0F0F 0,#0A0A0A 100%)!important;background-size:180px 180px,100% 100%!important;background-repeat:repeat,no-repeat!important}',
    '.pm-wb{border-top:1px solid transparent!important;border-bottom:1px solid transparent!important;border-image:linear-gradient(90deg,transparent,rgba(255,255,255,.09),transparent) 1!important}',
    '.pm-hero{background:url(__NOISE__) 0 0/180px 180px repeat,linear-gradient(to bottom,rgba(15,15,15,0) 70%,#0F0F0F 100%),radial-gradient(ellipse at 50% 45%,#232323 0,#0F0F0F 70%)!important}',
    '.pm-local{background-image:url(__NOISE__)!important;background-size:180px 180px!important}',
    /* Mega menu: tarjeta de catalogo (reemplaza el ovalo amarillo) */
    '.pm-mega .pm-cta{background:#141414!important;border:1px solid rgba(255,255,255,.1);border-radius:16px!important;color:#EDEAE4!important;padding:26px 24px!important;position:relative;overflow:hidden;transition:border-color .25s,transform .25s}',
    '.pm-mega .pm-cta:before{content:"";position:absolute;left:0;top:0;bottom:0;width:4px;background:#FFD400}',
    '.pm-mega .pm-cta:hover{background:#141414!important;border-color:#FFD400;transform:translateY(-2px)}',
    '.pm-mega .pm-cta small{color:#FFD400!important}',
    '.pm-mega .pm-cta b{color:#EDEAE4!important;font-size:30px!important}',
    '.pm-mega .pm-cta span{align-self:flex-start;background:#FFD400;color:#0F0F0F!important;border-radius:999px;padding:10px 16px}',
    '[data-store="home-products-new"] .js-swiper-new-pagination,[data-store="home-products-new"] .swiper-pagination{display:none!important}',
    '.pm-mv-row{scrollbar-width:thin;scrollbar-color:#FFD400 rgba(255,255,255,.08)}.pm-mv-row::-webkit-scrollbar{height:4px}.pm-mv-row::-webkit-scrollbar-track{background:rgba(255,255,255,.08);border-radius:9px}.pm-mv-row::-webkit-scrollbar-thumb{background:#FFD400;border-radius:9px}',
    /* Inicio: prendas de fondo más visibles, foco amarillo y sticker */
    '.pm-hero::before{content:"";position:absolute;left:50%;top:50%;width:620px;height:620px;transform:translate(-62%,-52%);border-radius:50%;background:radial-gradient(circle,rgba(255,212,0,.17) 0,rgba(255,212,0,.06) 38%,transparent 66%);z-index:0;pointer-events:none;animation:pm-spot 6s ease-in-out infinite}',
    '@keyframes pm-spot{50%{transform:translate(-62%,-52%) scale(1.12);opacity:.8}}',
    '.pm-hero .pm-hs.pm-far{width:136px}',
    '.pm-hero .pm-hs.pm-far img{filter:grayscale(.2) contrast(1.08) brightness(1.18) blur(2.4px) drop-shadow(0 0 18px rgba(255,212,0,.25))!important;opacity:.95!important}',
    '.pm-new{position:absolute;top:-16px;right:-18px;z-index:6;width:62px;height:62px;border-radius:50%;background:#FFD400;color:#0F0F0F;display:flex;align-items:center;justify-content:center;text-align:center;font-family:"Oswald",sans-serif;font-weight:700;font-size:12px;line-height:1;letter-spacing:.06em;text-transform:uppercase;transform:rotate(12deg);box-shadow:0 8px 20px rgba(0,0,0,.45);animation:pm-new 3.2s ease-in-out infinite}',
    '.pm-hero .pm-post{overflow:visible!important}.pm-post-h{border-radius:14px 14px 0 0}',
    '@keyframes pm-new{0%,100%{transform:rotate(12deg) scale(1)}50%{transform:rotate(4deg) scale(1.08)}}',
    '@media(max-width:767px){.pm-hero::before{width:360px;height:360px;transform:translate(-55%,-40%)}.pm-hero .pm-hs.pm-far{width:76px}.pm-hero .pm-hs.pm-far img{filter:grayscale(.2) brightness(1.15) blur(1.6px) drop-shadow(0 0 12px rgba(255,212,0,.25))!important}.pm-new{width:46px;height:46px;font-size:9px;top:-12px;right:-12px}}',
    /* ===== Fondo y estilo moderno (13/11) ===== */

    '.pm-hero-word{opacity:.95}',
    '.pm-post{box-shadow:0 40px 80px rgba(0,0,0,.65),0 0 0 1px rgba(255,255,255,.06)!important}',
    '.pm-hero-cta{background:#FFD400!important;color:#0F0F0F!important}',
    '.pm-hero-cta:hover{background:#fff!important}',
    '.pm-wb{background:#0F0F0F;overflow:hidden;padding:26px 0;border-top:1px solid rgba(255,255,255,.06);border-bottom:1px solid rgba(255,255,255,.06);position:relative}',
    '.pm-wb-l{white-space:nowrap;font-family:"Oswald",sans-serif;font-weight:700;font-size:118px;line-height:1.02;text-transform:uppercase;color:transparent;-webkit-text-stroke:1.2px #4a4744;will-change:transform}',
    '.pm-wb-l i{font-style:normal;display:inline-block;font-size:.42em;vertical-align:.55em;color:#FFD400;-webkit-text-stroke:0;margin:0 .35em}',
    '[data-store="home-products-new"]::before{display:none!important}',
    /* bordes y detalles */
    '.pm-btn,.pm-hero-cta{border-radius:999px!important}',
    'html body .btn,html body .btn-primary,html body .btn-secondary,html body .js-addtocart{border-radius:999px!important}',
    '.item-product .item-actions .btn-link{border-radius:999px!important}',
    '.item-product .item-image,.js-item-product .item-image{border-radius:14px;overflow:hidden}',
    '.pm-cat{border-radius:18px!important;overflow:hidden}',
    '.pm-cat .pm-lbl i{border-radius:999px!important}',
    '.pm-tm-box{border-radius:18px!important}.pm-tm-img{border-radius:12px;overflow:hidden}.pm-tm-tabs button{border-radius:999px!important}',
    '.pm-lg figure{border-radius:16px}',
    '.pm-q button span{border-radius:999px!important}',
    '.js-product-thumb,.js-product-slide-link,.product-slider-image{border-radius:14px;overflow:hidden}',
    '.form-quantity-product{border-radius:999px!important;overflow:hidden}.form-quantity-product .form-control{border-radius:0!important}',
    '.pm-mega.desktop-dropdown{border-radius:0 0 18px 18px}',
    'html body .form-control,html body input[type=email],html body input[type=text],html body input[type=number],html body select{border-radius:12px!important}',
    '.btn-variant{border-radius:999px!important}',
    '[data-store="banner-services"]{background:transparent!important;border-color:rgba(255,255,255,.07)!important}',
    '.section-featured-home .js-item-product,.pm-mv-row>.js-item-product{transition:transform .35s cubic-bezier(.2,.7,.2,1)}',
    '@media(hover:hover){.section-featured-home .js-item-product:hover,.pm-mv-row>.js-item-product:hover{transform:translateY(-6px)}}',
    '@media(max-width:767px){.pm-wb{padding:14px 0}.pm-wb-l{font-size:58px;-webkit-text-stroke:1px #4a4744}.item-product .item-image,.js-item-product .item-image{border-radius:12px}.pm-cat{border-radius:14px!important}}',
    /* Celular: beneficios mas compactos (flechas a los costados) y marquesina visible y mas chica */
    '@media(max-width:767px){' +
      '[data-store="banner-services"]{padding-top:20px!important;padding-bottom:18px!important}' +
      '[data-store="banner-services"] .container{position:relative}' +
      '[data-store="banner-services"] .js-informative-banners{margin-bottom:0!important}' +
      '[data-store="banner-services"] .icon-60px{width:38px!important;height:38px!important;margin-bottom:8px!important}' +
      '[data-store="banner-services"] .icon-60px svg{width:38px!important;height:38px!important}' +
      '[data-store="banner-services"] .text-center.mt-4.d-md-none{position:absolute;left:4px;right:4px;top:50%;transform:translateY(-50%);margin:0!important;display:flex!important;justify-content:space-between;pointer-events:none;z-index:3}' +
      '[data-store="banner-services"] .swiper-button-prev,[data-store="banner-services"] .swiper-button-next{position:static!important;margin:0!important;pointer-events:auto;width:36px;height:36px}' +
      '[data-store="home-products-new"]::before{font-size:38px!important;margin:6px 0 10px!important;-webkit-text-stroke:1px #6b6660!important}' +
    '}',
    /* El local: fotos + mapa */
    '.pm-lg{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-top:48px;position:relative;z-index:1}',
    '.pm-lg figure{margin:0;aspect-ratio:3/4;overflow:hidden;background:#0F0F0F;position:relative}',
    '.pm-lg img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .6s}.pm-lg figure:hover img{transform:scale(1.04)}',
    '.pm-lg iframe{width:100%;height:100%;border:0;filter:grayscale(.35) contrast(1.05)}',
    '@media(max-width:767px){.pm-lg{display:flex;overflow-x:auto;scroll-snap-type:x mandatory;gap:10px;margin-top:32px;padding-bottom:6px}.pm-lg figure{flex:0 0 72%;scroll-snap-align:start}}',
    /* Lo más vendido: fila con scroll lateral (2 en celular, 4 en compu) */
    '.pm-new{display:inline-block;margin-left:6px;padding:2px 7px;border-radius:20px;background:#FFD400;color:#0F0F0F;font-size:10px;font-weight:800;letter-spacing:.06em;text-transform:uppercase;line-height:1.4;vertical-align:middle}',
    '.js-nav-desktop-list .pm-nav-kids>a{color:#FFD400!important}',
    '.pm-kids .pm-wrap{text-align:center}.pm-kids .pm-kick{justify-content:center}.pm-kids-box{margin-top:30px;text-align:left}.pm-kids-cta{margin-top:26px}',
    '.pm-mv-row{flex-wrap:nowrap!important;overflow-x:auto;scroll-snap-type:x mandatory;-webkit-overflow-scrolling:touch;scrollbar-width:thin;padding-bottom:8px}',
    '.pm-mv-row>.js-item-product{flex:0 0 50%;max-width:50%;scroll-snap-align:start}',
    '@media(min-width:768px){.pm-mv-row>.js-item-product{flex-basis:25%;max-width:25%}}',
    '.js-products-new-title::before,.js-products-new-title::after{content:none!important;display:none!important}',
    /* Botón de arrepentimiento: discreto pero visible (la Res. 424/2020 exige que esté a la vista desde el inicio) */
    '[data-component="order-cancellation"]{font-size:11px!important;opacity:.6;text-decoration:none!important;text-transform:none!important;letter-spacing:.02em;font-weight:400!important}',
    '[data-component="order-cancellation"]:hover{opacity:1;text-decoration:underline!important}',
    /* 20%: sin cuadrado rojo en las fotos, texto sutil debajo del precio */
    '.item-product .item-image::after{content:none!important;display:none!important}',
    '.js-item-product .item-installments::after{content:"20% OFF en efectivo o transferencia";display:block;margin-top:3px;color:#FFD400;font-size:11px;font-weight:600;letter-spacing:.02em}',
    '#single-product .js-price-display::after{font-size:11px!important;font-weight:600!important;letter-spacing:.02em!important;text-transform:none!important;margin-top:6px!important}',
    /* Logo: gira mas seguido, con reflejo espejado */
    '.logo-img{animation:pm-spin2 6s cubic-bezier(.6,0,.3,1) infinite!important;-webkit-box-reflect:below 1px linear-gradient(transparent 62%,rgba(255,255,255,.28))}',
    '@keyframes pm-spin2{0%,55%{transform:rotateY(0)}85%,100%{transform:rotateY(720deg)}}',
    /* Cantidad +/- */
    '.form-quantity{border:1px solid #3a3a3a;height:54px}',
    '.form-quantity .form-quantity-icon{color:#EDEAE4!important;width:44px;height:52px;display:flex;align-items:center;justify-content:center;font-size:20px!important;font-weight:400;cursor:pointer}',
    '.form-quantity .form-quantity-icon svg{display:none}',
    '.js-quantity-down::before{content:"−"}.js-quantity-up::before{content:"+"}',
    '.form-quantity .js-quantity-input{background:transparent!important;color:#EDEAE4!important;border:0!important;text-align:center;font-weight:700;-moz-appearance:textfield}',
    '.form-quantity input::-webkit-outer-spin-button,.form-quantity input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}',
    /* Link guia de talles */
    '.pm-talles-link{display:inline-block;margin:4px 0 18px;font-size:13px;font-weight:700;color:#EDEAE4!important;text-decoration:underline!important;text-underline-offset:4px;letter-spacing:.02em}',
    '.pm-talles-link:hover{color:#FFD400!important}',
    '.pm-faq .pm-a a{color:#FFD400;text-decoration:underline}',
    /* Modal talles */
    '.pm-tm{position:fixed;inset:0;z-index:100000;background:rgba(0,0,0,.72);display:none;align-items:center;justify-content:center;padding:16px}',
    '.pm-tm.pm-tm-on{display:flex}',
    '.pm-tm-box{position:relative;background:#141414;border:1px solid #2a2a2a;border-top:3px solid #FFD400;width:100%;max-width:560px;max-height:90vh;overflow:auto;padding:28px 26px 22px;color:#EDEAE4}',
    '.pm-tm-box .pm-h{font-size:34px;margin-bottom:16px}',
    '.pm-tm-x{position:absolute;top:10px;right:12px;background:none;border:0;color:#EDEAE4;font-size:20px;cursor:pointer;padding:6px}',
    '.pm-tm-tabs{display:flex;gap:6px;margin:0 34px 14px 0;flex-wrap:wrap}',
    '.pm-tm-tabs button{flex:1 1 auto;background:#0F0F0F;color:#EDEAE4;border:1px solid #3a3a3a;padding:10px 12px;font-size:12px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;cursor:pointer}',
    '.pm-tm-tabs button.pm-on{background:#FFD400;border-color:#FFD400;color:#0F0F0F}',
    '.pm-tm-img{background:#fff;line-height:0}.pm-tm-img img{width:100%;height:auto;display:block}',
    '.pm-tm-n{font-size:12px;color:#A8A39B;line-height:1.5;margin:14px 0 0}.pm-tm-n a{color:#FFD400}',
    /* Pie de pagina */
    'footer .contact-link{display:inline-flex;flex-direction:column;align-items:inherit;gap:2px}',
    '.pm-ci{display:block;font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:#FFD400;font-weight:700}',
    '@media (max-width:767px){',
    /* WhatsApp no tapa el boton de compra ni el pie */
    '.btn-whatsapp{bottom:88px!important;right:12px!important;width:46px!important;height:46px!important}',
    'footer{padding-bottom:70px!important}',
    /* Ficha: sin hueco entre precio y cuotas */
    '#single-product .js-price-container{margin-bottom:6px!important}',
    '#single-product .js-product-payments-container{margin-top:0!important}',
    /* Encabezado compacto: logo en la misma linea que el menu y el carrito */
    '.head-main .head-logo-row{margin:0 auto!important}',
    '.head-main .head-logo-row>.row{position:relative;flex-wrap:nowrap!important;min-height:58px;align-items:center}',
    '.head-main .js-logo-container{position:absolute!important;left:50%;top:50%;transform:translate(-50%,-50%);width:auto!important;max-width:none!important;flex:none!important;padding:0!important}',
    '.head-main .logo-img-container{width:auto!important;height:auto!important}',
    '.head-main .logo-img{max-height:none!important;height:40px!important;width:auto!important;-webkit-box-reflect:none}',
    '.head-main .js-logo-container{mix-blend-mode:lighten}',
    '.js-item-product .item-installments::after{content:"20% OFF efectivo o transf.";font-size:10.5px}',
    '.pm-tm-box{padding:20px 12px 16px}.pm-tm-tabs button{padding:9px 6px;font-size:11px;letter-spacing:.05em}',
    '}',
    /* Menú celular (tres rayitas) */
    '#nav-hamburger .modal-header{display:flex;align-items:center;justify-content:space-between}',
    '#nav-hamburger .pm-mm-logo{height:22px;width:auto;margin-left:4px}',
    '.pm-mm{padding:4px 16px 18px;color:#EDEAE4}','.pm-mm.pm-mm-f{padding:18px 16px 24px;margin:18px 0 0}','#nav-hamburger .pm-mm-all{margin:0 0 6px}',
    '.pm-mm-promo{display:block;background:#FFD400;color:#0F0F0F!important;border-radius:10px;padding:10px 14px;font:700 12px/1.35 Oswald,Arial,sans-serif;letter-spacing:.06em;text-transform:uppercase;margin:0 0 16px}',
    '.pm-mm-k{font:600 11px/1 Oswald,Arial,sans-serif;letter-spacing:.22em;text-transform:uppercase;color:#A8A39B;margin:0 0 10px}',
    
    
    
    
    
    
    '.pm-mm-cats{display:grid;grid-template-columns:minmax(0,1fr);margin:0 0 22px;border-top:1px solid #262626}',
    '.pm-mm-c{display:flex;justify-content:space-between;align-items:center;padding:14px 2px;border-bottom:1px solid #262626;color:#EDEAE4!important;text-decoration:none}',
    '.pm-mm-c b{font:700 20px/1 Oswald,Arial,sans-serif;text-transform:uppercase;letter-spacing:.03em}',
    '.pm-mm-c i{font-style:normal;color:#FFD400}',
    '.pm-mm-l{list-style:none;margin:0 0 22px;padding:0;border-top:1px solid #262626}',
    '.pm-mm-l a{display:flex;justify-content:space-between;align-items:center;padding:14px 2px;border-bottom:1px solid #262626;font:700 20px/1 Oswald,Arial,sans-serif;text-transform:uppercase;letter-spacing:.03em;color:#EDEAE4!important;text-decoration:none}',
    '.pm-mm-l a i{font-style:normal;color:#FFD400}',
    '.pm-mm-l a.pm-mm-gc{color:#FFD400!important}',
        '#nav-hamburger .nav-primary .nav-list-link{font-family:Oswald,Arial,sans-serif;text-transform:uppercase;letter-spacing:.03em}',
    '.pm-mm-f{border-top:1px solid #262626}',
    '.pm-mm-wa{display:block;text-align:center;background:#FFD400;color:#0F0F0F!important;border-radius:999px;padding:13px;font:700 15px/1 Oswald,Arial,sans-serif;text-transform:uppercase;letter-spacing:.05em;margin:0 0 14px;text-decoration:none}',
    '.pm-mm-f p{margin:0 0 6px;font-size:13px;line-height:1.45;color:#A8A39B}',
    '.pm-mm-f p b{color:#EDEAE4}',
    '.pm-mm-f a.pm-mm-ig{color:#EDEAE4!important;text-decoration:underline}',
    '@keyframes pmmm{from{opacity:0;transform:translateY(10px)}}',
    '#nav-hamburger.modal-show .pm-mm-c,#nav-hamburger.modal-show .pm-mm-l li{animation:pmmm .35s ease-out both}',
    '#nav-hamburger.modal-show .pm-mm-c:nth-child(2){animation-delay:.04s}#nav-hamburger.modal-show .pm-mm-c:nth-child(3){animation-delay:.08s}#nav-hamburger.modal-show .pm-mm-c:nth-child(4){animation-delay:.12s}#nav-hamburger.modal-show .pm-mm-c:nth-child(5){animation-delay:.16s}#nav-hamburger.modal-show .pm-mm-c:nth-child(6){animation-delay:.2s}',
    '#nav-hamburger.modal-show .pm-mm-l li{animation-delay:.22s}',
    '@media (prefers-reduced-motion:reduce){#nav-hamburger .pm-mm-c,#nav-hamburger .pm-mm-l li{animation:none!important}}',
    /* Logo del encabezado en 3D (relieve blanco) que gira de vez en cuando */
    '.head-main .logo-img-container.pm-has3d{perspective:500px}',
    '.head-main .logo-img-container.pm-has3d .logo-img{display:none!important}',
    '.pm-l3d{position:relative;display:block;height:40px;aspect-ratio:1600/493;transform-style:preserve-3d;animation:pm-l3dspin 7s cubic-bezier(.6,0,.3,1) 1s infinite}',
    '.pm-l3d i,.pm-l3d b{position:absolute;inset:0;-webkit-mask:var(--pm-lm) center/contain no-repeat;mask:var(--pm-lm) center/contain no-repeat}',
    '.pm-l3d i{background:#6f6c65}.pm-l3d b{background:#EDEAE4}',
    '@keyframes pm-l3dspin{0%,62%{transform:rotateY(0) rotateX(0)}80%{transform:rotateY(200deg) rotateX(6deg)}92%,100%{transform:rotateY(360deg) rotateX(0)}}',
    '@media (max-width:767px){.pm-l3d{height:32px}}',
    '@media (prefers-reduced-motion:reduce){.pm-l3d{animation:none}}',
    '.head-main .logo-img-container.pm-has3d{text-align:center}',
    '.head-main .logo-img-container.pm-has3d>a{display:inline-block;vertical-align:middle}',
    /* Productos en compu: al pasar el mouse, la segunda foto aparece con fundido (sin deslizar ni mostrar negro) */
    '@media (hover:hover) and (min-width:768px){.product-item-slider-wrapper{transform:none!important;transition:none!important}.product-item-slider-wrapper>.swiper-slide:nth-child(n+2){position:absolute!important;inset:0;width:100%!important;opacity:0;transition:opacity .35s ease}.js-item-image-padding:hover .product-item-slider-wrapper>.swiper-slide:nth-child(2){opacity:1}.product-item-prev-container,.product-item-next-container,.product-item-slider-pagination-container{display:none!important}}',
    /* Titulo "Nuestras prendas" con el mismo estilo que el resto de las secciones */
    '[data-store="home-products-new"] .pm-np-t{background:none!important;color:#EDEAE4!important;font-family:"Oswald",sans-serif!important;font-weight:700!important;text-transform:uppercase!important;font-size:64px!important;line-height:1.05!important;letter-spacing:.01em!important;padding:0!important;margin:0 0 28px!important;text-align:center!important;-webkit-text-stroke:0!important;box-shadow:none!important;display:block!important;width:auto!important;transform:none!important}',
    '[data-store="home-products-new"] .pm-np-t em{font-style:normal;color:#FFD400}',
    '[data-store="home-products-new"] .pm-np-k{justify-content:center;margin:0 0 10px}',
    '@media (max-width:767px){[data-store="home-products-new"] .pm-np-t{font-size:40px!important;margin-bottom:20px!important}}',
    '@media (max-width:767px){.pm-btn{white-space:nowrap;padding:14px 20px;letter-spacing:.08em}}',
    /* Etiquetas en 3D: grosor de carton y balanceo colgadas del hilo */
    '.pm-tagwrap{perspective:900px}',
    '.pm-t3{position:relative;flex:1;display:flex;transform-style:preserve-3d;transform-origin:50% -44px;animation:pm-sw3 4.8s ease-in-out infinite;will-change:transform}',
    '.pm-tagwrap:nth-child(2) .pm-t3{animation-delay:-1.2s}.pm-tagwrap:nth-child(3) .pm-t3{animation-delay:-2.4s}.pm-tagwrap:nth-child(4) .pm-t3{animation-delay:-3.6s}',
    '.pm-t3 .pm-tag{animation:none!important;flex:1;filter:drop-shadow(0 18px 18px rgba(0,0,0,.45))}',
    '.pm-tside{position:absolute;inset:0;background:#b9b3a8;clip-path:polygon(16% 0,84% 0,100% 12%,100% 100%,0 100%,0 12%);transform:translateZ(-7px)}',
    '@keyframes pm-sw3{0%,100%{transform:rotateY(-22deg) rotateZ(1.6deg)}50%{transform:rotateY(22deg) rotateZ(-1.6deg)}}',
    '@media (max-width:767px){@keyframes pm-sw3{0%,100%{transform:rotateY(-16deg) rotateZ(1.4deg)}50%{transform:rotateY(16deg) rotateZ(-1.4deg)}}}',
    '@media (prefers-reduced-motion:reduce){.pm-t3{animation:none}}',
    /* ===== Inicio 19/11: compu = charla de WhatsApp, celular = historias del local ===== */
    '.pm-chat,.pm-wabtn,.pm-sty{display:none}',
    '@media (min-width:768px){',
    '.pm-wabtn{position:absolute;right:calc(50% + 250px);top:42%;z-index:5;display:flex;align-items:center;gap:12px;background:#25D366;color:#0F0F0F!important;text-decoration:none!important;padding:12px 22px 12px 12px;border-radius:999px;animation:pm-ring 2.4s ease-out infinite,pm-fade .9s 2.6s both}',
    '.pm-wabtn-i{width:42px;height:42px;border-radius:50%;background:#0F0F0F;color:#25D366;display:flex;align-items:center;justify-content:center}.pm-wabtn-i svg{width:24px;height:24px}',
    '.pm-wabtn small{display:block;font-size:11px;font-weight:600;line-height:1.2}.pm-wabtn b{font-family:"Oswald",sans-serif;font-size:22px;font-weight:700;text-transform:uppercase;letter-spacing:.04em;line-height:1.1}',
    '@keyframes pm-ring{0%{box-shadow:0 0 0 0 rgba(37,211,102,.55),0 16px 34px rgba(0,0,0,.5)}70%,100%{box-shadow:0 0 0 22px rgba(37,211,102,0),0 16px 34px rgba(0,0,0,.5)}}',
    '}',
    '@media (min-width:1000px){',
    '.pm-chat{display:block;position:absolute;left:calc(50% + 300px);top:50%;width:250px;margin-top:-262px;z-index:5;perspective:900px;text-decoration:none!important;animation:pm-fade .9s 2.4s both}',
    '.pm-chat-in{position:relative;height:500px;border-radius:38px;background:#111;border:8px solid #1f1f1f;box-shadow:0 0 0 1.5px #3a3a3a,0 40px 70px rgba(0,0,0,.65);overflow:hidden;display:flex;flex-direction:column;animation:pm-tiltR 7s ease-in-out infinite;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif}',
    '@keyframes pm-tiltR{0%,100%{transform:rotateY(-16deg) rotate(3deg)}50%{transform:rotateY(-8deg) rotate(1.5deg) translateY(-10px)}}',
    '.pm-chat-notch{position:absolute;left:50%;top:7px;width:70px;height:18px;margin-left:-35px;border-radius:20px;background:#000;z-index:3}',
    '.pm-chat-h{display:flex;align-items:center;gap:8px;padding:34px 12px 10px;background:#1b1b1b;color:#fff;font-size:13px;font-weight:600;border-bottom:1px solid #262626}',
    '.pm-chat-h small{display:block;color:#25D366;font-size:10px;font-weight:500}.pm-chat-bk{font-size:22px;color:#FFD400;line-height:1}',
    '.pm-chat-av{width:26px;height:26px;border-radius:50%;background:#0F0F0F;display:inline-flex;align-items:center;justify-content:center;box-shadow:0 0 0 2px #FFD400;flex:0 0 26px}.pm-chat-av img{height:15px;width:auto}',
    '.pm-chat-b{flex:1;padding:12px 10px;background:radial-gradient(circle at 20% 20%,#1d1d1d,#121212)}',
    '.pm-m{max-width:84%;padding:8px 11px;border-radius:13px;font-size:12.5px;line-height:1.35;margin-bottom:7px;opacity:0}',
    '.pm-me{background:#fff;color:#111;border-bottom-right-radius:4px;margin-left:auto}',
    '.pm-pv{background:#FFD400;color:#0F0F0F;border-bottom-left-radius:4px;font-weight:600}',
    '.pm-mimg{width:150px;padding:4px}.pm-mimg img{display:block;width:100%;height:132px;object-fit:cover;object-position:50% 30%;border-radius:10px}',
    '.pm-m1{animation:pm-s1 14s infinite}.pm-m2{animation:pm-s2 14s infinite}.pm-m3{animation:pm-s3 14s infinite}.pm-m4{animation:pm-s4 14s infinite}',
    '@keyframes pm-s1{0%,3%{opacity:0;transform:translateY(10px)}6%,90%{opacity:1;transform:none}96%,100%{opacity:0}}',
    '@keyframes pm-s2{0%,15%{opacity:0;transform:translateY(10px)}19%,90%{opacity:1;transform:none}96%,100%{opacity:0}}',
    '@keyframes pm-s3{0%,32%{opacity:0;transform:translateY(10px)}36%,90%{opacity:1;transform:none}96%,100%{opacity:0}}',
    '@keyframes pm-s4{0%,52%{opacity:0;transform:translateY(10px)}56%,90%{opacity:1;transform:none}96%,100%{opacity:0}}',
    '.pm-chat-f{display:flex;align-items:center;gap:8px;padding:9px 10px 14px;background:#1b1b1b}',
    '.pm-chat-f span{flex:1;background:#2a2a2a;border-radius:20px;padding:8px 12px;color:#8a8a8a;font-size:12px}',
    '.pm-chat-f i{width:32px;height:32px;border-radius:50%;background:#25D366;color:#0F0F0F;display:flex;align-items:center;justify-content:center}.pm-chat-f svg{width:18px;height:18px}',
    '}',
    '@media (max-width:767px){',
    '.pm-hero{height:730px}.pm-hero-word{top:98px}',
    '.pm-post{top:402px;left:calc(50% + 24px)}.pm-hero-main{top:390px;left:calc(50% + 22px)}.pm-hero::before{top:402px;left:calc(50% + 24px)}',
    '.pm-sty{display:block;position:absolute;width:120px;z-index:5;perspective:700px;animation:pm-fade .9s 2.3s both}',
    '.pm-stL{left:4px;top:430px;z-index:2}.pm-stR{right:6px;top:158px}',
    '.pm-sty-in{position:relative;aspect-ratio:9/16;border-radius:14px;overflow:hidden;background:#1a1a1a;box-shadow:0 20px 40px rgba(0,0,0,.6),0 0 0 1px rgba(255,255,255,.1)}',
    '.pm-stL .pm-sty-in{animation:pm-stl 7s ease-in-out infinite}.pm-stR .pm-sty-in{animation:pm-str 7s ease-in-out infinite}',
    '@keyframes pm-stl{0%,100%{transform:rotateY(16deg) rotate(-5deg)}50%{transform:rotateY(10deg) rotate(-3deg) translateY(-6px)}}',
    '@keyframes pm-str{0%,100%{transform:rotateY(-16deg) rotate(5deg)}50%{transform:rotateY(-10deg) rotate(3deg) translateY(-6px)}}',
    '.pm-sl{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block}',
    '.pm-sl1{animation:pm-sl 8s linear infinite}',
    '@keyframes pm-sl{0%,48%{opacity:0}50%,98%{opacity:1}100%{opacity:0}}',
    '.pm-sty-in:after{content:"";position:absolute;inset:0;background:linear-gradient(to bottom,rgba(0,0,0,.45),transparent 22%);pointer-events:none}',
    '.pm-sty-bars{position:absolute;left:7px;right:7px;top:7px;z-index:3;display:flex;gap:3px}',
    '.pm-sty-bars i{flex:1;height:2px;border-radius:2px;background:rgba(255,255,255,.35);overflow:hidden}.pm-sty-bars u{display:block;height:100%;width:0;background:#fff;animation:pm-b0 8s linear infinite}',
    '.pm-sty-bars i+i u{animation-name:pm-b1}',
    '@keyframes pm-b0{0%{width:0}50%,100%{width:100%}}@keyframes pm-b1{0%,50%{width:0}100%{width:100%}}',
    '.pm-sty-h{position:absolute;left:7px;top:14px;z-index:3;display:flex;align-items:center;gap:4px;color:#fff;font-size:9px;font-weight:600}',
    '.pm-sty-h span{width:18px;height:18px;border-radius:50%;background:#0F0F0F;display:flex;align-items:center;justify-content:center;box-shadow:0 0 0 1.2px #FFD400}.pm-sty-h img{height:10px;width:auto}',
    '}',
    '@media (prefers-reduced-motion:reduce){.pm-chat-in,.pm-sty-in,.pm-wabtn{animation:none!important}.pm-m{opacity:1!important;animation:none!important}}',
    /* ===== Arreglos 19/11 (tarde) ===== */
    /* zoom de las fotos de producto sin romper el centrado de la plantilla */
    '.item-product .product-item-image.img-absolute-centered{transition:scale .7s cubic-bezier(.2,.7,.2,1),opacity .35s ease!important}',
    '.item-product:hover .product-item-image.img-absolute-centered{transform:translateX(-50%)!important;scale:1.05}',
    /* charla de WhatsApp en compus de 1000 a 1199 px: un poco más chica */
    '@media (min-width:1000px) and (max-width:1199px){.pm-chat{left:calc(50% + 280px);transform:scale(.82);transform-origin:0 50%}.pm-wabtn{right:calc(50% + 240px)}}',
    /* celular: una historia arriba a la izquierda y otra abajo a la derecha, las dos detrás del posteo; el short adelante y un poco más arriba */
    '@media (max-width:767px){',
    '.pm-post{left:calc(50% + 14px)}.pm-hero::before{left:calc(50% + 14px)}',
    '.pm-hero-main{top:372px;left:calc(50% + 14px);z-index:4}',
    '.pm-stL{left:4px;right:auto;top:150px;z-index:2}.pm-stR{right:4px;left:auto;top:440px;z-index:2}',
    '.pm-end{padding-bottom:28px}[data-store="home-newsletter"]{margin-top:-28px}',
    '}',
    /* ===== Celular 20/11: logo + PROMISE en contorno + posteo inclinado + short al viento (opción 2) ===== */
    '.pm-wind,.pm-m2bg{display:none}',
    '@media (max-width:767px){',
    '.pm-hero{height:800px!important}',
    '.pm-hero::before{left:10px!important;top:300px!important;width:380px!important;height:380px!important;transform:none!important;background:radial-gradient(circle,rgba(255,212,0,.15) 0,rgba(255,212,0,.05) 40%,transparent 68%)!important}',
    '.pm-hero-word{left:50%!important;top:70px!important;width:310px!important;transform:translateX(-50%)!important;z-index:5!important;opacity:1!important;filter:drop-shadow(0 14px 30px rgba(0,0,0,.7));animation:pm-m2word 1s cubic-bezier(.2,.8,.2,1) both!important}',
    '@keyframes pm-m2word{from{opacity:0;clip-path:inset(100% 0 0 0);transform:translate(-50%,24px)}to{opacity:1;clip-path:inset(0 0 0 0);transform:translateX(-50%)}}',
    '.pm-m2bg{display:block;position:absolute;left:0;top:26px;z-index:1;white-space:nowrap;font-family:"Oswald",sans-serif;font-weight:700;font-size:200px;line-height:1;color:transparent;-webkit-text-stroke:1.3px rgba(237,234,228,.17);pointer-events:none}',
    '.pm-m2bg span{display:inline-block;animation:pm-m2mq 60s linear infinite}.pm-m2b2{top:560px}.pm-m2b2 span{animation-direction:reverse}',
    '@keyframes pm-m2mq{to{transform:translateX(-50%)}}',
    '.pm-hero .pm-post{left:20px!important;top:268px!important;width:238px!important;transform:rotate(-6deg)!important;border-radius:14px;z-index:3;animation:pm-m2post .8s .5s cubic-bezier(.2,.8,.2,1) both!important;box-shadow:0 40px 70px rgba(0,0,0,.7),0 0 0 1px rgba(255,255,255,.06)!important}',
    '@keyframes pm-m2post{from{opacity:0;transform:translateY(24px) rotate(-6deg) scale(.9)}to{opacity:1;transform:rotate(-6deg)}}',
    '.pm-post-h{padding:8px 10px}.pm-post-h b{font-size:12.5px}.pm-post-h small{font-size:10.5px}',
    '.pm-post-a{padding:9px 11px 3px}.pm-post-a svg{width:21px;height:21px}.pm-post-c{font-size:11.5px;padding:2px 11px 11px}',
    '.pm-wind{display:block;position:absolute;width:290px;right:-34px;top:268px;z-index:4;transform:rotate(-7deg);pointer-events:none;animation:pm-m2wind 1s 1s cubic-bezier(.18,.9,.25,1.05) both}',
    '@keyframes pm-m2wind{from{opacity:0;transform:translateX(60px) rotate(4deg) scale(.8)}to{opacity:1;transform:rotate(-7deg)}}',
    '.pm-wind img,.pm-wind canvas{width:100%;height:auto;display:block;filter:drop-shadow(0 26px 24px rgba(0,0,0,.55))}',
    '.pm-wind canvas{position:absolute;inset:0;opacity:0;transition:opacity .4s}.pm-wind.pm-av-on canvas{opacity:1}.pm-wind.pm-av-on img{visibility:hidden}',
    '.pm-hero-cta{bottom:26px!important}',
    '}',
    '@media (max-width:767px) and (prefers-reduced-motion:reduce){.pm-m2bg span,.pm-wind,.pm-hero .pm-post,.pm-hero-word{animation:none!important}}',
    /* ===== Rendimiento 20/11 ===== */
    '.pm-idle,.pm-idle *,.pm-idle *::before,.pm-idle *::after{animation-play-state:paused!important}',
    '@media (min-width:768px){.pm-hero-word{animation-duration:.6s!important}}',
  ].join('\n');

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
      var RENAME = { 'remeras': 'Remeras y camisas', 'bermudas': 'Shorts y bermudas' };
      Array.prototype.slice.call(ul.children).forEach(function (li) {
        var head = li.querySelector(':scope > .nav-item-container > a, :scope > a');
        var sub = li.querySelector(':scope > ul');
        if (!head || !sub) return;
        var name = head.textContent.trim(), key = name.toLowerCase();
        Array.prototype.slice.call(sub.children).forEach(function (c) {
          var a = c.querySelector('a'); if (!a) return;
          var t = a.textContent.trim();
          if (t.toLowerCase() === key && !RENAME[key]) c.parentNode.removeChild(c);
          else if (/^joggin$/i.test(t)) a.textContent = 'Jogging';
        });
        if (RENAME[key]) head.textContent = RENAME[key];
      });
      ul.classList.add('pm-cols');
      dd.classList.add('pm-mega');
      var cta = el('<a class="pm-cta" href="/productos/"><small>Catálogo completo</small><b>Todo en un solo lugar</b><span>Ver productos →</span></a>');
      ul.parentNode.appendChild(cta);
    });
  }

  /* Menú del celular (tres rayitas): categorías con foto, accesos rápidos y contacto */
  function mobileMenu() {
    var m = document.getElementById('nav-hamburger');
    if (!m || m.querySelector('.pm-mm')) return;
    var body = m.querySelector('.nav-body'), prim = m.querySelector('.nav-primary');
    if (!body || !prim) return;
    var hd = m.querySelector('.modal-header');
    if (hd && !hd.querySelector('.pm-mm-logo')) hd.insertBefore(el('<img class="pm-mm-logo" src="' + ASSETS + 'hero/logo_small_white.webp" alt="Promise">'), hd.firstChild);
    var cats = CATS.map(function (c) {
      return '<a class="pm-mm-c" href="' + c[1] + '"><b>' + c[0] + '</b><i>→</i></a>';
    }).join('');
    var box = el('<div class="pm-mm">' +
      '<a class="pm-mm-promo" href="/productos/">20% OFF en efectivo o transferencia · Envío gratis desde $150.000</a>' +
      '<p class="pm-mm-k">Categorías</p><div class="pm-mm-cats">' + cats + '</div>' +
      '<ul class="pm-mm-l">' +
      '<li><a class="pm-mm-kids" href="' + KIDS + '">Promise Kids <span class="pm-new">Nuevo</span> <i>→</i></a></li>' +
      '<li><a href="/productos/?sort_by=created-descending">Nuestras prendas <i>→</i></a></li>' +
      '<li><a class="pm-mm-gc" href="/productos/gift-card/">Gift Cards <i>→</i></a></li>' +
      '<li><a href="/#preguntas">Preguntas frecuentes <i>→</i></a></li>' +
      '<li><a href="/#local">El local <i>→</i></a></li>' +
      '</ul><p class="pm-mm-k pm-mm-all">Catálogo completo</p></div>');
    body.insertBefore(box, prim);
    Array.prototype.forEach.call(prim.querySelectorAll(':scope > ul > li'), function (li) {
      var a = li.querySelector(':scope > a'); if (a && /^inicio$/i.test(a.textContent.trim())) li.style.display = 'none';
    });
    var foot = el('<div class="pm-mm pm-mm-f">' +
      '<a class="pm-mm-wa" href="' + WA + '" target="_blank" rel="noopener">Escribinos por WhatsApp</a>' +
      '<p><b>Alvear 2445, Villa Ballester</b></p>' +
      '<p>Lun a jue 10 a 13 y 16 a 20 · Vie y sáb 10 a 20:30</p>' +
      '<p><a class="pm-mm-ig" href="https://www.instagram.com/promise_vb/" target="_blank" rel="noopener">@promise_vb</a></p></div>');
    prim.parentNode.insertBefore(foot, prim.nextSibling);
    m.addEventListener('click', function (ev) {
      var a = ev.target.closest && ev.target.closest('.pm-mm a[href^="/#"]');
      if (!a) return;
      var onHome = location.pathname === '/' && document.getElementById(a.getAttribute('href').slice(2));
      if (!onHome) return;
      ev.preventDefault();
      var x = m.querySelector('.js-modal-close'); if (x) x.click();
      setTimeout(function () { document.getElementById(a.getAttribute('href').slice(2)).scrollIntoView({ behavior: 'smooth' }); }, 350);
    });
  }

  /* Logo 3D del encabezado: capas recortadas con la forma del logo */
  function headLogo3d() {
    document.querySelectorAll('.head-main .logo-img-container').forEach(function (c) {
      if (c.classList.contains('pm-has3d') || !c.querySelector('.logo-img')) return;
      var h = ''; for (var i = 7; i >= 1; i--) h += '<i style="transform:translateZ(-' + (i * 0.9) + 'px)"></i>';
      var d = el('<span class="pm-l3d" role="img" aria-label="Promise">' + h + '<b></b></span>');
      d.style.setProperty('--pm-lm', 'url(' + ASSETS + 'hero/logo_big_white.webp)');
      var li = c.querySelector('.logo-img'), lh = li && li.offsetHeight;
      if (lh > 12 && lh < 90) d.style.height = lh + 'px';
      var a = c.querySelector('a') || c; a.appendChild(d); c.classList.add('pm-has3d');
    });
  }

  function navLinks() {
    var nav = document.querySelector('.js-nav-desktop-list');
    if (!nav || nav.querySelector('.pm-navx')) return;
    var model = nav.querySelector(':scope > li:not(.item-with-subitems)');
    [['Promise Kids', KIDS, 1], ['Gift Cards', '/productos/gift-card/'], ['Preguntas frecuentes', '/#preguntas'], ['El local', '/#local']].forEach(function (x) {
      var li;
      if (model) {
        li = model.cloneNode(true);
        li.classList.remove('selected', 'active');
        var a = li.querySelector('a'); a.setAttribute('href', x[1]); a.textContent = x[0];
      } else { li = el('<li class="nav-item"><a class="nav-list-link" href="' + x[1] + '">' + x[0] + '</a></li>'); }
      li.classList.add('pm-navx');
      if (x[2]) { li.querySelector('a').textContent = 'Kids'; li.classList.add('pm-nav-kids'); var prod = Array.prototype.find.call(nav.children, function (n) { return n.classList.contains('item-with-subitems'); }); nav.insertBefore(li, prod ? prod.nextSibling : null); return; }
      var contacto = Array.prototype.find.call(nav.children, function (n) { return /^contacto$/i.test(n.textContent.trim()); });
      nav.insertBefore(li, contacto || null); // antes de Contacto
    });
  }

  // "Recién llegado" -> "Lo más vendido": trae los más vendidos con stock y los pone en el mismo carrusel
  /* Carrito: pagar por transferencia via WhatsApp (20% OFF) */
  function transferBtn() {
    var sub = document.getElementById('ajax-cart-submit-div');
    if (!sub || document.getElementById('pm-transfer')) return;
    var box = document.createElement('div'); box.id = 'pm-transfer';
    box.innerHTML = '<a href="#" class="pm-tr-btn">Pagar por transferencia · <b>20% OFF</b></a>' +
      '<p class="pm-tr-note">Te pasamos el pedido por WhatsApp y te respondemos con el total y el alias.</p>';
    sub.parentNode.insertBefore(box, sub.nextSibling);
    box.querySelector('a').addEventListener('click', function (ev) {
      ev.preventDefault();
      var num = function (t) { return parseFloat(String(t || '').replace(/[^0-9,]/g, '').replace(',', '.')) || 0; };
      var fmt = function (n) { return '$' + Math.round(n).toLocaleString('es-AR'); };
      var lines = [], total = 0, giftTot = 0;
      document.querySelectorAll('.js-cart-item').forEach(function (el) {
        var a = el.querySelector('[data-component="name.short-name"]');
        if (!a) return;
        var v = a.querySelector('small'); var name = a.childNodes[0].textContent.trim();
        var q = (el.querySelector('.js-cart-quantity-input') || {}).value || '1';
        var p = num((el.querySelector('.js-cart-item-subtotal') || {}).textContent);
        var gift = /gift card/i.test(name);
        total += p; if (gift) giftTot += p;
        lines.push('• ' + name + (v ? ' ' + v.textContent.trim() : '') + ' x' + q + ' — ' + fmt(p) + (gift ? ' (sin descuento)' : ''));
      });
      if (!lines.length) return;
      var msg = 'Hola Promise! Quiero pagar por transferencia con el 20% OFF:\n' + lines.join('\n') +
        '\n\nTotal: ' + fmt(total) + '\nCon 20% OFF: ' + fmt((total - giftTot) * 0.8 + giftTot) + (giftTot ? ' (las gift cards no tienen descuento)' : '') +
        '\n\n¿Me pasan el alias? (Envío o retiro a coordinar)';
      window.open(WA + '?text=' + encodeURIComponent(msg), '_blank');
    });
  }

  function newsletterText() {
    var n = document.querySelector('[data-store="home-newsletter"]') || document.querySelector('.js-newsletter-home');
    if (!n) return;
    n.querySelectorAll('h1,h2,h3,h4,p,span,div').forEach(function (e) {
      if (e.children.length) return;
      if (/drop/i.test(e.textContent)) e.textContent = 'Todas las semanas entra algo nuevo';
    });
  }

  function featuredTitle() {
    var t = document.querySelector('[data-store="home-products-featured"] h2, [data-store="home-products-featured"] .h3, [data-store="home-products-featured"] .section-title');
    if (t && /semana/i.test(t.textContent)) t.textContent = 'Para tu próximo outfit';
  }

  function masVendido() {
    var s = document.querySelector('[data-store="home-products-new"]');
    if (!s || s.getAttribute('data-pm-mv')) return;
    s.setAttribute('data-pm-mv', '1');
    var h = s.querySelector('.js-products-new-title, h2');
    if (h) {
      h.innerHTML = 'Nuestras <em>prendas</em>'; h.classList.add('pm-np-t');
      var k = el('<div class="pm-kick pm-np-k">Recién colgado</div>'); h.parentNode.insertBefore(k, h);
    }
    s.querySelectorAll('a[href*="/productos"]').forEach(function (a) { if (!a.closest('.js-item-product')) a.href = '/productos/?sort_by=created-descending'; });
    function go() { fetch('/productos/?sort_by=created-descending&results_only=true', { credentials: 'same-origin' }).then(function (r) { return r.text(); }).then(function (t) {
      var d = new DOMParser().parseFromString(t, 'text/html');
      var items = Array.prototype.slice.call(d.querySelectorAll('.js-item-product')).filter(function (i) {
        return !/sin stock/i.test(i.textContent);
      }).slice(0, 8);
      if (items.length < 4) return;
      var box = s.querySelector('.swiper-wrapper') && s.querySelector('.swiper-wrapper').parentElement;
      if (!box) return;
      var row = document.createElement('div');
      row.className = 'row pm-mv-row';
      items.forEach(function (i) { row.appendChild(document.importNode(i, true)); });
      box.parentNode.insertBefore(row, box);
      box.style.display = 'none';
      s.querySelectorAll('.swiper-button-prev,.swiper-button-next,.item-slider-pagination-container').forEach(function (n) { n.style.display = 'none'; });
      if (window.lazySizes && lazySizes.loader) row.querySelectorAll('.lazyload').forEach(function (img) { lazySizes.loader.unveil(img); });
    }).catch(function () {}); }
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (en) { if (en[0].isIntersecting) { io.disconnect(); go(); } }, { rootMargin: '250px 0px' });
      io.observe(s);
    } else go();
  }

  /* ícono de la pestaña y título del inicio */
  function headMeta() {
    if (!document.querySelector('link[rel~="icon"]')) {
      [['icon', 'favicon-64.png', '64x64'], ['icon', 'icon-192.png', '192x192'], ['apple-touch-icon', 'apple-touch-icon.png', '180x180']].forEach(function (x) {
        var l = document.createElement('link'); l.rel = x[0]; l.href = ASSETS + 'icon/' + x[1]; l.sizes = x[2]; l.type = 'image/png'; document.head.appendChild(l);
      });
    }
    if (location.pathname === '/' && /^promise$/i.test(document.title.trim())) document.title = 'Promise | Streetwear en Villa Ballester';
  }

  function pauseOffscreen() {
    if (!('IntersectionObserver' in window)) return;
    var io = window.__pmIdleIO || (window.__pmIdleIO = new IntersectionObserver(function (en) {
      en.forEach(function (e) { e.target.classList.toggle('pm-idle', !e.isIntersecting); });
    }, { rootMargin: '150px 0px' }));
    document.querySelectorAll('.pm-hero, .pm-sec, .pm-wb, [data-store^="home-"], footer').forEach(function (n) {
      if (n.__pmIdle) return; n.__pmIdle = 1; io.observe(n);
    });
  }

  function insertAfter(ref, node) { ref.parentNode.insertBefore(node, ref.nextSibling); return node; }


  // Fondo con grano (cemento) en toda la página
  function grain() {
    if (document.getElementById('pm-grain')) return;
    var g = document.createElement('div'); g.id = 'pm-grain'; g.setAttribute('aria-hidden', 'true');
    document.body.appendChild(g);
  }

  // Bandas de palabras gigantes caladas que se mueven al bajar
  function wordBand(l1, l2) {
    var rep = function (t) { var x = ''; for (var i = 0; i < 6; i++) x += t; return x.replace(/✕/g, '<i>✕</i>'); };
    return el('<section class="pm-wb" aria-hidden="true"><div class="pm-wb-l" data-dir="1">' + rep(l1) + '</div><div class="pm-wb-l" data-dir="-1">' + rep(l2) + '</div></section>');
  }
  function bandScroll() {
    if (window.__pmBand) return; window.__pmBand = true;
    if (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    var ticking = false;
    function upd() {
      ticking = false;
      var vh = window.innerHeight;
      document.querySelectorAll('.pm-wb').forEach(function (b) {
        var r = b.getBoundingClientRect();
        if (r.bottom < -200 || r.top > vh + 200) return;
        var p = (vh - r.top) * 0.35;
        b.querySelectorAll('.pm-wb-l').forEach(function (l) {
          var d = +l.getAttribute('data-dir');
          l.style.transform = 'translate3d(' + (d > 0 ? -p : p - l.scrollWidth / 3) + 'px,0,0)';
        });
      });
    }
    window.addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(upd); } }, { passive: true });
    window.addEventListener('resize', upd, { passive: true });
    upd();
  }


  function init() {
    if (!document.getElementById('pm-style')) {
      var st = document.createElement('style'); st.id = 'pm-style'; st.textContent = CSS.replace(/__NOISE__/g, ASSETS + 'bg/noise.png'); document.head.appendChild(st);
    }
    if (!document.getElementById('pm-style2')) {
      var st2 = document.createElement('style'); st2.id = 'pm-style2'; st2.textContent = CSS2.replace(/__NOISE__/g, ASSETS + 'bg/noise.png'); document.head.appendChild(st2);
    }
    try { headMeta(); } catch (e) {}
    try { siteFixes(); } catch (e) {}
    try { megaMenu(); } catch (e) {}
    try { navLinks(); } catch (e) {}
    try { headLogo3d(); } catch (e) {}
    try { mobileMenu(); } catch (e) {}
    try {
      transferBtn();
      var cartBox = document.querySelector('.js-ajax-cart-panel, #modal-cart, .js-modal-cart, [data-store="cart-panel"]') || document.body;
      var trT = 0; new MutationObserver(function () { if (trT) return; trT = setTimeout(function () { trT = 0; transferBtn(); }, 300); }).observe(cartBox, { childList: true, subtree: true });
    } catch (e) {}
    var home = document.querySelector('[data-store="home-slider"], [data-store="home-products-featured"]');
    if (!home || document.querySelector('.pm-why')) { later(); return; }

    var slider = document.querySelector('[data-store="home-slider"]');
    if (slider) { slider.parentNode.insertBefore(heroSection(), slider); slider.style.display = 'none'; }
    var pmw = document.querySelector('.pm-wind[data-src]');
    if (pmw && !(window.matchMedia && matchMedia('(prefers-reduced-motion:reduce)').matches)) setTimeout(function () { alphaVideo(pmw); }, 1200);
    setTimeout(function () { try { later(); rest(); } catch (e) {} }, 30);
  }
  function later() {
    try { masVendido(); } catch (e) {}
    try { featuredTitle(); } catch (e) {}
    try { newsletterText(); } catch (e) {}
    try { pauseOffscreen(); } catch (e) {}
  }
  function rest() {
    var home = document.querySelector('[data-store="home-slider"], [data-store="home-products-featured"]');
    var oldCats = document.querySelector('[data-store="home-categories-featured"]');
    if (oldCats) { oldCats.parentNode.insertBefore(catsSection(), oldCats); oldCats.style.display = 'none'; }
    var featured = document.querySelector('[data-store="home-products-featured"]');
    var news = document.querySelector('[data-store="home-newsletter"]');
    var anchor = featured || home;
    try { anchor = insertAfter(anchor, kidsSection()); } catch (e) {}
    var a = insertAfter(anchor, tagsSection());
    var b = insertAfter(a, faqSection());
    var gs = b; try { gs = insertAfter(b, giftSection()); } catch (e) {}
    var c = insertAfter(gs, localSection());
    var endNode = endSection();
    if (news && news.parentNode) news.parentNode.insertBefore(endNode, news); else insertAfter(c, endNode);
    setTimeout(function () { try { perf(); } catch (e) {} }, 0);
    try {
      var hero = document.querySelector('.pm-hero'), cats = document.querySelector('.pm-cats'), mv = document.querySelector('[data-store="home-products-new"]');
      if (hero) insertAfter(hero, wordBand('PROMISE ✕ STREETWEAR ✕ VILLA BALLESTER ✕ ', 'VESTITE CON ESTILO ✕ DESDE 2017 ✕ '));
      if (cats) insertAfter(cats, wordBand('CONJUNTOS ✕ BUZOS ✕ ZAPATILLAS ✕ ACCESORIOS ✕ ', 'REMERAS ✕ JEANS ✕ BERMUDAS ✕ CAMPERAS ✕ '));
      var faq = document.getElementById('preguntas');
      if (faq) { var fs = faq.closest('section') || faq; fs.parentNode.insertBefore(wordBand('DESDE 2017 ✕ ALVEAR 2445 ✕ ', 'PROMISE ✕ STREETWEAR ✕ '), fs); }
      bandScroll();
    } catch (e) {}
    reveal(document);
    try { pauseOffscreen(); } catch (e) {}
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
