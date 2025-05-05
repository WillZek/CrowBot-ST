import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*
// Staff De victorBot
global.owner = [
   ['59894243071', 'Creador victorbot💛', true],
   ['59894243071', 'victorbot Soporte', true],
   ['584148256527', 'Dev Diomar', true],
   ['584120346669', 'Dev ⁱᵃᵐ|𝔇ĕ𝐬†𝓻⊙γ𒆜', true],
   ['584241836217', 'Dev Prak', true],
   ['51968382008', 'Dev Darkcore', true],
   ['5216633900512','Dev ʙʀᴀʏᴀɴᴏғᴄ', true],
]

global.creadorbot = [
   ['59894243071', 'victorbot', true],
]
  

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.mods = ['59894243071', '51920227615', '5219831715910', '573007796996', '50488198573', '51991055096', '5212731590195', '50557865603', '595975677765', '584245610338']

global.prems = ['59894243071']


//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.libreria = 'Baileys'
global.baileys = 'V 6.7.16' 
global.vs = '2.2.0'
global.nameqr = 'victorBot-MF'
global.namebot = 'victorBot-MF'
global.sessions = 'victorbotSession'
global.jadi = 'CrowJadiBot' 
global.yukiJadibts = true // Activado
global.ch = {
ch1: '120363387375075395@newsletter',
ch2: '120363368073378190@newsletter'
}

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.packname = '【★】𝐒𝐭𝐚𝐫𝐕𝐨𝐢𝐝-𝐂𝐥𝐮𝐛 ❖'
global.botname = '(✦◠‿◠)victor𝑩𝒐𝒕-𝑺𝑻'
global.wm = '⏤͟͟͞͞⋆⬪࣪ꥈ🍨★ ׄ ꒱ victor𝑩𝒐𝒕 - 𝑺𝑻 ୭'
global.author = '(⁎˃ᴗ˂⁎)𝐌𝐚𝐝𝐞 𝐁𝐲 𝐒𝐭𝐚𝐫𝐕𝐨𝐢𝐝-𝐂𝐥𝐮𝐛𓆪'
global.dev = '© 𝖯᥆𝗐ᥱ𝗋ᥱძ ᑲᥡ 𝖲ᥙᥒ𝖿ᥣᥲ𝗋ᥱ victorbot ☂︎  𝖳ᥱᥲ𝗆'
global.espera = '✰ 𝐄𝐬𝐩𝐞𝐫𝐚 𝐔𝐧 𝐌𝐨𝐦𝐞𝐧𝐭𝐨, 𝐄𝐬𝐭𝐚𝐦𝐨𝐬 𝐄𝐧𝐯𝐢𝐚𝐧𝐝𝐨 𝐒𝐮 𝐏𝐞𝐝𝐢𝐝𝐨 (✿◠‿◠)'
global.namebot = 'victorᑲ᥆𝗍 s𝗍'
global.textbot = `「 🔱 victor𝐁𝐨𝐭 - 𝐒𝐓 🔱 」`
global.vs = '2.2.0'
global.publi = '✰𝐒𝐢𝐠𝐮𝐞 𝐄𝐥 𝐂𝐚𝐧𝐚𝐥👇'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.imagen1 = fs.readFileSync('./media/menus/Menu.jpg')
global.imagen2 = fs.readFileSync('./media/menus/Menu2.jpg')
global.imagen3 = fs.readFileSync('./media/menus/Menu3.jpg')
global.welcome = fs.readFileSync('./media/welcome.jpg')
global.adios = fs.readFileSync('./media/adios.jpg')
global.catalogo = fs.readFileSync('./media/catalogo.jpg')

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*
global.repobot = 'https://github.com/WillZek/CrowBot-ST'
global.grupo = 'https://chat.whatsapp.com/B7POPrlJiZf7UWHJKvzVkx'
global.gteam = 'https://chat.whatsapp.com/EpkR7XS0hrMDYk89yw57HZ'
global.gsupport = 'https://chat.whatsapp.com/K5GLB5CXp3iAl4XsDzav1W'
global.comu = 'https://chat.whatsapp.com/Bgfb6Ag13BDCvwzOtldlCm'
global.channel = 'https://whatsapp.com/channel/0029Vb1AFK6HbFV9kaB3b13W'
global.insta = 'https://www.instagram.com/crowbot-wa'
//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "59894243071-120363317332020195@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: '👑【✫𝚃𝙴𝙰𝙼  乂 𝚂𝚃𝙰𝚁𝙲𝙾𝚁𝙴✫】🎩', orderTitle: 'Bang', thumbnail: catalogo, sellerJid: '0@s.whatsapp.net'}}}

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment        

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.multiplier = 69 

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
