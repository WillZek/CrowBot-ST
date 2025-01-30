import pkg from '@whiskeysockets/baileys'
import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone'
const { generateWAMessageFromContent, prepareWAMessageMedia, proto } = pkg

var handler = m => m
handler.all = async function (m) {

global.getBuffer = async function getBuffer(url, options) {
try {
options ? options : {}
var res = await axios({
method: "get",
url,
headers: {
'DNT': 1,
'User-Agent': 'GoogleBot',
'Upgrade-Insecure-Request': 1
},
...options,
responseType: 'arraybuffer'
})
return res.data
} catch (e) {
console.log(`Error : ${e}`)
}}

let pp = ''
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
//let pp = await conn.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/327f6ad853cb4f405aa80.jpg')

//creador y otros
global.creador = 'Wa.me/50557865603'
global.botreal = `${(conn.user.jid == global.conn.user.jid ? 'Oficial' : 'Sub-Bot')}`
global.ofcbot = `${conn.user.jid.split('@')[0]}`
global.asistencia = 'Wa.me/50557865603'
global.namech = '˙˒𖥻˚𝐂𝐫𝐨𝐰𝐁𝐨𝐭 - 𝐂𝐡𝐚𝐧𝐧𝐞𝐥﹋꥟'
global.namechannel2 = '『✯ 𝗧𝗲𝗮𝗺 𝗖𝗼𝗺𝘂𝗻𝗶𝘁𝘆 𝗖𝗿𝗼𝘄 ✯』'
global.namegrupo = 'シ︎ 𝗖𝗿𝗼𝘄𝗕𝗼𝘁-𝗠𝗗 💛'
global.namecomu = '『𝗚𝗿𝘂𝗽𝗼 𝗢𝗳𝗶𝗰𝗶𝗮𝗹 𝗖𝗿𝗼𝘄𝗕𝗼𝘁✯』'
global.namecomu2 = '𝗧𝗵𝗲𝗖𝗿𝗼𝘄𝗕𝗼𝘁'

//Reacciones De Comandos.!
global.rwait = '🕒'
global.done = '✅'
global.error = '✖️'

//Emojis determinado de CrowBot
global.emoji = '🚩'
global.emoji2 = '💛'
global.emoji3 = '🌠'
global.emoji4 = '🍭'
global.emoji5 = '🔱'
global.emojis = [emoji, emoji2, emoji3, emoji4, emoji5].getRandom()

//mensaje en espera
global.wait = '🕒 *𝗘𝘀𝗽𝗲𝗿𝗮 𝗨𝗻 𝗠𝗼𝗺𝗲𝗻𝘁𝗼, 𝗦𝗼𝘆 𝗟𝗲𝗻𝘁𝗼 ...*';

//Enlaces
var grupo = 'https://chat.whatsapp.com/B7POPrlJiZf7UWHJKvzVkx'  
var github = 'https://github.com/WillZek/CrowBot-ST' 
var web = 'https://crow-bot-dashboard.vercel.app/' 
let instagram = 'https://www.instagram.com/crowbot_wa'

global.redes = [grupo, github, web, instagram].getRandom()

//Imagen
let category = "imagen"
const db = './media/database/db.json'
const db_ = JSON.parse(fs.readFileSync(db))
const random = Math.floor(Math.random() * db_.links[category].length)
const randomlink = db_.links[category][random]
const response = await fetch(randomlink)
const rimg = await response.buffer()
global.icons = rimg

//• ↳ ◜𝑻𝑰𝑬𝑴𝑷𝑶 𝑹𝑷𝑮◞ • ⚔
var ase = new Date(); var hour = ase.getHours(); switch(hour){ case 0: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 1: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 2: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 3: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 4: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 5: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 6: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 7: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌅'; break; case 8: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 9: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 10: hour = 'Lɪɴᴅᴏ Dɪᴀ 🌤'; break; case 11: hour = 'Lɪɴᴅᴏ Dɪᴀ 🌤'; break; case 12: hour = 'Lɪɴᴅᴏ Dɪᴀ 🌤'; break; case 13: hour = 'Lɪɴᴅᴏ Dɪᴀ 🌤'; break; case 14: hour = 'Lɪɴᴅᴀ Tᴀʀᴅᴇ 🌆'; break; case 15: hour = 'Lɪɴᴅᴀ Tᴀʀᴅᴇ 🌆'; break; case 16: hour = 'Lɪɴᴅᴀ Tᴀʀᴅᴇ 🌆'; break; case 17: hour = 'Lɪɴᴅᴀ Tᴀʀᴅᴇ 🌆'; break; case 18: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 19: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 20: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 21: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 22: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 23: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break;}
global.saludo = hour;

//tags
global.nombre = conn.getName(m.sender)
global.taguser = '@' + m.sender.split("@s.whatsapp.net")
var more = String.fromCharCode(8206)
global.readMore = more.repeat(850)

global.authsticker = `┊👑Bot\n┊↳${botname}\n\n┊👑Usuario\n┊↳ @${conn.getName(m.sender)}`;

global.packsticker = `┊ 🔱𝐒𝐭𝐚𝐫𝐂𝐨𝐫𝐞💫𝐓𝐞𝐚𝐦\n↳https://github.com/WillZek\n\n┊ 👹Info:\n↳Wa.me/50557865603`

//Fakes
global.fkontak = { key: { participants:"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

global.fake = { contextInfo: { isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: '120363371291001924@newsletter', newsletterName: "˚₊·͟͟͟͟͟͟͞͞͞͞͞͞➳❥ ꒰  𝐓𝐞𝐚𝐦 𝐒𝐭𝐚𝐫𝐂𝐨𝐫𝐞 ꒱ | ೃ࿔₊•", serverMessageId: -1 }
}}, { quoted: m }

//Id Channel
global.idchannel = '120363381910502266@newsletter'
global.canalIdM = ["120363377595441592@newsletter", "120363368073378190@newsletter", "120363387375075395@newsletter"]
global.canalNombreM = ["⏤͟͟͞͞𝐒𝐪𝐮𝐚𝐝 𝐂𝐫𝐨𝐰'𝐬 𝐂𝐥𝐮𝐛۵࿐", "✯ 𝐂𝐫𝐨𝐰𝐁𝐨𝐭 - 𝐂𝐡𝐚𝐧𝐧𝐞𝐥 ✯", "⏤͟͟͞͞☆ 𝐂𝐫𝐨𝐰𝐁𝐨𝐭 𝐓𝐞𝐬𝐭 『𝐏𝐨𝐝𝐜𝐚𝐬𝐭』"]
global.channelRD = await getRandomChannel()
// global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "3876577197-120363302285079181@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: `${packname}`, orderTitle: 'Bang', thumbnail: icons, sellerJid: '0@s.whatsapp.net'}}}
  
global.icono = [ 
'https://files.catbox.moe/pl19zo.jpg',
'https://files.catbox.moe/1rb6am.jpg',
'https://files.catbox.moe/2yfz2e.jpg',
'https://files.catbox.moe/sk7gv5.jpg',
'https://files.catbox.moe/m5y6ns.jpg',
'https://files.catbox.moe/y0sazu.jpg',
].getRandom()

global.urls = [
"https://qu.ax/vnPMj.mp4",
"https://qu.ax/vnPMj.mp4",
];
let gifUrl = urls[Math.floor(Math.random() * urls.length)];

global.rcanal = { contextInfo: { isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: channelRD.id, serverMessageId: 100, newsletterName: channelRD.name, }, externalAdReply: { showAdAttribution: true, title: textbot, body: dev, mediaUrl: null, description: null, previewType: "PHOTO", thumbnailUrl: icono, sourceUrl: redes, mediaType: 1, renderLargerThumbnail: false }, }, }}

export default handler

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
  }

async function getRandomChannel() {
let randomIndex = Math.floor(Math.random() * canalIdM.length)
let id = canalIdM[randomIndex]
let name = canalNombreM[randomIndex]
return { id, name }
}         