/*
- By WillZek 
- Extraer La Letra De Una Canción 
*/
import fetch from 'node-fetch'
import cheerio from 'cheerio';

async function obtenerLetraCancion(titulo) {
    const urlTitulo = encodeURIComponent(titulo);
    const url = `https://www.lyrics.com/lyrics/${urlTitulo}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Error al acceder a la página');
        }

        const texto = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(texto, 'text/html');

        const letra = doc.querySelector('pre.lyric-body');
        if (letra) {
            console.log(letra.innerText);
        } else {
            console.log('No se encontró la letra de la canción.');
        }
    } catch (error) {
        console.error(error.message);
    }
}

const handler = async (m, { conn, command, args }) => {
    const tituloCancion = args.join(' ') || 'Despacito';
    await obtenerLetraCancion(tituloCancion);
}

handler.help = ['lyrics'];
handler.tag = ['buscador'];
handler.command = ['lyrics', 'letrac', 'letc'];

export default handler;