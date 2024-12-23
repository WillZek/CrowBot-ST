/*
- Código Hecho Por WillZek 
- https://github.com/WillZek
*/
let handler = async (m, { conn }) => {
    let pluginsConErrores = Object.values(global.plugins).filter(
        (v) => !v.help || !v.tags
    );

    let totalErrores = pluginsConErrores.length;

    conn.reply(m.chat, `*✰ 𝐓𝐨𝐭𝐚𝐥 𝐃𝐞 𝐄𝐫𝐫𝐨𝐫𝐞𝐬 𝐄𝐧 𝐏𝐥𝐮𝐠𝐢𝐧𝐬* ${totalErrores}`, m, rcanal);
}

handler.help = ['totalerrores']
handler.tags = ['main']
handler.command = ['totalerrores', 'terrores', 'toerr']
handler.register = true
export default handler;