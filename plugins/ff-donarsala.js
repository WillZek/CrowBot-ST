let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b
do b = ps.getRandom()
while (b === a)
m.reply(`*${toM(a)},* _Busca la salita bebe que ya viene el vs_ 📌\n> ${wm}`, null, {
mentions: [a, b]
})
}

handler.command = ['donarsala', 'dsala']
handler.group = true
 
export default handler