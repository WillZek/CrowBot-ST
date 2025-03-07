import fetch from 'node-fetch';
import axios from 'axios';

let handler = async (m, { conn, command, args, text, usedPrefix }) => {
if (!text) return conn.reply(m.chat, `🎩 Ingrese el nombre de la cancion de *Soundcloud.*`, m, rcanal)

await m.react('🕒');
try {
let api = await fetch(`https://apis-starlights-team.koyeb.app/starlight/soundcloud-search?text=${text}`);
let json = await api.json();

let link = json[0].url;

let api2 = await fetch(`https://delirius-apiofc.vercel.app/download/soundcloud?url=${link}`);
let json2 = await api2.json();

let { image } = json[0];
// let audio = json2.data.url;

let txt = `*\`- S O U N C L O U D - M U S I C -\`*\n\n`;
    txt += `        ✩  *Título* : ${json[0].title}\n`; // pene
    txt += `> 🍭 *${dev}*`

await conn.sendFile(m.chat, imageURL, 'thumbnail.jpg', txt, m, null, rcanal);
conn.sendMessage(m.chat, { audio: { url: json2.data.url }, mimetype: 'audio/mpeg' }, { quoted: m });

await m.react('✅');
} catch (error) {
m.reply(`No Se Encontraron Resultados Para Tu Búsqueda En Soundcloud\n${error.message}`);
await m.react('✖️');
}}

handler.help = ['soundcloud *<búsqueda>*']
handler.tags = ['descargas']
handler.command = ['soundcloud', 'sound', 'play']

export default handler