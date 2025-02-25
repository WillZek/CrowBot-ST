/* [🍭] YOUTUBE VIDEO
- By WillZek 
*/

import fetch from 'node-fetch';

let handler = async(m, { conn, args, text }) => {

if (!text) return m.reply('🍭 Ingrese Un Link De YouTube\n> *Ejemplo:* https://youtube.com/shorts/ZisXJqH1jtw?si=0RZacIJU5zhoCmWh');

m.react(rwait);

let video;
try {
      video = await (await fetch(`https://dark-core-api.vercel.app/api/download/ytmp4?key=api&url=${text}`)).json();
} catch (error) {
try {
      video = await (await fetch(`https://api.fgmods.xyz/api/downloader/ytmp4?url=${text}&quality=480p&apikey=be9NqGwC`)).json();
} catch (error) {
try {
      video = await (await fetch(`https://api.alyachan.dev/api/ytv?url=${text}&apikey=uXxd7d`)).json();
} catch (error) {
      video = await (await fetch(`https://good-camel-seemingly.ngrok-free.app/download/mp4?url=${text}`)).json();
      }
    }
 }

let link = video?.data?.url || video?.download_url || video?.result?.dl_url || video?.downloads?.link[0]

if (!link) return m.reply('《✧》Hubo un error al intentar acceder al link.\n> Si el problema persiste, reportalo en el grupo de soporte.');

await conn.sendMessage(m.chat, {
      video: { url: link },
      mimetype: "video/mp4",
      caption: `${dev}`,
    }, { quoted: m });
    m.react(done);
}

handler.command = ['ytv', 'ytmp4', 'ymp4']

export default handler;