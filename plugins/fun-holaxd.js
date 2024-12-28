{
let handler = async(usedPrefix, commando) => {
 try{
await conn.reply(m.chat, 'hola xd', m, rcanal);
} catch (error) {
m.reply(`Error: ${error.message}`)
m.react(done)
 }
};
handler.help = ['holaxd'];
handler.tag = ['fun'];
handler.command = ['holaxd', 'hxd'];

export default handler;