let mutedParticipants = new Set(); // Chicos Esto Es Tipo Guardar Los Mutados

let handler = async (m, { conn, usedPrefix, command }) => {
    let who;
    if (m.isGroup) who = m.mentionedJid[0];
    else who = m.chat;

    if (!who) return m.reply(`🍭 *Etiqueta a la persona que deseas mutar*`);

    let delet;
    if (m.quoted) {
        delet = m.quoted.message.extendedTextMessage.contextInfo.participant;
    } else if (m.mentionedJid && m.mentionedJid.length > 0) {
        delet = m.mentionedJid[0];
    }

    const isBotAdmin = await conn.groupMetadata(m.chat).then(metadata => {
        return metadata.participants.some(participant => participant.jid === conn.user.jid && participant.isAdmin);
    });

    if (!isBotAdmin) return m.reply(`🚫 *El bot necesita ser admin para mutar a alguien.*`);

    await conn.groupParticipants(m.chat, [delet], 'mute');
    mutedParticipants.add(delet);

    conn.reply(m.chat, `🔇 ${delet} ha sido muteado y sus mensajes serán eliminados.`, m);
}

conn.on('chat-update', async (chatUpdate) => {
    if (!chatUpdate.messages) return;
    const message = chatUpdate.messages.all()[0];

    if (mutedParticipants.has(message.key.participant)) {
        await conn.sendMessage(message.key.remoteJid, { delete: { remoteJid: message.key.remoteJid, fromMe: false, id: message.key.id }});
    }
});

handler.help = ['mute']
handler.tags = ['owner']
handler.command = ['test'];
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler;