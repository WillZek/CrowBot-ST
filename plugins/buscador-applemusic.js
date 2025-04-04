// da weba hacer uno 
import fetch from 'node-fetch'

let handler = async (m, { conn, text }) => {
if (!text) return m.reply(`Ingresa una petición`)

try {
let api = await fetch(`https://deliriussapi-oficial.vercel.app/search/applemusic?text=${encodeURIComponent(text)}`)
let json = await api.json()
let JT = 'Applemusic  -  Search'
json.forEach((video, index) => {
JT += `\n\n`
JT += `*Nro* : ${index + 1}\n`
JT += `*Título* : ${video.title}\n`
JT += `*Tipo* : ${video.type}\n`
JT += `*Artista* : ${video.artists}\n`
JT += `*Url* : ${video.url}\n`
})

await conn.sendFile(m.chat, json[0].image, 'hasumiBotFreeCodes.jpg', JT, m);
} catch (error) {
console.error(error)
}}

handler.command = /^(applemusicsearch|applemusic)$/i

export default handler

/*
import axios from 'axios';
import cheerio from 'cheerio';

let handler = async (m, { conn, text, usedPrefix, command }) => {

  if (!text) return m.reply(`《★》Ingrese El Nombre De Alguna Canción.`);


const appleMusic = {
  search: async (query) => {
    const url = `https://music.apple.com/us/search?term=${query}`;
    try {
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);
        const results = [];
        $('.desktop-search-page .section[data-testid="section-container"] .grid-item').each((index, element) => {
            const title = $(element).find('.top-search-lockup__primary__title').text().trim();
            const subtitle = $(element).find('.top-search-lockup__secondary').text().trim();
            const link = $(element).find('.click-action').attr('href');

            results.push({
                title,
                subtitle,
                link
            });
        });

        return results;
    } catch (error) {
        console.error("Error:", error.response ? error.response.data : error.message);
        return { success: false, message: error.message };
    }
  },
  detail: async (url) => {
    try {
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);
        const albumTitle = $('h1[data-testid="non-editable-product-title"]').text().trim();
        const artistName = $('a[data-testid="click-action"]').first().text().trim();
        const releaseInfo = $('div.headings__metadata-bottom').text().trim();
        const description = $('div[data-testid="description"]').text().trim();

        const result = {
            albumTitle,
            artistName,
            releaseInfo,
            description
        };

        return result;
    } catch (error) {
      console.error("Error:", error.response ? error.response.data : error.message);
      return { success: false, message: error.message };
    }
  }
}


let dataos = await appleMusic.search(text)
let searchResults = dataos.map((v, i) => `${i + 1}. *${v.title}*\n   Link: ${v.link}`).join('\n\n');
m.reply(searchResults)

}
handler.help = ['applemusicsearch *<texto>*'];
handler.tags = ['buscador'];
handler.command = /^(applemusicsearch|applemsearch|applemusics)$/i;

export default handler;
*/