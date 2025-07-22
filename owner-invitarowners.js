const owners = [
  '51912345678@s.whatsapp.net',
  '51987654321@s.whatsapp.net'
];

let handler = async (m, { conn }) => {
  const link = 'https://wa.me/51988202914?text=estado';
  m.reply('☁️ Enviando invitación a los owners...');
  for (let owner of owners) {
    await conn.sendMessage(owner, {
      text: `🌩️ Hola owner, aquí tienes tu enlace de invitación:\n${link}`
    });
  }
};

handler.command = /^invitarowners$/i;
handler.rowner = true;
handler.help = ['invitarowners'];
handler.tags = ['owner'];

export default handler;