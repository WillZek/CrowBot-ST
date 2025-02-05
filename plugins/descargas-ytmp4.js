/* *[ ❀ YTMP4 ]*
import fetch from 'node-fetch';

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) return conn.reply(m.chat, `💛 Ingresa un link de YouTube válido\n> Ejemplo https://youtu.be/P4LfHsUnNL8?si=ahDKJ5h0cW-EB9C9`, m, rcanal);

  await m.react('🕓');

  try {
    let api = await (await fetch(`https://api.siputzx.my.id/api/d/ytmp4?url=${text}`)).json();
    let dl_url = api.data.dl[0];

    await conn.sendMessage(m.chat, { video: { url: dl_url }, caption: `${resp}` },{ quoted: m });

    await m.react('✅');
  } catch (error) {
    console.error(error);
    await m.react('❌');
    conn.reply(m.chat, `✖️ error comando mal usado ${usedPrefix + commando} *<url>*  `, m, rcanal);
  }
};

handler.help = ['ytmp4 *<url>*'];
handler.tags = ['descargas'];
handler.command = ['ytmp4', 'ytv'];
handler.estrellas = 4;
handler.register = true;

export default handler;
*/

/* 
- Downloader Ytmp4 By DarkCore
- https://whatsapp.com/channel/0029VaJxgcB0bIdvuOwKTM2Y
- Parchado por DarkCore... vip plus
*/

import fetch from 'node-fetch';

let handler = async (m, { conn, text }) => {
    if (!text) return conn.reply(m.chat, '🍟 Ingresa un link de YouTube', m);

    try {
        await m.react('🕒');

        const apiKey = '777izumi';
        const apiUrl = `https://dark-core-api.vercel.app/api/download/ytmp4?url=${encodeURIComponent(text)}&type=video&quality=hdHigh&key=${apiKey}`;
        const response = await fetch(apiUrl);
        const result = await response.json();

        if (!result.success || !result.downloadLink) {
            throw new Error('Error al obtener datos de la API.');
        }

        const videoUrl = result.downloadLink;
        const fileName = 'video.mp4';

        let CB = `🍃 *Video descargado correctamente*`;

        await conn.sendMessage(m.chat, { 
            video: { url: videoUrl }, 
            caption: CB 
        }, { quoted: m });

        await m.react('✅');
    } catch (error) {
        console.error(error);
        await m.react('✖'); 
        m.reply(`❌ *Error:* ${error.message || 'Ocurrió un error desconocido'}`);
    }
};

handler.help = ['ytmp4 *<url>*']; 
handler.command = ['ytmp4'];
handler.tags = ['descargas'];

export default handler;