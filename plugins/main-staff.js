let handler = async (m, { conn, command, usedPrefix }) => {
    let staff = `EQUIPO DE AYUDANTES DEL BOT
    💛 *Bot:* ${botname}
    💛 *Versión:* ${vs}
    💛 *Libreria:* ${libreria + baileys}
    
    👑 *Pɾσριҽƚαɾισ:*
    
    • 
    💛 *Rol:* Nιñσ Pιñα
    💛 *Número:* ${creador}
    💛 *GitHub:* https://github.com/Willzek
    
    🍄  *Colaboradores:*
    
    • ιαɳαʅҽʝαɳԃɾσσƙ15x
    💛 *Rol:* Colaborador
    💛 *Número:* Wa.me/5493876639332
    💛 *GitHub:* https://github.com/ianalejandrook15x`
    await conn.sendFile(m.chat, icons, 'crow.jpg', staff.trim(), fkontak, true, {
    contextInfo: {
    'forwardingScore': 200,
    'isForwarded': false,
    externalAdReply: {
    showAdAttribution: true,
    renderLargerThumbnail: false,
    title: `👑 Developers 👑`,
    body: `🌟 STAFF DEL BOT`,
    mediaType: 1,
    sourceUrl: redes,
    thumbnailUrl: icono
    }}
    }, { mentions: m.sender })
    await m.react(emoji)
    
    }
    handler.help = ['staff']
    handler.command = ['colaboradores', 'staff']
    handler.register = true
    handler.tags = ['main']
    
    export default handler
