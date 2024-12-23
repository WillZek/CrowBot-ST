let handler = async (m, { conn }) => {
    let pluginsConErrores = Object.values(global.plugins).filter(
        (v) => !v.help || !v.tags
    );

    let totalErrores = pluginsConErrores.length;

    // Obtener los nombres de los archivos de los plugins con errores
    let nombresPluginsConErrores = pluginsConErrores.map(plugin => plugin.fileName || 'Nombre no disponible');

    // Unir los nombres en un solo string
    let nombresPlugins = nombresPluginsConErrores.join(', ');

    conn.reply(m.chat, `*» Total de Plugins con Errores:* ${totalErrores}\n*» Nombres de los Plugins con Errores:* ${nombresPlugins}`, m);
}

handler.help = ['totalerrores']
handler.tags = ['main']
handler.command = ['totalerrores', 'terrores', 'toerrn']
handler.register = true
export default handler;