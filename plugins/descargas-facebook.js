import { igdl } from 'ruhend-scraper';

const handler = async (m, { text, conn, args, usedPrefix, command }) => {
  if (!args[0]) {
    return conn.reply(m.chat, '*\`Ingresa El link Del vídeo a descargar 🤍\`*\n> De Preferencia Que Sea Un Reel 🍭', m, fake);
  }

  await m.react('🕒');
  let res;
  try {
    res = await igdl(args[0]);
  } catch (error) {
    return conn.reply(m.chat, '*`Error al obtener datos. Verifica el enlace.`*', m);
  }

  let result = res.data;
  if (!result || result.length === 0) {
    return conn.reply(m.chat, '*`No se encontraron resultados.`*', m);
  }

  let data;
  try {
    data = result.find(i => i.resolution === "720p (HD)") || result.find(i => i.resolution === "360p (SD)");
  } catch (error) {
    return conn.reply(m.chat, '*`Error al procesar los datos.`*', m);
  }

  if (!data) {
    return conn.reply(m.chat, '*`No se encontró una resolución adecuada.`*', m);
  }

  await m.react('✅');
  let video = data.url;
// let api = await(await fetch(`https://delirius-apiofc.vercel.app/download/facebook?url=${args[0]}`)).json();

// let vid = api.urls[0].hd|| api.urls[0].sd;

  try {
    await conn.sendMessage(m.chat, { video: { url: video }, caption: '《★》 *Descargado Con Exito ✓*', fileName: 'fb.mp4', mimetype: 'video/mp4' }, { quoted: m });
  } catch (error) {
    return conn.reply(m.chat, `*Error al enviar el video.*\n> ${error.message}`, m);
  await m.react('❌');
  }
};

handler.help = ['fb *<link>*'];
handler.tags = ['descargas']
handler.command = /^(fb|facebook|fbdl)$/i;
handler.estrellas = 5;

export default handler;                                                                                                                                                                                                                                          