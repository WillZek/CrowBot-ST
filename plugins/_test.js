// import fs from 'fs'; pronto

let muted = {};

let handler = async (m, { conn, isAdmin, command, text, groupMetadata, participants }) => {
  if (!m.isGroup) return m.reply('Este Comando Solo Puede Ser Usado En Grupos');
  if (!text) return m.reply('Etiqueta A Una Persona ✨');

  const user = m.sender;

if (command === 'test') {
    const target = text.substring(5).trim();
    const targetUser  = participants.find(p => p.id.startsWith('@') ? p.id.replace('@s.whatsapp.net', '') === target : p.id === target);

if (targetUser ) {
      muted[targetUser .id] = true;
      conn.reply(m.chat, `Usuario ${targetUser .id.replace('@s.whatsapp.net', '')} silenciado.`, m);

} else {
conn.reply(m.chat, `Usuario no encontrado.`, m);
    }
} else if (command === 'test2') {
const target = text.substring(7).trim();
const targetUser  = participants.find(p => p.id.startsWith('@') ? p.id.replace('@s.whatsapp.net', '') === target : p.id === target);

if (targetUser ) {
delete muted[targetUser .id];
conn.reply(m.chat, `Usuario ${targetUser .id.replace('@s.whatsapp.net', '')} desmuteado.`, m);
} else {
conn.reply(m.chat, `Usuario no encontrado.`, m);
    }
} else {
conn.reply(m.chat, 'Uso: .mute <@tag> (etiqueta al user en otras palabras)', m);
  }

if (muted[user]) {
    await conn.sendMessage(m.chat, { delete: m.key });
    return;
  }
};

handler.command = ['test', 'test2'];

export default handler;