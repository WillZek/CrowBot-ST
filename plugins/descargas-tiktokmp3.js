/* Tiktok MP3 By WillZek 
- Free Codes Titan 
- https://whatsapp.com/channel/0029ValMlRS6buMFL9d0iQ0S
*/

// [💥] 𝗧𝗜𝗞𝗧𝗢𝗞 𝗠𝗣3 - 𝗗𝗟

import fetch from 'node-fetch';

let handler = async(m, { conn, args, usedPrefix, command }) => {

if (!args[0]) return m.reply(`🎩 Ingrese Una Url De Tiktok\n*Ejemplo:* ${usedPrefix + command} https://vm.tiktok.com/ZMh3KL31o/`);

try {
let api = `https://eliasar-yt-api.vercel.app/api/search/tiktok?query=${args[0]}`;
let response = await fetch(api);
let json = await response.json();
let res = json.results;

m.react('🕑');
let ttt = `*Autor:* ${res.author}\n*Título:* ${res.title}`;

let aud = res.audio;
let img = 'https://files.catbox.moe/51xcx4.jpg';

await conn.sendFile(m.chat, img, 'thumbnail.jpg', ttt, m, null, rcanal);

conn.sendMessage(m.chat, { audio: { url: aud }, mimetype: 'audio/mpeg' }, { quoted: m });
m.react('✅');

} catch (e) {
m.reply(`Error: ${e.message}`);
m.react('✖️');
 }
}

handler.command = ['tiktokmp3', 'ttmp3'];

export default handler;