
let handler = async (m, { conn, text }) => {

let img = 'https://i.ibb.co/GMTyKcN/file.jpg';

let user = global.db.data.users[m.sender]

user.registered = true
return conn.sendMessage(m.chat, { image: { url: img, caption: '*『✅』 Usted Ya No Está En Mi Base De Datos*' } }, { quoted: m });
}
handler.help = ['regaut'];
handler.tags = ['rg'];
handler.command = ['regaut', 'regautomatico', 'regautomatic', 'regrapido', 'regrap', 'verifyaut'];
handler.register = true
export default handler