// By WillZek Para CrowBot
 
let handler = async(m, { conn }) => {

let vs = `🩵 4 VS 4 - FREE FIRE\n\n`
    vs += `🛡️ PARTICIPANTES:\n`
    vs += `•\n•\n___________________________\n•\n•\n`
    vs += `💫 REGLAS:\n`
    vs += `•\n•\n•\n`
    vs += `🍨 ${dev}`

let vsimg = 'https://files.catbox.moe/ev7gjp.jpg';

conn.sendMessage(m.chat, { image: { url: vsimg }, caption: vs }, { quoted: m });
}

handler.command = ['4vs4'];

export default handler