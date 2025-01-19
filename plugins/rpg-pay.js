
import db from '../lib/database.js';
import MessageType from '@whiskeysockets/baileys';

let handler = async (m, { conn, text }) => {
    let who;
    if (m.isGroup) who = m.mentionedJid[0];
    else who = m.chat;

    if (!who) return m.reply(`《✧》Debes mencionar a quien quieras regalar *${moneda}*.\n> Ejemplo » *#pay 25000 @mencion*`);

    let txt = text.replace('@' + who.split`@`[0], '').trim();
    if (!txt) return m.reply('《✧》Debes especificar una cantidad válida.\n> Ejemplo » *#pay 25000 @mencion*');
    if (isNaN(txt)) return m.reply('《✧》*sólo números*');

    let dmt = parseInt(txt);
    if (dmt < 1) return m.reply(`《✧》Debes regalar al menos *¥1 ${moneda}*`);

    let users = global.db.data.users;
    if (!users[who]) return m.reply('⚠️ El usuario no existe en la base de datos.');

    if (users[m.sender].estrellas < dmt) return m.reply(`《✧》No tienes suficientes *Estrellas* en el banco.\n> Tienes *¥${users[m.sender].estrellas} Estrellas* En El Banco`);

    users[m.sender].estrellas -= dmt;
    users[who].estrellas += dmt;

    await conn.reply(m.chat, `✿ Transferiste *¥${dmt} Estrellas* a @+${who.split('@')[0]}\n> Ahora tienes *¥${users[m.sender].estrellas} Estrellas* en el banco.`, m);
}

handler.help = ['pay *<@user>* <cantidad>'];
handler.tags = ['rpg'];
handler.command = ['givecoins', 'pay', 'coinsgive'];
handler.rowner = false;

export default handler;