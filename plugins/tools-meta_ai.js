// Código Creado Por Niño Piña Wa.me/50557865603
import fetch from 'node-fetch';
const handler = async (m, {conn, text, usedPrefix, command}) => {
// No Quiten los créditos zorras
if (!text) throw `*🧑‍💻 Ingresa un texto para generar tu imagen a tu gusto*`;
m.react('🕒');
await conn.sendMessage(m.chat, {text: '*🧑‍💻 Espere, Estamos Trabajando en su imagen*'}, {quoted: m});
try {
// No cambien la api o se joden xdd
const response = await fetch(`https://eliasar-yt-api.vercel.app/api/ai/text2img?prompt=${encodeURIComponent(text)}`);
// Siuuuuuu
if (!response.ok) throw new Error('Network response was not ok');
// Me duele l pija😔
const buffer = await response.buffer();
m.react('✔️');
await conn.sendMessage(m.chat, {image: buffer}, {quoted: m});
} catch (error) {
console.error(error);
throw `*🚨 Lo sentimos, ha ocurrido un error 😔*`;
}
}
handler.tags = ['tools'];
handler.help = ['genearimg'];
handler.command = ['genearimg2', 'imgg2', 'meta'];
// El handler me la chupa 
export default handler;
