
let handler = async (m, { conn, text }) => {
    let user = global.db.data.users[m.sender]

    user.registered = false
    let imagenUrl = 'https://i.ibb.co/vQDtxJg/file.jpg'

    // Usar sendMessage para enviar el mensaje con la imagen
    return conn.sendMessage(m.chat, { text: `*『✅』 Usted Ya No Está En Mi Base De Datos*`, image: { url: imagenUrl } }, { quoted: m, rcanal})
}

handler.help = ['unreg']
handler.tags = ['rg']
handler.command = /^unreg(ister)?$/i
handler.register = true
export default handler