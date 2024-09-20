/* import Starlights from '@StarlightsTeam/Scraper'
let listo = '🚩 Tu video de instagram'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) return conn.reply(m.chat, '🚩 Ingresa un enlace de Instagram.', m, rcanal)
try {
conn.reply(m.chat, '⁖❤️꙰  *Descargando su video de Instagram*', m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, showAdAttribution: true,
title: packname,
body: wm,
previewType: 0, thumbnail: icons,
sourceUrl: channel }}})
let { dl_url } = await Starlights.igdl(args[0])
await conn.sendMessage(m.chat, { video: { url: dl_url }, caption: listo }, { quoted: fkontak})
} catch (e) {
  console.log(e)
  m.reply('🚩 Ocurrió un error inesperado.')
}}
handler.help = ['ig <enlace>']
handler.tags = ['descargas']
handler.command = ['ig', 'instagram']
handler.register = true
handler.estrellas = 1
export default handler */
