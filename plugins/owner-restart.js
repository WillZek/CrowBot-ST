import { spawn } from 'child_process';

let handler = async (m, { conn, isROwner, text }) => {
    if (!process.send) throw '*『✦』Reiniciar: node start.js*\n*『✦』Reiniciar: node index.js*';

    if (conn.user.jid === conn.user.jid) {
        const progreso = [
      "*♻️iniciando proceso de reinicio de CrowBot*",
            "□□□□□ 0%",
            "■□□□□ 20%",
            "■■□□□ 40%",
            "■■■□□ 60%",
            "■■■■□ 80%",
            "■■■■■ 100%",
        ];

        const { key } = await conn.sendMessage(m.chat, { text: progreso[0] }, { quoted: m });

        for (let i = 1; i < progreso.length; i++) {
            await delay(1000);

            await conn.sendMessage(m.chat, { text: progreso[i], edit: key });
        }

        await conn.sendMessage(m.chat, { text: "『✅』*CrowBot* reiniciado con éxito espera unos segundos asta que el proceso termine.", edit: key });

        await delay(2000);
        process.send('reset');
    } else {
        throw 'No tienes permisos para ejecutar este comando.';
    }
};

handler.help = ['restart'];
handler.tags = ['tools'];
handler.command = ['restart', 'xd', 'reiniciar'];
handler.rowner = true;

export default handler;

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));