
let handler = async (m, { conn, text }) => {

    let user = global.db.data.users[m.sender]

    user.registered = true;
    await conn.sendMessage(m.chat, {
        text: '『✅』 Usted Está Ahora Registrado En Mi Base De Datos',
        contextInfo: {
            externalAdReply: {
                title: '⊱『✅𝆺𝅥 𝗥𝗘𝗚𝗜𝗦𝗧𝗥𝗔𝗗𝗢(𝗔) 𝆹𝅥✅』⊰',
                body: dev,
                thumbnailUrl: 'https://i.ibb.co/GMTyKcN/file.jpg',
                sourceUrl: 'https://whatsapp.com/channel/0029Vb1kImN42Dcn99y1rW0E',
                mediaType: 1,
                showAdAttribution: true,
                renderLargerThumbnail: true
            }
        }
    }, { quoted: m });

handler.help = ['regaut'];
handler.tags = ['rg'];
handler.command = ['regaut', 'regautomatico', 'regautomatic', 'regrapido', 'regrap', 'verifyaut'];
handler.register = false;
export default handler