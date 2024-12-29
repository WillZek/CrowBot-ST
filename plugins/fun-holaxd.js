import fs from 'fs';

const handler = async (m) => {
  const { chat, conn, usedPrefix, commando } = m; 
  try {
    let txt = `hola xdd`;
    let img = 'https://files.catbox.moe/w1ciuo.jpg';
    m.react('🎉');
    await conn.sendMessage(chat, { image: { url: img }, caption: txt });
  } catch (error) {
    m.reply(`Error: ${error.message}`);
    m.react('💥');
  }
};

handler.help = ['holaxd'];
handler.tag = ['fun'];
handler.command = ['holaxd', 'hxd'];

export default handler;