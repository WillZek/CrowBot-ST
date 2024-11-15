let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw '⚠ *_️Ingrese la sugerencia que desea hacer._*'
if (text.length < 10) throw '🔮 *_Especifique bien la sugerencia, mínimo 10 caracteres._*'
if (text.length > 1000) throw '🔮 *_Máximo 1000 caracteres para enviar la sugerencia._*'
const teks = `╭───────────────────\n│⊷〘 *S U G E R E N C I A* 💡 〙⊷\n├───────────────────\n│⁖🧡꙰  *Cliente:*\n│✏️ Wa.me/${m.sender.split`@`[0]}\n│\n│⁖💚꙰  *Mensaje:*\n│📩 ${text}\n╰───────────────────`
await conn.reply(global.groupChatId + '@g.us', m.quoted ? teks + m.quoted.text : teks, m, { mentions: conn.parseMention(teks) })
m.reply('⚠️ *_La sugerencia se envió al grupo, gracias por tu aporte!_*\n💥 ¡Sigue brillando, Niño Piña! 🌟')
}
handler.help = ['sugerir']
handler.tags = ['info']
handler.command = /^(sugerencia|sugerir|sugerir|idea)$/i
export default handler