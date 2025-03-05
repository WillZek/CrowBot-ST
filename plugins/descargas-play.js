// prueba, mañana lo termino xd
import fetch from 'node-fetch';

let handler = async (m, { conn, args }) => {

if (!args[0]) return m.reply('🍭 Ingresa Un Link De Youtube');

if (command == 'ytmp3doc' || command == 'mp3doc') {
let api = await(await fetch(`https://dark-core-api.vercel.app/api/download/YTMP3?key=api&url=${args[0]}`)).json();

if (!api?.download) return m.reply('No Se  Encontraron Resultados');

let txt = `「✦」𝗧𝗶𝘁𝘂𝗹𝗼: ${api.title}`;
conn.reply(m.chat, txt, m, rcanal);

await conn.sendMessage(m.chat, { document: { url: api.download }, mimetype: 'audio/mpeg', fileName: `${api.title}.mp3` }, { quoted: m });
 }

if (command == 'ytmp4doc' || command == 'mp4doc') {
let video = await (await fetch(`https://api.neoxr.eu/api/youtube?url=${text}&type=video&quality=480p&apikey=GataDios`)).json();

let link = video.data.url;

if (!link) return m.reply('No Hubo Resultados');

let txtt = `「✦」𝗧𝗶𝘁𝘂𝗹𝗼: ${video.title}`;
conn.reply(m.chat, txtt, m, rcanal);

await conn.sendMessage(m.chat, { document: { url: link }, fileName: `${video.title}.mp4`, caption: `${wm}`, mimetype: 'video/mp4' }, { quoted: m })    
   }
}

handler.help = ['ytmp3doc'];
handler.tag = ['descargas'];
handler.command = ['ytmp3doc', 'mp3doc', 'ytmp4doc', 'mp4doc'];

export default handler;