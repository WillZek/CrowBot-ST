¡Hola, WillZek! Aquí tienes un código en JavaScript que utiliza `fetch` para obtener la letra de una canción desde la API de Lyrics.com. Este ejemplo asume que estás trabajando en un entorno donde puedes hacer solicitudes HTTP, como un navegador o un entorno Node.js con `node-fetch`.

```javascript
async function obtenerLetraCancion(titulo) {
    // Reemplazamos espacios en el título por '%20' para la URL
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

        // Buscamos la letra de la canción
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

// Ejemplo de uso
const tituloCancion = 'Despacito'; // Cambia esto por el título de la canción que deseas
obtenerLetraCancion(tituloCancion);

handler.help = ['lyrics'];
handler.tag = ['buscador'];
handler.command = ['lyrics', 'letrac', 'letc'];

export default handler;