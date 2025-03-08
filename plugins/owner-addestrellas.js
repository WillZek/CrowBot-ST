/* Código Hecho Por WillZek Para Crow Ya Que El Otro Se Jodió xD
- https://github.com/WillZek 
*/

import db from '../lib/database.js';
import MessageType from '@whiskeysockets/baileys';

let handler = async (m, { conn, text }) => {
/*    let who;
    if (m.isGroup) who = m.mentionedJid[0];
    else who = m.chat;
*/
    let who;
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false;
    else who = m.chat;

    if (!who) return m.reply(`《✧》Debes mencionar a quien quieras agregar estrellas.\n> Ejemplo » *.addestrellas @mencion 100*`);

    let txt = text.replace('@' + who.split`@`[0], '').trim();
    if (!txt) return m.reply('《✧》Debes especificar una cantidad válida.\n> Ejemplo » *.addestrellas @mencion 100*');
    if (isNaN(txt)) return m.reply('《✧》*sólo números*');

    let dmt = parseInt(txt);
    if (dmt < 1) return m.reply(`《✧》Debes agregar al menos *¥1 Estrella*`);

    let users = global.db.data.users;
    if (!users[who]) return m.reply('⚠️ El usuario no existe en la base de datos.');

    users[who].estrellas += dmt;

let name = conn.getName(who);
        await conn.reply(m.chat, `✿ Agregaste *¥${dmt} Estrellas* a \`${name || 'Sin Nombre'}\`.\n> Ahora tiene *¥${users[who].estrellas} Estrellas* en el banco.`, m);
}

handler.help = ['addestrellas *<@user>* <cantidad>']
handler.tags = ['owner'];
handler.command = ['addestrellas', 'addes']
handler.mods = true

export default handler