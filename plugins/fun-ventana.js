import fs from 'fs';

const handler = async(m, { conn, usedPrefix, command }) => {

try {
let txt = `Una Ventana`;
let img = 'https://files.catbox.moe/w1ciuo.jpg';

conn.sendMessage(m.chat, { image: { url: img }, caption: txt });
m.react('💥');

} catch (error) {
m.reply(`Error: ${error.message}`);
m.react('🎊');
 }
};

handler.help = ['ventana'];
handler.tag = ['fun'];
handler.command = ['ventana', 'vxd'];

export default handler;
