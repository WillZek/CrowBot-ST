/* Xnnxdl By WillZek 
- Free Codes Titan 
- https://github.com/WillZek 
*/

// [🍨] XNXX - DOWNLOADER

import fetch from 'node-fetch';

let handler = async(m, { conn, args, usedPrefix, command }) => {

if (!args[0]) return m.reply(m.chat, '🍭 Ingresa Un Link De Xnxx', m, rcanal);

try {
let api = `https://archive-ui.tanakadomp.biz.id/download/xnxx?url=${args[0]}`;

let responde = await fetch(api);
let json = await responde.json();
let crow = json.result;

let txt = `*Enviando Resultados*\n> Powered By CrowBot`;
let resul = `*Título:* ${crow.title}`;
let img = crow.image;
let vid = crow.files.low;

await conn.sendFile(m.chat, img, 'crow.jpg', txt, m, null, rcanal);
await conn.sendMessage(m.chat, { video: { url: vid }, caption: resul },{ quoted: m });

} catch (e) {
console.log(e)
m.reply('*No Encontré Resultados*');
m.react('✖️');
 }
};

handler.command = ['xnxxdl'];

export default handler;