import fs from 'fs';

const handler = async(m.chat, { conn, usedPrefix, command });

 try {
let txt = `Cristiano Ronaldo Siuuu`;
let img = 'https://files.catbox.moe/w1ciuo.jpg';

await conn.sendMessage(m.chat, { image: { url: img }, caption: txt});
m.react('🎉')

} catch (error) {
m.reply(`Error: ${error.message}`);
m.react('💥')
 }
};

handler.help = ['cr7xd'];
handler.tag = ['fun']
handler.command = ['cr7xd', 'crxd'];

export default handler;
