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
🎩 *Rol:* Developer
💛 *Número:* Wa.me/584241836217

• 𝐈𝐬𝐚𝐛𝐞𝐥 (isa)
🍭 *Rol:* Mod
💛 *Número:* Wa.me/529831715910


• 𝐌𝐨𝐫𝐚𝐥𝐞𝐬
🍭 *Rol:* Mod
💛 *Numero:* Wa.me/573007796996

• 𝐃𝐞𝐲𝐥𝐢𝐧 
🎩 *Rol:* Mod
💛 *Número:* Wa.me/50488198573

• 𝐎𝐫𝐥𝐚𝐧𝐝𝐨
🍭 *Rol:* Mod
💛 *Número:* Wa.me/522731590195

• 𝐒𝐄𝐈𝐒𝐇𝐈𝐑𝐎 - 𝐍𝐀𝐆𝐈
🎩 *Rol:* Mod
💛 *Número:* Wa.me/51920227615

• 𝐀𝐍𝐆𝐄𝐋
🍭 *Rol:* Mod
💛 *Numero:* Wa.me/50368471855`
await conn.sendFile(m.chat, 'https://cdnmega.vercel.app/media/c4hhgZgD@fGOHhRAM1CD-3_cpAQk-Q86yQnQLGHYKZ1M0P_heI9s', 'staff.jpg', staff.trim(), fkontak, true, {
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
thumbnailUrl: icons }}
}, { mentions: m.sender })
m.react(emoji)

}
handler.help = ['staff']
handler.command = ['colaboradores', 'staff']
handler.register = false
handler.tags = ['main', 'crow']
handler.estrellas = 1;

export default handler