import fs from 'fs'

let handler = async (m, { conn, text, usedPrefix, command }) => {
await m.reply(`❮⛄❯ » *Enviando base de datos de ${wm}...*`)
try {
await m.react(rwait)
let d = new Date
let date = d.toLocaleDateString('es', { day: 'numeric', month: 'long', year: 'numeric' })
let database = await fs.readFileSync(`./media/database/db.json`)
let marry = await fs.readFileSync(`./media/database/marry.json`)
let creds = await fs.readFileSync(`./CrowSession/creds.json`)
await conn.reply(m.chat, `*• Fecha:* ${date}`, m)
await conn.sendMessage(m.chat, {document: database, mimetype: 'application/json', fileName: `database.json`}, { quoted: fkontak })
await m.react(done)
await conn.sendMessage(m.chat, {document: marry, mimetype: 'application/json', fileName: `marry.json`}, { quoted: fkontak })
await m.react(done)
await conn.sendMessage(m.chat, {document: creds, mimetype: 'application/json', fileName: `creds.json`}, { quoted: fkontak })
await m.react(done)
} catch {
await m.react(error)
conn.reply(m.chat, `❮❌️❯ » *Ocurrió un error.*`, m, fake)}}

handler.help = ['copia']
handler.tags = ['owner']
handler.command = ['backup', 'respaldo', 'copia']
handler.rowner = true

export default handler