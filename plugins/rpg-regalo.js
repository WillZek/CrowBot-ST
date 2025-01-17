
const handler = async (m, { conn }) => {
    const user = global.db.data.users[m.sender];
        conn.sendMessage(m.chat, {text: `🎩 *@${m.sender.split('@')[0]} CrowBot Te Ha Regalado:*\n> 200 Estrellas\n> 200 Experiencia\n> 200 CrowCoins`, mentions: [m.sender]}, {quoted: fkontak});
      global.db.data.users[m.sender].money = 200;
    global.db.data.users[m.sender].estrellas = 200;
  global.db.data.users[m.sender].level = 200;
 global.db.data.users[m.sender].exp = 200;
};
handler.help = ['regalo'];
handler.tags = ['rpg'];
handler.command = /^(regalo|regalocrow|crowregalo)$/i;
handler.fail = null;
export default handler;