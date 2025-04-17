let handler = async (m) => {

global.db.data.chats[m.chat].isBanned = true
conn.reply(m.chat, `《★》𝗘𝗹 𝗕𝗼𝘁 𝗛𝗮 𝗦𝗶𝗱𝗼 𝗗𝗲𝘀𝗮𝗰𝘁𝗶𝘃𝗮𝗱𝗼 𝗘𝗻 𝗘𝘀𝘁𝗲 𝗖𝗵𝗮𝘁`, m, rcanal)

}
handler.help = ['banchat']
handler.tags = ['owner']
handler.command = /^banchat$/i
handler.owner = true
handler.admin = true

export default handler