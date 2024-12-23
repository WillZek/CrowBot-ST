// Código Creado Por WillZek 

let handler = async (m, { conn }) => {

    let pluginsConErrores = Object.values(global.plugins).filter(
        (v) => !v.help || !v.tags
    );

    let totalErrores = pluginsConErrores.length;

    let nombresErrores = totalErrores > 0 
        ? pluginsConErrores.map(p => p.help ? p.help.join(', ') : 'Sin nombre').join('\n')
        : 'No hay plugins con errores.';

    conn.reply(m.chat, `*» Total de Plugins con Errores:* ${totalErrores}\n\n*» Nombres de los Plugins con Errores:*\n${nombresErrores}`, m);
}

handler.help = ['pluginsconerrores']
handler.tags = ['main']
handler.command = ['pluginsconerrores', 'perror']
handler.register = true
export default handler;