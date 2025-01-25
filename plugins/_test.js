let handler = async (m, { conn, usedPrefix, command }) => {
    if ((!m.mentionedJid || !m.mentionedJid.length) && !m.quoted) { 
        return conn.reply(m.chat, `🍭 *Etiqueta a la persona que deseas mutar*`, m);
    }

    let delet;
    if (m.quoted) {
        delet = m.quoted.message.extendedTextMessage.contextInfo.participant;
    } else if (m.mentionedJid && m.mentionedJid.length > 0) {
        delet = m.mentionedJid[0];
    }

    await conn.groupParticipants(m.chat, [delet], 'mute');

    conn.reply(m.chat, `🔇 ${delet} ha sido muteado y sus mensajes serán eliminados.`, m);
}

conn.on('chat-update', async (chatUpdate) => {
    if (!chatUpdate.messages) return;
    const message = chatUpdate.messages.all()[0];
    
    if (message.key.participant === delet) {
        await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: message.key.id, participant: delet }});
    }
});

handler.help = ['mute']
handler.tags = ['owner']
handler.command = /^mute$/i
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler;