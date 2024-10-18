import fetch from "node-fetch"
import yts from 'yt-search'

const handler = async (m, { text, usedPrefix, command, conn }) => {
    if (!text) {
      throw m.reply("💛 Ingresa una consulta de *YouTube*");
    }
  
  try {
    let res = await yts(text);
    let videoList = res.all;
    let video = videoList[0];

    let texto = `_*Reproduciendo  ${video.title}...*_`;

    await conn.sendMessage(m?.chat, {react: {text: `🎵`, key: m?.key}});

    await conn.sendMessage(m.chat, { 
      image: { url: video.thumbnail },  
      caption: texto 
    }, { quoted: m });

    let apiUrl = `https://endpoint.web.id/downloader/yt-audio?url=${encodeURIComponent(video.url)}&key=gojou`;
    let result = await (await fetch(apiUrl)).json();

    if (result.status && result.code === 200 && result.result && result.result.download_url) {
      let audioUrl = result.result.download_url;

      await conn.sendMessage(m.chat, { 
        audio: { url: audioUrl }, 
        mimetype: 'audio/mp4', 
      }, { quoted: m });
    } else {
      m.reply('No se encontro una respuesta de la API.');
    }

  } catch (error) {
    console.error(error);
    m.reply('Error interno, intenta mas tarde.');
  }
}
handler.help = ['play <consulta>']
handler.tags = ['downloader']
handler.command = /^(play)$/i

handler.premium = false
handler.register = true

export default handler