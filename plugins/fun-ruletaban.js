/* RuletaBan By WillZek 
- Elimina a un usuario aleatoriamente
- https://github.com/WillZek 
*/

let SCC = async (m, { conn, text, participants }) => {

const gAdmins = participants.filter(p => p.admin);
const botId = conn.user.jid;
const gOwner = gAdmins.find(p => p.isAdmin)?.id;
const gNoAdmins = participants.filter(p => p.id !== botId && p.id !== gOwner && !p.admin);

if (participants.length === gAdmins.length) { 
return m.reply('*⚠️ Solo hay administradores en este grupo.*');
    }

const randomUser   = gNoAdmins[Math.floor(Math.random() * gNoAdmins.length)];
const tag = await conn.getName(randomUser .id);

conn.reply(m.chat, `*🌠 Selección Aleatoria: ${tag}*\n> Serás Eliminado`, m, null);

await conn.groupParticipantsUpdate(m.chat, [randomUser .id], 'remove')
conn.reply(m.chat, `*${tag}* Fue Eliminado Con Éxito 🎩`, m, null)
    m.react('✅');
}

SCC.help = ['ruletaban']
SCC.tags = ['grupo']
SCC.command = /^(kickrandom|ruletaban|rban)$/i;
SCC.group = true
SCC.admin = true
SCC.botAdmin = true;

export default SCC