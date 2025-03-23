import fetch from 'node-fetch'
import yts from 'yt-search'

let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw m.reply(`Ingresa un link de Tiktok\n*✧ Ejemplo:* ${usedPrefix}${command} https://vm.tiktok.com/ZMhAk8tLx/`);
conn.sendMessage(m.chat, { react: { text: "🕒", key: m.key } });

  let d2 = await fetch(`https://eliasar-yt-api.vercel.app/api/search/tiktok?query=${text}`)
  let dp = await d2.json()
      const doc = {
      audio: { url: dp.results.audio },
      mimetype: 'audio/mp4',
      fileName: `ttbykeni.mp3`,
      contextInfo: {
        externalAdReply: {
          showAdAttribution: true,
          mediaType: 2,
          mediaUrl: text,
          title: dp.results.title,
          sourceUrl: text,
          thumbnail: await (await conn.getFile(dp.results.thumbnail)).data
        }
      }
    };
    await conn.sendMessage(m.chat, doc, { quoted: m })
await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key }});
}
handler.help = ['tiktokmp3 *<url>*']
handler.tags = ['descargas']
handler.command = /^(tiktokmp3|ttmp3)$/i

export default handler

/* Tiktok MP3 By WillZek 
- >> https://github.com/WillZek
*/

// [💥] 𝗧𝗜𝗞𝗧𝗢𝗞 𝗠𝗣3

/* import fetch from 'node-fetch';

let handler = async(m, { conn, args, usedPrefix, command }) => {

if (!args[0]) return m.reply(`🎩 Ingrese Una Url De Tiktok\n*Ejemplo:* ${usedPrefix + command} https://vm.tiktok.com/ZMh3KL31o/`);

try {
let api = `https://eliasar-yt-api.vercel.app/api/search/tiktok?query=${args[0]}`;
let response = await fetch(api);
let json = await response.json();
let res = json.results;

m.react('🕑');
let ttt = `*Autor:* ${res.author}\n*Título:* ${res.title}`;

let dark = await (await fetch(`https://dark-core-api.vercel.app/api/download/tiktok?key=dk-vip&url=${args[0]}`)).json();
let aud = dark.result.mp3;
let img = dark.result.thumbanail;

await conn.sendFile(m.chat, img, 'thumbnail.jpg', ttt, m, null, rcanal);

conn.sendMessage(m.chat, { audio: { url: aud }, mimetype: 'audio/mpeg' }, { quoted: m });
m.react('✅');

} catch (e) {
m.reply(`Error: ${e.message}`);
m.react('✖️');
 }
}

handler.command = ['tiktokmp3', 'ttmp3'];

export default handler;
*/