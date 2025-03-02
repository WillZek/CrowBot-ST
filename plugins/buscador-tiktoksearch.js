/* Tiktok Search By WillZek 
- https://github.com/WillZek 
*/

// 【🔎】𝗧𝗜𝗞𝗧𝗢𝗞 𝗦𝗘𝗔𝗥𝗖𝗛

import fetch from 'node-fetch';

let handler = async(m, { conn, text, usedPrefix, command }) => {

if (!text) return m.reply(`🍭 Ingrese Un Texto Para Buscarlo En Tiktok\n> *Ejemplo:* ${usedPrefix + command} Crow Edits`);

try {
let api = `https://delirius-apiofc.vercel.app/search/tiktoksearch?query=${text}`;

let response = await fetch(api);
let json = await response.json();

m.react('🕑');
let txt = `🔎 \`TIKTOK - SEARCH\`.`;
      for (let i = 0; i < (5 <= json.meta.length ? 5 : json.meta.length); i++) {
    let meta = json.meta[i];
    txt += `\n\n`;
    txt += `✧ *Titulo:* ${meta.title}\n`
    txt += `✧ *Likes:* ${meta.like}\n`
    txt += `✧ *Comentarios:* ${meta.coment}\n`
    txt += `✧ *Compartidas:* ${meta.share}\n`
    txt += `✧ *Link:* ${meta.url}`;
     }

m.react('🕒');
let metaa = json.meta[0];
conn.sendMessage(m.chat, { 
        text: txt, 
        footer: dev, 
        buttons: [
            {
                buttonId: `${usedPrefix}tiktok ${metaa.url}`,
                buttonText: { displayText: 'Descargar Video' }
            },
            {
                buttonId: `${usedPrefix}ttmp3 ${metaa.url}`,
                buttonText: { displayText: 'Descargar Audio' }
            }
        ],
        viewOnce: true,
        headerType: 4
    }, { quoted: m });
m.react('✅');

} catch (e) {
m.reply(`Error: ${e.message}`);
m.react('✖️');
 }
};

handler.help = ['tiktoksearch'];
handler.tag = ['buscador'];
handler.command = ['tiktoksearch', 'ttsearch'];

export default handler;