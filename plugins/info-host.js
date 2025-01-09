let handler = async (m, { conn, command, usedPrefix }) => {
let txt = `✨ *M A S H A - H O S T I N G* 

*¿Buscas un hosting de alta calidad a precios imbatibles?*  
Descubre *MashaHosting*, tu solución ideal con servidores dedicados y precios accesibles  Ofrecemos un Uptime garantizado 24/7, asegurando que tus proyectos funcionen de manera óptima en todo momento.

🟢 *Información del Host*

🔮 *Dashboard:*  
• (https://dash.masha-host.shop)

🧃 *Panel de Control:*  
• (https://panel.masha-host.shop)

🌟 *Únete a nuestro Canal:*  
• (${mch)

⚜️ *Contacto (Soporte):*  
• (https://wa.me/50557865603)

> *¡Únete a nuestra comunidad y disfruta de un servicio excepcional! No dejes pasar la oportunidad de llevar tus proyectos al siguiente nivel con MashaHosting. ¡Estamos aquí para ayudarte! :D*` 
await conn.sendMessage(m.chat, { text: txt,
contextInfo:{
forwardingScore: 9999999,
isForwarded: false, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
title: `✨ M A S H A - H O S T I N G ✨`,
body: `⚜️ Super Hosting 24/7 ⚜️`,
"previewType": "PHOTO",
thumbnailUrl: 'https://qu.ax/VsQcv.png', 
sourceUrl: 'https://dash.skyultraplus.com'}}},
{ quoted: fkontak})
}
handler.tags =['info'] 
handler.help = ['host', 'hosting'] 
handler.command = ['host', 'skay', 'skayultraplus', 'hosting']
handler.estrellas = 3;

export default handler