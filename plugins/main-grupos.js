let handler = async (m, { conn, usedPrefix, command }) => {

let grupos = `╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈≫\n\n☕︎︎ *Hola!, te invito a unirte a los grupos oficiales del Bot para convivir con la comunidad oficial* 💛

1- 『✯ ⏤͟͞ू⃪𝗧𝗲𝗮𝗺 𝗖𝗼𝗺𝘂𝗻𝗶𝘁𝘆 𝗖𝗿𝗼𝘄𝗕𝗼𝘁⁞࿐ ✯』
*❑* ${grupo}

✧⋄⋆⋅⋆⋄✧⋄⋆⋅⋆⋄✧⋄⋆⋅⋆⋄✧⋄⋆⋅⋆⋄✧⋄⋆⋅⋆⋄✧

➠ Enlace anulado? entre aquí! 

[🌠] 𓆩 *Canal Crow's Club* ⁞✰⃔࿐:
*❏* ${channel}

> ${dev}

╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈≫`

let img = 'https://i.ibb.co/nMPrKxD4/file.jpg';

conn.sendMessage(m.chat, { image: { url: img }, caption: grupos }, { quoted: m });
}

handler.help = ['grupos']
handler.tags = ['main']
handler.command = ['grupos', 'crowgrupos', 'gruposcrow']

export default handler