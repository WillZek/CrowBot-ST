import fetch from 'node-fetch';

let handler = async(m, { conn, text, usedPrefix, command }) => {

if (!text) return m.reply('🎩 Ingresa Un Texto Que Deseas Buscar En Google');

let api = `https://delirius-apiofc.vercel.app/search/gimage?query=${text}`;
let response = await fetch(api);
let json = response.json();
let data = join.data[0];

let txt = `*Resultado De: ${text}`;
let img = data.url;

conn.sendMessage(m.chat, { image: { url: img }, caption: txt }, { quoted: fkontak });

} catch (e) {
console.error(e)
m.reply(`*Error:* ${e.message}`);
m.react('✖️');
 }
};



