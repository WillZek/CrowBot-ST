const ffmpeg = require('fluent-ffmpeg');
const path = require('path');
const fs = require('fs');

const handler = async (m, { conn, usedPrefix, command }) => {

const convertAudioToVideo = (audioFilePath, imageFilePath, outputFilePath) => {
  return new Promise((resolve, reject) => {
    ffmpeg()
      .input(audioFilePath)
      .input(imageFilePath)
      .outputOptions('-f', 'mp4')
      .outputOptions('-c:v', 'libx264')
      .outputOptions('-pix_fmt', 'yuv420p')
      .outputOptions('-vf', 'scale=1280:720')
      .output(outputFilePath)
      .on('end', () => {
        console.log('Conversión completada');
        resolve(outputFilePath);
      })
      .on('error', (err) => {
        console.error('Error en la conversión:', err);
        reject(err);
      })
      .run();
  });
};

const main = async () => {
  const audioFilePath = path.join(__dirname, 'audio.mp3');
  const imageFilePath = path.join(__dirname, 'Menu.jpg');
  const outputFilePath = path.join(__dirname, 'output.mp4');

  if (!fs.existsSync(audioFilePath)) {
    console.error('El archivo de audio no existe:', audioFilePath);
    return;
  }

  if (!fs.existsSync(imageFilePath)) {
    console.error('El archivo de imagen no existe:', imageFilePath);
    return;
  }

  try {
    await convertAudioToVideo(audioFilePath, imageFilePath, outputFilePath);
    console.log('Video guardado en:', outputFilePath);
  } catch (error) {
    console.error('Error al convertir audio a video:', error);
  }
};

main();

handler.help = ['tomp4'];
handler.tag = ['tools'];
handler.command = ['tomp4', 'mp4to'];
handler.estrellas = 4;
export default handler;
