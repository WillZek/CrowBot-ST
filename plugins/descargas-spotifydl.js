import fetch from 'node-fetch';

let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text || !text.startsWith('http')) {
    return conn.reply(m.chat, '🍭 Ingresa una URL válida de *Spotify*.', m);
  }

  await m.react('🕓');

  try {
    let apiURL = `https://delirius-apiofc.vercel.app/download/spotifydlv3?url=${encodeURIComponent(text)}`;
    let apiDL = await fetch(apiURL);
    let jsonDL = await apiDL.json();

    if (jsonDL && jsonDL.status && jsonDL.data) {
      let { title, image, url: musicUrl } = jsonDL.data;

      let thumbnail = await (await conn.getFile(image)).data;

      let externalAdReply = {
        showAdAttribution: true,
        mediaType: 2,
        mediaUrl: musicUrl,
        title: title,
        sourceUrl: musicUrl,
        thumbnail: thumbnail
      };

      await conn.sendMessage(m.chat, {
        audio: { url: musicUrl },
        mimetype: 'audio/mp4',
        contextInfo: {
          forwardingScore: 999,
          isForwarded: true,
          externalAdReply
        }
      }, { quoted: m });

      await m.react('✅');
      return; 
    }

    const response = await fetch(`https://api.vreden.web.id/api/spotify?url=${encodeURIComponent(text)}`);
    const result = await response.json();

    if (result.status === 200 && result.result?.status) {
      const { title, artists, cover, music } = result.result;

      let thumbnail = await (await conn.getFile(cover)).data;

      let externalAdReply = {
        showAdAttribution: true,
        mediaType: 2,
        mediaUrl: music,
        title: title,
        sourceUrl: music,
        thumbnail: thumbnail
      };

      await conn.sendMessage(m.chat, {
        audio: { url: music },
        mimetype: 'audio/mp4',
        contextInfo: {
          forwardingScore: 999,
          isForwarded: true,
          externalAdReply
        }
      }, { quoted: m });

      await m.react('✅');
      return;
    }

    const thirdAPI = await fetch(`https://api.agungny.my.id/api/spotify?url=${encodeURIComponent(text)}`);
    const thirdResult = await thirdAPI.json();

    if (thirdResult.status === true && thirdResult.result) {
      const { title, download, image } = thirdResult.result;

      let thumbnail = await (await conn.getFile(image)).data;

      let externalAdReply = {
        showAdAttribution: true,
        mediaType: 2,
        mediaUrl: download,
        title: title,
        sourceUrl: download,
        thumbnail: thumbnail
      };

      await conn.sendMessage(m.chat, {
        audio: { url: download },
        mimetype: 'audio/mp4',
        contextInfo: {
          forwardingScore: 999,
          isForwarded: true,
          externalAdReply
        }
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

handler.help = ['Spotifydl'];
handler.command = /^(spotifydl|spdl|Spotifydl)$/i;
handler.tags = ['descargas'];
handler.register = true;
export default handler;