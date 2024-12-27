import { spawn } from 'child_process';

if (!process.send) throw '*『✦』Reiniciar: node start.js*\n*『✦』Reiniciar: node index.js*';

const handler = async (m, { conn, isROwner, text }) => {
    if (!process.send) throw 'Dont: node luffy.js\nDo: node index.js';

    if (isROwner) {
        const progreso = [
            "♻️ Iniciando proceso de reinicio de TECNO-BOT",
            "□□□□□ 0%",
            "■□□□□ 20%",
            "■■□□□ 40%",
            "■■■□□ 60%",
            "■■■■□ 80%",
            "■■■■■ 100%",
        ];

        await conn.sendMessage(m.chat, { text: progreso[0] }, { quoted: m });

        await conn.reply(m.chat, '🌠 *R E I N I C I A N D O* 🌠', m);
        
        process.send('reset');
    } else {
        throw 'No tienes permiso para reiniciar el bot.';
    }
};

handler.help = ['restart'];
handler.tags = ['owner'];
handler.command = ['restart', 'reiniciar'];
handler.rowner = true;

export default handler;