let mutedUsers = new Set();

let handler = async (m, { conn, usedPrefix, command, isAdmin, isBotAdmin }) => {
    if (!isBotAdmin) return conn.reply(m.chat, '🍭 El bot necesita ser administrador.', m);
    if (!isAdmin) return conn.reply(m.chat, '🍭 Solo los administradores pueden usar este comando.', m);

    let user;
    if (m.quoted) {
        user = m.quoted.sender;
    } else {
        return conn.reply(m.chat, '🍭 Responde al mensaje del usuario que quieres mutear.', m);
    }

    if (command === "mute") {
        mutedUsers.add(user);
        conn.reply(m.chat, `✅ *Usuario muteado:* @${user.split('@')[0]}`, m, { mentions: [user] });
    } else if (command === "unmute") {
        mutedUsers.delete(user);
        conn.reply(m.chat, `✅ *Usuario desmuteado:* @${user.split('@')[0]}`, m, { mentions: [user] });
    }
};

handler.before = async (m, { conn }) => {
    if (mutedUsers.has(m.sender) && m.mtype !== 'stickerMessage') {
        try {
            await conn.sendMessage(m.chat, { delete: m.key });
        } catch (e) {
            console.error(e);
        }
    }
};

handler.help = ['mute', 'unmute'];
handler.tags = ['grupo'];
handler.command = /^(mute|unmute)$/i;
handler.group = true;
handler.admin = true;
handler.botAdmin = true;

export default handler;