let muted = {};

let handler = async (m, { conn, isAdmin, command, text, groupMetadata }) => {
  if (!text) return m.reply('Etiqueta A Una Persona ✨');
  if (!m.isGroup) return m.reply('Este Comando Solo Puede Ser Usado En Grupos');

const groupMetadata = await conn.groupMetadata(m.chat);
const participants = groupMetadata.participants;
  const user = m.sender;

if (command == 'test' && isAdmin) {
if (text.startsWith('test ')) {
      const target = text.substring(5).trim();
      const targetUser = participants.find(p => p.id.startsWith('@') ? p.id.replace('@s.whatsapp.net','') === target : p.id === target);

if (targetUser) {
muted[targetUser.id] = true;
conn.reply(m.chat, `Usuario ${targetUser.id.replace('@s.whatsapp.net','')} silenciado.`, m);
} else {
conn.reply(m.chat, `Usuario no encontrado.`, m);
 }
} else {
conn.reply(m.chat, 'Uso: .mute <@tag> (etiqueta al user en otras palabras)', m);
}
    return;
  }

if (command == 'test2' && isAdmin) {
 if (text.startsWith('test2 ')) {
const target = text.substring(7).trim();
const targetUser = participants.find(p => p.id.startsWith('@') ? p.id.replace('@s.whatsapp.net','') === target : p.id === target);

if (targetUser) {
delete muted[targetUser.id];
conn.reply(m.chat, `Usuario ${targetUser.id.replace('@s.whatsapp.net','')} desmuteado.`, m);
} else {
conn.reply(m.chat, `Usuario no encontrado.`, m);
 }
} else {
conn.reply(m.chat, 'Uso: .unmute + el usuario (osea el @Tag)', m);
}
    return;
  }

if (muted[user]) {
await conn.sendMessage(m.chat, { delete: m.key });
    return;
  }

};

handler.command = ['test', 'test2']

export default handler;