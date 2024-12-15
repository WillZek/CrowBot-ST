//actualizado por xi_crew
import { youtubedl, youtubedlv2 } from '@bochilteam/scraper'
import fetch from 'node-fetch'
import yts from 'yt-search'
import ytdl from 'ytdl-core'
import axios from 'axios'
const LimitAud = 725 * 1024 * 1024; //700MB
const LimitVid = 425 * 1024 * 1024; //425MB
const handler = async (m, {conn, command, args, text, usedPrefix}) => {

if (command == 'playvid2' || command == 'mp3') {
if (!text) return conn.reply(m.chat, `🌸 *Ingrese el nombre de un video de YouTube*\n\nEjemplo, !${command} Enemy Tommoee Profitt`,  m, rcanal, ); 
await m.react(rwait);
const yt_play = await search(args.join(' '));
const ytplay2 = await yts(text);
const texto1 = `*_𔓕꯭  ꯭ ꯭ ꯭ 𓏲꯭֟፝੭ ꯭⌑𝐘𝐮𝐤𝐢 𝐒𝐮𝐨𝐮⌑꯭ 𓏲꯭֟፝੭ ꯭  ꯭ ꯭ ꯭𔓕_*

> 📚 *Título:*
» ${yt_play[0].title}
> 📆 *Publicado:* 
» ${yt_play[0].ago}
> 🕒 *Duración:* 
» ${secondString(yt_play[0].duration.seconds)}
> 👀 *Vistas:* 
» ${MilesNumber(yt_play[0].views)}
> 👤 *Autor:* 
»${yt_play[0].author.name}
> 🔗 *Enlace:*
» ${yt_play[0].url}

> 📽️ *Su Audio se está enviando, espere un momento...*`.trim();

await conn.sendMessage(m.chat, {
image: { url: yt_play[0].thumbnail }, caption: texto1, contextInfo: { externalAdReply: { title: '♡  ͜ ۬︵࣪᷼⏜݊᷼𝘿𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙨⏜࣪᷼︵۬ ͜ ', body: '<(✿◠‿◠)> 𝙔𝙪𝙠𝙞 𝙎𝙪𝙤𝙪🌸', sourceUrl: channel, thumbnail: Imagen2 }}, quoted: estilo});
try {
await m.react(rwait);
const apiUrl = `https://deliriussapi-oficial.vercel.app/download/ytmp4?url=${encodeURIComponent(yt_play[0].url)}`;
const apiResponse = await fetch(apiUrl);
const delius = await apiResponse.json();
if (!delius.status) {
return m.react(error)}
const downloadUrl = delius.data.download.url;
await conn.sendMessage(m.chat, { audio: { url: downloadUrl }, mimetype: 'audio/mpeg' }, { quoted: m });
await m.react(done);
} catch (e1) {
try { 
await m.react(rwait);
let q = '128kbps'
const yt = await youtubedl(yt_play[0].url).catch(async _ => await youtubedlv2(yt_play[0].url))
const dl_url = await yt.audio[q].download()
const ttl = await yt.title
const size = await yt.audio[q].fileSizeH
await conn.sendFile(m.chat, dl_url, ttl + '.mp3', null, m, false, { mimetype: 'audio/mp4' })
await m.react(done);
} catch (e2) {
try {  
await m.react(rwait); 
const downloadUrl = await fetch9Convert(yt_play[0].url); 
await conn.sendFile(m.chat, downloadUrl, 'audio.mp3', null, m, false, { mimetype: 'audio/mp4' })
await m.react(done);
} catch (e3) {
try {
await m.react(rwait);
const downloadUrl = await fetchY2mate(yt_play[0].url);
await conn.sendFile(m.chat, downloadUrl, 'audio.mp3', null, m, false, { mimetype: 'audio/mp4' })
await m.react(done);
} catch (e4) {
try {
await m.react(rwait);
const res = await fetch(`https://api.zenkey.my.id/api/download/ytmp3?apikey=zenkey&url=${yt_play[0].url}`)
const audioData = await res.json()
if (audioData.status && audioData.result?.downloadUrl) {
await conn.sendMessage(m.chat, { audio: { url: audioData.result.downloadUrl }, mimetype: 'audio/mpeg' }, { quoted: m });
await m.react(done);
}} catch (e5) {
try {
await m.react(rwait);
let d2 = await fetch(`https://exonity.tech/api/ytdlp2-faster?apikey=adminsepuh&url=${yt_play[0].url}`);
let dp = await d2.json();
const audiop = await getBuffer(dp.result.media.mp3);
const fileSize = await getFileSize(dp.result.media.mp3);
await conn.sendMessage(m.chat, { audio: { url: audiop }, mimetype: 'audio/mpeg' }, { quoted: m });
await m.react(done);
if (fileSize > LimitAud) return await conn.sendMessage(m.chat, { document: { url: audiop }, mimetype: 'audio.mp3', fileName: `${yt_play[0].title}.mp3` }, { quoted: m });
await m.react(done);
} catch (e) {    
await m.react(error);
console.log(e);
}}}}}}}

if (command == 'playvid3' || command == 'mp4') {
if (!text) return conn.reply(m.chat, `🌸 *Ingrese el nombre de un video de YouTube*\n\nEjemplo, !${command} Enemy Tommoee Profitt`,  m, rcanal, );
await m.react(rwait);
const yt_play = await search(args.join(' '));
const ytplay2 = await yts(text);
const texto1 = `*_𔓕꯭  ꯭ ꯭ ꯭ 𓏲꯭֟፝੭ ꯭⌑𝐘𝐮𝐤𝐢 𝐒𝐮𝐨𝐮⌑꯭ 𓏲꯭֟፝੭ ꯭  ꯭ ꯭ ꯭𔓕_*

> 📚 *Título:*
» ${yt_play[0].title}
> 📆 *Publicado:* 
» ${yt_play[0].ago}
> 🕒 *Duración:* 
» ${secondString(yt_play[0].duration.seconds)}
> 👀 *Vistas:* 
» ${MilesNumber(yt_play[0].views)}
> 👤 *Autor:* 
»${yt_play[0].author.name}
> 🔗 *Enlace:*
» ${yt_play[0].url}

> 📽️ *Su Video se está enviando, espere un momento...*`.trim();

await conn.sendMessage(m.chat, {
image: { url: yt_play[0].thumbnail }, caption: texto1, contextInfo: { externalAdReply: { title: '♡  ͜ ۬︵࣪᷼⏜݊᷼𝘿𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙨⏜࣪᷼︵۬ ͜ ', body: '<(✿◠‿◠)> 𝙔𝙪𝙠𝙞 𝙎𝙪𝙤𝙪🌸', sourceUrl: channel, thumbnail: Imagen2 }}, quoted: estilo});
try {
await m.react(rwait);
const apiUrl = `https://deliriussapi-oficial.vercel.app/download/ytmp4?url=${encodeURIComponent(yt_play[0].url)}`;
const apiResponse = await fetch(apiUrl);
const delius = await apiResponse.json();
if (!delius.status) return m.react(error);
const downloadUrl = delius.data.download.url;
const fileSize = await getFileSize(downloadUrl);
if (fileSize > LimitVid) {
await conn.sendMessage(m.chat, { document: { url: downloadUrl }, fileName: `${yt_play[0].title}.mp4`, caption: `🌷 Aquí está tu video.` }, { quoted: m });
await m.react(done);
} else {
await conn.sendMessage(m.chat, { video: { url: downloadUrl }, fileName: `${yt_play[0].title}.mp4`, caption: `🌷 Aquí está tu video.`, thumbnail: yt_play[0].thumbnail, mimetype: 'video/mp4' }, { quoted: m });
await m.react(done);
}} catch (e1) {
try {  
await m.react(rwait);  
let qu = args[1] || '360'
let q = qu + 'p'
const yt = await youtubedl(yt_play[0].url).catch(async _ => await youtubedlv2(yt_play[0].url))
const dl_url = await yt.video[q].download()
const ttl = await yt.title
const size = await yt.video[q].fileSizeH
await await conn.sendMessage(m.chat, { video: { url: dl_url }, fileName: `${ttl}.mp4`, mimetype: 'video/mp4', caption: `🌷 Aquí está tu video.`, thumbnail: await fetch(yt.thumbnail) }, { quoted: m })
await m.react(done);
} catch (e2) {
try {    
await m.react(rwait);
const downloadUrl = await fetch9Convert(yt_play[0].url); 
await conn.sendMessage(m.chat, { video: { url: downloadUrl }, fileName: `${yt_play[0].title}.mp4`, caption: `🌷 Aquí está tu video.`, thumbnail: yt_play[0].thumbnail, mimetype: 'video/mp4' }, { quoted: m });
await m.react(done);
} catch (e3) {
try {
await m.react(rwait);
const downloadUrl = await fetchY2mate(yt_play[0].url);
await conn.sendMessage(m.chat, { video: { url: downloadUrl }, fileName: `${yt_play[0].title}.mp4`, caption: `🌷 Aquí está tu video.`, thumbnail: yt_play[0].thumbnail, mimetype: 'video/mp4' }, { quoted: m });
await m.react(done);
} catch (e4) {
try {
await m.react(rwait);
const videoInfo = await fetchInvidious(yt_play[0].url)
const downloadUrl = videoInfo.videoFormats.find(format => format.mimeType === "audio/mp4").url;
await conn.sendMessage(m.chat, { video: { url: downloadUrl }, fileName: `${yt_play[0].title}.mp4`, caption: `🌷 Aquí está tu video.`, thumbnail: yt_play[0].thumbnail, mimetype: 'video/mp4' }, { quoted: m });
await m.react(done);
} catch (e5) {
try {
await m.react(rwait);
let searchh = await yts(yt_play[0].url)
let __res = searchh.all.map(v => v).filter(v => v.type == "video")
let infoo = await ytdl.getInfo('https://youtu.be/' + __res[0].videoId)
let ress = await ytdl.chooseFormat(infoo.formats, { filter: 'audioonly' })
conn.sendMessage(m.chat, { video: { url: downloadUrl }, fileName: `${yt_play[0].title}.mp4`, caption: `🌷 Aquí está tu video.`, thumbnail: yt_play[0].thumbnail, mimetype: 'video/mp4' }, { quoted: m });
await m.react(done);
} catch (e6) {
try {
await m.react(rwait);
let d2 = await fetch(`https://exonity.tech/api/ytdlp2-faster?apikey=adminsepuh&url=${yt_play[0].url}`);
let dp = await d2.json();
const audiop = await getBuffer(dp.result.media.mp4);
const fileSize = await getFileSize(dp.result.media.mp4);
if (fileSize > LimitVid) {
await conn.sendMessage(m.chat, { document: { url: audiop }, fileName: `${yt_play[0].title}.mp4`, caption: `🌷 Aquí está tu video.` }, { quoted: m });
await m.react(done);
} else {
await conn.sendMessage(m.chat, { video: { url: audiop }, fileName: `${yt_play[0].title}.mp4`, caption: `🌷 Aquí está tu video.`, thumbnail: yt_play[0].thumbnail, mimetype: 'video/mp4' }, { quoted: m });
await m.react(done);
}} catch (e) {    
await m.react(error);
console.log(e);
}}}}}}}}