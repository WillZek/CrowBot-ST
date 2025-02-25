/* ig : https://www.instagram.com/fg98._/ */
import hispamemes from 'hispamemes'
let handler = async (m, { conn, usedPrefix, command }) => {
const meme = hispamemes.meme()
// conn.sendFile(m.chat, meme, '', '', fkontak)

conn.sendMessage(m.chat, { 
        image: { url: meme }, 
        caption: '¡Aqui Está Tu Meme!🤣', 
        footer: dev, 
        buttons: [
            {
                buttonId: `.meme`,
                buttonText: { displayText: 'Siguiente Meme' }
            }
        ],
        viewOnce: true,
        headerType: 4
    }, { quoted: m });

m.react(emoji2)
}
handler.help = ['meme']
handler.tags = ['fun']
handler.command = ['meme', 'memes']
handler.estrellas = 1
handler.register = true
export default handler
