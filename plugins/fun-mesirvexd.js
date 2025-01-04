import fs from 'fs';
 
const handler = async(m, { conn, usedPrefix, command }) => {

try{
    let txt = '*`Messi`*';
    let img = 'https://files.catbox.moe/v01b2i.jpg';
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