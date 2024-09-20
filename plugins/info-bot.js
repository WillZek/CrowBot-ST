import fs from 'fs';
const handler = (m) => m;
handler.all = async function(m) {

const chat = global.db.data.chats[m.chat];
if (chat.isBaneed) return
if (/^bot$/i.test(m.text)) {
conn.reply(m.chat, `🍂 ¡Hola! Soy CrowBot, en que puedo ayudarte hoy?\n\n✰ Usa *.menu* para ver mis comandos.`, m, rcanal, )
}
/*if (/^que|q$/i.test(m.text)) {
conn.reply(m.chat, `*so*`, m, rcanal, )
}*/
if (/^English$/i.test(m.text)) {
conn.reply(m.chat, `*The first one to speak is gay*`, m, rcanal, )
}

if (/^Bot de mierda/i.test(m.text)) {
conn.reply(m.chat, `*He hey hey skibidi, no digas toilet. Eres perfecta*`, m, rcanal, )
}
  
if (/^Corin$/i.test(m.text)) {
conn.reply(m.chat, `*_Hola buscas algun servidor con precios bajos ? Te presento a CorinPLus un servicio hosting confiable y de buena calidad, entre por aqui https://dash.corinplus.com Gracias por utilizar CrowBot-MD_*`, m, rcanal, )
}
if (/^duda$/i.test(m.text)) {
conn.reply(m.chat, `*Hola tienes alguna duda sobre el bot o sobre el hosting enviame mensaje al privado* ☁ Wa.me/50557865603`, m, rcanal, )
}
return !0;
};
export default handler;
