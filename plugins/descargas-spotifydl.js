/* 
- Downloader Spotify By Izumi-kzx
- https://whatsapp.com/channel/0029VaJxgcB0bIdvuOwKTM2Y
- Y Modificado Por Pene
*/
import fetch from 'node-fetch';

let handler = async (m, { conn, command, text, usedPrefix }) => {
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
    const response = await fetch(`https://dark-core-api.vercel.app/api/download/spotify?key=api&url=${encodeURIComponent(text)}`);
    const result = await response.json();

    if (result.success) {
      const { title, thumbnail, downloadLink } = result;

      const mensaje = `🎵 *Título:* ${title}`;

      await conn.sendFile(m.chat, thumbnail, 'cover.jpg', mensaje, m);

await conn.sendMessage(m.chat, { audio: { url: downloadLink }, mimetype: 'audio/mpeg' }, { quoted: m });

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

handler.help = ['spotify *<url>*'];
handler.tags = ['descargas'];
handler.command = /^(spotifydl|spdl)$/i;
handler.register = true;

export default handler;