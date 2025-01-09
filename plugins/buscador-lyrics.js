/*
- By WillZek 
- Extraer La Letra De Una Canción 
*/
import fetch from 'node-fetch';
import cheerio from 'cheerio';

async function obtenerLetraCancion(titulo, m) {
    const url = `https://www.stands4.com/services/v2/lyrics.php?uid=1001&tokenid=tk324324&term=${encodeURIComponent(titulo)}&artist=Alphaville&format=xml`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Error al acceder a la API');
        }

        const texto = await response.text();
        console.log(texto); // Pa ver si funca la api de mrd 

        const $ = cheerio.load(texto, { xmlMode: true });

        const letra = $('lyric').text();
        if (letra.length) {
            m.reply(letra);
        } else {
            m.reply('No se encontró la letra de la canción.');
        }
    } catch (error) {
        console.error(error.message);
        m.reply(`*Error:* ${error.message}`);
    }
}

const handler = async (m, { conn, command, args }) => {
    const tituloCancion = args.join(' ') || 'Forever Young';
    await obtenerLetraCancion(tituloCancion, m);
}

handler.help = ['lyrics'];
handler.tag = ['buscador'];
handler.command = ['lyrics', 'letrac'];
handler.estrellas = 4;

export default handler;