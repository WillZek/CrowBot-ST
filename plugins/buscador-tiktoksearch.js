import axios from 'axios';
const { proto, generateWAMessageFromContent, prepareWAMessageMedia, generateWAMessageContent, getDevice } = (await import("@whiskeysockets/baileys")).default;
let handler = async (message, { conn, text, usedPrefix, command }) => {
if (!text) return conn.reply(message.chat, '🌸 *¿Qué quieres buscar en TikTok?*', message, rcanal);
async function createVideoMessage(url) {
try {
const { videoMessage } = await generateWAMessageContent({ video: { url } }, { upload: conn.waUploadToServer });
return videoMessage;
} catch (error) {
console.error("Error al crear el mensaje de video:", error);
throw error;
}
}
async function shuffleArray(array) {
for (let i = array.length - 1; i > 0; i--) {
const j = Math.floor(Math.random() * (i + 1));
[array[i], array[j]] = [array[j], array[i]];
}
}
try {
await message.react(rwait);
conn.reply(message.chat, '🚩 *Descargando Su Video...*', message, {
contextInfo: { externalAdReply: { mediaUrl: null, mediaType: 1, showAdAttribution: true, title: packname, body: wm, previewType: 0, thumbnail: icons, sourceUrl: channel } }
});
let results = [];
let { data: response } = await axios.get('https://apis-starlights-team.koyeb.app/starlight/tiktoksearch?text=' + text);
if (!response || !response.data) {
throw new Error("No se recibió una respuesta válida de la API.");
}
let searchResults = response.data;
shuffleArray(searchResults);
let selectedResults = searchResults.slice(0, 7);
for (let result of selectedResults) {
if (!result.nowm) {
throw new Error("No se encontró una URL válida para el video.");
}
results.push({
body: proto.Message.InteractiveMessage.Body.fromObject({ text: null }),
footer: proto.Message.InteractiveMessage.Footer.fromObject({ text: textbot }),
header: proto.Message.InteractiveMessage.Header.fromObject({
title: '' + result.title,
hasMediaAttachment: true,
videoMessage: await createVideoMessage(result.nowm)
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({ buttons: [] })
});
}
const responseMessage = generateWAMessageFromContent(message.chat, {
viewOnceMessage: {
message: {
messageContextInfo: {
deviceListMetadata: {},