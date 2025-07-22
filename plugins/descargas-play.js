import fetch from 'node-fetch';
import fg from 'senna-fg';

let handler = async (m, { conn, args, command }) => {
  if (!args[0]) return m.reply(`🍭 Ingresa un link de YouTube.\n\n*Ejemplo:* .play https://youtu.be/4JSPcvKPhSM`);

  let json = await (await fetch(`https://delirius-apiofc.vercel.app/download/ytmp4?url=${args[0]}`)).json();
  let data = json.data;

  if (!data) return m.reply('❌ No se pudo obtener información del video.');

  let texto = `📀 *${data.title}*\n\n👤 *Autor:* ${data.author}\n⏱️ *Duración:* ${data.duration}\n💬 *Comentarios:* ${data.comments}\n👁️ *Vistas:* ${data.views}\n\n¿Qué deseas hacer?`;

  const buttons = [
    { buttonId: `.audio ${args[0]}`, buttonText: { displayText: '🎧 Descargar Audio' }, type: 1 },
    { buttonId: `.video ${args[0]}`, buttonText: { displayText: '📹 Descargar Video' }, type: 1 },
    { buttonId: `${args[0]}`, buttonText: { displayText: '🌐 Ver en YouTube' }, type: 1 },
  ];

  const buttonMessage = {
    image: { url: data.image },
    caption: texto,
    footer: '🎵 Elige una opción:',
    buttons: buttons,
    headerType: 4,
  };

  await conn.sendMessage(m.chat, buttonMessage, { quoted: m });
};

handler.command = ['play'];
handler.help = ['play'].map(c => `.${c} <enlace de YouTube>`);
handler.tags = ['descargas'];

export default handler;