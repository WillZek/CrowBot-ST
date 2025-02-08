/* Twitterdl By WillZek 
- Free Codes Titan
- https://whatsapp.com/channel/0029ValMlRS6buMFL9d0iQ0S
*/

// [🌠] Twitter Downloader

import fetch from 'node-fetch';

let handler = async(m, { conn, args, usedPrefix, command }) => {
if (!args[0]) return m.reply('⬇️ Ingresa Un Link De Twitter');

try {
let api = `https://delirius-apiofc.vercel.app/download/twitterdl?url=${args[0]}`;
let response = await fetch(api);
let json = await response.json();

if (!json.found) {
return m.reply(`✖️ Error: ${json.error || 'No se encontró ningún medio en el enlace proporcionado.'}`);
}

let media = json.media;
let arch = media[0];

if (json.type === 'video') {
let videoUrl = arch.url;
let txt = `> *¡Descargado con Exito!*`;

await conn.sendMessage(m.chat, { video: { url: videoUrl }, caption: txt }, { quoted: fkontak });
m.react('✅');

} else if (json?.type === 'image') {
let imageUrl = arch.url;
await conn.sendMessage(m.chat, { image: { url: imageUrl }, caption: '¡Descargado Con Exito!' }, { quoted: fkontak });
m.react('✅');
} else {
return m.reply('✖️ El enlace no es ni una imagen ni un video.');
}

} catch (e) {
m.reply(`Error: ${e.message}`);
m.react('✖️');
 }
}

handler.help = ['xdl'];
handler.tag = ['descargas'];
handler.command = ['xdl', 'twitterdl', 'test']
handler.estrellas = 5;

export default handler;