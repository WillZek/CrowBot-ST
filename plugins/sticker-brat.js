// ౨ৎ ˖ ࣪⊹ 𝐁𝐲 𝐉𝐭𝐱𝐬 𐙚˚.ᡣ𐭩

import axios from 'axios'

let handler = async (m, { conn, text }) => {
if (!text) return conn.reply(m.chat, `❀ Ingresa un texto`, m)


try {
let api = await axios.get(`https://vapis.my.id/api/bratv1?q=${text}`, { responseType: 'arraybuffer' })
await conn.sendMessage(m.chat, { sticker: Buffer.from(api.data) }, { quoted: m })
} catch (error) {
console.error(error)
}}

handler.command = ['brat']

export default handler