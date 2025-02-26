// By WillZek 
import fetch from 'node-fetch';

let handler = async(m, { conn, command }) => {

if (command == 'rempalago' || command == 'nomeloesperaba' || command == 'bobesponja') {

let res = await (await fetch(`https://dark-core-api.vercel.app/api/search/meme?key=api&q=${command}`)).json();

let aud = res.resultados[0];

conn.sendMessage(m.chat, { audio: aud.url }, { quoted: m });
    }
};

handler.command = ['rempalago', 'bobesponja', 'nomeloesperaba'];

export default handler;


