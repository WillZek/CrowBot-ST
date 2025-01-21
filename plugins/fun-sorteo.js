/* Sorteo By WillZek
- https://github.com/WillZek 
- (No es la gran cosa Pero para los boludos ya le facilite el trabajo 🥱)
*/

import db from '../lib/database.js';
import MessageType from '@whiskeysockets/baileys';

let handler = async (m, { groupMetadata, command, conn }) => {

    let participants = groupMetadata.participants.map(v => v.id);
    
    let randomUser  = participants[Math.floor(Math.random() * participants.length)];

    let message = `🎉 ¡Felicidades @${randomUser .split('@')[0]}!🥳 Has sido elegido al azar. 🎉`;

m.react('🎉');

    await conn.sendMessage(m.chat, { text: message, mentions: [randomUser ] }, { quoted: m });
}

handler.help = ['sorteo'];
handler.command = ['sorteo'];
handler.tags = ['grupo'];
handler.group = true;
handler.admin = true

export default handler;