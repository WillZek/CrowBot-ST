// Código Hecho Por Niño Piña wa.me/50557865603
let handler = async (m, { conn }) => {
m.react('💫');
const message = "🌐 *`MASHA-HOSTING`*\n> *¡HOSTING DE CALIDAD QUE IMPULSA TU ÉXITO! 🚀*\n🌟 *¡Desata el poder de tu presencia digital con nuestros servers! ⚡️ Rápidos, seguros y listos para la acción. ¡No te quedes atrás, únete a nuestro host de calidad y potencia tus proyectos alojando, bot de WhatsAp, servidores de Minecraf, páginas web y muchos más! 💥"*\n\n💰 𝗣𝗿𝗲𝗰𝗶𝗼𝘀 𝗔𝗽𝗮𝗿𝘁𝗶𝗿 𝗱𝗲:\n1$ en adelante\n\n📞 𝗖𝗼𝗻𝘁𝗮𝗰𝘁𝗮𝗻𝗼𝘀\n ${mashac}\n\n📝 *¡Regístrate ahora y lleva tu proyecto al siguiente nivel!*\n> *[dash.masha-host.shop/home]*\n\n${mashach}";
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