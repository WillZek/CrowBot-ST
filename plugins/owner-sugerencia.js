let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) return conn.reply(m.chat, '🌠 ¿Que comando quieres sugerir?', m)
    if (text.length < 10) return conn.reply(m.chat, '🌠 La sugerencia debe ser más de 10 caracteres.', m)
    if (text.length > 1000) return conn.reply(m.chat, '🌠 Máximo de la sugerencia es de 1000 caracteres.', m)
    
    const teks = `🌠 Sugerencia de nuevo comando del usuario *${m.sender}*

🛡️ Han sugerido un comando:
> ${text}`
    
    // Cambia el ID del grupo al que deseas enviar la sugerencia
    const groupChatId = 'ID_DEL_GRUPO_AQUI@s.whatsapp.net';
    await conn.reply(groupChatId, m.quoted ? teks + m.quoted.text : teks, m, { mentions: conn.parseMention(teks) })

    m.reply('🌠 La sugerencia se envió al grupo.')
}
handler.help = ['sugerencia']
handler.tags = ['Owner']
handler.command = ['sugerencia', 'sugerir', 'crowsug']

export default handler