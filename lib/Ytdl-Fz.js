const getVideoId = (url) => {
  const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/[^\/\n\s]+\/|(?:v|e(?:mbed)?)\/|[^v\r\s]+\/|user\/[^\/\n\s]+|embed\/|videoseries\?list=)|(?:youtu\.)?be(?:\.com)?\/(?:watch\?v=|v\/|u\/\w\/|embed\/|watch\?v%3D|watch\?v-|watch\/|v=)?)((\w|-){11}).*/;
  const match = url.match(regex);
  if (match) {
    return match[1];
  }
  throw new Error("Invalid YouTube URL");
};
async function acc(url) {
  const respuesta = await axios.get(`http://tinyurl.com/api-create.php?url=${url}`);
  return respuesta.data;
}
const Ytdl = {
  search: async (query) => {
    try {
      const { videos } = await yts(query);
      return {
        status: true,
        creator: "I'm Fz ~",
        data: videos.map(video => ({
          title: video.title,
          url: `https://youtu.be/${video.videoId}`,
          img: video.image,
          author: {
            name: video.author.name,
            url: video.author.url,
          },
        })),
      };
    } catch (error) {
      return {
        status: false,
        msg: "¡No se pudieron encontrar datos!",
        err: error.message,
      };
    }
  },

  mp3: async (url, { mp3 = '192' } = {}) => {
    try {
      const videoId = getVideoId(url);
      const videoData = (await yts(videoId)).videos[0];
      const data = new URLSearchParams({ videoid: videoId, downtype: 'mp3', vquality: mp3 });

      const response = await axios.post('https://api-cdn.saveservall.xyz/ajax-v2.php', data, {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
      });

      const mp3Link = response.data.url;
      return {
        status: true,
        creator: "I'm Fz ~",
        msg: "¡Descarga de contenido con éxito!",
        title: videoData.title,
        thumbnail: videoData.image,
        url: `https://youtu.be/${videoId}`,
        media: await acc(mp3Link),
      };

    } catch (error) {
      return {
        status: false,
        msg: "¡Error al recuperar datos!",
        err: error.message,
      };
    }
  },

  mp4: async (url, { mp4 = '480' } = {}) => {
    try {
      const videoId = getVideoId(url);
      const videoData = (await yts(videoId)).videos[0];
      const data = new URLSearchParams({ videoid: videoId, downtype: 'mp4', vquality: mp4 });

      const response = await axios.post('https://api-cdn.saveservall.xyz/ajax-v2.php', data, {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
      });

      const mp4Link = response.data.url;
      return {
        status: true,
        creator: "I'm Fz ~",
        msg: "¡Descarga de contenido con éxito!",
        title: videoData.title,
        thumbnail: videoData.image,
        url: `https://youtu.be/${videoId}`,
        media: await acc(mp4Link),
      };

    } catch (error) {
      return {
        status: false,
        msg: "¡Error al recuperar datos!",
        err: error.message,
      };
    }
  },
};
export { Ytdl }