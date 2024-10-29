//Código creado por Niño Piña wa.me/50557865603
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
m.react('👣');
// Construimos el mensaje dependiendo de si hay una mención o no
let str;
if (m.mentionedJid.length > 0) {
str = `\`${name2}\` está pisoteando a \`${name || who}\`. ¡Cuidado! 😱`; // Usamos nombre agendado o número si no está agendado
} else if (m.quoted) {
str = `\`${name2}\` está pisoteando a \`${name || who}\`. ¡Cuidado! 😱`; // Mensaje cuando se cita a otro usuario
} else {
str = `\`${name2}\` está pisoteando por ahí.`.trim();
}
if (m.isGroup) {
let pp1 = 'https://qu.ax/deqEY.mp4';
let pp2 = 'https://qu.ax/tRtKj.mp4';
let pp3 = 'https://media.giphy.com/media/3o7TKM5c7T5OZ4f1xW/giphy.gif';
let pp4 = 'https://media.giphy.com/media/3o6Zt1gF1qC0l4c5dG/giphy.gif';
let pp5 = 'https://media.giphy.com/media/3o6Zt2J5Z2g2Z6F5C0/giphy.gif';
let pp6 = 'https://media.giphy.com/media/3o6Zt1gF1qC0l4c5dG/giphy.gif';
let pp7 = 'https://media.giphy.com/media/3o6Zt2J5Z2g2Z6F5C0/giphy.gif';
let pp8 = 'https://media.giphy.com/media/3o6Zt1gF1qC0l4c5dG/giphy.gif';
let pp9 = 'https://media.giphy.com/media/3o6Zt2J5Z2g2Z6F5C0/giphy.gif';
let pp10 = 'https://media.giphy.com/media/3o6Zt1gF1qC0l4c5dG/giphy.gif';
const gifs = [pp1, pp2, pp3, pp4, pp5, pp6, pp7, pp8, pp9, pp10];
const gif = gifs[Math.floor(Math.random() * gifs.length)];
// Enviamos el mensaje con el gif y el mensaje correspondiente
let mentions = [who]; // Mencionamos al usuario que se ha citado o mencionado
conn.sendMessage(m.chat, { video: { url: gif }, gifPlayback: true, caption: str, mentions }, { quoted: m });
}
}
handler.help = ['pisotear @tag'];
handler.tags = ['emox'];
handler.command = ['pisotear'];
handler.group = true;
export default handler;