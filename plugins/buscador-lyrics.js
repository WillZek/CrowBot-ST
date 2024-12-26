/*
- By WillZek 
- Extraer La Letra De Una Canción 
*/
import fetch from 'node-fetch';
import cheerio from 'cheerio';

async function obtenerLetraCancion(titulo, m) {
    const urlTitulo = encodeURIComponent(titulo);
    const url = `https://www.lyrics.com/lyrics/${urlTitulo}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Error al acceder a la página');
        }

        const texto = await response.text();
        const $ = cheerio.load(texto);

        const letra = $('pre.lyric-body');
        if (letra.length) {
            m.reply(letra.text());

        } else {
            m.reply('No se encontró la letra de la canción.');
        }
    } catch (error) {
        console.error(error.message);
        m.reply('Ocurrió un error al obtener la letra.');
    }
}

const handler = async (m, { conn, command, args }) => {
    const tituloCancion = args.join(' ') || 'Despacito';
    await obtenerLetraCancion(tituloCancion, m);
}

handler.help = ['lyrics'];
handler.tag = ['buscador'];
handler.command = ['lyrics', 'letrac', 'letc'];

export default handler;