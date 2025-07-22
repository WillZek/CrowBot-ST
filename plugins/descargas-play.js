import fetch from 'node-fetch';
import fg from 'senna-fg';

let handler = async (m, { conn, args, command }) => {
  const url = args[0];

  if (!url || !url.includes('youtube.com') && !url.includes('youtu.be')) {
    return m.reply(`🍭 Ingresa un enlace válido de YouTube.\n\nEjemplo: *.play https://youtu.be/4JSPcvKPhSM*`);
  }

  let json = await (await fetch(`https://delirius-apiofc.vercel.app/download/ytmp4?url=${url}`)).json();
  let data = json.data;

  if (!data) return m.reply('❌ No se pudo obtener información del video.');

  let texto = `📀 *${data.title}*\n\n👤 *Autor:* ${data.author}\n⏱️ *Duración:* ${data.duration}\n💬 *Comentarios:* ${data.comments}\n👁️ *Vistas:* ${data.views}\n\n¿Deseas descargar el audio o video?`;

  const buttons = [
    { buttonId: `.playaudio ${url}`, buttonText: { displayText: '🎧 Audio' }, type: 1 },
    { buttonId: `.playvideo ${url}`, buttonText: { displayText: '📹 Video' }, type: 1 },
    { buttonId: url, buttonText: { displayText: '🌐 Ver en YouTube' }, type: 1 },
  ];

  const buttonMessage = {
    image: { url: data.image },
    caption: texto,
    footer: 'Elige una opción abajo 👇',
    buttons,
    headerType: 4,
  };

  return conn.sendMessage(m.chat, buttonMessage, { quoted: m });
};

handler.command = ['play'];
handler.help = ['play <enlace de YouTube>'];
handler.tags = ['descargas'];

export default handler;

// 🎧 Handler de audio
export const playaudio = async (m, { conn, args }) => {
  const url = args[0];
  if (!url) return m.reply('⚠️ Falta el link de YouTube');

  let api = await (await fetch(`https://api.neoxr.eu/api/youtube?url=${url}&type=audio&quality=128kbps&apikey=GataDios`)).json();
  if (!api?.data?.url) return m.reply('❌ No se pudo obtener el audio.');

  await conn.sendMessage(m.chat, {
    document: { url: api.data.url },
    mimetype: 'audio/mpeg',
    fileName: `${api.data.title}.mp3`,
    caption: '🎧 Aquí tienes tu audio.'
  }, { quoted: m });
};

// 📹 Handler de video
export const playvideo = async (m, { conn, args }) => {
  const url = args[0];
  if (!url) return m.reply('⚠️ Falta el link de YouTube');

  let data = await fg.ytmp4(url);
  if (!data?.dl_url) return m.reply('❌ No se pudo obtener el video.');

  await conn.sendMessage(m.chat, {
    document: { url: data.dl_url },
    mimetype: 'video/mp4',
    fileName: `${data.title}.mp4`,
    caption: '📹 Aquí tienes tu video.'
  }, { quoted: m });
};