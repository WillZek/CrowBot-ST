import db from '../lib/database.js'

import MessageType from '@whiskeysockets/baileys'
let impts = 0
let handler = async (m, { conn, text }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) return m.reply('⚠️️ *Taguea al usuario*')
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (!txt) return m.reply('⚠️️ Ingrese la cantidad de *Estrellas* que quiere añadir')
    if (isNaN(txt)) return m.reply('⚠️ *sólo números*')
    let let = parseInt(txt)
    let estrellas = let
    let pjk = Math.ceil(let * impts)
    estrellas += pjk
    if (estrellas < 1) return m.reply('⚠️️ Mínimo es  *1*')
    let users = global.db.data.users
   users[who].estrellas += let

    await conn.reply(m.chat, `⊜ *🌟 AÑADIDO*
┏━━━━━━━━━━━⬣
┃⋄ *Total:* ${let}
┗━━━━━━━━━━━⬣`, m, rcanal)
   conn.fakeReply(m.chat, `⊜ *_Recibiste_* \n\n *_+${let} Estrellas 🌟_*`, who, m.text)
}

handler.help = ['addcookies *<@user>*']
handler.tags = ['owner']
handler.command = ['addestrellas', 'addest', 'addestrellasec'] 
handler.rowner = true

export default handler