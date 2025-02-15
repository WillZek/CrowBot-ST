// Lo Debería De Eliminar Porque Ni Se Usa
let handler = async(m, { conn, command, text }) => {
  if (!text) return m.reply(`*🌠 Ingresa El Motivo Del Préstamo*`)
    if (text.length < 11) return m.reply(`*🚩 Ingresa Al Menos 11 Caracteres*`)

let texto = `*_🌠 El Owner @${m.sender.split`@`[0]} Necesita Dinero y a hecho un préstamo a su staff ৎ୭࠭͢𝐂𝐫𝐨𝐰𝐁𝐨𝐭𓆪͟͞ _*\n*➪ Motivo*: ${text}*`
m.reply('*_🚀 Enviando mensaje de reunión a todos los owners de CrowBot._*')
for (let [jid] of global.owner.filter(([number, _, isDeveloper]) => isDeveloper && number)) {
                        let data = (await conn.onWhatsApp(jid))[0] || {}
                        if (data.exists)
                        conn.sendPayment(data.jid, '999999999', texto, m)

                           // conn.reply(data.jid, text, m, { mentions: [m.sender] })
                    }

}
handler.tags = ['owner']
handler.command = handler.help =['prestamo','prestar']
handler.owner = true

export default handler