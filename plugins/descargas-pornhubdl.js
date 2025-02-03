// ❀ Código By JTxs

import fetch from 'node-fetch'

let handler = async (m, { conn, command, text, usedPrefix }) => {

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