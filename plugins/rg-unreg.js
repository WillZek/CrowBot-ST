let handler = async (m, { conn, text }) => {
    let user = global.db.data.users[m.sender];

    user.registered = false;
    let imagenUrl = 'https://i.ibb.co/vQDtxJg/file.jpg';

    if (!conn) {
        console.error('Conexión no disponible');
        return;
    }

    try {
        return await conn.sendMessage(m.chat, {
            text: `*『✅』 Usted Ya No Está En Mi Base De Datos*`,
            image: { url: imagenUrl }
        }, { quoted: m });
    } catch (error) {
        console.error('Error al enviar el mensaje:', error);
        return m.reply('Ocurrió un error al intentar enviar el mensaje.');
    }
}

handler.help = ['unreg'];
handler.tags = ['rg'];
handler.command = /^unreg(ister)?$/i;
handler.register = true;
export default handler;