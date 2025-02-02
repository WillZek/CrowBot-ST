/* Tiktok Search By WillZek 
- https://github.com/WillZek 
*/

// 【🔎】𝗧𝗜𝗞𝗧𝗢𝗞 𝗦𝗘𝗔𝗥𝗖𝗛

import fetch from 'node-fetch';

let handler = async(m, { conn, text, usedPrefix, command }) => {

if (!text) return m.reply(`🍭 Ingrese Un Texto Para Buscarlo En Tiktok\n> *Ejemplo:* ${usedPrefix + command} Crow Edits`);

try {
let api = `https://delirius-apiofc.vercel.app/search/tiktoksearch?query=${text}`;

let response = await fetch(api);
let json = await response.json();
let meta = json.meta[0];

m.react('🕑');
let txt = `✧ *Titulo:* ${meta.title}\n✧ *Likes:* ${meta.like}\n✧ *Comentarios:* ${meta.coment}\n✧ *Compartidas:* ${meta.share}\n✧ *Link:* ${meta.url}`;

let vid = meta.hd;

m.react('✅');
conn.sendMessage(m.chat, { video: { url: vid }, caption: txt }, { quoted: fkontak });

} catch (e) {
m.reply(`Error: ${e.message}`);
m.react('✖️');
 }
};

handler.command = ['tiktoksearch', 'ttsearch'];

export default handler;