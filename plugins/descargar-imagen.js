import { pinterest } from '@bochilteam/scraper'

var handler = async(m, { conn, text, usedPrefix, command }) => {

if (!text) return conn.reply(m.chat, `🎌 *Debera ingresar un texto*\n\nEjemplo, !${command} Crow`, m, fake, )
m.react(done)

const json = await pinterest(text)
conn.sendFile(m.chat, json.getRandom(), 'imagen.jpg', `🚩 *Resultado de* ${text}`.trim(), m)

}
handler.help = ['imagen']
handler.tags = ['buscador']
handler.command = /^(imagen|image)$/i

handler.limit = true
handler.register = true

export default handler