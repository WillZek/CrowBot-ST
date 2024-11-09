import yts from 'yt-search' 
import { Ytdl } from './lib/Ytdl-Fz.js'
const handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `\`\`\`[ 🌠 ] Por favor ingresa un texto. Ejemplo:\n${usedPrefix + command} Did i tell u that i miss you\`\`\``;

    const randomReduction = Math.floor(Math.random() * 5) + 1;
    let search = await yts(text);
    let f = `\n\n${String.fromCharCode(68,101,118,101,108,111,112,101,100,32,98,121,32,73,39,109,32,70,122,32,126)}`;
    let isVideo = /vid$/.test(command);
    let urls = search.all[0].url;
    let body = `\`\`\`⊜─⌈ 📻 ◜YouTube Play◞ 📻 ⌋─⊜

    ≡ Título : » ${search.all[0].title}
    ≡ Views : » ${search.all[0].views}
    ≡ Duration : » ${search.all[0].timestamp}
    ≡ Uploaded : » ${search.all[0].ago}
    ≡ URL : » ${urls}

# 🌠 Su ${isVideo ? 'Video' : 'Audio'} se está enviando, espere un momento...\`\`\``;

    conn.sendMessage(m.chat, { 
        image: { url: search.all[0].thumbnail }, 
        caption: body + f
    }, { quoted: fkontak });

    let res = isVideo ? await Ytdl.mp4(urls) : await Ytdl.mp3(urls)
    let type = isVideo ? 'video' : 'audio';
    let video = res.media
    let audio = res.media
    conn.sendMessage(m.chat, { 
        [type]: { url: isVideo ? video : audio }, 
        gifPlayback: false, 
        mimetype: isVideo ? "video/mp4" : "audio/mpeg" 
    }, { quoted: m });
}

handler.command = ['play', 'playvid'];
handler.help = ['play', 'playvid'];
handler.tags = ['dl'];
handler.diamond = 4
export default handler