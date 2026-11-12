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
    /* PORTADA ANIMADA (hero) */
    '.pm-hero{position:relative;height:min(720px,max(580px,calc(100vh - 190px)));background:#EDEAE4;overflow:hidden;isolation:isolate}',
    '.pm-hero *{box-sizing:border-box}',
    '.pm-hero-word{position:absolute;left:50%;top:50%;width:78%;max-width:1200px;transform:translate(-50%,-50%);z-index:1;animation:pm-wordin 1.1s cubic-bezier(.2,.8,.2,1) both}',
    '.pm-hero-word img{width:100%;height:auto;display:block}',
    '.pm-post{position:absolute;left:50%;top:50%;width:300px;transform:translate(-72%,-52%);background:#fff;border-radius:14px;box-shadow:0 30px 60px rgba(0,0,0,.18),0 2px 6px rgba(0,0,0,.08);z-index:3;overflow:hidden;color:#111;text-decoration:none!important;display:block;animation:pm-postin .8s .55s cubic-bezier(.2,.8,.2,1) both;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif}',
    '.pm-post-h{display:flex;align-items:center;gap:9px;padding:9px 11px}',
    '.pm-post-av{width:30px;height:30px;border-radius:50%;background:#0F0F0F;display:flex;align-items:center;justify-content:center;box-shadow:0 0 0 2px #fff,0 0 0 3.5px #D7191F;flex:0 0 30px}',
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
    '.pm-hs img{width:100%;height:auto;display:block;filter:grayscale(1) contrast(1.25) brightness(.62) drop-shadow(0 0 1px #D7191F) drop-shadow(0 0 16px rgba(215,25,31,.38))}',
    '.pm-shine{position:absolute;inset:0;background:linear-gradient(105deg,transparent 38%,rgba(255,255,255,.65) 50%,transparent 62%);background-size:260% 100%;-webkit-mask-size:contain;mask-size:contain;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-position:center;mask-position:center;animation:pm-shim 5s ease-in-out infinite;pointer-events:none;mix-blend-mode:screen}',
    '.pm-hs.pm-far{width:112px}.pm-hs.pm-far img{filter:grayscale(1) contrast(1.1) brightness(.75) blur(3.5px);opacity:.75}.pm-hs.pm-far .pm-shine{display:none}',
    '.pm-hs.s1{top:12%;left:8%;animation-delay:2.3s}.pm-hs.s1 .pm-hs-in,.pm-hs.s1 .pm-shine{animation-delay:-1s}',
    '.pm-hs.s2{top:13%;right:9%;animation-delay:2.5s}.pm-hs.s2 .pm-hs-in,.pm-hs.s2 .pm-shine{animation-delay:-3s}',
    '.pm-hs.s3{bottom:15%;right:8%;animation-delay:2.7s}.pm-hs.s3 .pm-hs-in,.pm-hs.s3 .pm-shine{animation-delay:-5s}',
    '.pm-hero-logo{position:absolute;left:7%;bottom:16%;width:140px;z-index:2;animation:pm-fade .9s 2.9s both}',
    '.pm-hero-logo img{width:100%;height:auto;display:block}',
    '.pm-hero-cta{position:absolute;left:0;right:0;margin:0 auto;width:max-content;bottom:22px;z-index:5;display:inline-flex;align-items:center;gap:10px;background:#0F0F0F;color:#fff!important;padding:14px 26px;border-radius:999px;font-size:12px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;text-decoration:none!important;white-space:nowrap;animation:pm-fade .7s 3s both;transition:background .2s}',
    '.pm-hero-cta:hover{background:#D7191F}',
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
    '.pm-cat:hover{border-color:#D7191F;background:radial-gradient(circle at 50% 42%,#3a1416 0,#161616 66%)}',
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
    '.pm-cat .pm-lbl i{font-style:normal;width:42px;height:42px;display:flex;align-items:center;justify-content:center;background:#D7191F;color:#fff;font-size:20px;transition:transform .3s}',
    '.pm-cat:hover .pm-lbl i{transform:translateX(4px) rotate(-45deg)}',
    '@keyframes pm-float{0%,100%{transform:translateY(0) rotate(-2deg)}50%{transform:translateY(-14px) rotate(2deg)}}',
    /* MENU PRODUCTOS (compu) */
    '@media (min-width:768px){',
    '.pm-mega.desktop-dropdown{background:#141414!important;border-top:2px solid #D7191F;border-bottom:1px solid #2a2a2a;box-shadow:0 30px 60px rgba(0,0,0,.55)}',
    '.pm-mega>.container{max-width:1240px;padding:34px 30px 38px;display:flex;gap:40px;align-items:stretch}',
    '.pm-mega .pm-cols{flex:1;display:grid!important;grid-template-columns:repeat(4,minmax(0,1fr));gap:30px 34px;margin:0;padding:0;width:auto!important;columns:auto!important}',
    '.pm-mega .pm-cols>li{margin:0!important;padding:0!important;width:auto!important;break-inside:avoid}',
    '.pm-mega .pm-cols>li>a,.pm-mega .pm-cols>li>.nav-item-container>a{display:inline-block;font-family:"Oswald",sans-serif!important;font-size:17px!important;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:#EDEAE4!important;padding:0 0 8px!important;margin-bottom:10px;border-bottom:2px solid #D7191F}',
    '.pm-mega .pm-cols>li>ul{display:block!important;position:static!important;margin:0!important;padding:0!important;columns:auto!important}',
    '.pm-mega .pm-cols>li>ul>li{margin:0!important;padding:0!important}',
    '.pm-mega .pm-cols>li>ul a{display:block;font-size:13px!important;font-weight:500;letter-spacing:.04em;text-transform:none!important;color:#A8A39B!important;padding:5px 0!important;transition:color .2s,transform .2s}',
    '.pm-mega .pm-cols a:before,.pm-mega .pm-cols a:after{content:none!important;display:none!important}',
    '.pm-mega .pm-cols>li>ul a:hover{color:#fff!important;transform:translateX(4px)}',
    '.pm-mega .pm-cols>li>a:hover,.pm-mega .pm-cols>li>.nav-item-container>a:hover{color:#FF4A4A!important}',
    '.pm-mega .pm-cta{flex:0 0 250px;display:flex;flex-direction:column;justify-content:space-between;background:#D7191F;color:#0F0F0F;padding:24px;text-decoration:none!important;transition:background .2s}',
    '.pm-mega .pm-cta:hover{background:#ec2a30}',
    '.pm-mega .pm-cta small{font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase}',
    '.pm-mega .pm-cta b{font-family:"Oswald",sans-serif;font-size:34px;line-height:1;text-transform:uppercase;color:#fff}',
    '.pm-mega .pm-cta span{font-size:12px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:#0F0F0F}',
    '.head-main .head-logo-row{margin:10px auto 2px!important}',
    '.nav-desktop-list>li>.nav-item-container>a,.nav-desktop-list>li>a{padding-top:10px!important;padding-bottom:16px!important;position:relative}',
    '.nav-desktop-list>li>.nav-item-container>a:after,.nav-desktop-list>li>a:after{content:"";position:absolute;left:50%;right:50%;bottom:8px;height:2px;background:#D7191F;transition:left .25s,right .25s}',
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
      ['<span>PROBADORES</span>', 'En el local', 'Venís, te lo probás y te lo llevás puesto.', 'ALVEAR 2445'],
      ['STOCK <span>REAL</span>', 'Lo que ves, está', 'Todo lo de la web lo tenemos en el local. Y adentro hay más: perfumes, bolsos y accesorios.', 'EN EL LOCAL'],
      ['<span>10</span> DÍAS', 'Para cambiar', '¿Le erraste al talle? Lo cambiás dentro de los 10 días, con la bolsa original.', 'SIN DRAMA']
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
      ['¿Cómo sé qué talle soy?', 'Lo mejor es venir a probártelo: el local tiene probadores. Si comprás online, revisá las medidas de cada prenda en la <a href="#" class="pm-open-talles">guía de talles</a>. Si tenés dudas, te ayudamos por WhatsApp.'],
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
      '<p class="pm-lead pm-rv">Lo que viste es una parte. El catálogo entero está a un clic, con todas las prendas que tenemos en el local.</p>' +
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
    texto: 'Primavera26\u2019 Conjunto Street 🌊 Ideal para este clima. Desde S a XXL'
  };

  function heroSection() {
    var A = ASSETS + 'hero/';
    function small(cls, file, alt) {
      return '<div class="pm-hs ' + cls + '" aria-hidden="true"><div class="pm-hs-in"><img src="' + A + file + '" alt="" loading="eager">' +
        '<span class="pm-shine" style="-webkit-mask-image:url(' + A + file + ');mask-image:url(' + A + file + ')"></span></div></div>';
    }
    var heart = '<svg class="pm-heart" viewBox="0 0 24 24"><path fill="#D7191F" d="M12 21s-7.5-4.6-9.6-9.2C.9 8.4 3 4.5 6.7 4.5c2.1 0 3.6 1.2 4.3 2.4.7-1.2 2.2-2.4 4.3-2.4 3.7 0 5.8 3.9 4.3 7.3C19.5 16.4 12 21 12 21z"/></svg>';
    var st = 'fill="none" stroke="#111" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"';
    var com = '<svg viewBox="0 0 24 24"><path ' + st + ' d="M20.6 16.2A9 9 0 1 0 17 20l3.7 1-1-3.7z"/></svg>';
    var snd = '<svg viewBox="0 0 24 24"><path ' + st + ' d="M21.5 3 10 13.5M21.5 3l-7 18-4.5-7.5L2.5 9z"/></svg>';
    var bm = '<svg class="pm-bm" viewBox="0 0 24 24"><path ' + st + ' d="M19 21l-7-5-7 5V3h14z"/></svg>';
    return el('<section class="pm-hero" aria-label="Conjunto Street, nuevo en Promise">' +
      '<div class="pm-hero-word" aria-hidden="true"><img src="' + A + 'logo_red.webp" alt="" fetchpriority="high"></div>' +
      small('s1 pm-far', 'campera.webp') + small('s2 pm-far', 'camo.webp') + small('s3 pm-far', 'endgame.webp') +
      '<div class="pm-hero-logo" aria-hidden="true"><img src="' + A + 'logo_black.webp" alt=""></div>' +
      '<a class="pm-post" href="' + HERO.producto + '">' +
        '<div class="pm-post-h"><span class="pm-post-av"><img src="' + A + 'mano.webp" alt=""></span><span><b>' + HERO.usuario + '</b><small>' + HERO.lugar + '</small></span><i>···</i></div>' +
        '<div class="pm-post-img"><img src="' + A + 'post.webp" alt="Conjunto Street negro con remera blanca en el local de Promise" fetchpriority="high"></div>' +
        '<div class="pm-post-a">' + heart + com + snd + bm + '</div>' +
        '<div class="pm-post-c"><b>' + HERO.usuario + '</b> ' + HERO.texto + '</div>' +
      '</a>' +
      '<div class="pm-hero-main" aria-hidden="true"><img src="' + A + 'short-negro.webp" alt=""></div>' +
      '<a class="pm-hero-cta" href="' + HERO.producto + '">' + HERO.cta + ' <span aria-hidden="true">→</span></a>' +
      '</section>');
  }

  function catsSection() {
    var tiles = CATS.map(function (c, i) {
      var media = c[3] === 'video'
        ? '<video src="' + c[2] + '"' + (c[4] ? ' poster="' + c[4] + '"' : '') + ' autoplay muted loop playsinline preload="auto" aria-label="' + c[0] + '"></video>'
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
  var TALLES = [
    { id: 'remeras', t: 'Remeras oversize', c: ['Ancho', 'Largo'], r: [['S', 54, 70], ['M', 56, 71], ['L', 58, 73], ['XL', 59, 75], ['XXL', 61, 76]] },
    { id: 'slim', t: 'Remeras slim fit', c: ['Ancho', 'Largo'], r: [['S', 43, 65], ['M', 45, 67], ['L', 47, 69], ['XL', 49, 71], ['XXL', 51, 73]] },
    { id: 'jeans', t: 'Jeans baggy', c: ['Cintura', 'Largo'], r: [['38', 37, 97], ['40', '40,5', '100,5'], ['42', 43, 101], ['44', 45, 102], ['46', 47, '102,5']] },
    { id: 'bermudas', t: 'Bermudas', c: ['Cintura', 'Largo'], r: [['38', 39, 63], ['40', '40,5', 63], ['42', 41, 65], ['44', 43, 68], ['46', 44, 66]] },
    { id: 'sastrero', t: 'Pantalón sastrero', c: ['Cintura', 'Largo'], r: [['S', 36, 103], ['M', 41, 105], ['L', 43, 107], ['XL', 45, 108], ['XXL', 48, 109]] },
    { id: 'linop', t: 'Pantalón de lino', c: ['Cintura', 'Largo'], r: [['M', 34, 99], ['L', 34, 101], ['XL', 34, 103], ['XXL', 35, 105]] },
    { id: 'mare', t: 'Camisa Mare', c: ['Ancho', 'Largo'], r: [['S', 48, 68], ['M', 50, 71], ['L', 51, 73], ['XL', 53, 74]] },
    { id: 'camberlin', t: 'Camisa Berlín', c: ['Ancho', 'Largo'], r: [['S', 58, 65], ['M', 59, 67], ['L', 61, 69], ['XL', 65, 75]] },
    { id: 'waffle', t: 'Conjuntos Waffle / Hawái', c: ['Remera ancho', 'Remera largo', 'Short cintura', 'Short largo'], r: [['S', 49, 69, 34, 48], ['M', 54, 72, 34, '49-50'], ['L', 56, '74,5', 35, 50], ['XL', 57, 77, 35, 51], ['XXL', 60, '78,5', 37, 52]] },
    { id: 'berlin', t: 'Conjunto Berlín', c: ['Camisa ancho', 'Camisa largo', 'Short cintura', 'Short largo'], r: [['S', 58, 65, 30, 41], ['M', 59, 67, 32, 42], ['L', 61, 69, 36, 43], ['XL', 65, 75, 36, 45]] },
    { id: 'lino', t: 'Conjuntos de lino', c: ['Camisa ancho', 'Camisa largo', 'Short cintura', 'Short largo'], r: [['S', 53, 72, 33, '42,5'], ['M', 56, '73,5', 35, 43], ['L', 58, 79, 36, 46], ['XL', '60,5', '80,5', 37, '48,5']] },
    { id: 'kjeans', t: 'Kids · Jeans baggy', c: ['Cintura', 'Cadera', 'Largo'], r: [['12', '31,5', 39, '78,5'], ['14', 33, 42, '85,5'], ['16', '36,5', '43,5', 88], ['18', 38, '45,5', 93]] },
    { id: 'kbermudas', t: 'Kids · Bermudas baggy', c: ['Cintura', 'Cadera', 'Largo'], r: [['12', '33,5', 40, '52,5'], ['14', 38, 44, '54,5'], ['16', '39,5', 45, 57], ['18', '40,5', '46,5', '59,5']] },
    { id: 'kshort', t: 'Kids · Shorts baggy', c: ['Cintura', 'Cadera', 'Largo'], r: [['12', '25,5', 44, 51], ['14', 27, 45, '52,5'], ['16', 28, '47,5', 56], ['18', '28,5', '48,5', '57,5']] },
    { id: 'kremover', t: 'Kids · Remeras over', c: ['Ancho', 'Largo'], r: [['12', '47,5', 59], ['14', 49, '62,5'], ['16', '50,5', 66], ['18', 53, 69]] },
    { id: 'kboxy', t: 'Kids · Remeras boxy', c: ['Ancho', 'Largo'], r: [['12', 46, 51], ['14', 48, 52], ['16', 52, 54], ['18', '55,5', '55,5']] },
    { id: 'kcamisas', t: 'Kids · Camisas', c: ['Ancho', 'Largo'], r: [['12', '46,5', 62], ['14', 49, 65], ['16', 52, 68], ['18', 54, 71]] },
    { id: 'kconj', t: 'Kids · Conjuntos', c: ['Camisa ancho', 'Camisa largo', 'Short cintura', 'Short cadera', 'Short largo'], r: [['12', '49,5', '59,5', '25,5', 44, 42], ['14', 51, 61, 26, 46, 44], ['16', '52,5', 65, 27, 46, 45], ['18', '54,5', '—', '—', '—', '—']] }
  ];

  function guessTalle() {
    var n = ((document.querySelector('.js-product-name') || {}).textContent || '').toLowerCase();
    var crumbs = ((document.querySelector('.breadcrumbs') || {}).textContent || '').toLowerCase();
    var kids = /kids/.test(crumbs);
    var rules = kids ? [[/jean/, 'kjeans'], [/bermuda/, 'kbermudas'], [/short/, 'kshort'], [/camisa/, 'kcamisas'], [/boxy/, 'kboxy'], [/conjunto/, 'kconj'], [/remera/, 'kremover']]
      : [[/berl/, /conjunto/.test(n) ? 'berlin' : 'camberlin'], [/waffle|haw/, 'waffle'], [/sastrer/, 'sastrero'], [/lino/, /pantal/.test(n) ? 'linop' : 'lino'], [/mare/, 'mare'], [/slim/, 'slim'],
        [/jean/, 'jeans'], [/bermuda|short/, 'bermudas'], [/remera/, 'remeras']];
    for (var i = 0; i < rules.length; i++) if (rules[i][0].test(n)) return rules[i][1];
    return kids ? 'kjeans' : 'remeras';
  }

  function tallesModal(sel) {
    var m = document.getElementById('pm-talles');
    if (!m) {
      var opts = TALLES.map(function (g) { return '<option value="' + g.id + '">' + g.t + '</option>'; }).join('');
      m = el('<div id="pm-talles" class="pm-tm" role="dialog" aria-modal="true" aria-labelledby="pm-tm-t"><div class="pm-tm-box">' +
        '<button type="button" class="pm-tm-x" aria-label="Cerrar">✕</button>' +
        '<div class="pm-kick">Guía de talles</div><h3 id="pm-tm-t" class="pm-h">Medidas <em>en cm</em></h3>' +
        '<label class="pm-tm-l">Prenda <select class="pm-tm-s">' + opts + '</select></label>' +
        '<div class="pm-tm-t"></div>' +
        '<p class="pm-tm-n">Medidas tomadas con la prenda apoyada sobre una superficie plana, de un solo lado. Pueden variar 1 o 2 cm. ¿Dudas? <a href="' + WA + '" target="_blank" rel="noopener">Escribinos por WhatsApp</a> o vení a probártelo al local.</p>' +
        '</div></div>');
      document.body.appendChild(m);
      var s = m.querySelector('.pm-tm-s');
      var draw = function () {
        var g = TALLES.filter(function (x) { return x.id === s.value; })[0];
        m.querySelector('.pm-tm-t').innerHTML = '<table><thead><tr><th>Talle</th>' + g.c.map(function (c) { return '<th>' + c + '</th>'; }).join('') + '</tr></thead><tbody>' +
          g.r.map(function (r) { return '<tr>' + r.map(function (v, i) { return i ? '<td>' + v + '</td>' : '<th>' + v + '</th>'; }).join('') + '</tr>'; }).join('') + '</tbody></table>';
      };
      s.addEventListener('change', draw);
      var close = function () { m.classList.remove('pm-tm-on'); document.documentElement.style.overflow = ''; };
      m.querySelector('.pm-tm-x').addEventListener('click', close);
      m.addEventListener('click', function (e) { if (e.target === m) close(); });
      document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
      m._draw = draw;
    }
    m.querySelector('.pm-tm-s').value = sel || 'remeras';
    m._draw();
    m.classList.add('pm-tm-on');
    document.documentElement.style.overflow = 'hidden';
  }
  window.pmTalles = tallesModal;

  function siteFixes() {
    // Guia de talles: links
    document.addEventListener('click', function (e) {
      var a = e.target.closest && e.target.closest('.pm-open-talles');
      if (a) { e.preventDefault(); tallesModal(a.getAttribute('data-t') || (document.querySelector('#single-product') ? guessTalle() : 'remeras')); }
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
    /* 20%: sin cuadrado rojo en las fotos, texto sutil debajo del precio */
    '.item-product .item-image::after{content:none!important;display:none!important}',
    '.js-item-product .item-installments::after{content:"20% OFF en efectivo o transferencia";display:block;margin-top:3px;color:#FF4A4A;font-size:11px;font-weight:600;letter-spacing:.02em}',
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
    '.pm-talles-link:hover{color:#FF4A4A!important}',
    '.pm-faq .pm-a a{color:#FF4A4A;text-decoration:underline}',
    /* Modal talles */
    '.pm-tm{position:fixed;inset:0;z-index:100000;background:rgba(0,0,0,.72);display:none;align-items:center;justify-content:center;padding:16px}',
    '.pm-tm.pm-tm-on{display:flex}',
    '.pm-tm-box{position:relative;background:#141414;border:1px solid #2a2a2a;border-top:3px solid #D7191F;width:100%;max-width:560px;max-height:90vh;overflow:auto;padding:28px 26px 22px;color:#EDEAE4}',
    '.pm-tm-box .pm-h{font-size:34px;margin-bottom:16px}',
    '.pm-tm-x{position:absolute;top:10px;right:12px;background:none;border:0;color:#EDEAE4;font-size:20px;cursor:pointer;padding:6px}',
    '.pm-tm-l{display:flex;align-items:center;gap:10px;font-size:12px;letter-spacing:.12em;text-transform:uppercase;font-weight:700;color:#A8A39B;margin-bottom:14px}',
    '.pm-tm-s{flex:1;background:#0F0F0F;color:#EDEAE4;border:1px solid #3a3a3a;padding:10px 12px;font-size:14px;letter-spacing:0;text-transform:none}',
    '.pm-tm-t table{width:100%;border-collapse:collapse;font-size:14px}',
    '.pm-tm-t th,.pm-tm-t td{border-bottom:1px solid #2a2a2a;padding:10px 8px;text-align:center}',
    '.pm-tm-t thead th{background:#D7191F;color:#fff;font-size:11px;letter-spacing:.08em;text-transform:uppercase}',
    '.pm-tm-t tbody th{color:#fff;font-family:"Oswald",sans-serif;font-size:16px}',
    '.pm-tm-n{font-size:12px;color:#A8A39B;line-height:1.5;margin:14px 0 0}.pm-tm-n a{color:#FF4A4A}',
    /* Pie de pagina */
    'footer .contact-link{display:inline-flex;flex-direction:column;align-items:inherit;gap:2px}',
    '.pm-ci{display:block;font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:#FF4A4A;font-weight:700}',
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
    '.pm-tm-box{padding:24px 16px 18px}.pm-tm-t table{font-size:13px}.pm-tm-t th,.pm-tm-t td{padding:9px 4px}',
    '}'
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
      var contacto = Array.prototype.find.call(nav.children, function (n) { return /^contacto$/i.test(n.textContent.trim()); });
      nav.insertBefore(li, contacto || null); // antes de Contacto
    });
  }

  function insertAfter(ref, node) { ref.parentNode.insertBefore(node, ref.nextSibling); return node; }

  function init() {
    if (!document.getElementById('pm-style')) {
      var st = document.createElement('style'); st.id = 'pm-style'; st.textContent = CSS; document.head.appendChild(st);
    }
    if (!document.getElementById('pm-style2')) {
      var st2 = document.createElement('style'); st2.id = 'pm-style2'; st2.textContent = CSS2; document.head.appendChild(st2);
    }
    try { siteFixes(); } catch (e) {}
    try { megaMenu(); } catch (e) {}
    try { navLinks(); } catch (e) {}
    var home = document.querySelector('[data-store="home-slider"], [data-store="home-products-featured"]');
    if (!home || document.querySelector('.pm-why')) return;

    var slider = document.querySelector('[data-store="home-slider"]');
    if (slider) { slider.parentNode.insertBefore(heroSection(), slider); slider.style.display = 'none'; }
    var oldCats = document.querySelector('[data-store="home-categories-featured"]');
    if (oldCats) { oldCats.parentNode.insertBefore(catsSection(), oldCats); oldCats.style.display = 'none'; }
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
