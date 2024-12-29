import fs from 'fs';

const handler = async(m, { conn, usedPrefix, command }) => {

try {
let txt = `Cristiano Ronaldo`;
let img = 'https://files.catbox.moe/w1ciuo.jpg';

conn.sendMessage(m.chat, { image: { url: img }, caption: txt });
m.react('🎉');

} catch (error) {
m.reply(`Error: ${error.message}`);
m.react('💥');
 } 
};

handler.help = ['cr7xd'];
handler.tag = ['fun'];
handler.command = ['cr7xd', 'cxd'];

export default handler;