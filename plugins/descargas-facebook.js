import { igdl } from 'ruhend-scraper';

const handler = async (m, { text, conn, args, usedPrefix, command }) => {
  if (!args[0]) {
    return conn.reply(m.chat, 'Por favor, envia un link de Facebook valido.', m, rcanal);
  }

  await m.react('🕒');
  let res;
  try {
    res = await igdl(args[0]);
  } catch (error) {
    return conn.reply(m.chat, 'Por favor, envia un link de Facebook valido.', m);
  }

  let result = res.data;
  if (!result || result.length === 0) {
    return conn.reply(m.chat, '*`No se encontraron resultados.`*', m);
  }

  let data;
  try {
    data = result.find(i => i.resolution === "720p (HD)") || result.find(i => i.resolution === "360p (SD)");
  } catch (error) {
    return conn.reply(m.chat, 'Error al procesar los datos.', m);
  }

  if (!data) {
    return conn.reply(m.chat, 'No se encontró una resolución adecuada.', m);
  }

  await m.react('✅');
  let video = data.url;

  // Pueden Cambiar Lo De Video Descargado Con Exito, Por otro mensaje, Solo Lo hice Par Definir El dev
  const dev = 'Video descargado con éxito!';

  try {
    await conn.sendMessage(m.chat, { video: { url: video }, caption: dev, fileName: 'fb.mp4', mimetype: 'video/mp4' }, { quoted: m });
  } catch (error) {
    return conn.reply(m.chat, 'Hubo un error al intentar acceder al link.\n> Si el problema persiste, reportalo en el grupo de soporte.', m);
  await m.react('❌');
  }
};

handler.help = ['fb *<link>*'];
handler.estrellas = 2
handler.tags = ['descargas']
handler.command = /^(fb|facebook|fbdl)$/i;
handler.estrellas = 8;
handler.register = true

export default handler;