let handler = async (m, { isPrems, conn }) => {

// let img = 'https://files.catbox.moe/w1ltfq.jpg'
let img = './media/menus/Menu.jpg'; 

let texto = `• 𝐌𝐄𝐍𝐔-𝐋𝐎𝐆𝐎𝐒 •
•° 🔱 *LOGOS BY CROWBOT* 🔱 °•

┊➺ 🪩 .𝘭𝘰𝘨𝘰𝘤𝘰𝘳𝘢𝘻𝘰𝘯 (texto)
┊➺ 🪩 .𝘭𝘰𝘨𝘰𝘤𝘩𝘳𝘪𝘴𝘵𝘮𝘢𝘴 (texto)
┊➺ 🪩 .𝘭𝘰𝘨𝘰𝘱𝘢𝘳𝘦𝘫𝘢 (texto)
┊➺ 🪩 .𝘭𝘰𝘨𝘰𝘨𝘭𝘪𝘵𝘤𝘩 (texto)
┊➺ 🪩 .𝘭𝘰𝘨𝘰𝘴𝘢𝘥 (texto)
┊➺ 🪩 .𝘭𝘰𝘨𝘰𝘨𝘢𝘮𝘪𝘯𝘨 (texto)
┊➺ 🪩 .𝘭𝘰𝘨𝘰𝘴𝘰𝘭𝘪𝘵𝘢𝘳𝘪𝘰 (texto)
┊➺ 🪩 .𝘭𝘰𝘨𝘰𝘥𝘳𝘢𝘨𝘰𝘯𝘣𝘢𝘭𝘭 (texto)
┊➺ 🪩 .𝘭𝘰𝘨𝘰𝘯𝘦𝘰𝘯 (texto)
┊➺ 🪩 .𝘭𝘰𝘨𝘰𝘨𝘢𝘵𝘪𝘵𝘰 (texto)
┊➺ 🪩 .𝘭𝘰𝘨𝘰𝘤𝘩𝘪𝘤𝘢𝘨𝘢𝘮𝘦𝘳 (texto)
┊➺ 🪩 .𝘭𝘰𝘨𝘰𝘢𝘳𝘮𝘺 (texto)
┊➺ 🪩 .𝘭𝘰𝘨𝘰𝘯𝘢𝘳𝘶𝘵𝘰 (texto)
┊➺ 🪩 .𝘭𝘰𝘨𝘰𝘧𝘶𝘵𝘶𝘳𝘪𝘴𝘵𝘢 (texto)
┊➺ 🪩 .𝘭𝘰𝘨𝘰𝘯𝘶𝘣𝘦 (texto)
┊➺ 🪩 .𝘭𝘰𝘨𝘰𝘢𝘯𝘨𝘦𝘭 (texto) 
┊➺ 🪩 .𝘭𝘰𝘨𝘰𝘤𝘪𝘦𝘭𝘰 (texto)
┊➺ 🪩 .𝘭𝘰𝘨𝘰𝘨𝘳𝘢𝘧𝘧𝘪𝘵𝘪3𝘥 (texto)
┊➺ 🪩 .𝘭𝘰𝘨𝘰𝘮𝘢𝘵𝘳𝘪𝘹 (texto)
┊➺ 🪩 .𝘭𝘰𝘨𝘰𝘩𝘰𝘳𝘳𝘰𝘳 (texto)
┊➺ 🪩 .𝘭𝘰𝘨𝘰𝘢𝘭𝘢𝘴 (texto)
┊➺ 🪩 .𝘭𝘰𝘨𝘰𝘱𝘶𝘣𝘨 (texto)
┊➺ 🪩 .𝘭𝘰𝘨𝘰𝘨𝘶𝘦𝘳𝘳𝘦𝘳𝘰 (texto)
┊➺ 🪩 .𝘭𝘰𝘨𝘰𝘱𝘶𝘣𝘨𝘧𝘦𝘮 (texto)
┊➺ 🪩 .𝘭𝘰𝘨𝘰lol (texto)
┊➺ 🪩 .𝘭𝘰𝘨𝘰𝘢𝘮𝘰𝘯𝘨𝘶𝘴 (texto)
┊➺ 🪩 .𝘭𝘰𝘨𝘰𝘱𝘰𝘳𝘵𝘢𝘥𝘢𝘱𝘭𝘢𝘺𝘦𝘳 (texto)
┊➺ 🪩 .𝘭𝘰𝘨𝘰𝘱𝘰𝘳𝘵𝘢𝘥𝘢𝘧𝘧 (texto)
┊➺ 🪩 .𝘭𝘰𝘨𝘰𝘷𝘪𝘥𝘦𝘰𝘵𝘪𝘨𝘦𝘳 (texto)
┊➺ 🪩 .𝘭𝘰𝘨𝘰𝘷𝘪𝘥𝘦𝘰𝘪𝘯𝘵𝘳𝘰 (texto)
┊➺ 🪩 .𝘭𝘰𝘨𝘰𝘷𝘪𝘥𝘦𝘰𝘨𝘢𝘮𝘪𝘯𝘨 (texto)
┊➺ 🪩 _.sadcat_ (texto)
┊➺ 🪩 _.tweet_ (comentario)`

 conn.sendMessage(m.chat, {
        text: texto,
        contextInfo: {
        externalAdReply: {
        title: '𓂂𓏸  𐅹੭੭ ᴍᴇɴᴜ ᴅᴇ ʟᴏɢᴏs 🌙 ᦡᦡ',
        body: dev,
        thumbnailUrl: img,
        sourceUrl: redes,
        mediaType: 1,
        renderLargerThumbnail: true
        }}},
        { quoted: fkontak })
}

handler.help = ['menulogo (menu de logos)']
handler.tags = ['crow']
handler.command = ['menulogos', 'logos', 'menulogo'] 
export default handler