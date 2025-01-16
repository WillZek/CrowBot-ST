let handler = async (m, { conn, command, usedPrefix }) => {
let staff = `🚩 *EQUIPO DE AYUDANTES*
🤖 *Bot:* ${global.botname}
🪐 *Versión:* ${global.vs}

• DarkCore
🎩 *Rol:* Experiencia En Javascript y html
🍭 *Número:* Wa.me/584120346669

• Prak Harper 
🎩 *Rol:* Experiencia En Javascript, Mantenimiento y Editor Profesional
🍭 *Número:* Wa.me/584241836217

• Isabel (isa)
🎩 *Rol:* Experiencia En Diseños De Logos /Editora Profesional
💛 *Número:* Wa.me/529831715910

• Senna 
🎩 *Rol:* Experiencia En Mantenimiento y Soporte Del Bot
🍭 *Número:* Wa.me/573001357781

• Deylin 
🎩 *Rol:* Experiencia En Redacción y Decoración De Textos
💛 *Número:* Wa.me/50488198573

• Joker y White 
🎩 *Rol:* Bots Oficiales
🍭 *Número:* Privado🫵🏻
`
await conn.sendFile(m.chat, icons, 'brook.jpg', staff.trim(), fkontak, true, {
contextInfo: {
'forwardingScore': 200,
'isForwarded': false,
externalAdReply: {
showAdAttribution: true,
renderLargerThumbnail: false,
title: `🎩 STAFF OFICIAL✨`,
body: dev,
mediaType: 1,
sourceUrl: redes,
thumbnailUrl: 'https://files.catbox.moe/rgumk8.jpg' }}
}, { mentions: m.sender })
m.react(emoji)

}
handler.help = ['staff']
handler.command = ['colaboradores', 'staff']
handler.register = true
handler.tags = ['main', 'crow']
handler.estrellas = 1;

export default handler