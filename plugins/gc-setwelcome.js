let handler = async (m, { conn, text, isRowner }) => {
  if (!text) return m.reply('🎩 Por favor, proporciona una bienvenida para el bot.\n> Ejemplo: #setwelcome Hola user');

  global.welmss = text.trim();

  m.reply(`🎩 La bienvenida del bot ha sido cambiado a: ${global.welmss}`);
};

handler.help = ['setwelcome'];
handler.tags = ['grupo'];
handler.command = ['setwelcome'];
handler.owner = false;
handler.admin = true;

export default handler;