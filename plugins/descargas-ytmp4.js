import fetch from 'node-fetch';

let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) {
        return conn.reply(m.chat, '🍭 Ingresa una URL válida de *Youtube*.', m);
    }

    try {
        await m.react('🕒');

        const apis = [
            `https://api.neoxr.eu/api/youtube?url=${text}&type=video&quality=480p&apikey=GataDios`,
            `https://api.alyachan.dev/api/ytv?url=${text}&apikey=zstapi09`,
            `https://api.fgmods.xyz/api/downloader/ytmp4?url=${text}&quality=480p&apikey=be9NqGwC`,
            `https://api.agungny.my.id/api/youtube-video?url=${encodeURIComponent(text)}`
        ];

        let result;
        for (const api of apis) {
            try {
                const response = await fetch(api);
                result = await response.json();
                if (result.status && result.result && result.result.downloadUrl) {
                    const { title, downloadUrl } = result.result || result.data;

                    const videoFileResponse = await fetch(dl);
                    if (videoFileResponse.ok) {
                        const buffer = await videoFileResponse.buffer();
                        const size = parseInt(videoFileResponse.headers.get('content-length'), 10) || 0;

                        if (size > 10 * 1024 * 1024) {
                            await conn.sendMessage(
                                m.chat,
                                {
                                    document: buffer,
                                    mimetype: 'video/mp4',
                                    fileName: `${title}.mp4`,
                                },
                                { quoted: m }
                            );
                        } else {
                            await conn.sendMessage(
                                m.chat,
                                {
                                    video: buffer,
                                    mimetype: 'video/mp4',
                                },
                                { quoted: m }
                            );
                        }
                    }

                    await m.react('✅');
                    return;
                }
            } catch (err) {
                console.error(`Error con API: ${api}`, err.message);
            }
        }

        throw new Error('No se pudo obtener el enlace de descarga de ninguna API.');
    } catch (error) {
m.reply(`*Error:* ${error.message}`);
        await m.react('❌');
    }
};

handler.tags = ['descargas'];
handler.command = /^ytmp4|ytv$/i;
handler.register = true;
export default handler;

/* [🍭] YOUTUBE VIDEO
- By WillZek 
*/

// apis todas culeadas
/* import fetch from 'node-fetch';

let handler = async(m, { conn, args, text }) => {

if (!text) return m.reply('🍭 Ingrese Un Link De YouTube\n> *Ejemplo:* https://youtube.com/shorts/ZisXJqH1jtw?si=0RZacIJU5zhoCmWh');

m.react(rwait);

let video;
try {
      video = await (await fetch(`https://api.neoxr.eu/api/youtube?url=${text}&type=video&quality=480p&apikey=GataDios`)).json();
} catch (error) {
try {
      video = await (await fetch(`https://api.fgmods.xyz/api/downloader/ytmp4?url=${text}&quality=480p&apikey=be9NqGwC`)).json();
} catch (error) {
try {
      video = await (await fetch(`https://api.alyachan.dev/api/ytv?url=${text}&apikey=zstapi09`)).json();
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
*/