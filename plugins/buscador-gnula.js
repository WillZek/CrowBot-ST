//Codígo creado por Niño Piña wa.me/50557865603
//Créditos a EliasarYt por brindar la API

import fetch from 'node-fetch';

let handler = async (m, { conn }) => {
    let chat = global.db.data.chats[m.chat];
    if (chat.isBanned) return;

    let movieName = m.text.split('.gnula ')[1];
    if (!movieName) {
        return conn.sendMessage(m.chat, { text: 'Por favor, proporciona el nombre de la película.' }, { quoted: m });
    }

    let url = `https://gnula.vercel.app/api/search/gnula?nombre=${encodeURIComponent(movieName)}`;

    try {
        let response = await fetch(url);

        if (!response.ok) throw new Error(`Error en la respuesta: ${response.statusText}`);

        let data = await response.json();

        if (data && data.peliculas && data.peliculas.length > 0) {
            let results = data.peliculas.map(movie => 
                `🎬 Título: ${movie.titulo || 'Título no disponible'}\n` +
                `📅 Publicado: ${movie.fechaPublicacion || 'Fecha no disponible'}\n` +
                `🖋️ Autor: ${movie.autor || 'Autor no disponible'}\n` +
                `📖 Sinopsis: ${movie.descripcion || 'Sinopsis no disponible'}\n` +
                `🖼️ Imagen: ${movie.imagen || 'Imagen no disponible'}\n` +
                `🔗 Enlace: ${movie.enlace || 'Enlace no disponible'}\n` +
                `🎞️ Idioma: ${movie.idioma || 'No disponible'}\n` +
                `📺 Calidad: ${movie.calidad || 'No disponible'}\n` +
                `⬇️ Descargar: ${movie.enlaceDescarga || 'No disponible'}`
            ).join('\n\n');

            results += `\n\n> ৎ୭࠭͢CrowBot𓆪͟͞ `;

            conn.sendMessage(m.chat, { text: results }, { quoted: m });
        } else {
            conn.sendMessage(m.chat, { text: 'No se encontraron resultados para esa película.' }, { quoted: m });
        }
    } catch (error) {
        console.error(error);
        conn.sendMessage(m.chat, { text: 'Ocurrió un error al buscar: ' + error.message }, { quoted: m });
    }
};

// Configuración del handler
handler.help = ['gnula'];
handler.tags = ['buscador'];
handler.command = /^(gnula)$/i;
handler.premium = true;
handler.register = true;

export default handler;