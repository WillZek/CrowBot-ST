import fetch from 'node-fetch'

let handler  = async (m, { conn, usedPrefix, command }) => {

let grupos = `*Hola!, te invito a unirte a los grupos oficiales del Bot para convivir con la comunidad oficial* 💛

1- 『✯ 𝗧𝗲𝗮𝗺 𝗖𝗼𝗺𝘂𝗻𝗶𝘁𝘆 𝗖𝗿𝗼𝘄𝗕𝗼𝘁✯』
*✰* ${grupo}

*─ׄ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׄ*

➠ Enlace anulado? entre aquí! 

☁ Canal :
*✰* ${channel}

> ${dev}

*─ׄ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׄ*
 • ¿Te interesa tener un bot propio, bot para grupo o un curso de como hacer bots personalizados? ¡Únete a nuestro grupo de ventas para solicitar un servicio! 📝
 [ \`https://chat.whatsapp.com/HAt711AdgXFG1BI9FIACKr\` ]
 
 • Pregunta por lo que quieras!💛
Beneficios: Soporte Perzonalizado, Asistencia 24/7, Grupo VIP🏆🌟`

await conn.sendFile(m.chat, imagen2, "Crow.jpg", grupos, m, null, rcanal)

await m.react(emojis)

}
`
await conn.sendButton(m.chat, str, `͟͞ 𓆩𝐍𝐢𝐧̃𝐨𝐏𝐢𝐧̃𝐚ৎ୭࠱࠭ ͟͞\n` + wm, media, [
['Menu 💖', '#Menu']], null, [
['⏤͟͞ू⃪ ፝͜⁞𝐂𝐫𝐨𝐰𝐁𝐨𝐭✰⃔࿐', `${md}`]], fkontak)}

handler.help = ['grupos']
handler.tags = ['main']
handler.command = ['grupos', 'iangrupos', 'gruposian']
export default handler