let handler = async (m, { conn, args, command, usedPrefix}) => {
                   let isAdd = /true$/.test(args[1])
        let who
        if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
        else who = m.chat
        if (!who) throw `*[🌠] Ingresa el @tag del usuario que deseas agregar a la lista.*`
if (!args[1]) throw `*[💛] Llama la función True o False*`
        if (!(who in global.db.data.users)) throw `*[🔱] El usuario no se encuentra en la base de datos.*`

       await m.reply(`${isAdd ? '*[🌠] Usuario agregado con éxito.*' : '*[🌠] Usuario eliminado con éxito.*'}`)
global.db.data.users[who].akinator.sesi = isAdd ? true : false
}
handler.command = ['death', 'callar', 'mute', 'silenciar'] 
handler.group = true
handler.admin = true
handler.rowner = true
handler.botAdmin = true
export default handler