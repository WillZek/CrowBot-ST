const owners = [
  '51912345678@s.whatsapp.net',
  '51987654321@s.whatsapp.net'
];

let handler = async (m, { conn, command, usedPrefix }) => {
  const inviteLink = 'https://wa.me/51988202914?text=estado';
  
  m.reply('🌩️ Enviando invitación a los owners...');

  for (let owner of owners) {
    await conn.sendMessage(owner, {
      text: `👋 Hola Owner, aquí tienes el link de invitación:\n\n${inviteLink}`
    });
  }
};

handler.help = ['invitarowners'];
handler.tags = ['owner'];
handler.command = /^invitarowners$/i;
handler.rowner = true; // Solo el dueño principal puede usar este comando

export default handler;