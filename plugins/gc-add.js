
var handler = async (m, { conn, args, text, usedPrefix, command }) => {

let who 
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
else who = m.chat
let name = await conn.getName(m.sender)        
let user = global.db.data.users[who]
let nom = conn.getName(m.sender) 
if (!text) throw `🌠 Ingrese el número de la persona que quieres añadir a este grupo.\n\n💛 Ejemplo:\n*${usedPrefix + command}* 50557865603`
      const jaja = args.join(' ');
  if (!jaja || !args[0]) throw '*Ingresa El Número Del Que Quieres Invitar, Ejemplo: +505 5786 5603*';

if (text.includes('+')) throw  `🌠 Ingrese el número todo junto sin el *(+)*`
let group = m.chat
let link = 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group)

await conn.reply(text+'@s.whatsapp.net', `*🌠 Hola! soy CrowBot-MD, Una persona te a invitado a su grupo.*\n\n*Link*\n${link}`, m, {mentions: [m.sender]})
m.reply(`🌠 *Enviando la invitación al privado de ${nom}*\n\n*📅 ${fecha}*\n⏰ *${tiempo}*`) 

}
handler.help = ['add']
handler.tags = ['grupo']
handler.command = /^(add|agregar|invitar|invite|añadir|\+)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
handler.fail = null

export default handler
