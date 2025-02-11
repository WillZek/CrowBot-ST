// ౨ৎ ˖ ࣪⊹ 𝐁𝐲 𝐉𝐭𝐱𝐬 𐙚˚.ᡣ𐭩
// API De Mrd 
import axios from 'axios'

let handler = async (m, { conn, text }) => {
if (!text) return conn.reply(m.chat, `❀ Ingresa un texto`, m)


try {
// let api = await axios.get(`https://kepolu-brat.hf.space/brat?q=${text}`, { responseType: 'arraybuffer' })

// await conn.sendMessage(m.chat, { sticker: Buffer.from(api.data) }, { quoted: m })

let api = `https://kepolu-brat.hf.space/brat?q=${text}`;
let res = await axios.get(api);
let st = res 

await conn.sendMessage(m.chat, { sticker: api }, { quoted: m })

} catch (error) {
m.reply(`${error.message}`);
console.error(error)
}}

handler.command = ['brat']

export default handler