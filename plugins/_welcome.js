export async function before(m, { conn, participants, groupMetadata }) {
    const fkontak = { key: { fromMe: false, participant: '0@s.whatsapp.net' }, message: { conversation: '¡Hola!' } };

    if (!m.messageStubType || !m.isGroup) return true;

    let userId = m.messageStubParameters[0];

    const welcomeImage = 'https://files.catbox.moe/smlobx.jpg';
    const goodbyeImage = 'https://files.catbox.moe/smlobx.jpg';

    let pp;
    try {
        pp = await conn.profilePictureUrl(userId, 'image');
    } catch (error) {
        pp = null;
    }

    let img;
    try {
        img = await (await fetch(pp || welcomeImage)).buffer();
    } catch (fetchError) {
        img = await (await fetch(welcomeImage)).buffer();
    }

    let chat = global.db.data.chats[m.chat];

    if (chat.welcome && m.messageStubType === 27) {
        let wel = `┌─⪩ CrowBot - ST \n│「 𝐁𝐈𝐄𝐍𝐕𝐄𝐍𝐈𝐃𝐎 😁 」\n└┬⪩ 「 @${userId.split`@`[0]} 」\n    │🐉  ${groupMetadata.subject}\n   └───────────────┈ ⳹\n\n> ✐ Puedes usar *#menu* para ver la lista de comandos.`;
        try {
            await conn.sendMini(m.chat, packname, dev, wel, img, img, channel, fkontak);
        } catch (sendError) {
            console.error('Error al enviar mensaje de bienvenida:', sendError);
        }
    }

    // Mensaje de despedida (cuando se sale)
    if (chat.welcome && m.messageStubType === 28) {
        let bye = `┌─⪩ CrowBot - ST \n│「 𝐀𝐃𝐈Ó𝐒 🗣️‼️ 」\n└┬⪩ 「 @${userId.split`@`[0]} 」\n   │😔 SE NOS FUE xd\n   │👺 NO VUELVAS SAIYAN\n   └───────────────┈ ⳹`;
        let img2;
        try {
            img2 = await (await fetch(goodbyeImage)).buffer(); 
            await conn.sendMini(m.chat, packname, dev, bye, img2, img2, channel, fkontak);
        } catch (sendError) {
            console.error('Error al enviar mensaje de despedida:', sendError);
        }
    }

    // Mensaje de expulsión (cuando se echa a alguien)
    if (chat.welcome && m.messageStubType === 32) {
        let kick = `┌─⪩ CrowBot - ST \n│「 𝐀𝐃𝐈Ó𝐒 🗣️‼️ 」\n└┬⪩ 「 @${userId.split`@`[0]} 」\n   │😔 SE NOS FUE xd\n   │✨ NO VUELVAS AQUI\n   └───────────────┈ ⳹`;
        let img3;
        try {
            img3 = await (await fetch(goodbyeImage)).buffer();
            await conn.sendMini(m.chat, packname, dev, kick, img3, img3, channel, fkontak);
        } catch (sendError) {
            console.error('Error al enviar mensaje de expulsión:', sendError);
        }
    }
}
