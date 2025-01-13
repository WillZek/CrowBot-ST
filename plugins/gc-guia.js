let handler = async (m, { isPrems, conn }) => {
let time = global.db.data.users[m.sender].lastcofre + 0 // 36000000 10 Horas //86400000 24 Horas
if (new Date - global.db.data.users[m.sender].lastcofre < 0) throw `🌠 Ya Reclamastes Tu Cofre\𝚗Vuelve en *${msToTime(time - new Date())}* Para Volver A Reclamar`

let img = 'https://telegra.ph/file/03d1e7fc24e1a72c60714.jpg' 
let texto = `𝙂𝙪𝙞𝙖 𝘽𝙖́𝙨𝙞𝙘𝙖:

*𝘈𝘥𝘮𝘪𝘯𝘪𝘴𝘵𝘳𝘢𝘤𝘪𝘰́𝘯*

1. .𝘰𝘯/𝘰𝘧𝘧 𝘢𝘶𝘥𝘪𝘰𝘴
2. .𝘰𝘯/𝘰𝘧𝘧 𝘮𝘰𝘥𝘰𝘢𝘥𝘮𝘪𝘯 
3. .𝘰𝘯/𝘰𝘧𝘧 𝘣𝘪𝘦𝘯𝘷𝘦𝘯𝘪𝘥𝘢
4. .𝘨𝘳𝘶𝘱𝘰 𝘢𝘣𝘳𝘪𝘳/𝘤𝘦𝘳𝘳𝘢𝘳

*𝘔𝘰𝘥𝘦𝘳𝘢𝘤𝘪𝘰́𝘯*

1. .𝘴𝘦𝘵𝘸𝘦𝘭𝘤𝘰𝘮𝘦 𝘵𝘦𝘹𝘵𝘰 @𝘶𝘴𝘦𝘳
2. .𝘴𝘦𝘵𝘣𝘺𝘦 𝘵𝘦𝘹𝘵𝘰 @𝘶𝘴𝘦𝘳
3. .𝘱𝘳𝘰𝘮𝘰𝘵𝘦 @𝘶𝘴𝘦𝘳 *(𝘥𝘢 𝘢𝘥𝘮𝘪𝘯 𝘢 𝘢𝘭𝘨𝘶𝘪𝘦𝘯)*
4. .𝘥𝘦𝘮𝘰𝘵𝘦 @𝘶𝘴𝘦𝘳 *(𝘳𝘦𝘵𝘪𝘳𝘢 𝘢𝘥𝘮𝘪𝘯 𝘢 𝘢𝘭𝘨𝘶𝘪𝘦𝘯)*
5. _.setreglas texto_

*𝘈𝘤𝘤𝘪𝘰𝘯𝘦𝘴*

1. .𝘮𝘦𝘯𝘶 *(𝘓𝘪𝘴𝘵𝘢 𝘥𝘦 𝘤𝘰𝘮𝘢𝘯𝘥𝘰𝘴)* 
2. .𝘥𝘦𝘭 *(𝘦𝘭𝘪𝘮𝘪𝘯𝘢𝘳 𝘦𝘭 𝘮𝘦𝘯𝘴𝘢𝘫𝘦 𝘥𝘦 𝘢𝘭𝘨𝘶𝘪𝘦𝘯)*
3. .𝘧𝘢𝘯𝘵𝘢𝘴𝘮𝘢𝘴 *(𝘭𝘪𝘴𝘵𝘢 𝘥𝘦 𝘪𝘯𝘢𝘤𝘵𝘪𝘷𝘰𝘴)* 
4. .𝘵𝘰𝘥𝘰𝘴 *(𝘦𝘵𝘪𝘲𝘶𝘦𝘵𝘢 𝘨𝘦𝘯𝘦𝘳𝘢𝘭 𝘤𝘰𝘯 𝘮𝘦𝘯𝘤𝘪𝘰́𝘯)*
5. .𝘯𝘰𝘵𝘪 *(𝘦𝘵𝘪𝘲𝘶𝘦𝘵𝘢 𝘴𝘪𝘯 𝘮𝘦𝘯𝘤𝘪𝘰́𝘯)*`

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
global.db.data.users[m.sender].lastcofre = new Date * 1
}
handler.help = ['guia']
handler.tags = ['grupo']
handler.command = ['guia', 'guía'] 
export default handler