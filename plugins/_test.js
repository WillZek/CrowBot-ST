import fetch from 'node-fetch';

let handler = async(m, { conn, text, usedPrefix, command }) => {

if (!text) return m.reply('🎩 Ingresa Un Texto Que Deseas Buscar En Google');

let api = `https://delirius-apiofc.vercel.app/search/gimage?query=${text}`;
let response = await fetch(api);
