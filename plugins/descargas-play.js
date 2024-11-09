/*
Créditos A I'm Fz:
 - https://github.com/FzTeis
*/
import yts from 'yt-search';
const handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `\`\`\`[🌠] Por favor ingresa un texto. Ejemplo:\n${usedPrefix + command} Did i tell u that i miss you\`\`\``;

  const isVideo = /vid$/.test(command);
  const search = await yts(text);

  if (!search.all || search.all.length === 0) {
    throw "No se encontraron resultados para tu búsqueda.";
  }

  const videoInfo = search.all[0];
  const body = `\`\`\`⊜─⌈ 💿 ◜CROW - PLAY◞ 💿 ⌋─⊜

    ≡ Título : » ${videoInfo.title}
    ≡ Views : » ${videoInfo.views}
    ≡ Duration : » ${videoInfo.timestamp}
    ≡ Uploaded : » ${videoInfo.ago}
    ≡ URL : » ${videoInfo.url}

# 🌠 Su ${isVideo ? 'Video' : 'Audio'} se está enviando, espere un momento...\`\`\``;

  conn.sendMessage(m.chat, {
    image: { url: videoInfo.thumbnail },
    caption: body,
  }, { quoted: fkontak });

  let result;
  try {
    if (command === 'play') {
      result = await mp3(videoInfo.url);
    } else if (command === 'playvid') {
      result = await mp4(videoInfo.url);
    } else {
      throw "Comando no reconocido.";
    }

    if (!result.status) throw result.msg;

    conn.sendMessage(m.chat, {
      [isVideo ? 'video' : 'audio']: { url: result.media },
      mimetype: isVideo ? "video/mp4" : "audio/mpeg",
      caption: `Título: ${result.title}\nURL: ${result.url}`,
    }, { quoted: m });

  } catch (error) {
    throw error.msg || "Ocurrió un error al procesar tu solicitud.";
  }
};

handler.command = ['play', 'playvid'];
handler.help = ['play', 'playvid'];
handler.tags = ['dl'];
handler.diamond = 4;

export default handler;

const getVideoId = (url) => {
  const regex = /(?:v=|\/)([0-9A-Za-z_-]{11}).*/;
  const match = url.match(regex);
  if (match) {
    return match[1];
  }
  throw new Error("Invalid YouTube URL");
};

async function acc(url) {
  const respuesta = await axios.get(`http://tinyurl.com/api-create.php?url=${url}`);
  return respuesta.data;
}

async function mp3(url, { quality = '192' } = {}) {
  try {
    const videoId = getVideoId(url);
    const { videos } = await yts(videoId);
    const videoData = videos[0];

    const data = new URLSearchParams({ videoid: videoId, downtype: 'mp3', vquality: quality });
    const response = await axios.post('https://api-cdn.saveservall.xyz/ajax-v2.php', data, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
    });

    const mp3Link = response.data.url;
    return {
      status: true,
      creator: "WillZek",
      msg: "¡Descarga de contenido con éxito!",
      title: videoData.title,
      thumbnail: videoData.image,
      url: `https://youtu.be/${videoId}`,
      media: await acc(mp3Link),
    };
  } catch (error) {
    return {
      status: false,
      msg: "¡Error al recuperar datos!",
      err: error.message,
    };
  }
}

async function mp4(url, { quality = '480' } = {}) {
  try {
    const videoId = getVideoId(url);
    const { videos } = await yts(videoId);
    const videoData = videos[0];

    const data = new URLSearchParams({ videoid: videoData.videoId, downtype: 'mp4', vquality: quality });
    const response = await axios.post('https://api-cdn.saveservall.xyz/ajax-v2.php', data, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
    });

    const mp4Link = response.data.url;
    return {
      status: true,
      creator: "WillZek",
      msg: "🌠¡Descarga de contenido con éxito!",
      title: videoData.title,
      thumbnail: videoData.image,
      url: `https://youtu.be/${videoId}`,
      media: await acc(mp4Link),
    };
  } catch (error) {
    return {
      status: false,
      msg: "¡Error al recuperar datos!",
      err: error.message,
    };
  }
}