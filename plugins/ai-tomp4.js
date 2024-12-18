import { tovideo (media, 'mp3')} from '../lib/converter.js';

const handler = async (m, { conn, usedPrefix, command }) => {
  // Mensaje cuando no se responde con un video o nota de voz
  const notMediaMessage = '*🌳 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙰 𝙰𝙻 𝚅𝙸𝙳𝙴𝙾 𝙾 𝙽𝙾𝚃𝙰 𝙳𝙴 𝚅𝙾𝚉 𝚀𝚄𝙴 𝙳𝙴𝚂𝙴𝙴 𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙸𝚁 𝙰 Video/𝙼𝙿4*';

  // Verificar si el mensaje citado es un video o nota de voz
  const q = m.quoted ? m.quoted : m;
  const mime = (q || q.msg).mimetype || q.mediaType || '';
  if (!/audio|video/.test(mime)) {
    conn.reply(m.chat, notMediaMessage, m,rcanal); // Enviar mensaje si no es un video o nota de voz
    return; // Detener la ejecución si no es un video o nota de voz
  }

  // Descargar el archivo multimedia
  const media = await q.download();
  if (!media) throw '*🌳 𝙻𝙾 𝙻𝙰𝙼𝙴𝙽𝚃𝙾, 𝙾𝙲𝚄𝚁𝚁𝙸𝙾 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝙰𝙻 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰𝚁 𝚂𝚄 𝚅𝙸𝙳𝙴𝙾, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚅𝚄𝙴𝙻𝚅𝙰 𝙰 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁𝙻𝙾*';

  // Convertir el video o nota de voz a audio
  const video = await toVideo(media, 'mp3');
  if (!video.data) throw '*🌳 𝙻𝙾 𝙻𝙰𝙼𝙴𝙽𝚃𝙾, 𝙾𝙲𝚄𝚁𝚁𝙸𝙾 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝙰𝙻 𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙸𝚁 𝚂𝚄 𝙽𝙾𝚃𝙰 𝙳𝙴 𝚅𝙾𝚉 𝙰 Video/𝙼𝙿4, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚅𝚄𝙴𝙻𝚅𝙰 𝙰 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁𝙻𝙾*';

  // Enviar el archivo de audio convertido
  conn.sendMessage(m.chat, { video: video.data, mimetype: 'video/mpeg' }, { quoted: m });
};

handler.help = ['tomp4', 'tovideo'];
handler.command = /^to(mp4|video)$/i;
handler.register = true
export default handler;