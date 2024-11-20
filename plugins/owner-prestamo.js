let handler = async(m, { conn, command, text }) => {
if (!text) return m.reply(`*🚩 Ingresa El Motivo Para Prestar Dinero*`)
if (text.length < 11) return m.reply(`*🚩Ingresa Almenos 11 características, para prestar dinero*`)
let texto = `*_💸 El Owner @${m.sender.split`@`[0]} Necesita Que Le Prestes Dinero ৎ୭࠭͢𝐂𝐫𝐨𝐰𝐁𝐨𝐭𓆪͟͞ _*\n*➪ *Motivo*: ${text}*`
m.reply('*_🚀 Enviando mensaje de préstamo a todos los owners de CrowBot._*')
for (let [jid] of global.owner.filter(([number, _, isDeveloper]) => isDeveloper && number)) {
let data = (await conn.onWhatsApp(jid))[0] || {}
if (data.exists) {
conn.sendMessage(data.jid, texto, m)
}
}
}
handler.tags = ['owner']
handler.command = handler.help = ['prestamo', 'prestar']
handler.rowner = true
export default handler