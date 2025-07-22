const { Client, Buttons, MessageMedia, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const express = require('express');
const ytdl = require('ytdl-core');
const axios = require('axios');
const ffmpeg = require('fluent-ffmpeg');
const ffmpegPath = require('ffmpeg-static');
const fs = require('fs');
const path = require('path');

ffmpeg.setFfmpegPath(ffmpegPath);

const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('✅ Bot listo!');
});

client.on('message', async (message) => {
    if (message.body.startsWith('.play ')) {
        const query = message.body.slice(6);
        const searchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;

        try {
            const { data } = await axios.get(searchUrl);
            const videoIdMatch = data.match(/"videoId":"(.*?)"/);
            if (!videoIdMatch) return message.reply('❌ No encontré resultados.');

            const videoId = videoIdMatch[1];
            const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
            const info = await ytdl.getInfo(videoUrl);

            const title = info.videoDetails.title;
            const author = info.videoDetails.author.name;
            const views = info.videoDetails.viewCount;
            const length = Math.floor(info.videoDetails.lengthSeconds / 60) + ':' + (info.videoDetails.lengthSeconds % 60).toString().padStart(2, '0');

            const buttons = new Buttons(
                `🎶 *${title}*\n👤 *${author}*\n⏱️ Duración: ${length}\n👀 Vistas: ${views}\n🔗 [Ver en YouTube](${videoUrl})\n\n¿Qué deseas hacer?`,
                [
                    { body: '🎵 Descargar Audio' },
                    { body: '📹 Descargar Video' },
                    { body: '🌐 Solo Ver' }
                ],
                'Resultado encontrado',
                'Elige una opción'
            );

            await client.sendMessage(message.from, buttons);

            // Escucha la siguiente respuesta
            const collector = client.on('message', async (response) => {
                if (response.from === message.from) {
                    if (response.body === '🎵 Descargar Audio') {
                        await sendAudio(videoUrl, message.from, client);
                    } else if (response.body === '📹 Descargar Video') {
                        await sendVideo(videoUrl, message.from, client);
                    } else if (response.body === '🌐 Solo Ver') {
                        client.sendMessage(message.from, `🔗 ${videoUrl}`);
                    }

                    client.removeListener('message', collector);
                }
            });

        } catch (err) {
            console.error(err);
            message.reply('❌ Ocurrió un error.');
        }
    }
});

handler.help = ['ytmp3doc', 'ytmp4doc'];
handler.tag = ['descargas'];
handler.command = ['ytmp3doc', 'mp3doc', 'ytmp4doc', 'mp4doc', 'ytadoc', 'ytvdoc'];

export default handler;