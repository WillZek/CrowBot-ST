// ౨ৎ ˖ ࣪⊹ 𝐁𝐲 𝐉𝐭𝐱𝐬 𐙚˚.ᡣ𐭩
// API De Mrd 
import axios from 'axios'
import { sticker } from '../lib/sticker.js';

let handler = async (m, { conn, text }) => {
if (!text) return conn.reply(m.chat, `❀ Ingresa un texto`, m)


try {
// let api = await axios.get(`https://kepolu-brat.hf.space/brat?q=${text}`, { responseType: 'arraybuffer' })

// await conn.sendMessage(m.chat, { sticker: Buffer.from(api.data) }, { quoted: m })

let api = `https://kepolu-brat.hf.space/brat?q=${text}`;
let res = await axios.get(api);
let st = res 


const buffer = Buffer.from(st, 'base64');
let stiker = await sticker(buffer, false, global.packname, global.author);
if (stiker) return conn.sendFile(m.chat, stiker, 'error.webp', '', m);

await conn.sendFile(m.chat, st, 'sticker.webp', '', m, null);
await conn.sendMessage(m.chat, { sticker: api }, { quoted: m })

} catch (error) {
m.reply(`${error.message}`);
console.error(error)
}}

handler.command = ['brat']

export default handler