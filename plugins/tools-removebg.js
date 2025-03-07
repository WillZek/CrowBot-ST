import uploadImage from '../lib/uploadImage.js'
import { sticker } from '../lib/sticker.js'

let handler = async (m, { conn, text, args }) => {
let stiker = false
let json

let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || q.mediaType || ''
if (/image/g.test(mime) && !/webp/g.test(mime)) {
let buffer = await q.download()
let media = await (uploadImage)(buffer)
json = await (await fetch(`https://btch.us.kg/removebg?url=${media}`)).json()
stiker = await sticker(false, json.result.urls, global.packname, global.author)
} else if (text) {
json = await (await fetch(`https://btch.us.kg/removebg?url=${text.trim()}`)).json()
} else return m.reply(`*Responde a una imagen o ingresa el url de una imagen`)

await conn.sendMessage(m.chat, { image: { url: json.result.urls }, caption: null }, { quoted: m })
await conn.sendFile(m.chat, stiker ? stiker : await sticker(false, json.result.urls, global.packname, global.author), 'sticker.webp', '',m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: textbot, body: dev, mediaType: 2, sourceUrl: redes, thumbnail: imagen1 }}}, { quoted: m })
}
handler.command = /^(removebg|rbg)$/i
export default handler

const isUrl = (text) => {
const urlRegex = /^(https?):\/\/[^\s/$.?#]+\.(jpe?g|png)$/i
return urlRegex.test(text)
}