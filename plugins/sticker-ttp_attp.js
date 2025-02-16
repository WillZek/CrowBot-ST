import { sticker } from '../lib/sticker.js'
import fetch from 'node-fetch'
import axios from 'axios';

let handler = async(m, { conn, text, args, usedPrefix, command }) => {
    if (!text) return m.reply(`🍭 Ingresa Un Texto Para Realizar Tu Sticker\n> *Ejemplo:* ${usedPrefix + command} CrowBot`)
    let teks = encodeURI(text)
    if (command == 'attp') {
        const data = {
            text: `${text}`
        };
        const response = await axios.post('https://salism3api.pythonanywhere.com/text2gif', data);
        const x=response.data.image;
        let stiker = await sticker(null,x,global.packname, global.author)
        conn.sendFile(m.chat, stiker, null, { asSticker: true })
    }
    if (command == 'ttp') {
        const data = {
            text: `${text}`,"outlineColor":"255,0,0,255", "textColor":"0,0,0,255"
        };
        const response = await axios.post('https://salism3api.pythonanywhere.com/text2img', data);
        const x=response.data.image;
        let stiker = await sticker(null,x,global.packname, global.author)
        conn.sendFile(m.chat, stiker, null, { asSticker: true })
    }
}
handler.command = handler.help = ['ttp', 'attp']
handler.tags = ['sticker']
export default handler