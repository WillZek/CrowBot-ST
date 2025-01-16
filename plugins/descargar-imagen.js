import Starlights from "@StarlightsTeam/Scraper"

let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) return m.reply('🚩 Ingresa el nombre de la imágen que estas buscando.\n\n`Ejemplo:`\n' + `> *${usedPrefix + command}* Crow De Brawl Stars`)
await m.react('🕓')
try {
let { dl_url } = await Starlights.pinterest(text)
await conn.sendFile(m.chat, dl_url, 'thumbnail.jpg', `*» Resultado* : ${text}`, m, null, rcanal)
await m.react('✅')
} catch {
await m.react('✖️')
}}
handler.help = ['pinterest', 'imagen']
handler.tags = ['img']
handler.command = ['pinterest', 'imagen']
handler.register = true 
handler.estrellas = 5;

export default handler