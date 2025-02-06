/* 
- Downloader Terabox By Angel-OFC 
- https://whatsapp.com/channel/0029VaJxgcB0bIdvuOwKTM2Y
*/

import fetch from 'node-fetch';
import axios from 'axios';

let handler = async (m, { conn, text }) => {
    if (!text) return conn.reply(m.chat, `🍭 Ingresa un link de TeraBox`, m);
    await m.react('🕓');

    try {
        let api = await fetch(`https://dark-core-api.vercel.app/api/terabox?key=api&url=${text}`);
        let json = await api.json();
        if (!json.success) return m.reply('❌ Error al obtener los detalles del enlace, por favor intenta nuevamente.');

        let { fileName, type, thumb, url } = json.result;
        let caption = `*「✐」${fileName}*

> ❒ Tipo » *${type}*
> 🖼️ Vista previa » *${thumb}*`;

        // Enviar el archivo con el caption y el thumbnail
        await conn.sendFile(m.chat, url, fileName, caption, m, false });

        await m.react('✅');
    } catch (error) {
        console.error(error);
        m.reply('❌ Ocurrió un error al procesar la solicitud.');
    }
}

handler.help = ['terabox *<url>*']
handler.tags = ['descargas']
handler.command = ['terabox', 'tbdl']

export default handler;

async function getBuffer(url) {
    try {
        const res = await axios({
            method: 'get',
            url,
            responseType: 'arraybuffer'
        });
        return res.data;
    } catch (err) {
        console.error(err);
        return null;
    }
}