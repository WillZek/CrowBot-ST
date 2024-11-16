import fs from 'fs';
import path from 'path';
let handler = async (m, { conn }) => {
// React con un emoji al mensaje
m.react('🌞');
// Mensaje que se enviará
const message = "Levántense webones🥵";
if (m.isGroup) {
// Aquí puedes poner la ruta del sticker que deseas enviar
const stickerPath = 'https://i.ibb.co/g4MHfC3/crow.webp'; // Reemplaza con la ruta o URL del sticker
// Envía el mensaje
await conn.sendMessage(m.chat, { text: message }, { quoted: m });
// Envía el sticker
await conn.sendMessage(m.chat, { sticker: fs.readFileSync(stickerPath) }, { quoted: m });
}
}
handler.help = ['despertar'];
handler.tags = ['grupo'];
handler.command = ['despertar'];
handler.group = true;
export default handler;