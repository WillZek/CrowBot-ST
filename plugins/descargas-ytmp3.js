import fetch from 'node-fetch';

let handler = async (m, { conn, args }) => {

if (!args[0]) return m.reply('🍭 Ingresa Un Link De Youtube');

let api = await(await fetch(`https://dark-core-api.vercel.app/api/download/YTMP3?key=dk-vip&url=${args[0]}`)).json();

if (!api?.download) return m.reply('No Se  Encontraron Resultados');

let txt = `「✦」𝗧𝗶𝘁𝘂𝗹𝗼: ${api.title}`;
conn.reply(m.chat, txt, m, rcanal);

conn.sendMessage(m.chat, { audio: { url: api.download }, mimetype: 'audio/mpeg' }, { quoted: m });
 }

handler.help = ['ytmp3'];
handler.tag = ['descargas'];
handler.command = ['ytmp3', 'mp3'];

export default handler;