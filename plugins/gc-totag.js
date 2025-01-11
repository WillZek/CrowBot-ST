
let handler = async (m, { conn, text, participants}) => {

    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    if (!m.quoted) throw `*[ 💠 ] Responde al mensaje o complementa la mención.*`
    conn.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: users } )
}

handler.help = ['totag']
handler.tags = ['grupo']
handler.command = /^(totag|tag|n)$/i

handler.admin = true
handler.group = true

export default handler