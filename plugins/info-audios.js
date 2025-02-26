/* 
- Código Hecho Por WillZek
- >> https://github.com/WillZek
*/

import fetch from 'node-fetch';

let handler = async(m, { conn, command }) => {

if (command == 'rempalago' || command == 'nomeloesperaba' || command == 'bobesponja' || command == 'fiestadeladmin') {

let res = await (await fetch(`https://dark-core-api.vercel.app/api/search/meme?key=api&q=${command}`)).json();

let aud = res.resultados[0];

if (!res.ok) return m.reply('No Se Encontraron Resultados');

conn.sendMessage(m.chat, { audio: { url: aud.url }, mimetype: 'audio/mpeg' }, { quoted: m });
    }
};

handler.command = ['rempalago', 'bobesponja', 'fiestadeladmin'];

export default handler;


