import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command }) => {
try {
await m.react(emojis)
conn.reply(m.chat, `🍭 Buscando su *Waifu* espere un momento...`, m)
let res = await fetch('https://api.waifu.pics/sfw/waifu')
if (!res.ok) return
let json = await res.json()
if (!json.url) return 
await conn.sendFile(m.chat, json.url, 'thumbnail.jpg', `🎩 Aqui tienes tu *Waifu* ฅ^•ﻌ•^ฅ.`, fkontak)
} catch {
}}
handler.help = ['waifu']
handler.tags = ['gacha']
handler.command = ['waifu']
handler.group = true;
handler.register = true

export default handler