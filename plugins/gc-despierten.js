// Código Hecho Por Niño Piña wa.me/50557865603
let handler = async (m, { conn }) => {
// React con un emoji al mensaje
m.react('🌞');
// Mensaje que se enviará
const message = "⏰*DESPERTADOR*⏰ Levántense webones 💪🥵";
if (m.isGroup) {
// URL del sticker
const stickerUrl = 'https://files.catbox.moe/z7w5t1.webp';
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