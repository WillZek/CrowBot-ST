import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.owner = [
   ['50557865603', 'Creador WillZek💛', true],
   ['50498409019', 'CrowBot Soporte', true],
   ['50587043137', 'Support2', true],
   ['584148256527', 'Mi Mujer🔥', true],
   ['584120346669', 'Colaborador ⁱᵃᵐ|𝔇ĕ𝐬†𝓻⊙γ𒆜', true],
   ['522431268546', 'im fz~', true],
   ['584241836217', 'Colaborador Prak', true],
]

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.mods = []
global.prems = []

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.packname = '【✧】𝐂𝐫𝐨𝐰𝐁𝐨𝐭࿐'
global.botname = '(✦◠‿◠)𝑪𝒓𝒐𝒘𝑩𝒐𝒕-𝑺𝑻'
global.wm = '⏤͟͟͞͞⋆⬪࣪ꥈ🔱★ ׄ ꒱ 𝑪𝒓𝒐𝒘𝑩𝒐𝒕 - 𝑺.𝑪.𝑨 ୭'
global.author = '꒷꒦𖥻𝐁𝐲 𝐖𝐢𝐥𝐥𝐙𝐞𝐤𓆪'
global.dev = '「𝐁𝐲 𝐖𝐢𝐥𝐥𝐙𝐞𝐤☕︎︎」'
global.errorm = '𝐄𝐫𝐫𝐨𝐫: ${error.message}'
global.errorm2 = '✰ 𝐀 𝐎𝐜𝐮𝐫𝐫𝐢𝐝𝐨 𝐔𝐧 𝐄𝐫𝐫𝐨𝐫, 𝐕𝐮𝐞𝐥𝐯𝐞 𝐌𝐚𝐬 𝐓𝐚𝐫𝐝𝐞 (৹˃̵﹏˂̵৹)'
global.resp = '𝐀𝐪𝐮𝐢 𝐓𝐢𝐞𝐧𝐞 𝐒𝐮 𝐏𝐞𝐝𝐢𝐝𝐨 〜(^∇^〜)'
global.espera = '✰ 𝐄𝐬𝐩𝐞𝐫𝐚 𝐔𝐧 𝐌𝐨𝐦𝐞𝐧𝐭𝐨, 𝐄𝐬𝐭𝐚𝐦𝐨 𝐄𝐧𝐯𝐢𝐚𝐧𝐝𝐨 𝐒𝐮 𝐏𝐞𝐝𝐢𝐝𝐨 (✿◠‿◠)'
global.nombrebot = 'CrowBot-ST'
global.textbot = `${emojis}𝐂𝐫𝐨𝐰𝐁𝐨𝐭 𝐁𝐲 𝐖𝐢𝐥𝐥𝐙𝐞𝐤${emojis}`
global.vs = '2.0.0'
global.publi = '✰𝐒𝐢𝐠𝐮𝐞 𝐄𝐥 𝐂𝐚𝐧𝐚𝐥👇'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.imagen1 = fs.readFileSync('./Menu.jpg')
global.fantasyVid = ['./media/menus/Menuvid1.mp4', './media/menus/Menuvid2.mp4', './media/menus/Menuvid3.mp4']
global.imagen2 = fs.readFileSync('./Menu2.jpg')
global.imagen3 = fs.readFileSync('./Menu3.jpg')
global.welcome = fs.readFileSync('./media/welcome.jpg')
global.adios = fs.readFileSync('./media/adios.jpg')
global.catalogo = fs.readFileSync('./storage/img/catalogo1.jpg')
global.ianurl = fs.readFileSync('./storage/img/crowurl.jpg')

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*
global.mashach = 'https://whatsapp.com/channel/0029VaoyLfA0LKZKjEh5Yh1J'
global.mashac = 'wa.me/59597657755*/n• *wa.me/5224312686*/n• *wa.me/5055786568*'
global.repobot = 'https://github.com/WillZek/CrowBot-ST'
global.grupo = 'https://chat.whatsapp.com/HwcDg23QEwhIXc73wL0tKj'
global.comu = 'https://chat.whatsapp.com/Bgfb6Ag13BDCvwzOtldlCm'
global.channel = 'https://whatsapp.com/channel/0029Vb1AFK6HbFV9kaB3b13W'
global.insta = 'https://www.instagram.com/crowbot-wa'
//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "543876577197-120363317332020195@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: '⛄【✫𝚃𝙴𝙰𝙼  乂 𝚂𝚃𝙰𝚁𝙲𝙾𝚁𝙴✫】❄️', orderTitle: 'Bang', thumbnail: catalogo, sellerJid: '0@s.whatsapp.net'}}}

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment        

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
