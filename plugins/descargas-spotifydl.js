/* 
- Downloader Spotify By Izumi-kzx
- https://whatsapp.com/channel/0029VaJxgcB0bIdvuOwKTM2Y
*/
import fetch from 'node-fetch';

let handler = async (m, { conn, comman text, usedPrefix }) => {
  if (!text) return m.reply('[ ᰔᩚ ] Ingresa el nombre o enlace para buscar en *Spotify*.');

await m.react('🕓');

try {
const response = await fetch(`https://dark-core-api.vercel.app/api/download/spotify?key=api&url=${encodeURIComponent(text)}`);
const result = await response.json();

if (result.success) {
const { title, thumbnail, downloadLink } = result;

      const mensaje = `🎵 *Título:* ${title}`;

 await conn.sendMessage(m.chat, { audio: { url: downloadLink }, mimetype: 'audio/mpeg' }, { quoted: m });
      await m.react('✅');

} catch (error) {
console.error(error);
await m.react('❌');
m.reply('[ ᰔᩚ ] Ocurrió un error al procesar tu solicitud.');
  }
};

handler.help = ['spotifydl *<url>*'];
handler.tags = ['descargas'];
handler.command = /^(spotifydl|spdl|Spotifydl)$/i;
handler.register = true;

export default handler;