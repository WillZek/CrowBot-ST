// Código Hecho Por Niño Piña wa.me/50557865603
let handler = async (m, { conn }) => {
// No Quites Los Créditos🦌
m.react('💫');
// Mensaje que se enviará
const message = "**";
if (m.isGroup) {
// Feliz Navidad🎄
const imageUrl = 'https://i.ibb.co/qJNL5Bg/file.jpg'; // Cambia esta URL por la de la imagen que deseas enviar
// Que No Quites Los Créditos😑
await conn.sendMessage(m.chat, { text: message }, { quoted: m });
// Te Estoy Viendo😑
await conn.sendMessage(m.chat, { image: { url: imageUrl }, caption: message }, { mimetype: 'image/jpeg' });
}
}
handler.help = ['comprar'];
handler.tags = ['main'];
handler.command = ['comprar'];
handler.group = true;
export default handler;