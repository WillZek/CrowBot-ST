/* Código Hecho por WillZek 
- Necesitarás La DB en el handler
- definir global.botname en el config.js
*/

let handler = async (m, { conn, text, isRowner }) => {
  if (!text) {
    return m.reply('🍨 Ingrese El Nuevo Nombre Del Bot');
  }

  const newname = text.trim();

  try {
    global.db.data.users[m.sender].namebot = newname;
global.botname = newname;

    m.reply(`🎩 Nuevo Nombre Del Bot: ${newname}`);
  } catch (error) {
    console.error(error);
    m.reply('🎩 Hubo un error al intentar cambiar el nombre del bot');
  }
};

handler.help = ['setname *<mensaje>*'];
handler.tags = ['serbot'];
handler.command = ['setname', 'setbotname'];
handler.admin = true;
handler.group = true;

export default handler;