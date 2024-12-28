{
const handler = async(m.chat { conn, usedPrefix, commando }) => {
 try{
let txt = `hola xdd`;
let img = 'https://qu.ax/yyCo.jpeg';
await conn.sendMessage(m.chat, img, txt)
} catch (error) {
m.reply(`Error: ${error.message}`)
m.react(done)
 }
};
handler.help = ['holaxd'];
handler.tag = ['fun'];
handler.command = ['holaxd', 'hxd'];

export default handler;