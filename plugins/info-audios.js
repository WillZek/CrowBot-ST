/* 
- Código Hecho Por WillZek
- >> https://github.com/WillZek
*/

import fetch from 'node-fetch';

let handler = async(m, { conn, command }) => {

if (command == 'rempalago' || command == 'bobesponja' || command == 'pintamos' || command == 'fiesta') {

// después agrego mas comandos de audios 
let res = await (await fetch(`https://dark-core-api.vercel.app/api/search/meme?key=api&q=${command}`)).json();

let aud = res.resultados[0];

conn.sendMessage(m.chat, { audio: { url: aud.url }, mimetype: 'audio/mpeg' }, { quoted: m });
    }
};

handler.command = ['rempalago', 'bobesponja', 'fiesta', 'pintamos'];

export default handler;


