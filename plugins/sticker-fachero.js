let handler = async(m, { conn, usedPrefix, command }) => {
    const stickerUrl = 'https://files.catbox.moe/agx2sc.webp'; 
m.react('😎')
    await conn.sendFile(m.chat, stickerUrl, 'sticker.webp', '', m, null);
};

handler.command = ['fachero'];

export default handler;