/* Play Store Para CrowBot 
 By WillZek 
*/

import axios from 'axios';

let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) return conn.reply(m.chat, `🚩 Ingrese una consulta de búsqueda\n\nEjemplo:\n> *${usedPrefix + command}* car`, m, rcanal);

    await m.react('🕓');
    try {
        let response = await axios.get(`https://api.dorratz.com/playstore?query=${encodeURIComponent(args.join(' '))}`);
        let apps = response.data;

        if (!apps.length) return conn.reply(m.chat, '⚠️ No se encontraron aplicaciones.', m);

        let txt = '`乂  A P P L I C A C I O N E S  -  F I N D`\n\n';
        apps.forEach(app => {
            txt += `🌟 *Nombre*: ${app.name}\n`;
            txt += `👨‍💻 *Desarrollador*: [${app.developer}](${app.link_dev})\n`;
            txt += `⭐ *Calificación*: ${app.rating}\n`;
            txt += `🔗 *Enlace*: ${app.link}\n`;
            txt += `🖼️ *Imagen*: ${app.img}\n\n`;
        });

        txt += `> 🚩 *Consulta* : *${args.join(' ')}*`;

        await conn.sendMessage(m.chat, { text: txt }, { quoted: m });
        await m.react('✅');
    } catch (error) {
        console.error(error);
        await m.react('✖️');
        return conn.reply(m.chat, '⚠️ Ocurrió un error al buscar aplicaciones.', m);
    }
};

handler.help = ['playstore *<consulta>*'];
handler.tags = ['buscador'];
handler.command = ['playstore', 'ps'];
handler.register = true;

export default handler;