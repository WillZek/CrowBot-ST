// By WillZek >> Para CrowBot

import fetch from 'node-fetch';

let handler = async(m, { conn, usedPrefix, command, text }) => {

if (!text) return m.reply(`🍭 Ingresa Un Texto Para Buscar En Youtube\n> *Ejemplo:* ${usedPrefix + command}crow edits`);

try {
let api = await (await fetch(`https://delirius-apiofc.vercel.app/search/ytsearch?q=${text}`)).json();

let results = api.data[0];

let txt = `✨ *Título:* ${results.title}\n⌛ *Duración:* ${results.duration}\n📎 *Link:* ${results.url}\n📆 *Publicado:* ${results.publishedAt}`;

let img = results.image;

conn.sendMessage(m.chat, { 
        image: { url: img }, 
        caption: txt, 
        footer: dev, 
        buttons: [
            {
                buttonId: `.ytmp4 ${results.url}`,
                buttonText: { displayText: 'Obtener Video' }
            }
        ],
        viewOnce: true,
        headerType: 4
    }, { quoted: m });

} catch (e) {
m.reply(`Error: ${e.message}`);
m.react('✖️');
  }
}

handler.command = ['pvideo'];

export default handler