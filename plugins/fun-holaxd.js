{
const handler = async(m.chat { conn, usedPrefix, commando }) => {
 try{
let txt = `hola xdd`;
let img = 'https://qu.ax/yyCo.jpeg';
m.react('🎉');
await conn.sendMessage(m.chat, img, txt)
} catch (error) {
m.reply(`Error: ${error.message}`)
m.react('💥');
 }
};
handler.help = ['holaxd'];
handler.tag = ['fun'];
handler.command = ['holaxd', 'hxd'];

export default handler;