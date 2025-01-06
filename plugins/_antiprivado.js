export async function before(m, {conn, isAdmin, isBotAdmin, isOwner, isROwner}) {
    if (m.isBaileys && m.fromMe) return !0;
    if (m.isGroup) return !1;
    if (!m.message) return !0;
    if (m.text.includes('PIEDRA') || m.text.includes('PAPEL') || m.text.includes('TIJERA') || m.text.includes('serbot') || m.text.includes('jadibot')) return !0;

    const chat = global.db.data.chats[m.chat];
    const bot = global.db.data.settings[this.user.jid] || {};
    
    if (bot.antiChatbot && !isOwner && !isROwner) {
      await m.reply(`> ⭐ Hola @${m.sender.split`@`[0]}, Lo siento, no está 📌 permitido escribirme al privado ⚠️, por lo cual serás bloqueado/a.\n\n> *⭐ Wiii*\n\n\n _Ayúdame a cumplir mi meta_\n Canal\nhttps://whatsapp.com/channel/0029VakfOZfHFxP7rNrUQk2d`, false, {mentions: [m.sender]});
      await this.updateBlockStatus(m.chat, 'block');
    }
    return !1;
}