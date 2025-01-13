/*
 ✨ DERECHOS RESERVADOS DEL AUTOR ✨
- WillZek (@NiñoPiña)
*/

import { googleIt } from '@bochilteam/scraper';
import axios from 'axios';
const handler = async (m, {conn, command, args}) => {
  const fetch = (await import('node-fetch')).default;
  const text = args.join` `;
  if (!text) return conn.reply(m.chat, '*[🌠] Complementa tu petición con alguna frase para iniciar la búsqueda.*', m);

 const xd = `*Resultados De:* ${text}`;
  const url = 'https://google.com/search?q=' + encodeURIComponent(text);
  const search = await googleIt(text);
  const msg = search.articles.map(({title, url, description}) => {
    return `*${title}*\n_${url}_\n_${description}_`;
  }).join('\n\n');
  try {
    const ss = `https://image.thum.io/get/fullpage/${url}`;
    conn.sendFile(m.chat, ss, 'error.png', xd + '\n> ' + url + '\n\n' + msg, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, showAdAttribution: true,
title: 'GOOGLE SEARCH',
body: dev,
previewType: 0, thumbnail: icons,
sourceUrl: channel }}});
  } catch (e) {
console.error(e);
m.reply(`Error: ${e.message}`);
m.react(done);
    m.reply(msg);
  }
};
handler.help = ['google', 'googlef'].map((v) => v + ' <pencarian>');
handler.tags = ['buscador'];
handler.command = /^googlef?$/i;
handler.estrellas = 7;
export default handler;