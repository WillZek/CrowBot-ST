import fs from 'fs'

let handler = async (m, { conn, text, usedPrefix, command }) => {
await m.reply(`*Enviando base de datos de ${botname}...*`)
try {
await m.react(rwait)
let d = new Date
let date = d.toLocaleDateString('es', { day: 'numeric', month: 'long', year: 'numeric' })
let database = await fs.readFileSync(`./media/database/db.json`)
await conn.reply(m.chat, `*• Fecha:* ${date}`, m)
await conn.sendMessage(m.chat, {document: database, mimetype: 'application/json', fileName: `database.json`}, { quoted: fkontak })
await m.react(done)
} catch {
await m.react(error)
conn.reply(m.chat, `❌️» *Ocurrió un error.*`, m, fake)}}

handler.help = ['getdb']
handler.tags = ['owner']
handler.command = ['getdb', 'database', 'copia']
handler.rowner = true

export default handler