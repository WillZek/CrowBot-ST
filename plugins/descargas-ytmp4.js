/* [🍭] YOUTUBE VIDEO
- By WillZek 
*/

import fetch from 'node-fetch';

let handler = async(m, { conn, args, text }) => {

if (!text) return m.reply(`🍭 Ingrese Un Link De YouTube\n> *${msg.example}:* https://youtube.com/shorts/ZisXJqH1jtw?si=0RZacIJU5zhoCmWh`);

m.react(rwait);


let video = await (await fetch(`https://api.neoxr.eu/api/youtube?url=${text}&type=video&quality=480p&apikey=GataDios`)).json();

let link = video.data.url;

if (!link) return m.reply('《✧》Hubo un error al intentar acceder al link.\n> Si el problema persiste, reportalo en el grupo de soporte.');

/* let limit = 5 * 1024 * 1024; // 5MB porque si

if (video?.data?.size > limit) {
await conn.sendMessage(m.chat, {
      document: { url: link },
      fileName: `${video.title}.mp4`,
      mimetype: 'video/mp4', caption: '✅ Descargado Con Exito.',
      thumbnail: video.thumbnail },          
      { quoted: m })

} else { 
*/

await conn.sendMessage(m.chat, {
      video: { url: link },
      mimetype: "video/mp4",
      caption: `${dev}`,
    }, { quoted: m });
    m.react(done);
 }

handler.command = ['ytv', 'ytmp4', 'ymp4']

export default handler;