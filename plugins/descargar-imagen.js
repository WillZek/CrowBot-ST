import {googleImage} from '@bochilteam/scraper';
const handler = async (m, {conn, text, usedPrefix, command}) => {
if (!text) throw `*🎩 Uso Correcto: ${usedPrefix + command} Crow De Brawl Stars*`;
conn.reply(m.chat, '🍭 *Descargando su imagen...*', m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, showAdAttribution: true,
title: packname,
body: wm,
previewType: 0, thumbnail: icons,
sourceUrl: channel }}})
const res = await googleImage(text);
const image = await res.getRandom();
const link = image;
const messages = [['Imagen 1', dev, await res.getRandom(),
[[]], [[]], [[]], [[]]], ['Imagen 2', dev, await res.getRandom(), [[]], [[]], [[]], [[]]], ['Imagen 2', dev, await res.getRandom(), [[]], [[]], [[]], [[]]], ['Imagen 4', dev, await res.getRandom(), [[]], [[]], [[]], [[]]]]
await conn.sendCarousel(m.chat, `🎩 Resultado de ${text}`, '🔎 Imagen - Descargas', null, messages, m);
};
handler.help = ['imagen <query>'];
handler.tags = ['buscador','descargas'];
handler.command = ['image','imagen', 'wimage'];
handler.estrellas = 5;
handler.group = true;
handler.register = true
export default handler;