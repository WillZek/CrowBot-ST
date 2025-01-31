import fetch from 'node-fetch';

let handler = async(m, { conn, text, usedPrefix, command }) => {

if (!text) return m.reply('🎩 Ingresa Un Texto Que Deseas Buscar En Google');

