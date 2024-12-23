// Código Hecho Por Niño Piña wa.me/50557865603
let handler = async (m, { conn }) => {
m.react('💫');
const message = "*AQUI ESTAN LOS PRECIOS.*\n\n> Renovación💫";
if (m.isGroup) {
const imageUrl = 'https://f.uguu.se/aPQnLyQb.jpg'; // No Cambien El Link Zorras
await conn.sendMessage(m.chat, { image: { url: imageUrl }, caption: message }, { mimetype: 'image/jpeg' });
}
}
handler.help = ['precios1'];
handler.tags = ['main'];
handler.group = true;
handler.command = ['precios1', 'p1'];
export default handler;