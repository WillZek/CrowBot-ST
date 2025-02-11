// By WillZek Para CrowBot

let handler = async(m, { conn }) => {

let map = '> *Aquí Tienes 🍨*';
let mimg = [ 
'https://files.catbox.moe/l3rzl1.jpg',
'https://files.catbox.moe/mthxrp.jpg',
'https://files.catbox.moe/nejjwf.jpg',
'https://files.catbox.moe/k0dlt8.jpg',
'https://files.catbox.moe/0nwrcm.jpg',
].getRandom()

conn.sendMessage(m.chat, { image: { url: mimg }, caption: map }, { quoted: fkontak });
}

handler.command = ['mapa'];

export default handler 