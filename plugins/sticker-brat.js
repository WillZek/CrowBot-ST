import { sticker } from '../lib/sticker.js';
import fetch from 'node-fetch';

let handler = async (m, { conn, text }) => {
if (!text) return m.reply('Por favor, proporciona un texto para el sticker.');

/* try {
 const response = await fetch(`https://brat.caliphdev.com/api/brat?text=${encodeURIComponent(text)}`);
if (!response.ok) return m.reply('Error en la respuesta de la API.');

const buffer = await response.buffer();
let stiker = await sticker(null, buffer, global.packname, global.author);

 conn.sendFile(m.chat, stiker, null, { asSticker: true }, m);
if (stiker) return conn.sendFile(m.chat, stiker, 'pene.webp', '', m);
*/

try {
let pene = `https://api.fgmods.xyz/api/maker/carbon?text=${text}&apikey=elrebelde21`
await conn.sendFile(m.chat, pene, null, { asSticker: true }, m);

} catch (error) {
m.reply(`Error: ${error}`);
  }
}

handler.help = ['brat <texto>'];
handler.tags = ['sticker'];
handler.command = /^brat$/i;
export default handler;