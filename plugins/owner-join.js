/* let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})( [0-9]{1,3})?/i

let handler = async (m, { conn, text, isOwner, usedPrefix, command }) => {

if (!text) return m.reply(`🌸 Ingresa el enlace del Grupo.`)
try {
let [_, code] = text.match(linkRegex) || []
if (!code) return m.reply('🌺 Enlace invalido.')
let res = await conn.groupAcceptInvite(code)
m.reply(`🚩 Me uní correctamente al Grupo`)
} catch (e) {
return m.reply(`✘ Ocurrió un error. ${e.message}`)}}

handler.help = ['join <link>']
handler.tags = ['owner']
handler.command = ['join', 'entrar'] 
handler.rowner = true

export default handler
*/

let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})( [0-9]{1,3})?/i

let handler = async (m, { conn, text, isOwner, usedPrefix, command }) => {

        if (!text) return m.reply(`🚩 Ingresa el enlace del Grupo.\n> *Ejemplo:* ${usedPrefix + command} <enlace> <número de días>.`)
    let [_, code, expired] = text.match(linkRegex) || []
    if (!code) return m.reply('🚩 Enlace invalido.')
    let res = await conn.groupAcceptInvite(code)
    expired = Math.floor(Math.min(999, Math.max(1, isOwner ? isNumber(expired) ? parseInt(expired) : 0 : 3)))
    m.reply(`🚩 Me uní correctamente al Grupo Durante *${expired}* días.`)
    let chats = global.db.data.chats[res]
    if (!chats) chats = global.db.data.chats[res] = {}
    if (expired) chats.expired = +new Date() + expired * 1000 * 60 * 60 * 24
/*  const pp = './media/menus/Menu3.jpg';
  conn.sendFile(m.chat, pp, 'error.jpg', text, m, false);
*/
}

handler.help = ['join *<link> <días>*']
handler.tags = ['owner']

handler.command = ['join', 'entrar'] 
handler.owner = true

export default handler

const isNumber = (x) => (x = parseInt(x), typeof x === 'number' && !isNaN(x))