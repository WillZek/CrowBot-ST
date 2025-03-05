import fetch from 'node-fetch';

let handler = async (m, { conn, args }) => {

if (!args[0]) return m.reply('🍭 Ingresa Un Link De Youtube');

let api = await(await fetch(`https://dark-core-api.vercel.app/api/download/YTMP3?key=api&url=${args[0]}`)).json();

let txt = `Titulo: ${api.title}`;
conn.reply(m.chat, txt, m, rcanal);

conn.sendMessage(m.chat, { audio: { url: api.download }, mimeType: 'audio/mpeg' }, { quoted: m });
 }

handler.command = ['ytmp3', 'ytest'];

export default handler;