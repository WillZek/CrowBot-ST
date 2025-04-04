// By WillZek >> https://github.com/WillZek

import fetch from 'node-fetch';
import fg from 'senna-fg';

let handler = async(m, { conn, usedPrefix, command, text }) => {

if (!text) return m.reply(`🍭 Ingresa Un Texto Para Buscar En Youtube\n> *Ejemplo:* ${usedPrefix + command} crow edits`);

try {
let api = await (await fetch(`https://delirius-apiofc.vercel.app/search/ytsearch?q=${text}`)).json();

let results = api.data[0];

let txt = `✨ *Título:* ${results.title}\n⌛ *Duración:* ${results.duration}\n📎 *Link:* ${results.url}\n📆 *Publicado:* ${results.publishedAt}`;

let img = results.image;

conn.sendMessage(m.chat, { image: { url: img }, caption: txt }, { quoted: m });

/* let api2 = await(await fetch(`https://api.neoxr.eu/api/youtube?url=${results.url}&type=audio&quality=128kbps&apikey=GataDios`)).json();

if (!api2?.data.url) return m.reply('No Se  Encontraron Resultados');
*/

let api2 = await(await fetch(`https://api.vreden.my.id/api/ytmp3?url=${results.url}`)).json();

conn.sendMessage(m.chat, { audio: { url: api2.result.download.url }, mimetype: 'audio/mpeg' }, { quoted: m });

} catch (e) {
m.reply(`*No Encontramos Resultados Para Tu Búsqueda*`);
m.react('✖️');
  }
}

handler.command = ['play', 'paudio'];

export default handler