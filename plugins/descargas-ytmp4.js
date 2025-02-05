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

import fetch from 'node-fetch';

let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) return conn.reply(m.chat, '🍟 Ingresa un link de YouTube', m);

    try {
        await m.react('🕒');

        const apiKey = 'xenzpedo';
        const apiUrl = `https://api.botcahx.eu.org/api/dowloader/yt?url=${encodeURIComponent(text)}&apikey=${apiKey}`;
        const response = await fetch(apiUrl);
        const result = await response.json();

        if (!result.status || !result.result) {
            throw new Error('Error al obtener datos de la API.');
        }

        const { title, duration, mp3, mp4 } = result.result;

        const durationInSeconds = parseInt(duration);

        let HS = `🍃 *Título :* ${title}\n🍃 *Duración :* ${(durationInSeconds / 60).toFixed(2)} minutos`;

        if (durationInSeconds >= 2400) { 
            await conn.sendMessage(m.chat, { 
                document: { url: mp4 }, 
                mimetype: 'video/mp4', 
                fileName: `${title}.mp4`, 
                caption: HS 
            }, { quoted: m });
        } else {
            await conn.sendMessage(m.chat, { 
                video: { url: mp4 }, 
                caption: HS 
            }, { quoted: m });
        }

        await m.react('✅');
    } catch (error) {
        console.error(error);
        await m.react('✖'); 
    }
};

handler.help = ['ytmp4 *<url>*']; 
handler.command = ['ytmp4', 'ytv'];
handler.tags = ['descargas'];

export default handler;
