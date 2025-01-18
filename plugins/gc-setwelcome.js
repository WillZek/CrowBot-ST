let handler = async (m, { conn, text, isRowner }) => {
  if (!text) return m.reply('🎩 Ingresa un texto para ponerla como bienvenida del grupo\n> Ejemplo: .setwelcome Hola Bienvenid@');

  global.welmss = text.trim();

  m.reply(`🎩 La bienvenida grupo ahora es : ${global.welmss}`);
};

handler.help = ['setwelcome'];
handler.tags = ['grupo'];
handler.command = ['setwelcome'];
handler.owner = false;
handler.admin = true;

export default handler;