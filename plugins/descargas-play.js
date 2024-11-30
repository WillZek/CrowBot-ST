import yts from 'yt-search';
const handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `\`\`\`[ 🌴 ] Por favor ingresa un texto. Ejemplo:\n${usedPrefix + command} Did i tell u that i miss you\`\`\``;

  const isVideo = /vid|2|mp4|v$/.test(command);
  const search = await yts(text);

  if (!search.all || search.all.length === 0) {
    throw "No se encontraron resultados para tu búsqueda.";
  }

  const videoInfo = search.all[0];
  const body = `\`\`\`⊜─⌈ 📻 ◜YouTube Play◞ 📻 ⌋─⊜

    ≡ Título : » ${videoInfo.title}
    ≡ Views : » ${videoInfo.views}
    ≡ Duration : » ${videoInfo.timestamp}
    ≡ Uploaded : » ${videoInfo.ago}
    ≡ URL : » ${videoInfo.url}

# 🌴 Su ${isVideo ? 'Video' : 'Audio'} se está enviando, espere un momento...\`\`\``;

  conn.sendMessage(m.chat, {
    image: { url: videoInfo.thumbnail },
    caption: body,
  }, { quoted: fkontak });

  let result;
  try {
    if (command === 'play' || command === 'yta' || command === 'ytmp3') {
      result = await fg.yta(videoInfo.url);
    } else if (command === 'playvid' || command === 'ytv' || command === 'play2' || command === 'ytmp4') {
      result = await fg.ytv(videoInfo.url);
    } else {
      throw "Comando no reconocido.";
    }

    conn.sendMessage(m.chat, {
      [isVideo ? 'video' : 'audio']: { url: result.dl_url },
      mimetype: isVideo ? "video/mp4" : "audio/mpeg",
      caption: `Título: ${result.title}`,
    }, { quoted: m });

  } catch (error) {
    throw "Ocurrió un error al procesar tu solicitud.";
  }
};

handler.command = handler.help = ['play', 'playvid', 'ytv', 'ytmp4', 'yta', 'play2', 'ytmp3'];
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