import fetch from 'node-fetch';
import yts from 'yt-search';

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) return conn.reply(m.chat, `💛 Ingresa un link de YouTube válido\n> Ejemplo https://youtu.be/P4LfHsUnNL8?si=ahDKJ5h0cW-EB9C9`, m, rcanal);

  await m.react('🕓');

  try {
  
  const isVideo = /vid|2|mp4|v$/.test(command);
  const search = await yts(text);

  if (!search.all || search.all.length === 0) {
    throw "No se encontraron resultados para tu búsqueda.";
  }

  const videoInfo = search.all[0];

    const response = await fetch(`https://api.alyachan.dev/api/ytv?url=${videoInfo.url}&apikey=Gata-Dios`)
    const json = await response.json()
    await conn.sendMessage(m.chat, { video: { url: json.data.url }, mimetype: 'video/mp4', fileName: json.data.filename }, { quoted: m })
  }
}

handler.help = ['ytmp4 *<url>*']; 
handler.command = ['test'];
handler.tags = ['descargas'];

export default handler;