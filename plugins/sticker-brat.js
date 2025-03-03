let handler = async (m, { conn, text, usedPrefix, command }) => {
let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''
    
if (!teks) return m.reply('Por favor, proporciona un texto para el sticker.');
let res = `https://api.fgmods.xyz/api/maker/carbon?text=${teks}&apikey=elrebelde21`
await conn.sendFile(m.chat, res, 'error.jpg', null, m, null, fake)
}

handler.help = ['brat']
handler.tags = ['sticker']
handler.command = ['brat']
handler.estrellas = 1
handler.register = true 

export default handler