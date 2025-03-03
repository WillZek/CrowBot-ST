import fetch from 'node-fetch'
import FormData from 'form-data'
import fs from 'fs'

let handler = async (m) => {
let q = m.quoted ? m.quoted : m
let mime = q.mediaType || ''
if (/audio|video/.test(mime)) {
let media = await q.download(true)
let upload = await uploadFile(media)
let shp = await fetch(`https://apis-starlights-team.koyeb.app/starlight/chazam?url=${upload.files[0].url}`, { headers: { 'Content-Type': 'application/json' }})
let json = await shp.json()
let app = { title: json.title, artist: json.artist, type: json.type, url: json.url }
let txt = `*\`-• C H A Z A M - M U S I C •-\`*\n\n` +
`🍟 *Nombre:* ${app.title}\n` +
`🍟 *Artista:* ${app.artist}\n` +
`🍟 *Tipo:* ${app.type}\n` +
`🍟 *Link:* ${app.url}`
m.reply(txt)
} else {
return conn.reply(m.chat, '🚩 Responde a un *Audio/Video.*', m, rcanal)
}}
handler.help = ['shazam *<Audio/Video>*']
handler.tags = ['tools']
handler.command = /^(shazam | whatmusic)$/i
handler.register = true

export default handler

async function uploadFile(path) {
let form = new FormData()
form.append('files[]', fs.createReadStream(path))
let res = await (await fetch('https://uguu.se/upload.php', { method: 'post',
headers: {
...form.getHeaders()
},
body: form
})).json()
await fs.promises.unlink(path)
return res
}

/* import acrcloud from 'acrcloud'
import { youtubedl, youtubedlv2 } from '@bochilteam/scraper'
import yts from 'yt-search'

let acr = new acrcloud({
  host: 'identify-eu-west-1.acrcloud.com',
  access_key: 'c33c767d683f78bd17d4bd4991955d81',
  access_secret: 'bvgaIAEtADBTbLwiPGYlxupWqkNGIjT7J9Ag2vIu'
})
let handler = async (m, { conn, usedPrefix, command }) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || q.mediaType || ''
  if (/video|audio/.test(mime)) {
  let buffer = await q.download()
  let user = global.db.data.users[m.sender]
  await m.react('🕓')
  let { status, metadata } = await acr.identify(buffer)
  if (status.code !== 0) throw status.msg 
  let { title, artists, album, genres, release_date } = metadata.music[0]
  let res = await yts(title)
  let vid = res.videos[0]
  let v = vid.url
  let yt = await youtubedl(v).catch(async () => await youtubedlv2(v))
  let url = await yt.audio['128kbps'].download()
  let title2 = await yt.title
  let txt = '`W H A T M U S I C  -  T O O L S`\n\n'
      txt += `        🎩   *Titulo* : ${title}${artists ? `\n        🌟   *Artists* : ${artists.map(v => v.name).join(', ')}` : ''}`
      txt += `${album ? `\n        👑   *Album* : ${album.name}` : ''}${genres ? `\n        👥   *Genero* : ${genres.map(v => v.name).join(', ')}` : ''}\n`
      txt += `        📆   *Fecha de lanzamiento* : ${release_date}\n\n`
      txt += `> 🍭 *${wm}*`
  await conn.sendFile(m.chat, vid.thumbnail, 'thumbnail.jpg', txt, m, null, rcanal)
  await conn.sendFile(m.chat, url, title2 + '.mp3', null, m, false, { mimetype: 'audio/mpeg', asDocument: user.useDocument })
  await m.react('✅')
  } else return conn.reply(m.chat, `🍭 Etiqueta un audio o video de poca duración con el comando *${usedPrefix + command}* para ver que música contiene.`, m, rcanal)
}
handler.help = ['whatmusic *<audio/video>*']
handler.tags = ['tools']
handler.command = ['whatmusic', 'shazam']
//handler.limit = 1
handler.register = true 
export default handler
*/