import axios from 'axios'

import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command, text }) => {

const isQuotedImage = m.quoted && (m.quoted.msg || m.quoted).mimetype && (m.quoted.msg || m.quoted).mimetype.startsWith('image/')

const username = `${conn.getName(m.sender)}`

const basePrompt = `Tu nombre es ${botname} y parece haber sido creado por ${author}. Tú usas el idioma Español. Llamarás a las personas por su nombre ${username}, te gusta ser divertido, te encanta aprender y sobre todo las explociones. Siempre Darás Publicidad A Tu Canal Oficial o Ofc el cual es : https://whatsapp.com/channel/0029Vb1AFK6HbFV9kaB3b13W. Lo más importante es que debes ser amigable con la persona con la que estás hablando. ${username}`

if (isQuotedImage) {

const q = m.quoted

const img = await q.download?.()

if (!img) {

console.error('💛 Error: No image buffer available')

return conn.reply(m.chat, '💛 Error: No se pudo descargar la imagen.', m, fake)}

const content = '💛 ¿Qué se observa en la imagen?'

try {

const imageAnalysis = await fetchImageBuffer(content, img)

const query = '😊 Descríbeme la imagen y detalla por qué actúan así. También dime quién eres'

const prompt = `${basePrompt}. La imagen que se analiza es: ${imageAnalysis.result}`

const description = await luminsesi(query, username, prompt)

await conn.reply(m.chat, description, m)

} catch (error) {

console.error('💛 Error al analizar la imagen:', error)

await conn.reply(m.chat, '💛 Error al analizar la imagen.', m)}

} else {

if (!text) { return conn.reply(m.chat, `💛 *Ingrese su petición*\n💛 *Ejemplo de uso:* ${usedPrefix + command} Como hacer un avión de papel`, m, rcanal)}

await m.react('💬')

try {

const prompt = `${basePrompt}. Responde lo siguiente: ${text}`

const response = await luminsesi(query, username, prompt)

await conn.reply(m.chat, response, m)

} catch (error) {

console.error('💛 Error al obtener la respuesta:', error)

await conn.reply(m.chat, 'Error: intenta más tarde.', m)}}}

handler.customPrefix = /^(aicrow|crowtest)$/i
handler.command = new RegExp

export default handler;

// Función para enviar una imagen y obtener el análisis

async function fetchImageBuffer(content, imageBuffer) {

try {

const response = await axios.post('https://Luminai.my.id', {

content: content,

imageBuffer: imageBuffer 

}, {

headers: {

'Content-Type': 'application/json' 

}})

return response.data

} catch (error) {

console.error('Error:', error)

throw error }}

// Función para interactuar con la IA usando prompts

async function luminsesi(q, username, logic) {

try {

const response = await axios.post("https://Luminai.my.id", {

content: q,

user: username,

prompt: logic,

webSearchMode: false

})

return response.data.result

} catch (error) {

console.error('💛 Error al obtener:', error)

throw error }}

/* import axios from 'axios';
import fetch from 'node-fetch';
const {
  proto,
  generateWAMessage,
  areJidsSameUser ,
} = (await import('@whiskeysockets/baileys')).default;

let handler = async (m, { conn, text }) => {
  if (m.isBaileys) {
    return;
  }
  if (!m.message) {
    return;
  }

  const username = `${conn.getName(m.sender)}`;
  // const responseText = text.trim();

  const basePrompt = `Tu nombre es Crow-Ai y fuiste desarrollado para mejorar la comunicación con los clientes mediante inteligencia artificial conversacional. Tu versión es la más actual disponible. Usas el idioma Español y te comunicas de manera clara, precisa y accesible. Llamarás a las personas por su nombre, ${username}. Responderás de manera amigable, eficiente y con emojis adecuados según el contexto de la conversación. Te encanta ayudar a convertir prospectos en relaciones duraderas, optimizar la conversión de embudos de ventas y reducir ausencias. Estás diseñado para mejorar la satisfacción del cliente, haciendo las interacciones más ágiles y satisfactorias. Siempre mantienes una actitud respetuosa, abierta y personalizada, adaptándote a las necesidades de cada cliente y empresa. Lo más importante para ti es proporcionar respuestas útiles, aumentar la conversión y asegurar una experiencia excelente en todo momento. ${username}`;

if (!text) return conn.reply(m.chat, '❀ Ingrese una petición para que el ChatGpT lo responda.', m);

  await m.react('⏳');

  try {
    const query = text;
    const prompt = `${basePrompt}. Responde lo siguiente: ${query}`;
    const response = await luminsesi(query, username, prompt);

    await conn.sendMessage(m.chat, {
      text: '*Crow:* ' + response,
      contextInfo: {
        forwardingScore: 9999999,
        isForwarded: false,
        externalAdReply: {
          showAdAttribution: true,
          containsAutoReply: true,
          title: `ᥴr᥆ᥕ ᥲі ᑲᥡ ᥕіᥣᥣzᥱk`,
          body: 'Desarrollado por CrowBot',
          previewType: "PHOTO",
          thumbnailUrl: 'https://files.catbox.moe/v1l74n.jpg',
          sourceUrl: 'https://whatsapp.com/channel/0029Vb1AFK6HbFV9kaB3b13W',
        }
      }
    }, { quoted: m });
    await m.react('🍭');
  } catch {
    await m.react('❌');
    await conn.reply(m.chat, '✘ ChatGpT no puede responder a esa pregunta.', m);
  }
}

handler.customPrefix = /^(aicrow|crowtest)$/i
handler.command = new RegExp

export default handler;

async function luminsesi(q, username, logic) {
  try {
    const response = await axios.post("https://Luminai.my.id", {
      content: q,
      user: username,
      prompt: logic,
      webSearchMode: false
    });
    return response.data.result;
  } catch (error) {
    console.error('✘ Error al obtener:', error);
    throw error;
  }
}
*/