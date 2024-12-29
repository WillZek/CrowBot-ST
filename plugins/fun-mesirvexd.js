import fs from 'fs';
 
const handler = async(m.chat, usedPrefix, command) => {

try{
    let txt = `Siuu`;
    let img = 'https://files.catbox.moe/w1ciuo.jpg';
m.react('🎉')
await conn.sendMessage(m.chat, { image: { url: img }, caption: txt });

} catch (error) { 
m.reply(`*Error:* ${error.message}`);
m.react('💥')
 }
};

handler.help = ['messirvexd'];
handler.tag = ['fun'];
handler.command = ['messirvexd', 'mxd'];

export default handler;