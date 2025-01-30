// ❀ Código By JTxs

import fetch from 'node-fetch'

let handler = async (m, { conn, command, text, usedPrefix }) => {
if (!db.data.chats[m.chat].nsfw && m.isGroup) {
    return m.reply(m.chat, '[❗] 𝐋𝐨𝐬 𝐜𝐨𝐦𝐚𝐧𝐝𝐨𝐬 +𝟏𝟖 𝐞𝐬𝐭𝐚́𝐧 𝐝𝐞𝐬𝐚𝐜𝐭𝐢𝐯𝐚𝐝𝐨𝐬 𝐞𝐧 𝐞𝐬𝐭𝐞 𝐠𝐫𝐮𝐩𝐨.\n> 𝐬𝐢 𝐞𝐬 𝐚𝐝𝐦𝐢𝐧 𝐲 𝐝𝐞𝐬𝐞𝐚 𝐚𝐜𝐭𝐢𝐯𝐚𝐫𝐥𝐨𝐬 𝐮𝐬𝐞 .enable nsfw', m);
  }
if (!text) return conn.reply(m.chat, '❀ Ingresa un link de Pornhub Para Descargar Su Video 🍭', m)
try {
let api = await fetch(`https://www.dark-yasiya-api.site/download/phub?url=${text}`)
let json = await api.json()
let { video_title, video_uploader } = json.result
let { download_url, resolution, } = json.result.format[1]
await conn.sendMessage(m.chat, { video: { url: download_url }, caption: video_title }, { quoted: m })
} catch (error) {
console.error(error)
}}

handler.command = ['pornhubdl', 'phdl'];
handler.tag = ['descargas'];
handler.help = ['pornohubdl'];
handler.estrellas = 9;

export default handler;