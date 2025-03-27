import fetch from 'node-fetch';

let handler = async (m, { conn, args }) => {

if (!args[0]) return m.reply(`🍭 Ingresa Un Link De YouTube.`);

m.react('🕒')
let api = await(await fetch(`https://api.neoxr.eu/api/youtube?url=${args[0]}&type=audio&quality=128kbps&apikey=GataDios`)).json();

// if (!api?.result?.dl_url) return m.reply('No Se  Encontraron Resultados');

/* let txt = `「✦」𝗧𝗶𝘁𝘂𝗹𝗼: ${api.result.result.title}`;
conn.reply(m.chat, txt, m, rcanal);
*/

conn.sendMessage(m.chat, { audio: { url: api.data.url }, mimetype: 'audio/mpeg' }, { quoted: m });
m.react(done)
 }

handler.help = ['ytmp3'];
handler.tag = ['descargas'];
handler.command = ['ytmp3', 'mp3'];

export default handler;