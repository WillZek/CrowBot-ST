// Código Creado Por WillZek Wa.me/50557865603
import fetch from 'node-fetch';
const handler = async (m, {conn, text, usedPrefix, command}) => {

if (!text) throw `*🧑‍💻 Ingresa un texto para generar tu imagen a tu gusto*`;
m.react('🕒');
await conn.sendMessage(m.chat, {text: '*🧑‍💻 Espere, Estamos Trabajando en su imagen*'}, {quoted: m});
try {
const response = await fetch(`https://eliasar-yt-api.vercel.app/api/ai/text2img?prompt=${encodeURIComponent(text)}`);

if (!response.ok) throw new Error('Network response was not ok');
const buffer = await response.buffer();
m.react('✔️');
await conn.sendMessage(m.chat, {image: buffer}, {quoted: m});
} catch (error) {
console.error(error);
throw `*🚨 Lo sentimos, ha ocurrido un error 😔*`;
}
}
handler.tags = ['tools'];
handler.help = ['genimg'];
handler.command = ['genearimg2', 'imgg2', 'meta', 'genimg'];

export default handler;
