import db from '../lib/database.js'

import MessageType from '@whiskeysockets/baileys'
let impts = 0
let handler = async (m, { conn, text }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) return m.reply('⚠️️ *Taguea al usuario*')
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (!txt) return m.reply('⚠️️ Ingrese la cantidad de *Dolares* que quiere añadir')
    if (isNaN(txt)) return m.reply('⚠️ *sólo números*')
    let dmt = parseInt(txt)
    let dolares = count
    let pjk = Math.ceil(count * impts)
    dolares += pjk
    if (dolares < 1) return m.reply('⚠️️ Mínimo es  *1*')
    let users = global.db.data.users
   users[who].dolares += count

    await conn.reply(m.chat, `⊜ *💵 AÑADIDO*
┏━━━━━━━━━━━⬣
┃⋄ *Total:* ${count}
┗━━━━━━━━━━━⬣`, m, rcanal)
   conn.fakeReply(m.chat, `⊜ *_Recibiste_* \n\n *_+${count} Dolares 💵_*`, who, m.text)
}

handler.help = ['adddolares *<@user>*']
handler.tags = ['owner']
handler.command = ['adddolares', 'adddinero', 'añadirdolares'] 
handler.rowner = true

export default handler