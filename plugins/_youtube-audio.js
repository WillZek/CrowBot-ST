import Starlights from '@StarlightsTeam/Scraper'
let limit = 200

let handler = async (m, { conn, text, isPrems, isOwner, usedPrefix, command }) => {
if (!m.quoted) return conn.reply(m.chat, `Not Search Video.`, m, rcanal).then(_ => m.react('✖️'))
if (!m.quoted.text.includes(" Y O U T U B E")) return conn.reply(m.chat, `Responde el mensaje de play.`, m, rcanal).then(_ => m.react('✖️'))
let urls = m.quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
if (!urls) return conn.reply(m.chat, `No Encontrado.`, m, rcanal).then(_ => m.react('✖️'))
if (urls.length < text) return conn.reply(m.chat, `No Encontrado.`, m, rcanal).then(_ => m.react('✖️'))
let user = global.db.data.users[m.sender]
	
await m.react('⌛')
try {
let v = urls[0]
let { title, size, quality, thumbnail, dl_url } = await Starlights.ytmp3(v)

if (size.split('MB')[0] >= limit) return m.reply(`El archivo pesa mas de ${limit} MB, se canceló la Descarga.`).then(_ => m.react('✖️'))

await conn.sendFile(m.chat, dl_url, title + '.mp3', null, m, false, { mimetype: 'audio/mpeg', asDocument: user.useDocument })
await m.react('✅')
} catch {
await m.react('✖️')
}}
handler.help = ['Audio']
handler.tags = ['downloader']
handler.customPrefix = /^(Mp3|mp3|audio|Audio)/
handler.command = new RegExp
handler.limit = 1

export default handler