import fetch from 'node-fetch';
import axios from 'axios';

let handler = async (m, { conn, command, args, text, usedPrefix }) => {
if (!text) return conn.reply(m.chat, `🎩 Ingrese el nombre de la cancion de *Soundcloud.*`, m, rcanal)

await m.react('🕒');
try {
let apia = await fetch(`https://apis-starlights-team.koyeb.app/starlight/soundcloud-search?text=${encodeURIComponent(text)}`);
let json = await apia.json();

let apib = await fetch(`https://delirius-apiofc.vercel.app/search/soundcloud?q=${text}&limit=10`);
let json2 = await apib.json();
let { link } = json2[0];

let apic = await fetch(`https://delirius-apiofc.vercel.app/download/soundcloud?url=${link}`);
let json3 = await apic.json();

let { image } = json[0];

let audio = json3.data.url;

// let audio = await getBuffer(dl_url);

let txt = `*\`- S O U N C L O U D - M U S I C -\`*\n\n`;
    txt += `        ✩  *Título* : ${json[0].title}\n`;
    txt += `        ✩  *Calidad* : ${quality}\n`;
    txt += `        ✩  *Url* : ${url}\n\n`;
    txt += `> 🍭 *${dev}*`

await conn.sendFile(m.chat, image, 'thumbnail.jpg', txt, m, null, rcanal);
conn.sendMessage(m.chat, { audio: { url: audio }, mimetype: 'audio/mpeg' }, { quoted: m });

await m.react('✅');
} catch (error) {
m.reply(`No Se Encontraron Resultados Para Tu Búsqueda En Soundcloud\n${error.message}`);
await m.react('✖️');
}}

handler.help = ['soundcloud *<búsqueda>*']
handler.tags = ['descargas']
handler.command = ['soundcloud', 'sound', 'play']

export default handler