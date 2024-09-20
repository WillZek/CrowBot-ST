
import { spawn } from 'child_process'

var handler = async (m, { conn, isROwner, text }) => {

if (!process.send) throw 'Dont: node luffy.js\nDo: node index.js'
if (conn.user.jid == conn.user.jid) {
await conn.reply(m.chat, '🌸 *R E I N I C I A N D O* 🌸', m, rcanal, )
process.send('reset')
} else throw 'eh'

}
handler.help = ['restart']
handler.tags = ['owner']
handler.command = ['restart','reiniciar'] 

handler.rowner = true

export default handler
