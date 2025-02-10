// Codigo Creado por Jose Xrl
// Free Code Titans 
// [Wallpapersearch 🌸]
// https://whatsapp.com/channel/0029ValMlRS6buMFL9d0iQ0S

import axios from 'axios';

let handler = async (m, { conn, usedPrefix, command, text }) => {
  if (!text) 
    return conn.reply(m.chat, '🚩 Ingresa la palabra clave que deseas buscar.\n\n`Ejemplo:`\n' + `> *${usedPrefix + command}* naruto`, m, rcanal);

  await m.react('🕓');

  try {
    const response = await axios.get(`https://api.davidcyriltech.my.id/search/wallpaper?text=${text}`);

    if (response.data.success) {
      const wallpapers = response.data.result;
      if (wallpapers.length > 0) {
        for (let i = 0; i < wallpapers.length; i++) {
          let wallpaper = wallpapers[i];
          let txt = '`乂  W A L L P A P E R S  -  N A R U T O`\n\n';
          txt += `    ✩  *Nro* : ${i + 1}\n`;
          txt += `    ✩  *Título* : ${wallpaper.title || 'Sin título'}\n`;
          txt += `    ✩  *Tipo* : ${wallpaper.type}\n`;
          txt += `    ✩  *Fuente* : ${wallpaper.source}\n`;
          txt += `    ✩  *Imagen* : ${wallpaper.image}\n\n`;
          txt += `> 📸 Enlace a la imagen: ${wallpaper.image}`;

          await conn.sendMessage(m.chat, { image: { url: wallpaper.image }, caption: txt }, { quoted: m });
        }
        
        await m.react('✅'); 
      } else {
        await m.react('✖️');
        await conn.reply(m.chat, 'No se encontraron resultados para esta búsqueda.', m);
      }
    } else {
      await m.react('✖️');
      await conn.reply(m.chat, 'Error al obtener resultados.', m);
    }
  } catch (error) {
    console.error(error);
    await m.react('✖️');
    await conn.reply(m.chat, 'Hubo un error al procesar la solicitud. Intenta de nuevo más tarde.', m);
  }
}

handler.tags = ['buscador'];
handler.help = ['wallpaper *<palabra clave>*'];
handler.command = ['wallpaper', 'wpaper'];
handler.register = true;

export default handler;