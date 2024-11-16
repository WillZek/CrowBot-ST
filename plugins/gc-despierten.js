// Código Hecho Por Niño Piña wa.me/50557865603
let handler = async (m, { conn }) => {
// React con un emoji al mensaje
m.react('🌞');
// Mensaje que se enviará
const message = "⏰*DESPERTADOR*⏰ Levántense webones 💪🥵";
if (m.isGroup) {
// URL del vídeo
const videoUrl = 'https://files.catbox.moe/xss6jx.mp4'; // Cambia esta URL por la del vídeo que deseas enviar
// Envía el mensaje
await conn.sendMessage(m.chat, { text: message }, { quoted: m });
// Envía el vídeo
await conn.sendMessage(m.chat, { video: { url: videoUrl }, caption: message }, { mimetype: 'video/mp4' });
}
}
handler.help = ['despertar'];
handler.tags = ['grupo'];
handler.command = ['despertar'];
handler.group = true;
export default handler;