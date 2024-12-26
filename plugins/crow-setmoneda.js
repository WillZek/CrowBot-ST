let handler = async (m, { conn, text, isRowner }) => {
  if (!text) return m.reply('🌠 Por favor, proporciona un nombre para el bot.\nEjemplo: setmoneda Coins');

  global.moneda = text.trim();
  
  m.reply(`🌠 La moneda del bot ha sido cambiado a: ${global.moneda}`);
};

handler.help = ['setmoneda'];
handler.tags = ['tools'];
handler.command = ['setmoneda','setbalance'];
handler.owner = true;

export default handler;