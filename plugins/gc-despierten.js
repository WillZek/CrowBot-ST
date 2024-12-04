// Código Hecho Por Niño Piña wa.me/50557865603
let handler = async (m, { conn }) => {
// React con un emoji al mensaje
m.react('🌞');
// Siuuuuuuuuu
const message = "⏰*DESPERTADOR*⏰ Levántense webones 💪🥵";
if (m.isGroup) {
// CrowBot🎄
const videoUrl = 'https://files.catbox.moe/xss6jx.mp4'; //  Levantense🗣️🔥🔥
// Feliz Navidad
// Deja Los Créditos
await conn.sendMessage(m.chat, { video: { url: videoUrl }, caption: message }, { mimetype: 'video/mp4' });
}
}
handler.help = ['despertar'];
handler.tags = ['grupo'];
handler.command = ['despertar'];
handler.group = true;
export default handler;