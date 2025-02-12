import { sticker } from '../lib/sticker.js';

let handler = async (m, { conn, text }) => {
if (!text) throw 'Por favor, proporciona un texto para el sticker.';

let stiker;
try {
const response = await fetch(`https://brat.caliphdev.com/api/brat?text=${encodeURIComponent(text)}`);
if (!response.ok) throw 'Error en la respuesta de la API.';

const buffer = await response.buffer();
stiker = await sticker(null, buffer, global.packname, global.author);
} catch (error) {
throw `Error: ${error}`;
}

if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m);
throw 'Error al crear tu sticker bro';
}

handler.help = ['brat <texto>'];
handler.tags = ['sticker'];
handler.command = /^brat$/i;
export default handler;