/*
- By WillZek 
- https://github.com/WillZek
- 🌃 Moon Force Team
- https://whatsapp.com/channel/0029Vb4Dnh611ulGUbu7Xg1q
*/

// SPOTIFY - DOWNLOADER 🌟

import fetch from 'node-fetch';

let MF = async (m, { conn, args, command, usedPrefix }) => {

if (!args[0]) return m.reply(`🌙 INGRESE UN Link De Spotify\n> *Ejemplo:* ${usedPrefix + command} https://open.spotify.com/track/0jH15Y9z2EpwTWRQI11xbj`);

let api = await (await fetch(`https://archive-ui.tanakadomp.biz.id/download/spotify?url=${args[0]}`)).json();

let force = api.result.data;
let imagen = force.image;

let moon = `\`𝚂𝙿𝙾𝚃𝙸𝙵𝚈 𝑋 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰\`.\n\n`
moon += `☪︎ *Título:* ${force.title}\n`
moon += `☪︎ *Artista:* ${force.artis}\n`
moon += `☪︎ *Duración:* ${force.durasi}\n`
moon += `───── ･ ｡ﾟ☆: *.☽ .* :☆ﾟ. ─────`;

conn.sendFile(m.chat, imagen, 'MoonForce.jpg', moon, m, null);

conn.sendMessage(m.chat, { audio: { url: force.download }, mimetype: 'audio/mpeg' }, { quoted: m });
}

MF.command = ['spotifydl', 'spdl'];

export default MF;