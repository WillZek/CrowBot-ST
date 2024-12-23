/*
-Código Hecho Por WillZek 
- https://github.com/WillZek
*/
let handler = async (m, { conn }) => {
    let pluginsConErrores = Object.values(global.plugins).filter(
        (v) => !v.help || !v.tags
    );

    let totalErrores = pluginsConErrores.length;

    conn.reply(m.chat, `*» Total de Plugins con Errores:* ${totalErrores}`, m);
}

handler.help = ['totalerrores']
handler.tags = ['main']
handler.command = ['totalerrores', 'terrores', 'toerr']
handler.register = true
export default handler;