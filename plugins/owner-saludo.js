//Codígo creado por Niño Piña wa.me/50557865603

import fs from 'fs';
import path from 'path';

let handler = async (m, { conn }) => {
    // React con un emoji al mensaje
    m.react('🥰');

    // Lista de mensajes
    const messages = [
        "*¡SALUDO! 💛 Espero que tu día esté lleno de alegría y oportunidades brillantes.*\n> ৎ୭࠭͢𝑪𝒓𝒐𝒘𝑩𝒐𝒕𓆪͟͞ ",
        "*¡SALUDO! ☀️ Que este nuevo día te traiga sonrisas y momentos inolvidables.*\n> ৎ୭࠭͢𝑪𝒓𝒐𝒘𝑩𝒐𝒕𓆪͟͞ ",
        "*¡SALUDO! 🌟 Espero que hoy encuentres belleza en cada pequeño detalle.*\n> ৎ୭࠭͢𝑪𝒓𝒐𝒘𝑩𝒐𝒕𓆪͟͞ ",
        "*¡SALUDO! ✨ Que este día esté lleno de inspiración y que cada paso te acerque a tus sueños.*\n> ৎ୭࠭͢𝑪𝒓𝒐𝒘𝑩𝒐𝒕𓆪͟͞ ",
        "*¡SALUDO! 🌷 Espero que hoy sea un día lleno de luz y amor.*\n> ৎ୭࠭͢𝑪𝒓𝒐𝒘𝑩𝒐𝒕𓆪͟͞ ",
        "*¡SALUDO! 👑 Que el día de hoy esté lleno de alegría y oportunidades para crecer.*\n> ৎ୭࠭͢𝑪𝒓𝒐𝒘𝑩𝒐𝒕𓆪͟͞ "
    ];

    // Seleccionar un mensaje aleatorio
    let randomMessage = messages[Math.floor(Math.random() * messages.length)];

    if (m.isGroup) {
        let imagenes = [
            'https://files.catbox.moe/h5yort.mp4',             'https://files.catbox.moe/yxhxlr.gif',             'https://files.catbox.moe/auwqb2.gif',
'https://files.catbox.moe/lmg19k.gif',
'https://files.catbox.moe/9kquev.gif',
'https://files.catbox.moe/uizfay.gif',
'https://files.catbox.moe/n4zegz.mp4',
            'https://qu.ax/iioMV.mp4',
            'https://qu.ax/JgSvx.mp4',
            'https://qu.ax/dvrKi.mp4',
            'https://qu.ax/TZuhK.mp4'
        ];

        // Seleccionar una imagen aleatoria
        const video = videos[Math.floor(Math.random() * imagenes.length)];

        // Envía la imagen y el mensaje correspondiente
        conn.sendMessage(m.chat, { imagen: { url: imagenes }, gifPlayback: true, caption: randomMessage }, { quoted: m });
    }
}

handler.help = ['saludo/Greeting'];
handler.tags = ['owner'];
handler.command = ['saluda','crowsaluda','saludos','saludo','saludar'];
handler.group = true;

export default handler;