
let handler = async (m, { conn, text }) => {
    let user = global.db.data.users[m.sender]

    user.registered = false
    // URL de la imagen que deseas enviar
    let imagenUrl = 'https://example.com/tu-imagen.jpg' // Cambia esto por la URL de tu imagen
    return conn.reply(m.chat, `*『✅』 Usted Ya No Está En Mi Base De Datos*`, imagenUrl, m)
}

handler.help = ['unreg']
handler.tags = ['rg']
handler.command = /^unreg(ister)?$/i
handler.register = true
export default handler