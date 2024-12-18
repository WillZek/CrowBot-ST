
let handler = async (m, { conn, text }) => {

let user = global.db.data.users[m.sender]

user.registered = false
return conn.reply(m.chat, `*『✅』 Usted Ya No Está En Mi Base De Datos*`, m, rcanal)

    await conn.sendLuffy(m.chat, '⊱『✅𝆺𝅥 𝐑𝐄𝐆𝐈𝐒𝐓𝐑𝐀𝐃𝐎(𝐀) 𝆹𝅥✅』⊰', textbot, reply, imagen1, imagen1, channel, m, rcanal)

}
handler.help = ['unreg']
handler.tags = ['rg']
handler.command = /^unreg(ister)?$/i
handler.register = true
export default handler
