import axios from 'axios';
import cheerio from 'cheerio';
import qs from 'qs';

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) {
    return m.reply(`Ejemplo de uso: *${usedPrefix + command} Joji - Ew*`);
  }

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
          results.push({ title, subtitle, link });
        });
        return results;
      } catch (error) {
        console.error("Error en búsqueda de Apple Music:", error.message);
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
        return { albumTitle, artistName, releaseInfo, description };
      } catch (error) {
        console.error("Error en detalles de Apple Music:", error.message);
        return { success: false, message: error.message };
      }
    }
  };

  const appledown = {
    getData: async (urls) => {
      const url = `https://aaplmusicdownloader.com/api/applesearch.php?url=${urls}`;
      try {
        const response = await axios.get(url, {
          headers: {
            'Accept': 'application/json, text/javascript, */*; q=0.01',
            'X-Requested-With': 'XMLHttpRequest',
            'User-Agent': 'MyApp/1.0',
            'Referer': 'https://aaplmusicdownloader.com/'
          }
        });
        return response.data;
      } catch (error) {
        console.error("Error obteniendo datos de Apple Music Downloader:", error.message);
        return { success: false, message: error.message };
      }
    },
    getAudio: async (trackName, artist, urlMusic, token) => {
      const url = 'https://aaplmusicdownloader.com/api/composer/swd.php';
      const data = {
        song_name: trackName,
        artist_name: artist,
        url: urlMusic,
        token: token
      };
      const headers = {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'X-Requested-With': 'XMLHttpRequest',
        'User-Agent': 'MyApp/1.0',
        'Referer': 'https://aaplmusicdownloader.com/song.php#'
      };
      try {
        const response = await axios.post(url, qs.stringify(data), { headers });
        return response.data.dlink;
      } catch (error) {
        console.error("Error obteniendo audio de Apple Music:", error.message);
        return { success: false, message: error.message };
      }
    },
    download: async (urls) => {
      const musicData = await appledown.getData(urls);
      if (!musicData || !musicData.name) {
        return { success: false, message: "No se encontraron datos de música." };
      }

      const encodedData = encodeURIComponent(JSON.stringify([
        musicData.name,
        musicData.albumname,
        musicData.artist,
        musicData.thumb,
        musicData.duration,
        musicData.url
      ]));
      const url = 'https://aaplmusicdownloader.com/song.php';
      const headers = {
        'authority': 'aaplmusicdownloader.com',
        'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'content-type': 'application/x-www-form-urlencoded',
        'origin': 'https://aaplmusicdownloader.com',
        'referer': 'https://aaplmusicdownloader.com/',
        'user-agent': 'MyApp/1.0'
      };

      try {
        const response = await axios.post(url, `data=${encodedData}`, { headers });
        const $ = cheerio.load(response.data);
        const trackName = $('td:contains("Track Name:")').next().text();
        const albumName = $('td:contains("Album:")').next().text();
        const artist = $('td:contains("Artist:")').next().text();
        const thumb = $('figure.image img').attr('src');
        const urlMusic = urls;
        const token = $('a#download_btn').attr('token');
        const downloadLink = await appledown.getAudio(trackName, artist, urlMusic, token);

        return {
          success: true,
          name: trackName,
          albumname: albumName,
          artist: artist,
          thumb: thumb,
          duration: $('td:contains("Duration:")').next().text(),
          download: downloadLink
        };
      } catch (error) {
        console.error("Error descargando música de Apple Music:", error.message);
        return { success: false, message: error.message };
      }
    }
  };

  conn.sendMessage(m.chat, { react: { text: "🕒", key: m.key } });

  const searchResults = await appleMusic.search(text);
  if (!searchResults.length) {
    return m.reply("No se encontraron resultados para tu búsqueda.");
  }

  const musicData = await appledown.download(searchResults[0].link);
  if (!musicData.success) {
    return m.reply(`Error: ${musicData.message}`);
  }

  const { name, albumname, artist, url, thumb, duration, download } = musicData;

  const doc = {
    audio: { url: download },
    mimetype: 'audio/mp4',
    fileName: `${name}.mp3`,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true,
        mediaType: 2,
        mediaUrl: url,
        title: name,
        sourceUrl: url,
        thumbnail: await (await conn.getFile(thumb)).data
      }
    }
  };

  await conn.sendMessage(m.chat, doc, { quoted: m });
  await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
};

handler.help = ['applemusic *<url|txt>*'];
handler.tags = ['descargas'];
handler.command = /^(applemusic|applemusicdl|applemdl)$/i;

export default handler;