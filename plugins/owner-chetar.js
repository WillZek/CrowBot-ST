
const handler = async (m, { conn, isMods }) => {

// if (!isMods) return m.reply('🍫 Este Comando Solo Puede Ser Usado Por Los Moderadores Del Bot ✨');

    const user = global.db.data.users[m.sender];
        conn.sendMessage(m.chat, {text: `🚩 *@${m.sender.split('@')[0]} Ahora tienes recursos ilimitados*`, mentions: [m.sender]}, {quoted: fkontak});
      global.db.data.users[m.sender].money = Infinity;
    global.db.data.users[m.sender].estrellas = Infinity;
  global.db.data.users[m.sender].level = Infinity;
 global.db.data.users[m.sender].exp = Infinity;
};
handler.help = ['cheat'];
handler.tags = ['owner'];
handler.command = /^(ilimitado|infiniy|chetar)$/i;
handler.owner = true;
handler.fail = null;
export default handler;
