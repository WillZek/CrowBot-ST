// By WillZek

import fetch from 'node-fetch';

let handler = async(m, { conn, text, usedPrefix, command }) => {

if (!text) return m.reply('🍭 Ingresa Un Nombre De Un Pais');

try {
let api = `https://delirius-apiofc.vercel.app/tools/flaginfo?query=${text}`;

let response = await fetch(api);
let json = await response.json();
let data = json.data[0];

let park = `*Información De:* ${text}\n\n*Nombre Oficial:* ${data.officialName}\n*Capital:* ${data.capitalCity}\n*Continente:* ${data.continent}\n*Población:* ${data.population}\n*Prefijo:* ${data.callingCode}\n*Moneda:* ${data.currency}\n*Descripción:* ${data.description}`;

let img = data.imagen;

conn.sendMessage(m.chat, { image: { url: img }, caption: park }, { quoted: fkontak });

} catch (e) {
m.reply(`*Error:* ${e.message}`);
m.react('✖️');
  }
};

handler.command = ['paisinfo', 'flag'];

export default handler;
