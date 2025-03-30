// By WillZek >> Para CrowBot

import fetch from 'node-fetch';
import fg from 'senna-fg';

let handler = async(m, { conn, usedPrefix, command, text }) => {

if (!text) return m.reply(`🍭 Ingresa Un Texto Para Buscar En Youtube\n> *Ejemplo:* ${usedPrefix + command}crow edits`);

try {
let api = await (await fetch(`https://delirius-apiofc.vercel.app/search/ytsearch?q=${text}`)).json();

let results = api.data[0];

let txt = `✨ *Título:* ${results.title}\n⌛ *Duración:* ${results.duration}\n📎 *Link:* ${results.url}\n📆 *Publicado:* ${results.publishedAt}`;

let img = results.image;

/* conn.sendMessage(m.chat, { 
        image: { url: img }, 
        caption: txt, 
        footer: dev, 
        buttons: [
            {
                buttonId: `.ytmp4doc ${results.url}`,
                buttonText: { displayText: 'Obtener Video' }
            }
        ],
        viewOnce: true,
        headerType: 4
    }, { quoted: m });
*/
m.react('🕒');
conn.sendMessage(m.chat, { image: { url: img }, caption: txt }, { quoted: m });

let api2 = await fetch(`https://api.giftedtech.my.id/api/download/dlmp4?apikey=gifted&url=${{results.url}`)
let json = await api2.json()
let { title, download_url } = json.result
await conn.sendMessage(m.chat, { document: { url: download_url }, fileName: `${title}.mp4`, caption: `> ${wm}`, mimetype: 'video/mp4' }, { quoted: m })
m.react('✅');     

} catch (e) {
m.reply(`Error: ${e.message}`);
m.react('✖️');
  }
}

handler.command = ['pvideo', 'play2'];

export default handler