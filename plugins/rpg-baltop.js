let handler = async (m, { conn, args, participants }) => {
    let users = Object.entries(global.db.data.users).map(([key, value]) => {
        return { ...value, jid: key };
    });

    let who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.sender
    let user = global.db.data.users[who]
    let sortedLim = users.sort((a, b) => (b.estrellas || 0) + (b.bank || 0) - (a.estrellas || 0) - (a.bank || 0));
    let len = args[0] && args[0].length > 0 ? Math.min(10, Math.max(parseInt(args[0]), 10)) : Math.min(10, sortedLim.length);

    let text = `「🍭」Los usuarios con más *🌟 Estrellas* son:\n\n`;

    text += sortedLim.slice(0, len).map(({ jid, estrellas, bank }, i) => {
        let total = (estrellas || 0) + (bank || 0);
        return `💫 ${i + 1} » *${participants.some(p => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]}:*` +
               `\n\t\t Total→ *🌟${total} Estrellas*`;
    }).join('\n');

    await conn.reply(m.chat, text.trim(), m, { mentions: conn.parseMention(text) });
}

handler.help = ['baltop'];
handler.tags = ['rpg'];
handler.command = ['baltop', 'eboard'];
handler.register = true;
handler.fail = null;
handler.exp = 0;

export default handler;

function sort(property, ascending = true) {
    if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property];
    else return (...args) => args[ascending & 1] - args[!ascending & 1];
}

function toNumber(property, _default = 0) {
    if (property) return (a, i, b) => {
        return { ...b[i], [property]: a[property] === undefined ? _default : a[property] };
    }
    else return a => a === undefined ? _default : a;
}

function enumGetKey(a) {
    return a.jid;
}