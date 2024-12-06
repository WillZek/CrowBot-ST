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
🫂 *Rol:* Dv y Colaborador
🚩 *Número:* Wa.me/584120346669

• Prak Harper 
🫂 *Rol:* Colaborador y Soporte
🚩 *Número:* Wa.me/584241836217

• Barboza 
🫂 *Rol:* Bot Oficial
🚩 *Número:* Wa.me/584246582666

• Isa
🫂 *Rol:* Editora
🚩 *Número:* Wa.me/529831715910

• Veggito Navideño
🫂 *Rol:* Editor
🚩 *Número:* Wa.me/5493541741460

• 💖⛄
🫂 *Rol:* Editora
🚩 *Número:* Wa.me/573001357781

• Deylin 
🫂 *Rol:* Colaborador
🚩 *Número:* Wa.me/50488198573
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