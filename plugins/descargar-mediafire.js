import axios from 'axios';
import fetch from 'node-fetch';
import * as cheerio from 'cheerio';
import {mediafiredl} from '@bochilteam/scraper';

const handler = async (m, {conn, args, usedPrefix, command}) => {
    if (!args[0]) throw `*🎄Ingresa un link de mediafire junto al comando. Ejemplo:* \n${usedPrefix + command} https://www.mediafire.com/file/941xczxhn27qbby/GBWA_V12.25FF-By.SamMods-.apk\n\n> *Powered By WillZek*`;
m.react('❄️')
  try {
    const resEX = await mediafiredl(args[0]);
    let text = `𝐌𝐄𝐃𝐈𝐀𝐅𝐈𝐑𝐄 - 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑\n\n`
    text += `│  ✦ *Nombre:* ${name}\n\n`
    text += `│  ✦ *Peso:* ${size}\n\n`
    text += `│  ✦ *Tipo:* ${mime}\n\n`
    text += `╚──────────────\n`
    text += `> 🎄Espere Un Momento Enviando Archivo Tenga Paciencia❄️`

    await conn.reply(m.chat, text, m, {
contextInfo: { externalAdReply :{ showAdAttribution: true,
                        sourceUrl: 'https://whatsapp.com/channel/0029VakfOZfHFxP7rNrUQk2d',
                        mediaType: 2,
                        description: `Sigue El Canal Por Favor`,
                        title: `👑 Gracias Por Usar A CrowBot, WhatsApp Bot⛄`,
                        body: `🎄 Powered By WillZek`,          previewType: 0,
                        thumbnail: await (await fetch('https://i.ibb.co/ZfjXNy0/file.jpg')).buffer(),
                        mediaUrl: channel

                      }}
})
    await conn.sendFile(m.chat, resEX.url, resEX.filename, '', m, null, {mimetype: resEX.ext, asDocument: true});
  } catch {
    try {
      const res = await mediafireDl(args[0]);
      const {name, size, date, mime, link} = res;
      let text2 = `𝐌𝐄𝐃𝐈𝐀𝐅𝐈𝐑𝐄 - 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑\n\n`
    text2 += `│  ✦ *Nombre:* ${name}\n\n`
    text2 += `│  ✦ *Peso:* ${size}\n\n`
    text2 += `│  ✦ *Tipo:* ${mime}\n\n`
    text2 += `╚──────────────\n`
    text2 += `> 🎄Espera Un Momento, Enviando Archivo Tenga Paciencia❄️`
      await conn.reply(m.chat, text2, m, {
contextInfo: { externalAdReply :{ showAdAttribution: true,
                        sourceUrl: 'https://whatsapp.com/channel/0029VakfOZfHFxP7rNrUQk2d',
                        mediaType: 2,
                        description: `❤️‍🔥Sigue El Canal Por Favor❤️‍🔥`,
                        title: `❄️ Gracias Por Usar CrowBot, Sigue El Canal⛄`,
                        body: `🎄 Powered By WillZek`,          previewType: 0,
                        thumbnail: await (await fetch('https://i.ibb.co/ZfjXNy0/file.jpg')).buffer(),
                        mediaUrl: channel

                      }}
})
      await conn.sendFile(m.chat, link, name, '', m, null, {mimetype: mime, asDocument: true});
    } catch {
      await m.reply(`*🎄Ingresa un link de mediafire junto al comando. Ejemplo:* \n${usedPrefix + command} https://www.mediafire.com/file/941xczxhn27qbby/GBWA_V12.25FF-By.SamMods-.apk\n\n> *Powered By WillZek*`);
    }
  }
};
handler.help = ['mediafire'].map((v) => v + ' <url>');
handler.tags = ['descargas'];
handler.command = /^(mediafire|mediafiredl|dlmediafire|mf)$/i;
export default handler;

async function mediafireDl(url) {
  const res = await axios.get(`https://www-mediafire-com.translate.goog/${url.replace('https://www.mediafire.com/', '')}?_x_tr_sl=en&_x_tr_tl=fr&_x_tr_hl=en&_x_tr_pto=wapp`);
  const $ = cheerio.load(res.data);
  const link = $('#downloadButton').attr('href');
  const name = $('body > main > div.content > div.center > div > div.dl-btn-cont > div.dl-btn-labelWrap > div.promoDownloadName.notranslate > div').attr('title').replaceAll(' ', '').replaceAll('\n', '');
  const date = $('body > main > div.content > div.center > div > div.dl-info > ul > li:nth-child(2) > span').text();
  const size = $('#downloadButton').text().replace('Download', '').replace('(', '').replace(')', '').replace('\n', '').replace('\n', '').replace('                         ', '').replaceAll(' ', '');
  let mime = '';
  const rese = await axios.head(link);
  mime = rese.headers['content-type'];
  return {name, size, date, mime, link};
}