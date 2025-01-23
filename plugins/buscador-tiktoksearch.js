import axios from 'axios'
import Starlights from '@StarlightsTeam/Scraper'

let handler = async (m, { conn, usedPrefix, command, text, args }) => {
  if (!text) return conn.reply(m.chat, `🚩 Ingresa el nombre video que deseas buscar en TikTok.\n\nEjemplo:\n> *${usedPrefix + command}* Crow De Brawl Stars Edits`, m, rcanal)

  await m.react('🕓')
  let img = await (await axios.get('https://files.catbox.moe/izoqir.jpg', { responseType: 'arraybuffer' })).data

  try {
    let data = await Starlights.tiktokSearch(text)

    if (data && data.length > 0) {
     let txt = `🎩 *RESULTADOS DE: ${text}*`
for (let i = 0; i < Math.min(50, data.length); i++) {
  let video = data[i]
         txt += `\n\n`
         txt += ` 💛 *Nro* : ${i + 1}\n`
         txt += ` 💛 *Título* : ${video.title}\n`
         txt += ` 💛 *Autor* : ${video.author}\n`
         txt += ` 💛 *Url* : ${video.url}`
}
      await conn.sendFile(m.chat, img, 'thumbnail.jpg', txt, m, null, rcanal)
      await m.react('✅')
    } else {
      await conn.react('✖️')
    }
  } catch {
    await m.react('✖️')
  }
}
handler.tags = ['buscador']
handler.help = ['tiktoksearch *<búsqueda>*']
handler.command = ['tiktoksearch', 'tiktoks']
handler.register = true

export default handler