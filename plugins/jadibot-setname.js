let handler = async (m, { conn, text, isRowner }) => {
  if (!text) {
    return m.reply('🎩 Debes proporcionar un nombre válido después del comando. Ejemplo: `.setname CrowBot`');
  }

  const botname = text.trim();

  try {
    global.db.data.chats[m.chat].customName = botname;

    m.reply(`🎩 El nombre del bot ha sido actualizado correctamente a: ${botname}`);
  } catch (error) {
    console.error(error);
    m.reply('🎩 Hubo un error al intentar cambiar el nombre.');
  }
};

handler.help = ['setname *<nombre>*'];
handler.tags = ['serbot'];
handler.command = ['setname'];
handler.rowner = true;

export default handler;