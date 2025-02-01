// Twitterdl By WillZek 

import fetch from 'node-fetch';

let handler = async(m, { conn, args, usedPrefix, command }) => {

if (!args[0]) return m.reply('⬇️ Ingresa Un Link De Twitter Para Poder Mandar Su Video');

try {
let api = `https://api.dorratz.com/xdown?url=${args[0]}`;
let response = await fetch(api);
let json = await response.json();
let arch = json.media[0];

if (!args[0].match(/x/gi)) return m.reply(m.chat, '✖️ Verifica El Link Para Poder Descargar Tu Archivo ', m, rcanal)

m.react('🕑');
let txt = `> *¡Video descargado con exito!*`;
let link = arch.url;

await conn.sendMessage(m.chat, { video: { url: link }, caption: txt }, {quoted: fkontak});   
m.react('✅');

} catch (e) {
m.reply(`Error: ${e.message}`);
m.react('✖️');
 }
}

handler.help = ['xdl'];
handler.tag = ['descargas'];
handler.command = ['xdl', 'twitterdl'];
handler.estrellas = 5;

export default handler;