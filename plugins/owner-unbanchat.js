let handler = async (m, { conn }) => {
if (!(m.chat in global.db.data.chats)) return conn.reply(m.chat, '🍭 *¡ESTE CHAT NO ESTÁ REGISTRADO!*', m, fake)
let chat = global.db.data.chats[m.chat]
if (!chat.isBanned) return conn.reply(m.chat, '💛 *¡El BOT NO ESTÁ BANEADA EN ESTE CHAT!*', m, fake)
chat.isBanned = false
await conn.reply(m.chat, '💛 *¡El BOT YA FUÉ DESBANEADA EN ESTE CHAT!*', m, fake)
}
handler.help = ['unbanchat'];
handler.tags = ['mods'];
handler.command = /^unbanchat|desbanearchat|desbanchat$/i
handler.mods = true 
//handler.group = true

export default handler