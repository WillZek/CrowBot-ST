{
let handler = async(usedPrefix, commando);
let txt = `hola xdd`;
let img = 'https://qu.ax/yyCo.jpeg',
conn.sendFile(m.chat, txt, img)
} catch (error) {
m.reply(`Error: ${error.message}`)
m.react(done)
}
handler.help = ['holaxd'];
handler.tag = ['fun'];
handler.command = ['holaxd', 'hxd'];

export default handler;