let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) return conn.reply(m.chat, '🌠 ¿Qué comando quieres sugerir?', m)
    if (text.length < 5) return conn.reply(m.chat, '🌠 La sugerencia debe ser más de 5 caracteres.', m)
    if (text.length > 1000) return conn.reply(m.chat, '🌠 Máximo de la sugerencia es de 1000 caracteres.', m)

    const teks = `🌠 Sugerencia de nuevo comando del usuario *${m.sender}*

🛡️ Han sugerido un comando:
> ${text}`

    // Cambia el ID del grupo por el ID del canal
    const channelChatId = '120363346831728441@c.us'; // Asegúrate de usar el ID correcto del canal
    await conn.reply(channelChatId, m.quoted ? teks + m.quoted.text : teks, m, { mentions: conn.parseMention(teks) })

    m.reply('🌠 La sugerencia se envió al Staff De CrowBot.')
}
handler.help = ['sugerencia']
handler.tags = ['Owner']
handler.command = ['sugerencia', 'sugerir', 'crowsug']

export default handler