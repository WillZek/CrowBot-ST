/* Repuesto Pal Ytmp4
- Código Modificado por WillZek 
*/

import fetch from 'node-fetch';

let handler = async(m, { conn, args, text }) => {

if (!text) return m.reply('Ingrese Un Link De YouTube');

m.react(rwait);

let video;
try {
      video = await (await fetch(`https://api.alyachan.dev/api/ytv?url=${text}&apikey=Gata-Dios`)).json();
} catch (error) {
try {
      video = await (await fetch(`https://delirius-apiofc.vercel.app/download/ytmp4?url=${text}`)).json();
} catch (error) {
      video = await (await fetch(`https://api.vreden.my.id/api/ytmp4?url=${text}`)).json();
      }
    }

if (!video.data || !video.data.url) return "No se pudo obtener el video.";

await conn.sendMessage(m.chat, {
      video: { url: video.data.url },
      mimetype: "video/mp4",
      caption: `${resp}`,
    }, { quoted: m });
    m.react(done);
}

handler.command = ['ytv']

export default handler;