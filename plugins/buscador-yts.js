import yts from 'yt-search'

var handler = async (m, { text, conn, args, command, usedPrefix }) => {

    if (!text) return conn.reply(m.chat, `🌸 *Escriba el título de algún vídeo de Youtube\n\nEjemplo, !${command} Yuki Suou*`, m, rcanal)

    conn.reply(m.chat, wait, m, {
        contextInfo: {
            externalAdReply: {
                mediaUrl: null,
                mediaType: 1,
                showAdAttribution: true,
                title: packname,
                body: wm,
                previewType: 0,
                thumbnail: icons,
                sourceUrl: channel
            }
        }
    })

    let results = await yts(text)
    let tes = results.all
    let teks = results.all.map(v => {
        switch (v.type) {
            case 'video': return {
                title: `🌸 *Título:* \n» ${v.title}`,
                url: `🔗 *Enlace:* \n» ${v.url}`,
                duration: `🕝 *Duración:* \n» ${v.timestamp}`,
                uploaded: `🚩 *Subido:* \n» ${v.ago}`,
                views: `👀 *Vistas:* \n» ${v.views}`,
                thumbnail: v.thumbnail
            }
        }
    }).filter(v => v)

    for (const video of teks) {
        let message = `${v.title}\n${v.url}\n${v.timestamp}\n${v.ago}\n${v.views}`
        conn.sendFile(m.chat, video.thumbnail, 'yts.jpeg', message, fkontak, m)
    }
}
handler.help = ['ytsearch']
handler.tags = ['buscador']
handler.command = /^playlist|ytbuscar|yts(earch)?$/i

handler.register = true
handler.estrellas = 4;

export default handler