import fs from 'fs';
import path from 'path';
let handler = async (m, { conn }) => {
// React con un emoji al mensaje
m.react('🌞');
// Mensaje que se enviará
const message = "Levántense webones🥵";
if (m.isGroup) {
// Aquí puedes poner la URL del sticker que deseas enviar
const stickerUrl = 'https://i.ibb.co/g4MHfC3/crow.webp'; // Reemplaza con la URL del sticker que quieres usar
// Envía el mensaje y el sticker
await conn.sendMessage(m.chat, { text: message }, { quoted: m });
await conn.sendMessage(m.chat, { url: stickerUrl }, { sendMediaAsSticker: true });
}
}
handler.help = ['despertar'];
handler.tags = ['grupo'];
handler.command = ['despertar'];
handler.group = true;
export default handler;