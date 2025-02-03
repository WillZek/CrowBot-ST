// ❀ Código By JTxs

import fetch from 'node-fetch'

let handler = async (m, { conn, command, text, usedPrefix }) => {

if (!text) return conn.reply(m.chat, '❀ Ingresa un link de Pornhub Para Descargar Su Video 🍭', m)
try {
let api = `https://www.dark-yasiya-api.site/download/phub?url=${text}`
let res = await fetch(api);
let json = await res.json()
let resu = json.result.format[0];

let { video_title, video_uploader } = json.result
let { resolution, } = json.result.format[1]

let url = resu.download_url;

m.react('🕑');
await conn.sendMessage(m.chat, { video: { url: url }, caption: video_title }, { quoted: m });
m.react('✅');

} catch (error) {
m.reply(`Error: ${error.message}`);
console.error(error)
}}

handler.command = ['pornhubdl', 'phdl'];
handler.tag = ['descargas'];
handler.help = ['pornohubdl'];
handler.estrellas = 9;

export default handler;