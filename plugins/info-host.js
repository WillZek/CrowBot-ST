let handler = async (m, { conn, command, usedPrefix }) => {
let txt = `✨ *C O R I N - P L U S - H O S T* 

*¿Quieres un Host de calidad y con bajos precios?*
Pues te presento a *CorinPlusHost*, un hosting de calidad con servidores dedicados y precios por debajo de 1 USD, estos servidores están destinados a ofrecerte un Uptime 24/7 para que puedas alojar tus proyectos y qué estos funcionen de manera eficaz.

💛 \`\`\`Información del Host\`\`\`

💛 *Dashboard:* 
• https://dash.corinplus.com

💛 *Panel:*
• https://panel.corinplus.com

☘ *Comunidad Oficial:*
• https://chat.whatsapp.com/HR3OLhsuZPqCMImzuHcuON

💛 *Contacto (Corin PLus Host - Asistencia)*
https://wa.me/573147616444

> *Únete a está comunidad y disfruta de un servicio de calidad ✨*` 
await conn.sendMessage(m.chat, { text: txt,
contextInfo:{
forwardingScore: 9999999,
isForwarded: false, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
title: `🍄 C O R I N - H O S T 🍄`,
body: `👑 Hosting 24/7 👑`,
"previewType": "PHOTO",
thumbnailUrl: 'https://telegra.ph/file/934d7ab39d50f7560cef2.png', 
sourceUrl: 'https://dash.corinplus.com'}}},
{ quoted: fkontak})
}
handler.tags = ['main'] 
handler.help = ['host', 'hosting'] 
handler.command = ['host', 'corin', 'corinhost', 'hosting']
export default handler
