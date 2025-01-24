let handler = async(m, { conn, usedPrefix, command }) => {
    const stickerUrl = 'https://files.catbox.moe/wy49r0.webp'; 
    m.react('😎');

    await conn.sendFile(m.chat, stickerUrl, 'sticker.webp', '', m, null);

    const groupMetadata = await conn.groupMetadata(m.chat);
    const participants = groupMetadata.participants;
    let mentions = participants.map(p => p.id).join(' ');

    await conn.sendMessage(m.chat, { text: `A Levantarse Que Ya Amaneció 🙂‍↕️`, mentions: participants.map(p => p.id) });
};

handler.tag = ['sticker'];
handler.help = ['reloj'];
handler.command = ['levantar', 'reloj'];
handler.admin = true;
export default handler;