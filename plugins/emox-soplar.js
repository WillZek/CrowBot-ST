// Código creado por Niño Piña wa.me/50557865603
import fs from 'fs';
import path from 'path';
let handler = async (m, { conn, usedPrefix }) => {
let who;
// Verificamos si se menciona a alguien o se cita un mensaje
if (m.mentionedJid.length > 0) {
who = m.mentionedJid[0]; // Si hay mención, usamos esa
} else if (m.quoted) {
who = m.quoted.sender; // Si se cita un mensaje, usamos el emisor de ese mensaje
} else {
who = m.sender; // En caso contrario, usamos el emisor
}
let name = conn.getName(who); // Nombre de la persona mencionada o del emisor
let name2 = conn.getName(m.sender); // Nombre del usuario que envía el comando
m.react('💨'); // Reacción de soplar
// Construimos el mensaje dependiendo de si hay una mención o no
let str;
if (m.mentionedJid.length > 0) {
str = `\`${name2}\` está soplando a \`${name || who}\`. ¡Cuidado! 💨`; // Usamos nombre agendado o número si no está agendado
} else if (m.quoted) {
str = `\`${name2}\` está soplando a \`${name || who}\`. ¡Cuidado! 💨`; // Mensaje cuando se cita a otro usuario
} else {
str = `\`${name2}\` está soplando por ahí.`.trim();
}
if (m.isGroup) {
// Aquí puedes agregar tus propios GIFs de soplar
let pp1 = 'https://media.giphy.com/media/3o7aTn7uD0Ztq6h1p2/giphy.gif';
let pp2 = 'https://media.giphy.com/media/3o7aD2saY7qK5pP5nG/giphy.gif';
let pp3 = 'https://media.giphy.com/media/l0Exk8Xy5nQGgYj7K/giphy.gif';
const gifs = [pp1, pp2, pp3];
const gif = gifs[Math.floor(Math.random() * gifs.length)];
// Enviamos el mensaje con el gif y el mensaje correspondiente
let mentions = [who]; // Mencionamos al usuario que se ha citado o mencionado
conn.sendMessage(m.chat, { video: { url: gif }, gifPlayback: true, caption: str, mentions }, { quoted: m });
}
}
handler.help = ['soplar @tag'];
handler.tags = ['emox'];
handler.command = ['soplar'];
handler.group = true;
export default handler;