let handler = async (m, { conn }) => {
// React con un emoji al mensaje
m.react('🌞');
// Mensaje que se enviará
const message = "Levántense webones🥵";
if (m.isGroup) {
// URL del sticker
const stickerUrl = 'https://i.ibb.co/g4MHfC3/crow.webp';
// Envía el mensaje
await conn.sendMessage(m.chat, { text: message }, { quoted: m });
// Envía el sticker
await conn.sendMessage(m.chat, { url: stickerUrl }, { sendMediaAsSticker: true });
}
}
handler.help = ['despertar'];
handler.tags = ['grupo'];
handler.command = ['despertar'];
handler.group = true;
export default handler;