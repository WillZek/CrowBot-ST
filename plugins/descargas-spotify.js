/* 
- Código Creado Por Izumi-kzx
*/

// *[ 🍟 SPOTIFY SEARCH ]*
import fetch from 'node-fetch'

let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args.length) return conn.reply(m.chat, `🔍 *Por favor escribe una canción a buscar.*\nEjemplo: ${usedPrefix}${command} Faded`, m)
const query = args.join(' ')
try {
const response = await fetch(`https://api.davidcyriltech.my.id/search/spotify?text=${encodeURIComponent(query)}`)
const data = await response.json()
if (!data.success || !data.result || data.result.length === 0) return conn.reply(m.chat, `🚫 No se encontraron resultados para "${query}".`, m)
let txt = '*🎵 S E A R C H - S P O T I F Y*\n\n'
data.result.forEach(track => {
txt += `🎼 *Título*: ${track.trackName}\n`
txt += `🎤 *Artista*: ${track.artistName}\n`
txt += `💿 *Álbum*: ${track.albumName}\n`
txt += `⏱️ *Duración*: ${track.duration}\n`
txt += `🔗 *Enlace*: ${track.externalUrl}\n\n---------------------------------------------------\n\n`
})
await conn.reply(m.chat, txt.trim(), m)
} catch (error) {
console.error(error)
conn.reply(m.chat, '❌ Hubo un error al procesar la solicitud.', m)
}}

handler.help = ['spotifysearch'];
handler.tag = ['buscador'];
handler.command = ['spotifysearch', 'spsearch']

export default handler