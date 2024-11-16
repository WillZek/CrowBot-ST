let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) return conn.reply(m.chat, '🌠 ¿Que comando quieres sugerir?', m)
    if (text.length < 10) return conn.reply(m.chat, '🌠 La sugerencia debe ser mas de 10 characteres.', m)
    if (text.length > 1000) return conn.reply(m.chat, '🌠 Maximo de la sugerencia es de 1000 characteres.', m)
    const teks = `🌠 Sugerencia de nuevo comando del usuario *${nombre}*

🛡️ Han Sugerido Un Comando:
> ${text}`
    await conn.reply('50557865603@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, m, { mentions: conn.parseMention(teks) })

    m.reply('🌠 La sugerencia se envió a mi propietario.')
}
handler.help = ['sugerencia']
handler.tags = ['Owner']
handler.command = ['sugerencia', 'sugerir', 'crowsug']

export default handler