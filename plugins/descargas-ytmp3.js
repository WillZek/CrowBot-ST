// *[ ❀ YTMP3 ]*
import fetch from 'node-fetch';

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) return conn.reply(m.chat, `❀ Ingresa un link de YouTube válido`, m);

  await m.react('🕓');

  try {
    let api = await (await fetch(`https://api.siputzx.my.id/api/d/ytmp3?url=${text}`)).json();
    let dl_url = api.data.dl;

    await conn.sendMessage(m.chat, { audio: { url: dl_url }, caption: `*Aqui tiene ฅ^•ﻌ•^ฅ*` },{ quoted: m });

    await m.react('✅');
  } catch (error) {
    console.error(error);
    await m.react('❌');
    conn.reply(m.chat, `❀ error comando mal usado .ytmp3 *<url>*  `, m);
  }
};

handler.help = ['ytmp3 *<url>*'];
handler.tags = ['downloader'];
handler.command = ['ytmp3', 'yta'];
handler.register = true;

export default handler;