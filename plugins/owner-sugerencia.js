let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw '⚠ *_️Ingrese la sugerencia que desea enviar._*'
if (text.length < 10) throw '⚠️ *_Especifique bien la sugerencia, mínimo 10 caracteres._*'
if (text.length > 1000) throw '⚠️ *_Máximo 1000 caracteres para enviar la sugerencia._*'
const teks = `╭───────────────────\n│⊷〘 *S U G E R E N C I A* 🌟 〙⊷\n├───────────────────\n│⁖🧡꙰  *Cliente:*\n│✏️ Wa.me/${m.sender.split`@`[0]}\n│\n│⁖💚꙰  *Mensaje:*\n│📩 ${text}\n╰───────────────────`
// Aquí se envía el mensaje al grupo
await conn.sendMessage('120363361152463013@g.us', teks, { mentions: conn.parseMention(teks) })
m.reply('⚠️ *_La sugerencia se envió al grupo, gracias por colaborar!_*')
}
handler.help = ['sugerir']
handler.tags = ['info']
handler.command = /^(sugerir|sugerencia)$/i
export default handler