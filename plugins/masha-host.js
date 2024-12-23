// Código Hecho Por Niño Piña wa.me/50557865603
let handler = async (m, { conn }) => {
    m.react('💫');
    const message = "🌐 *`MASHA-HOSTING`*  \n" +
    "> *¡HOSTING DE CALIDAD QUE IMPULSA TU ÉXITO! 🚀* \n" +
    "🌟 *¡Desata el poder de tu presencia digital con nuestros servers! ⚡️ Rápidos, seguros y listos para la acción. ¡No te quedes atrás, únete a nuestro host de calidad y potencia tus proyectos alojando, bot de WhatsAp, servidores de Minecraf, páginas web y muchos más! 💥\n" +
    
    "💰 *Precios a partir de: [1$ En Adelante!]*  \n" +
    "📞 *Contáctanos:*\n" +
    "• *Wa.me/595976####*\n" +
    "•  *Wa.me/522431268###*\n" +
    "• *Wa.me/5055786560* \n\n" +
    
    "📝 *¡Regístrate ahora y lleva tu proyecto al siguiente nivel!*  \n" +
    "> *[https://dash.masha-host.shop/home]*\n\n" +
    
    "🌌 *Canal Oficial*\n" +
    "https://whatsapp.com/channel/0029VaoyLfA0LKZKjEh5Yh1J\n\n" +
    
    "*¡Haz que tu experiencia digital sea una explosión de éxito! 🧑‍🚀💣*";
    
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