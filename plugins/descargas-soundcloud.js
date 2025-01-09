import fetch from 'node-fetch';
import axios from 'axios';

let handler = async (m, { conn, command, args, text, usedPrefix }) => {
if (!text) return conn.reply(m.chat, `🧑‍💻INGRESE EL NOMBRE DE ALGUNA *CANCION*\n\n> FELIZ NAVIDAD ⛄❄️`, m, rcanal)

await m.react('❄️');
try {
let api = await fetch(`https://apis-starlights-team.koyeb.app/starlight/soundcloud-search?text=${encodeURIComponent(text)}`);
let json = await api.json();
let { url } = json[0];

let api2 = await fetch(`https://apis-starlights-team.koyeb.app/starlight/soundcloud?url=${url}`);
let json2 = await api2.json();

let { link: dl_url, quality, image } = json2;

let audio = await getBuffer(dl_url);

let txt = `*\`- ⛄S O U N C L O U D - M U S I C🌲 -\`*\n\n`;
    txt += `        ✩  *Título* : ${json[0].title}\n`;
    txt += `        ✩  *Calidad* : ${quality}\n`;
    txt += `        ✩  *Url* : ${url}\n\n`;
    txt += `> ⛄ *${textbot}*`

await conn.sendFile(m.chat, image, 'thumbnail.jpg', txt, m, null, rcanal);
await conn.sendMessage(m.chat, { audio: audio, fileName: `${json[0].title}.mp3`, mimetype: 'audio/mpeg' }, { quoted: m })

await m.react('✅');
} catch {
await m.react('✖️');
}}

handler.help = ['soundcloud *<búsqueda>*']
handler.tags = ['descargas']
handler.command = ['soundcloud', 'sound', 'play']
handler.estrellas = 7;

export default handler

const getBuffer = async (url, options) => {
try {
const res = await axios({
method: 'get',
url,
headers: {
'DNT': 1,
'Upgrade-Insecure-Request': 1,
},
...options,
responseType: 'arraybuffer',
});
return res.data;
} catch (e) {
console.log(`Error : ${e}`);
}
};

/*
//Instalar la dependencia Node-id3 🙃
//Use math por problemas de que algunos audios no se envian
//La segunda url si descarga los datos de la cancion para eso tienes que ingresar a Souncloud la musica que quieres descargar ingresas y copias el link y lo pegas en la segunda url :) 
//el buscador aun no tiene permisos para ir directamente a la cancion y obtener el link directamente a la cancion por eso es que algunos audios no son enviados
import axios from 'axios'
import fs from 'fs'
import nodeID3 from 'node-id3'

let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) return conn.reply(m.chat, `🚩 Ingrese el nombre de la cancion de *Soundcloud.*`, m, rcanal)
await m.react('🕓')
try {
let { data: results } = await axios.get(`https://apis-starlights-team.koyeb.app/starlight/soundcloud-search?text=${text}`, { headers: { 'Content-Type': 'application/json' } })
let randoms = results[Math.floor(Math.random() * results.length)]
let { data: sm } = await axios.get(`https://apis-starlights-team.koyeb.app/starlight/soundcloud?url=${randoms.url}`, { headers: { 'Content-Type': 'application/json' }})
let mpeg = await axios.get(sm.audio, { responseType: 'arraybuffer' })
let img = await axios.get(randoms.image, { responseType: 'arraybuffer' })
let mp3 = `${sm.title}.mp3`
fs.writeFileSync(mp3, Buffer.from(mpeg.data))
let tags = {
title: sm.title,
artist: sm.creator, 
image: Buffer.from(img.data) 
}
nodeID3.write(tags, mp3)
let txt = `*\`- S O U N C L O U D - M U S I C -\`*\n\n`
txt += `❄️• *Nombre:* ${randoms.title}\n`
txt += `❄️• *Artista:* ${randoms.artist}\n`
txt += `❄️• *Duracion:* ${randoms.duration}\n`
txt += `❄️• *Reproducciones:* ${randoms.repro}\n`
txt += `❄️• *Link:* ${randoms.url}\n\n`
txt += `⛄ ${textname}`
await conn.sendFile(m.chat, randoms.image, 'thumb.jpg', txt, m)
await conn.sendMessage(m.chat, { audio: fs.readFileSync(mp3), fileName: `${sm.title}.mp3`, mimetype: 'audio/mpeg' }, { quoted: m })
fs.unlinkSync(mp3)
await m.react('✅')
} catch {
await m.react('✖️')
}}
handler.help = ['soundcloud *<búsqueda>*']
handler.tags = ['descargas']
handler.command = ['soundcloud', 'sound', 'play']
handler.register = true
handler.estrellas = 3;
//handler.limit = 3
export default handler*/