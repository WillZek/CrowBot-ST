let handler = async (m, { conn }) => {
    try {
        m.react('💫');
        const text = "🌐 *`MASHA-HOSTING`*  \n" +
        "> *¡HOSTING DE CALIDAD QUE IMPULSA TU ÉXITO! 🚀* \n" +
        "🌟 *¡Desata el poder de tu presencia digital con nuestros servers! ⚡️ Rápidos, seguros y listos para la acción. ¡No te quedes atrás, únete a nuestro host de calidad y potencia tus proyectos alojando, bot de WhatsAp, servidores de Minecraf, páginas web y muchos más! 💥*\n" +

        "💰 *Precios a partir de: [1$ En Adelante!]*  \n" +
        "📞 *Contáctanos:*\n" +
        "• *Wa.me/522431268546\n" +
        "•  *Wa.me/595976230899*\n" +
        "• *Wa.me/584148256527*\n" +
        "• *Wa.me/50557865603* \n\n" +

        "📝 *¡Regístrate ahora y lleva tu proyecto al siguiente nivel!*  \n" +
        "> *[https://dash.masha-host.shop/home]*\n\n" +

        "🌌 *Canal Oficial*\n" +
        "https://whatsapp.com/channel/0029VaoyLfA0LKZKjEh5Yh1J\n\n" +

        "*¡Haz que tu experiencia digital sea una explosión de éxito! 🧑‍🚀💣*";

        const packname = "Masha Hosting";
        const icono = "https://i.ibb.co/JtRv1ts/file.jpg";
        const redes = "https://github.com/WillZek";

        global.rchannel = { 
            contextInfo: { 
                isForwarded: true, 
                forwardedNewsletterMessageInfo: { 
                    newsletterJid: "120363314192605628@newsletter", 
                    serverMessageId: 100, 
                    newsletterName: '🌲【✫𝚃𝙴𝙰𝙼  乂 𝚂𝚃𝙰𝚁𝙲𝙾𝚁𝙴✫】🎅', 
                }, 
                externalAdReply: { 
                    showAdAttribution: true, 
                    title: packname, 
                    body: '❄️𝐅𝐞𝐥𝐢𝐳 𝐍𝐚𝐯𝐢𝐳𝐚𝐝⛄', 
                    mediaUrl: null, 
                    description: null, 
                    previewType: "PHOTO", 
                    thumbnailUrl: icono, 
                    sourceUrl: redes, 
                    mediaType: 1, 
                    renderLargerThumbnail: false 
                }, 
            } 
        };

        const imageUrl = 'https://f.uguu.se/aPQnLyQb.jpg'; // No Cambien El Link Zorras
  await conn.sendMessage(m.chat,  { image: { url: imagenUrl }, { text, ...global.rchannel }, { quoted: m });
    } catch (error) {
        console.error(`*Error*: ${error.message}`);
    }
}
handler.help = ['precios2'];
handler.tag = ['main'];
handler.command = ['precios2', 'p2'];
export default handler;