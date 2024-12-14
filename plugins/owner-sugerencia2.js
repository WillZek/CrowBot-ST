let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) return conn.reply(m.chat, '🌠 ¿Qué comando quieres sugerir?', m)
    if (text.length < 5) return conn.reply(m.chat, '🌠 La sugerencia debe ser más de 5 caracteres.', m)
    if (text.length > 1000) return conn.reply(m.chat, '🌠 Máximo de la sugerencia es de 1000 caracteres.', m)

    const teks = `🌠 Sugerencia de nuevo comando del usuario *${m.sender}*

🛡️ Han sugerido un comando:
> ${text}`

    const channelChatId = '120363317263885467@newsletter';
    const creatorsChatId = "50498409019"; // Reemplaza esto con el ID del chat de los creadores
    await conn.reply(channelChatId, m.quoted ? teks + m.quoted.text : teks, m, { mentions: conn.parseMention(teks) })
    await conn.reply(creatorsChatId, teks, m, { mentions: conn.parseMention(teks) }) // Enviar a los creadores

    m.reply('🌠 La sugerencia se envió al Staff De CrowBot y a los creadores.')
}
handler.help = ['sugerencia2']
handler.tags = ['Owner']
handler.command = ['sugerencia2', 'sugerir2', 'crowsug2']

export default handler
