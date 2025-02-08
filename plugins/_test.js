// Twitterdl By WillZek 

import fetch from 'node-fetch';

let handler = async(m, { conn, args, usedPrefix, command }) => {

if (!args[0]) return m.reply('⬇️ Ingresa Un Link De Twitter Para Poder Mandar Su Video o Imagen');

try {
let api = `https://delirius-apiofc.vercel.app/download/twitterdl?url=${args[0]}`;
let response = await fetch(api);
let json = await response.json();

if (!json.media || json.media.length === 0) {
return m.reply('✖️ No se encontró ningún medio en el enlace proporcionado.');
        }
        
let arch = json.media[0];

if (arch.type === 'photo') {
await conn.sendMessage(m.chat, { image: { url: arch.url }, caption: '¡Imagen descargada con éxito!' }, { quoted: fkontak });
m.react('✅');
} else if (arch.type === 'video') {

let txt = `> *¡Descargado con éxito!*`;

await conn.sendMessage(m.chat, { video: { url: arch.url }, caption: txt }, { quoted: fkontak });
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
handler.command = ['test'];
handler.estrellas = 5;

export default handler