let handler = async (m, { conn, command, usedPrefix }) => {
let staff = `🚩 *EQUIPO DE AYUDANTES*
🤖 *Bot:* ${global.botname}
🪐 *Versión:* ${global.vs}

• 𝐃𝐚𝐫𝐤𝐂𝐨𝐫𝐞
🎩 *Rol:* Developer
💛 *Número:* Wa.me/51968382008

• 𝐃𝐞𝐬𝐭𝐫𝐨𝐲
🍭 *Rol* Developer
💛 *Numero:* Wa.me/584120346669

• 𝐏𝐫𝐚𝐤 𝐇𝐚𝐫𝐩𝐞𝐫 
🎩 *Rol:* Developer y Editor Profesional
💛 *Número:* Wa.me/584241836217

• 𝐈𝐬𝐚𝐛𝐞𝐥 (isa)
🍭 *Rol:* Experiencia En Diseños De Logos /Editora Profesional
💛 *Número:* Wa.me/529831715910

• 𝐒𝐞𝐧𝐧𝐚 
🎩 *Rol:* Experiencia En Mantenimiento y Soporte Del Bot
💛 *Número:* Wa.me/51971867199

• 𝐌𝐨𝐫𝐚𝐥𝐞𝐬
🍭 *Rol:* Experiencia En Gestión De Grupos
💛 *Numero:* Wa.me/573007796996

• 𝐃𝐞𝐲𝐥𝐢𝐧 
🎩 *Rol:* Experiencia En Redacción y Decoración De Textos
💛 *Número:* Wa.me/50488198573

• 𝐎𝐫𝐥𝐚𝐧𝐝𝐨
🍭 *Rol:* Gestión De Grupos
💛 *Número:* Wa.me/522731590195

• 𝐉𝐨𝐤𝐞𝐫 𝐲 𝐖𝐡𝐢𝐭𝐞 
🎩 *Rol:* Bots Oficiales
💛 *Número:* Privado🫵🏻
`
await conn.sendFile(m.chat, 'https://files.catbox.moe/h094yg.jpg', 'brook.jpg', staff.trim(), fkontak, true, {
contextInfo: {
'forwardingScore': 200,
'isForwarded': false,
externalAdReply: {
showAdAttribution: true,
renderLargerThumbnail: false,
title: `🎩 STAFF OFICIAL🌟`,
body: dev,
mediaType: 1,
sourceUrl: redes,
thumbnailUrl: icono }}
}, { mentions: m.sender })
m.react(emoji)

}
handler.help = ['staff']
handler.command = ['colaboradores', 'staff']
handler.register = true
handler.tags = ['main', 'crow']
handler.estrellas = 1;

export default handler