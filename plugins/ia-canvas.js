// Importar fetch y canvas para hacer solicitudes HTTP y generar imágenes
import fetch from 'node-fetch';
import { createCanvas } from 'canvas'; // Importar la librería canvas
// Handler para generar imágenes personalizadas
const handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*💛 Ingresa una petición para generar una imagen...*`;
m.react('🕒');
await conn.sendMessage(m.chat, { text: '*💛 Espere un momento...*' }, { quoted: m });
try {
// Crear un canvas
const canvas = createCanvas(400, 400); // Ancho y alto del canvas
const ctx = canvas.getContext('2d');
// Establecer el fondo
ctx.fillStyle = '#4CAF50'; // Color de fondo
ctx.fillRect(0, 0, canvas.width, canvas.height);
// Establecer el texto
ctx.fillStyle = 'white'; // Color del texto
ctx.font = '30px Arial'; // Fuente del texto
ctx.textAlign = 'center';
ctx.fillText(text, canvas.width / 2, canvas.height / 2); // Dibujar el texto en el centro
// Convertir el canvas a un buffer
const buffer = canvas.toBuffer('image/png');
// Enviar la imagen generada al chat
m.react('☑️');
await conn.sendMessage(m.chat, { image: buffer, caption: 'Aquí tienes tu imagen personalizada!' }, { quoted: m });
} catch (error) {
console.error(error);
throw `*🚨 Ocurrió un error al generar la imagen...*`;
}
}
// Etiquetas y comandos
handler.tags = ['ia'];
handler.help = ['canvas'];
handler.command = ['canvas']; // Comando para activar el handler
export default handler;