// By WillZek 

let handler = async(m, { conn, usedPrefix }) => {

let ff = `🎩 *M E N U - F F*\n\n`
    ff += `🌆 ${usedPrefix} 4vs4\n`
    ff += `🌆 ${usedPrefix} Br\n`
    ff += `🌆 ${usedPrefix} Mapa (Mapa Aleatorio)\n`
    ff += `🌆 ${usedPrefix} topff\n`
    ff += `${textbot}`

let img = 'https://files.catbox.moe/l6jzeo.jpeg';

conn.sendMessage(m.chat, { image: { url: img }, caption: ff }, { quoted: fkontak });
m.react('🔫');
}

handler.help = ['menuff (Menu Free Fire)'];
handler.tag = ['crow'];
handler.command = ['menuff'];

export default handler