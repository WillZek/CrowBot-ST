/* HTML WEB By WillZek 
- Free Codes Titan
- https://whatsapp.com/channel/0029ValMlRS6buMFL9d0iQ0S
*/

// [🕵️] 𝗛𝗧𝗠𝗟 𝗪𝗘𝗕

import fetch from 'node-fetch';

let handler = async(m, { conn, args, usedPrefix, command }) => {

if (!args[0]) return m.reply('🍭 Ingresa Un Link De Alguna Web');
m.react('🕑');

let api = `https://delirius-apiofc.vercel.app/tools/htmlextract?url=${args[0]}`;
let titan = await fetch(api);
let json = await titan.json();
let data = json.html;

let xd = 'https://files.catbox.moe/trd8vu.jpg';
let html = `*🎩 HTML EXTRAIDO DE LA WEB:* ${data}*`

m.react('✅');
conn.sendMessage(m.chat, { image: { url: xd }, caption: html }, { quoted: fkontak });
};

handler.command = ['htmlweb', 'hweb'];

export default handler;