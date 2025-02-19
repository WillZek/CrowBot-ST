// Repuesto Pal Ytmp4
import fetch from 'node-fetch';

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) return conn.reply(m.chat, `💛 Ingresa un link de YouTube válido\n> Ejemplo https://youtu.be/P4LfHsUnNL8?si=ahDKJ5h0cW-EB9C9`, m, rcanal);

await m.react('🕓');

    const response = await fetch(`https://api.alyachan.dev/api/ytv?url=${text}&apikey=Gata-Dios`)
    const json = await response.json()
    await conn.sendMessage(m.chat, { video: { url: json.data.url }, mimetype: 'video/mp4', fileName: json.data.filename }, { quoted: m })
m.reac(done)
}

handler.help = ['ytv *<url>*']; 
handler.command = ['ytv'];
handler.tags = ['descargas'];

export default handler;