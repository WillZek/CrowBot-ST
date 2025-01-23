let handler = async (m, { isPrems, conn }) => {

let img = 'https://files.catbox.moe/16bm7g.jpg' 
let texto = `• 𝐌𝐄𝐍𝐔 +10 •
「 🔞 *COMANDOS NOPOR* 🔞 」

║➤ ❤️‍🔥 _.xnxxsearch_ (texto)
║➤ ❤️‍🔥 _.xnxxdl_ (link)
║➤ ❤️‍🔥 _.phsearch_ (texto)
║➤ ❤️‍🔥 _.rule34_ (texto)
║➤ ❤️‍🔥 _.xvideosearch_ (texto)
║➤ ❤️‍🔥 _.xvideosdl_ (link)
║➤ ❤️‍🔥 _.fuck_ (@tag)
║➤ ❤️‍🔥 _.fuck2_ (@tag)
║➤ ❤️‍🔥 _.cum_ (@tag)
║➤ ❤️‍🔥 _.follar_ (@tag)
║➤ ❤️‍🔥 _.penetrar_ (@tag)
║➤ ❤️‍🔥 _.horny_ (@tag)
║➤ ❤️‍🔥 _.violar_ (@tag)
║➤ ❤️‍🔥 _.sixnine_ (@tag)`

const fkontak = {
        "key": {
    "participants":"0@s.whatsapp.net",
                "remoteJid": "status@broadcast",
                "fromMe": false,
                "id": "Halo"
        },
        "message": {
                "contactMessage": {
                        "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
                }
        },
        "participant": "0@s.whatsapp.net"
}
await conn.sendFile(m.chat, img, 'img.jpg', texto, fkontak)
}
handler.help = ['menuhot (menu +18)']
handler.tags = ['crow']
handler.command = ['menu18', 'menuhorny', 'menunsfw', 'menuhot'] 
export default handler;