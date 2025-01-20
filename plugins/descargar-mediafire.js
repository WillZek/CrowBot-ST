import fetch from 'node-fetch';

let handler = async (m, { conn, text }) => {
    if (!text) return conn.reply(m.chat, `❀ Ingresa un link de mediafire`, m)
  await m.react('🕓');

    try {
        let api = await fetch(`https://restapi.apibotwa.biz.id/api/mediafire?url=${text}`)
        let json = await api.json()
        let { filename, type, size, uploaded, ext, mimetype, download: dl_url } = json.data.response
        m.reply(`✰ Espera Un Momento, Estamos Enviando Su Pedido (✿◠‿◠)`)
        await m.react('✅');
        await conn.sendFile(m.chat, dl_url, filename, null, m, null, { mimetype: ext, asDocument: true })
    } catch (error) {
        console.error(error)
    }
}

handler.help = ['mediafire *<url>*']
handler.tags = ['descargas']
handler.command = ['mediafire', 'mf']
handler.estrellas = 8;

export default handler;