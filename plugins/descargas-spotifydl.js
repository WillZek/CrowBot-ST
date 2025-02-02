/* 
- Downloader Spotify By Izumi-kzx
- https://whatsapp.com/channel/0029VaJxgcB0bIdvuOwKTM2Y
*/
import fetch from 'node-fetch';

let handler = async (m, { conn, command, text, usedPrefix }) => {
  const apiKey = 'xenzpedo';

  if (!text) {
    return conn.reply(
      m.chat,
      '[ ᰔᩚ ] Ingresa el nombre o enlace para buscar en *Spotify*.\n\n' + 
      `Ejemplo:\n> *${usedPrefix + command}* https://open.spotify.com/track/123456789`,
      m
    );
  }

  await m.react('🕓');

  try {
    const response = await fetch(
      `https://api.botcahx.eu.org/api/download/spotify?url=${encodeURIComponent(text)}&apikey=${apiKey}`
    );
    const result = await response.json();

    if (result.status && result.result?.data) {
      const { title, artist, thumbnail, url } = result.result.data;

      const mensaje = `🎵 *Título*: ${title}\n🎤 *Artista*: ${artist.name}\n🔗 *Spotify*: ${artist.external_urls.spotify}\n🕒 *Duración*: ${result.result.data.duration}`;

      await conn.sendFile(m.chat, thumbnail, 'cover.jpg', mensaje, m);

      await conn.sendMessage(
        m.chat,
        { 
          audio: { url }, 
          fileName: `${title}.mp3`, 
          mimetype: 'audio/mpeg' 
        }, 
        { quoted: m }
      );

      await m.react('✅');
    } else {
      await m.react('❌');
      conn.reply(
        m.chat,
        '[ ᰔᩚ ] No se pudo obtener la música para este enlace o búsqueda.',
        m
      );
    }
  } catch (error) {
    console.error(error);
    await m.react('❌');
    conn.reply(
      m.chat,
      '[ ᰔᩚ ] Ocurrió un error al procesar tu solicitud.',
      m
    );
  }
};

handler.help = ['spotifydl *<url>*'];
handler.tags = ['descargas'];
handler.command = /^(spotifydl|spdl)$/i;
handler.register = true;

export default handler;