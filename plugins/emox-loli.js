/* Pack By WillZek 
- Hecho Para Los Pajeros 
- https://github.com/WillZek 
*/

import fetch from 'node-fetch';

let handler = async(m, { conn, usedPrefix, command }) => {

m.react('🕑');

let txt = 'Pack🔥🔥🔥';

let img = 'https://delirius-apiofc.vercel.app/nsfw/girls';

m.react('✅');
// viva el porno jodido 
conn.sendMessage(m.chat, { 
        image: { url: img }, 
        caption: txt, 
        footer: dev, 
        buttons: [
            {
                buttonId: `.pack`,
                buttonText: { displayText: 'Siguiente' }
            },
        buttons: [
            {
                buttonId: `.pvideo pack video cortos`,
                buttonText: { displayText: 'Video' }
            }
        ],
        viewOnce: true,
        headerType: 4
    }, { quoted: m });
}

handler.help = ['pack'];
handler.tag = ['emox'];
handler.command = ['pack'];

export default handler;