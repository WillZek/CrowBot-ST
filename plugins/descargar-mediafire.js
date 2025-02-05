import fetch from 'node-fetch';

let handler = async (m, { conn, text }) => {
    if (!text) return conn.reply(m.chat, `🍭 Ingresa un link de mediafire`, m)
  await m.react('🕓');

    try {
        let api = await fetch(`https://delirius-apiofc.vercel.app/download/mediafire?url=${text}`)
        let json = await api.json()
        let { filename, type, size, uploaded, extension, mimetype, download: dl_url } = json.data
        m.reply(`${wait}`)
        await conn.sendFile(m.chat, dl_url, filename, null, m, null, { mimetype: extension, asDocument: true });
await m.react('✅');
    } catch (error) {
        console.error(error)
    }
}

handler.help = ['mediafire *<url>*']
handler.tags = ['descargas']
handler.command = ['mediafire', 'mf']

export default handler;