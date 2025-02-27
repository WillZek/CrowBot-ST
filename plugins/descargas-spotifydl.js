/* 
- Downloader Spotify By Izumi-kzx
- https://whatsapp.com/channel/0029VaJxgcB0bIdvuOwKTM2Y
*/
import fetch from 'node-fetch';

let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text || !text.startsWith('http')) {
    return conn.reply(m.chat, '[ ᰔᩚ ] Ingresa una URL válida de *Spotify*.', m);
  }

  await m.react('🕓');

  try {
    let apiURL = `https://delirius-apiofc.vercel.app/download/spotifydlv3?url=${encodeURIComponent(text)}`;
    let apiDL = await fetch(apiURL);
    let jsonDL = await apiDL.json();

    if (jsonDL && jsonDL.status && jsonDL.data) {
      let { title, author, image, duration, url: musicUrl } = jsonDL.data;

      let durationMinutes = Math.floor(duration / 60000);
      let durationSeconds = ((duration % 60000) / 1000).toFixed(0);

      let caption = `🎶 *Título*: ${title}\n🖊️ *Autor*: ${author}\n⏳ *Duración*: ${durationMinutes}:${durationSeconds.padStart(2, '0')}\n🌐 *Enlace*: ${text}`;

      await conn.sendFile(m.chat, image, 'cover.jpg', caption, m);

      await conn.sendMessage(m.chat, {
        audio: { url: musicUrl },
        mimetype: 'audio/mp4'
      }, { quoted: m });

      await m.react('✅');
    } else {
      await m.react('❌');
    }
  } catch (error) {
    console.error(error);
    await m.react('❌');
  }
};

handler.command = /^(spotifydl|spdl|Spotifydl|Spotify)$/i;
handler.tags = ['descargas'];
handler.register = true;
handler.estrellas = 6;

export default handler;