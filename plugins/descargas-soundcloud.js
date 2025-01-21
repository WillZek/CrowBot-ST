import fetch from 'node-fetch'
import yts from 'yt-search'

let handler = async (m, { conn: star, command, args, text, usedPrefix }) => {
  if (!text) return m.reply('Ingresa el título de un video o canción en Youtube.\n\n`Por Ejemplo:`\n' + `> *${usedPrefix + command}* Young Cister - Miau`)
    await m.react('⌛')
    try {
    let res = await search(args.join(" "))
    let img = await (await fetch(`${res[0].image}`)).buffer()
    let txt = '*Youtube Download*\n\n'
       txt += `\t\t» Título : ${res[0].title}\n`
       txt += `\t\t» Duración* : ${secondString(res[0].duration.seconds)}\n`
       txt += `\t\t*» Publicado* : ${eYear(res[0].ago)}\n`
       txt += `\t\t*» Canal* : ${res[0].author.name || 'Desconocido'}\n`
       txt += `\t\t*» Url* : ${'https://youtu.be/' + res[0].videoId}\n\n`
       txt += `> *-* Para descargar responde a este mensaje con *mp4* o *mp3*.`
await star.sendFile(m.chat, img, 'thumbnail.jpg', txt, m)
await m.react('✅')
} catch {
await m.react('✖️')
}}
handler.help = ['play *<Cancion>*']
handler.tags = ['descargas']
handler.command = ['play']
handler.register = false
handler.limit = false
export default handler

async function search(query, options = {}) {
  let search = await yts.search({ query, hl: "es", gl: "ES", ...options })
  return search.videos
}

function MilesNumber(number) {
  let exp = /(\d)(?=(\d{3})+(?!\d))/g
  let rep = "$1."
  let arr = number.toString().split(".")
  arr[0] = arr[0].replace(exp, rep)
  return arr[1] ? arr.join(".") : arr[0]
}

function secondString(seconds) {
  seconds = Number(seconds);
  const d = Math.floor(seconds / (3600 * 24));
  const h = Math.floor((seconds % (3600 * 24)) / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  const dDisplay = d > 0 ? d + (d == 1 ? ' Día, ' : ' Días, ') : '';
  const hDisplay = h > 0 ? h + (h == 1 ? ' Hora, ' : ' Horas, ') : '';
  const mDisplay = m > 0 ? m + (m == 1 ? ' Minuto, ' : ' Minutos, ') : '';
  const sDisplay = s > 0 ? s + (s == 1 ? ' Segundo' : ' Segundos') : '';
  return dDisplay + hDisplay + mDisplay + sDisplay;
}

function sNum(num) {
    return new Intl.NumberFormat('en-GB', { notation: "compact", compactDisplay: "short" }).format(num)
}

function eYear(txt) {
    if (!txt) {
        return '×'
    }
    if (txt.includes('month ago')) {
        var T = txt.replace("month ago", "").trim()
        var L = 'hace '  + T + ' mes'
        return L
    }
    if (txt.includes('months ago')) {
        var T = txt.replace("months ago", "").trim()
        var L = 'hace ' + T + ' meses'
        return L
    }
    if (txt.includes('year ago')) {
        var T = txt.replace("year ago", "").trim()
        var L = 'hace ' + T + ' año'
        return L
    }
    if (txt.includes('years ago')) {
        var T = txt.replace("years ago", "").trim()
        var L = 'hace ' + T + ' años'
        return L
    }
    if (txt.includes('hour ago')) {
        var T = txt.replace("hour ago", "").trim()
        var L = 'hace ' + T + ' hora'
        return L
    }
    if (txt.includes('hours ago')) {
        var T = txt.replace("hours ago", "").trim()
        var L = 'hace ' + T + ' horas'
        return L
    }
    if (txt.includes('minute ago')) {
        var T = txt.replace("minute ago", "").trim()
        var L = 'hace ' + T + ' minuto'
        return L
    }
    if (txt.includes('minutes ago')) {
        var T = txt.replace("minutes ago", "").trim()
        var L = 'hace ' + T + ' minutos'
        return L
    }
    if (txt.includes('day ago')) {
        var T = txt.replace("day ago", "").trim()
        var L = 'hace ' + T + ' dia'
        return L
    }
    if (txt.includes('days ago')) {
        var T = txt.replace("days ago", "").trim()
        var L = 'hace ' + T + ' dias'
        return L
    }
    return txt
}

/* import fetch from 'node-fetch';
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
*/

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