// By WillZek (probando)

let handler = async(m, { conn, text, usedPrefix, command }) => {

if (!text) return m.reply('🍭 Ingresa Un Texto Para Buscar En South Park');

try {
let api = `https://delirius-apiofc.vercel.app/search/southpark?query=${text}`;

let response = await fetch(api);
let json = await response.json();
let data = json.data[0];

let park = `*Resultado De Tu Búsqueda:* ${text}\n\n*Título:* ${data.title}\n*Duración:* ${data.duration}\n*Episodio:* ${data.episode}\n*Descripción:* ${data.description}\n*Link:* ${data.url}\> ${dev}`;

conn.sendMessage(m.chat, { caption: park }, { quoted: fkontak });

} catch (e) {
m.reply(`*Error:* ${e.message}`);
m.react('✖️');
  }
};

handler.command = ['southparksearch', 'sopsearch'];

export default handler;
