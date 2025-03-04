export async function before(m, {conn, isAdmin, isBotAdmin, isOwner, isRowner, isMods}) {
    if (m.isBaileys && m.fromMe) return !0;
    if (m.isGroup) return !1;
    if (!m.message) return !0;
    if (m.text.includes('PIEDRA') || m.text.includes('PAPEL') || m.text.includes('TIJERA') || m.text.includes('serbot') || m.text.includes('code') || m.text.includes('qr')) return !0;
    const chat = global.db.data.chats[m.chat];
    const bot = global.db.data.settings[this.user.jid] || {};
    if (bot.antiPrivate && !isOwner && !isROwner && !isMods) {
      await m.reply(`> 《★》@${m.sender.split`@`[0]} Está Prohibido Escribir Al Privado Del Bot.\n> Si Deseas Probar Nuestro Bot Sigue El Canal Oficial : ${channel}`, false, {mentions: [m.sender]});
      await this.updateBlockStatus(m.chat, 'block');
    }
    return !1;
  }