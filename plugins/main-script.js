import moment from 'moment-timezone'
import fetch from 'node-fetch'

let handler = async (m, { conn, args }) => {
let res = await fetch('https://api.github.com/repos/WillZek/CrowBot-ST')
let json = await res.json()
try {
let txt = `*乂  S C R I P T  -  M A I N*\n\n`
    txt += `        ✩   *Nombre* : ${json.name}\n`
    txt += `        ✩   *Visitas* : ${json.watchers_count}\n`
    txt += `        ✩   *Peso* : ${(json.size / 1024).toFixed(2)} MB\n`
    txt += `        ✩   *Actualizado* : ${moment(json.updated_at).format('DD/MM/YY - HH:mm:ss')}\n`
    txt += `        ✩   *Url* : ${json.html_url}\n`
    txt += `        ✩   *Forks* : ${json.forks_count}\n`
    txt += `        ✩   *Stars* : ${json.stargazers_count}\n\n`
    txt += `> 🍭 *${dev}*`
let img = await (await fetch(`https://files.catbox.moe/1rb6am.jpg`)).buffer()

await conn.sendLuffy(m.chat, botname, textbot, txt, img, img, canal, m)
} catch (error) {
m.reply(`Error: ${error.message})
await m.react('✖️')
}}
handler.help = ['script']
handler.tags = ['main']
handler.command = ['script', 'sc']
handler.register = true 
handler.estrellas = 2;
export default handler