
let handler = async (m, { conn, text }) => {
    let user = global.db.data.users[m.sender]

    user.registered = false
    let imagenUrl = 'https://i.ibb.co/vQDtxJg/file.jpg'

    return conn.reply(m.chat, `*『✅』 Usted Ya No Está En Mi Base De Datos*`, imagenUrl, m)
}

handler.help = ['unreg']
handler.tags = ['rg']
handler.command = /^unreg(ister)?$/i
handler.register = true
export default handler