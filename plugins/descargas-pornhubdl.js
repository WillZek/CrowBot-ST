import axios from 'axios';

let handler = async (m, { conn, args }) => {
  if (!db.data.chats[m.chat].nsfw && m.isGroup) {
    return m.reply('[❗] 𝐋𝐨𝐬 𝐜𝐨𝐦𝐚𝐧𝐝𝐨𝐬 +𝟏𝟖 𝐞𝐬𝐭𝐚́𝐧 𝐝𝐞𝐬𝐚𝐜𝐭𝐢𝐯𝐚𝐝𝐨𝐬 𝐞𝐧 𝐞𝐬𝐭𝐞 𝐠𝐫𝐮𝐩𝐨.\n> 𝐬𝐢 𝐞𝐬 𝐚𝐝𝐦𝐢𝐧 𝐲 𝐝𝐞𝐬𝐞𝐚 𝐚𝐜𝐭𝐢𝐯𝐚𝐫𝐥𝐨𝐬 𝐮𝐬𝐞 .enable nsfw');
  }

  if (!args[0]) {
    return conn.reply(m.chat, `🍭 Por favor, ingresa el enlace del video de Pornhub que deseas descargar.\nEjemplo: ${usedPrefix}.pornhubdl https://www.pornhub.com/view_video.php?viewkey=64c9a66cca511`, m);
  }

  try {
    const videoUrl = args[0];
    const videoData = await fetchVideoData(videoUrl);
    
    if (!videoData) {
      return conn.reply(m.chat, '⚠️ No se pudo obtener la información del video.', m);
    }

    conn.sendMessage(m.chat, { document: { url: videoData.high }, mimetype: 'video/mp4', fileName: videoData.title }, { quoted: m });
  } catch (e) {
    return conn.reply(m.chat, `⚠️ Ocurrió un error: ${e.message}`, m);
  }
};

async function fetchVideoData(url) {
  try {
    const response = await axios.get(url);
    const html = response.data;
    const json = html.data;
    const res = json.title;

    return { high: json.high, title: res.result.title };
  } catch (error) {
    console.error('⚠️ Ocurrió un error al obtener el video:', error);
    return null;
  }
}

handler.command = ['pornhubdl'];
export default handler;