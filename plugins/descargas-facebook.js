import fetch from 'node-fetch'
import { facebook } from '@xct007/frieren-scraper'

var handler = async (m, { conn, args, command, usedPrefix, text }) => {

let vid
const isCommand7 = /^(facebook|fb|facebookdl|fbdl)$/i.test(command)

async function reportError(e) {
await conn.reply(m.chat, `⁖🍂 𝙾𝙲𝚄𝚁𝚁𝙸𝙾 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁`, m, rcanal, )
console.log(`⁖🍁 𝙴𝚁𝚁𝙾𝚁 𝙴𝙽: ${usedPrefix + command} ⚠️\n`)
console.log(e)
}

switch (true) {   
case isCommand7:
if (!text) return conn.reply(m.chat, `🚩 *Ingrese un enlace de facebook*\n\nEjemplo, !fb https://fb.watch/kAOXy3wf2L/?mibextid=Nif5oz`, m, rcanal, )
if (!args[0].match(/www.facebook.com|fb.watch|web.facebook.com|business.facebook.com|video.fb.com/g)) return conn.reply(m.chat, '🎃 *ᥒ᥆ ᥱs ᥙᥒ ᥱᥒᥣᥲᥴᥱ ᥎ᥲ́ᥣіძ᥆*', m, rcanal, )
// await conn.reply(m.chat, '⁖🍁  𝗗𝗲𝘀𝗰𝗮𝗿𝗴𝗮𝗻𝗱𝗼 𝗘𝗹 𝗩𝗶𝗱𝗲𝗼 𝗗𝗲 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸, 𝗘𝘀𝗽𝗲𝗿𝗲 𝗨𝗻 𝗠𝗼𝗺𝗲𝗻𝘁𝗼....', m, rcanal, )
conn.reply(m.chat, '☁ 𝗗𝗲𝘀𝗰𝗮𝗿𝗴𝗮𝗻𝗱𝗼 𝗘𝗹 𝗩𝗶𝗱𝗲𝗼 𝗗𝗲 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸, 𝗘𝘀𝗽𝗲𝗿𝗲 𝗨𝗻 𝗠𝗼𝗺𝗲𝗻𝘁𝗼....', m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, showAdAttribution: true,
title: packname,
body: wm,
previewType: 0, thumbnail: icons,
sourceUrl: channel }}})
m.react(rwait)
let messageType = checkMessageType(args[0])
let message = ''
switch (messageType) {
case 'groups':
message = `𝗩𝗶𝗱𝗲𝗼 𝗱𝗲 𝗴𝗿𝘂𝗽𝗼 𝗱𝗲 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸 ⁖🌸\n${global.wm}`
break
case 'reel':
message = `𝗩𝗶𝗱𝗲𝗼 𝗱𝗲 𝗿𝗲𝗲𝗹𝘀 𝗱𝗲 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸 ⁖🌸\n${global.wm}`
break
case 'stories':
message = `𝗩𝗶𝗱𝗲𝗼 𝗱𝗲 𝗵𝗶𝘀𝘁𝗼𝗿𝗶𝗮𝘀 𝗱𝗲 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸 ⁖🌸\n${global.wm}`
break
case 'posts':
message = `𝗩𝗶𝗱𝗲𝗼 𝗱𝗲 𝗽𝗹𝘂𝗯𝗹𝗶𝗰𝗮𝗰𝗶𝗼𝗻𝗲𝘀 𝗱𝗲 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸 ⁖🌸\n${global.wm}`
break
default:
message = `𝗩𝗶𝗱𝗲𝗼 𝗱𝗲 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸 ⁖🌸\n${global.wm}`
break
}
try {
let res = await fetch(`https://api.lolhuman.xyz/api/facebook?apikey=BrunoSobrino&url=${args[0]}`)
let _json = await res.json()
vid = _json.result[0]
if (vid == '' || !vid || vid == null) vid = _json.result[1]
await conn.sendFile(m.chat, vid, 'error.mp4', `${message}`, m, null, rcanal)
} catch (error1) {
try {
const d2ata = await facebook.v1(args[0])
let r2es = ''
if (d2ata.urls && d2ata.urls.length > 0) {
r2es = `${d2ata.urls[0]?.hd || d2ata.urls[1]?.sd || ''}`
}
await conn.sendFile(m.chat, r2es, 'error.mp4', `${message}`, m, null, rcanal)
} catch (error2) {
try {
var get = await fetch(`https://api.botcahx.live/api/dowloader/fbdown?url=${args[0]}&apikey=QaepQXxR`)
var js = await get.json()
await conn.sendFile(m.chat, js.result.HD, 'error.mp4', `${message}`, m, null, rcanal)
} catch (e) {
reportError(e)}
}}}

}
handler.help = ['fb']
handler.tags = ['descargas']
handler.command = /^(facebook|fb|facebookdl|fbdl)$/i

handler.register = true
handler.estrellas = 1

export default handler

function checkMessageType(url) {
if (url.includes('www.facebook.com')) {
if (url.includes('/groups/')) {
return 'groups'
} else if (url.includes('/reel/')) {
return 'reel'
} else if (url.includes('/stories/')) {
return 'stories'
} else if (url.includes('/posts/')) {
return 'posts'
}}
return 'default'
}
