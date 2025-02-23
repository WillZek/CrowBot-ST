
import yts from 'yt-search'

var handler = async (m, { text, conn, args, command, usedPrefix }) => {

if (!text) return conn.reply(m.chat, `${emoji} Por favor, ingresa una busqueda de Youtube.`, m)

conn.reply(m.chat, wait, m)

let results = await yts(text)
let tes = results.all
let teks = results.all.map(v => {
switch (v.type) {
case 'video': return `Resultados De : *<${text}>*

> ✦ Título » *${v.title}*
> ✧ Canal » *${v.author.name}*
> ✦ Duración » *${v.timestamp}*
> ✧ Subido » *${v.ago}*
> ✦ Vistas » *${v.views}*
> ✧ Enlace » ${v.url}`}}).filter(v => v).join('\n\n••••••••••••••••••••••••••••••••••••\n\n')

conn.sendMessage(m.chat, { 
        image: { url: tes[0].thumbnail }, 
        caption: teks, 
        footer: dev, 
        buttons: [
            {
                buttonId: `.ytmp4 ${v.url}`,
                buttonText: { displayText: 'Obtener Vídeo' }
            }
        ],
        viewOnce: true,
        headerType: 4
    }, { quoted: m });
}

handler.command = ['test'];

export default handler