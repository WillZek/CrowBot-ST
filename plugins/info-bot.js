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
conn.reply(m.chat, `*No digas mamadas, Meriyein*`, m, rcanal, )
}

if (/^Bot Perzonalizado Simple/i.test(m.text)) {
conn.reply(m.chat, `*Claro, El Bot Perzonalizado Simple Cuesta 14$ Con Server Incluído y comisión, trae comandos básicos.[🌠]*`, m, rcanal, )
}

if (/^Quiero Un Bot/i.test(m.text)) {
conn.reply(m.chat, `*¡Claro!, Vendemos Bots A Buen Precio Y Accesibles a tus Necesidades [🌠]*
> Más Información 
https://chat.whatsapp.com/KfcT8ReqiJW93g17vSXVpf`, m, rcanal, )
}
  
if (/^Bot de mrd/i.test(m.text)) {
conn.reply(m.chat, `*Ya te dieron De Comer?🥵🍆*`, m, rcanal, )
}

if (/^Vendes Bot/i.test(m.text)) {
conn.reply(m.chat, `*Claro,¡Vendemos Los Mejores Bots!*
Tenemos:
•Bot Perzonalizado Plus o normal 
•Bot Propio
•Bot Para Grupo 
> *Consulta Los Precios [🌠]*`, m, rcanal, )
}

if (/^Conoces a Legendary/i.test(m.text)) { 
conn.reply(m.chat, `*Si Lo conozco, Es Una Zorra caliente 🥵❤️‍🔥*`, m, rcanal, )
}

if (/^Como uno al bot en mi grupo/i.test(m.text)) {
conn.reply(m.chat, `*¡Contacta Al Creador!*
> *wa.me/50557865603*`, m, rcanal, )
}
  
if (/^Bot en decadencia/i.test(m.text)) {
conn.reply(m.chat, `*Calla 🍆🥵*`, m, rcanal, )
}

if (/^Niño Piña/i.test(m.text)) {
conn.reply(m.chat, `*Niño Piña Es Mi Creador, Respeta!*`, m, rcanal, )
}
  
if (/^Crow$/i.test(m.text)) {
conn.reply(m.chat, `*Hola Eres Fan De* *CrowBot o Brawl Stars*
*Entonces Sigue El Canal Oficial!*
> https://whatsapp.com/channel/0029VakfOZfHFxP7rNrUQk2d
 *Gracias por utilizar CrowBot-MD* `, m, rcanal, )
}

if (/^duda$/i.test(m.text)) {
conn.reply(m.chat, `*Hola tienes alguna duda sobre el bot o sobre el hosting enviame mensaje al privado* ☁ Wa.me/50557865603`, m, rcanal, )
}
return !0;
};
export default handler;
