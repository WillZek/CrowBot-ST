let handler = async (m, { conn, command, usedPrefix }) => {
let staff = `🚩 *EQUIPO DE AYUDANTES*
🤖 *Bot:* ${global.botname}
🪐 *Versión:* ${global.vs}

👑 *Propietario:*

• Niño Piña
🫂 *Rol:* Propietario
🔱 *Número:* wa.me/50557865603
✨️ *GitHub:* https://github.com/WillZek 

👺  *Colaboradores:*

• Destroy
🫂 *Rol:* Editor
🚩 *Número:* Wa.me/584120346669

• Prak Harper 
🫂 *Rol:* Amigo
🚩 *Número:* Wa.me/584241836217
`
await conn.sendFile(m.chat, icons, 'brook.jpg', staff.trim(), fkontak, true, {
contextInfo: {
'forwardingScore': 200,
'isForwarded': false,
externalAdReply: {
showAdAttribution: true,
renderLargerThumbnail: false,
title: `🥷 Developers 👑`,
body: `🔱 Staff Oficial`,
mediaType: 1,
sourceUrl: redes,
thumbnailUrl: icono
}}
}, { mentions: m.sender })
m.react(emoji)

}
handler.help = ['staff']
handler.command = ['colaboradores', 'staff']
handler.register = true
handler.tags = ['main']

export default handler