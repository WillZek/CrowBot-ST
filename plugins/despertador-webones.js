// Hecho Por Niño Piña wa.me/50557865603
const { Client } = require('whatsapp-web.js');
const client = new Client();
client.on('message', message => {
if (message.body === '!despertar') {
const chat = await message.getChat();
chat.sendMessage('Levántense Webones, ya amaneció! 🎉');
chat.sendMessage('@all', { mentions: [message.from] }); // Esto menciona a todos
const stickerUrl = 'https://i.ibb.co/g4MHfC3/crow.webp'; // Reemplaza con la URL del sticker que quieres usar
chat.sendMessage(stickerUrl, { sendMediaAsSticker: true });
}
});
client.initialize();