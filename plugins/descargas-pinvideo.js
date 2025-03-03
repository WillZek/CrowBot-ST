import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw m.reply(`🍭 Por favor, ingresa el link de un video/imagen de Pinterest.`);
m.react('🕒');
        let ouh = await fetch(`https://api.agatz.xyz/api/pinterest?url=${text}`)
  let gyh = await ouh.json()

await conn.sendMessage(m.chat, { video: { url: gyh.data.result }, caption: '✅ Descargado Con Exito.' }, { quoted: m });

// await conn.sendFile(m.chat, gyh.data.result, `pinvideobykeni.mp4`, `*${emoji} Url:* ${gyh.data.url}`, m)
await m.react('✅');
}
handler.help = ['pinvid *<link>*']
handler.tags = ['descargas']
handler.command = ['pinvideo', 'pinvid']
handler.premium = false
handler.register = true

export default handler