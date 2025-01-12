let handler = async (m, { conn, command, usedPrefix }) => {
let txt = `✨ *L U M I N A R H - H O S T* 

*¿Buscas un hosting de alta calidad a precios imbatibles?*  
Descubre *Luminary's Hosting*, tu solución ideal con servidores dedicados y precios accesibles. Ofrecemos un Uptime garantizado 24/7, asegurando que tus proyectos funcionen de manera óptima en todo momento.

🌌 *Información del Host*

🔮 *Dashboard:*  
• (https://home.luminarys.shop)

🧑‍🚀 *Panel de Control:*  
• (https://control.luminarys.shop)

🌠 *Únete a nuestro Canal:*  
• (https://channel.com)

🚀 *Contacto (Soporte):*  
• (https://wa.me/50557865603)

> *¡Únete a nuestra comunidad y disfruta de un servicio excepcional! No dejes pasar la oportunidad de llevar tus proyectos al siguiente nivel con MashaHosting. ¡Estamos aquí para ayudarte! :D*` 
await conn.sendMessage(m.chat, { text: txt,
contextInfo:{
forwardingScore: 9999999,
isForwarded: false, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
title: `✨ L U M I N A R Y - H O S T ✨`,
body: `🍭 Super Hosting 24/7 🍡`,
"previewType": "PHOTO",
thumbnailUrl: 'https://files.catbox.moe/0xfwps.jpg', 
sourceUrl: 'https://chat.whatsapp.com/Jz1OYQPEvMcKbwxo4XoVOt'}}},
{ quoted: fkontak})
}
handler.tags =['info'] 
handler.help = ['host', 'hosting'] 
handler.command = ['host', 'skay', 'skayultraplus', 'hosting']
handler.estrellas = 3;

export default handler