// Aplica el diseño Promise a la plantilla abierta en el editor de mails de Tiendanube.
// Conserva intacta la lógica original (bloque body_content) y cambia solo el diseño alrededor.
window.pmMail = async function (key, base) {
  var RED = function (t, h) { return '<a class="pm-btn" href="' + h + '" target="_blank" style="display:inline-block;background:#D7191F;color:#ffffff;text-decoration:none;font-weight:bold;font-size:13px;letter-spacing:2px;text-transform:uppercase;padding:15px 26px;margin:0 8px 10px 0;text-align:center;">' + t + '</a>'; };
  var GHOST = function (t, h) { return '<a class="pm-btn" href="' + h + '" target="_blank" style="display:inline-block;background:#ffffff;color:#0F0F0F;text-decoration:none;font-weight:bold;font-size:13px;letter-spacing:2px;text-transform:uppercase;padding:13px 24px;border:2px solid #0F0F0F;margin:0 0 10px 0;text-align:center;">' + t + '</a>'; };
  var NOTE = function (label, html) { return '<tr><td class="pm-pad" style="padding:4px 44px 10px 44px;font-family:Arial,Helvetica,sans-serif;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#F6F4F0;border-left:4px solid #D7191F;"><tr><td style="padding:18px 22px;font-size:15px;line-height:23px;color:#0F0F0F;"><p style="margin:0 0 4px 0;font-size:11px;letter-spacing:2px;font-weight:bold;color:#7a756e;text-transform:uppercase;">' + label + '</p><p style="margin:0;">' + html + '</p></td></tr></table></td></tr>'; };
  var P = function (t) { return '<p style="margin:0 0 6px 0;font-size:16px;line-height:24px;">' + t + '</p>'; };
  var WA = 'https://wa.me/541140563485', IG = 'https://www.instagram.com/promise_vb/', SHOP = 'https://promisevb.mitiendanube.com/productos/';

  var CFG = {
    compra: { pre: 'Recibimos tu pedido. Te avisamos apenas se confirme el pago.', kick: 'Pedido #{{order.id}}', t1: '¡Gracias por', t2: 'tu compra!', intro: P('Recibimos tu pedido. Abajo tenés el detalle.'), note: '', btn: GHOST('Consultas por WhatsApp', WA) },
    pago: { pre: 'Tu pago se acreditó. Ya estamos preparando tu pedido.', kick: 'Pedido #{{order.id}}', t1: 'Pago', t2: 'confirmado', intro: P('Ya estamos preparando tu pedido. Te avisamos en cada paso.'), note: '', btn: GHOST('Consultas por WhatsApp', WA) },
    envio: { pre: 'Tu pedido ya salió. Te dejamos el seguimiento.', kick: 'Pedido #{{order.id}}', t1: 'Tu pedido', t2: 'va en camino', intro: P('Ya despachamos tu compra. Abajo tenés los datos del envío.'), note: NOTE('Importante', 'Si el paquete llega <strong>abierto o dañado</strong>, no lo recibas y escribinos por WhatsApp al 11 4056-3485.'), btn: GHOST('Consultas por WhatsApp', WA) },
    entrega: { pre: 'Tu pedido ya fue entregado. ¡A estrenarlo!', kick: 'Pedido #{{order.id}}', t1: 'Ya lo tenés.', t2: '¡A estrenarlo!', intro: P('Gracias por elegir Promise. Esperamos que te quede increíble.'), note: NOTE('Mostranos tu outfit', 'Subí una foto con tu compra y etiquetanos en <strong>@promise_vb</strong>. ¿Algo no te quedó bien? Tenés 10 días para cambiarlo, con la bolsa original.'), btn: RED('Ir a Instagram', IG) + GHOST('Ver lo nuevo', SHOP) },
    cancelacion: { pre: 'Tu pedido fue cancelado.', kick: 'Pedido #{{order.id}}', t1: 'Pedido', t2: 'cancelado', intro: P('Te contamos el detalle abajo. Si tenés dudas, escribinos y lo vemos juntos.'), note: '', btn: RED('Escribinos por WhatsApp', WA) + GHOST('Seguir viendo', SHOP) },
    carrito: { pre: 'Lo que elegiste te sigue esperando.', kick: 'Tu carrito', t1: 'Te guardamos', t2: 'lo que elegiste', intro: P('Dejaste prendas en el carrito. Terminá tu compra antes de que se agoten los talles.'), note: '', btn: GHOST('¿Dudas con el talle? WhatsApp', WA) }
  };
  var c = CFG[key]; if (!c) return 'config desconocida';
  var t = document.querySelector('[name=templateHtml]'); if (!t) return 'no hay editor abierto';
  var v = t.value;
  if (v.indexOf('assets/mail/banner') > -1) return 'ya tiene el diseño Promise';
  var bc = v.indexOf('body_content');
  if (bc < 0) return 'estructura distinta: no toco nada';
  var start = v.indexOf('>', bc) + 1, end = -1, depth = 1, re = /<td[\s>]|<\/td>/gi, m;
  re.lastIndex = start;
  while ((m = re.exec(v))) { if (m[0].charAt(1) === '/') { depth--; if (depth === 0) { end = m.index; break; } } else depth++; }
  if (end < 0) return 'no encontré el cierre: no toco nada';
  var inner = v.slice(start, end);
  inner = inner.replace(/<h1[\s\S]*?<\/h1>/, '');
  inner = inner.replace(/\s(style|class|bgcolor|width|height)="[^"]*"/g, '');
  if (v.indexOf('order.id') < 0) c.kick = c.kick.replace(/ ?#\{\{order\.id\}\}/, '');
  var shell = await (await fetch(base + 'emails/shell.html')).text();
  var out = shell.replace('PM_PREHEADER', c.pre).replace('PM_KICKER', c.kick).replace('PM_TITLE1', c.t1).replace('PM_TITLE2', c.t2)
    .replace('PM_INTRO', c.intro).replace('PM_NOTE', c.note).replace('PM_CONTENT', inner).replace('PM_BUTTONS', c.btn);
  window.__pmOrig = window.__pmOrig || {}; window.__pmOrig[key] = v;
  var set = Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype, 'value').set;
  set.call(t, out + ' ');
  t.dispatchEvent(new Event('input', { bubbles: true }));
  t.focus(); t.setSelectionRange(t.value.length, t.value.length);
  return 'ok ' + key + ' len=' + out.length + ' (antes ' + v.length + ')';
};
