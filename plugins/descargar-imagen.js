/* Código Hecho Por WillZek 
- https://github.com/WillZek 
- https://whatsapp.com/channel/0029Vb1AFK6HbFV9kaB3b13W
*/

import fetch from 'node-fetch';

let handler = async(m, { conn, text, usedPrefix, command }) => {
  if (!text) return m.reply('🎩 Ingresa Un Texto Para Buscar Una Imagen En Google');

try {
let api = `https://delirius-apiofc.vercel.app/search/gimage?query=${text}`;
let response = await fetch(api);
let json = await response.json();
let data = json.data[0];

let txt = `*Resultado De:* ${text}`;
let img = data.url;

conn.sendMessage(m.chat, { image: { url: img }, caption: txt }, { quoted: fkontak });

} catch (e) {
console.error(e);
m.reply(`*Error:* ${e.message}`);
m.react('✖️');
 }
};

handler.command = ['testgoogle', 'tgo'];

export default handler;