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
    const response = await (await fetch(`https://apis-starlights-team.koyeb.app/starlight/spotifydl?url=${text}`)).json();

      const { title, thumbnail, music } = response;

      const mensaje = `🎵 *Título:* ${title}`;

      await conn.sendFile(m.chat, thumbnail, 'cover.jpg', mensaje, m);

await conn.sendMessage(m.chat, { audio: { url: music }, mimetype: 'audio/mpeg' }, { quoted: m });

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
      `[ ᰔᩚ ] Ocurrió un error al procesar tu solicitud.\n*${error.message}`,
      m
    );
  }
};

handler.help = ['spotify *<url>*'];
handler.tags = ['descargas'];
handler.command = /^(spotifydl|spdl)$/i;
handler.register = true;

export default handler;