//Codígo creado por Niño Piña wa.me/50557865603
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
m.react('🌞');
// Construimos el mensaje dependiendo de si hay una mención o no
let str;
if (m.mentionedJid.length > 0) {
str = `${name2} buenos días ${name || who}.`; // Usamos nombre agendado o número si no está agendado
} else if (m.quoted) {
str = `${name2} buenos días ${name || who}.`; // Mensaje cuando se cita a otro usuario
} else {
str = `${name2} buenos días a todos en el grupo, les deseo un gran día.`.trim();
}
if (m.isGroup) {
let pp = 'https://giphy.com/gifs/frases-addy-rivera-e44f3WbMgScPpxtRlq';
let pp2 = 'https://giphy.com/clips/studiosoriginals-feliz-dia-FdgSPh8btKTh01vc8q';
let pp3 = 'https://media.giphy.com/media/3o6Mbxk1k8b4i5cIYw/giphy.gif';
let pp4 = 'https://media.giphy.com/media/26tPoyDhjiY8r0g4U/giphy.gif';
let pp5 = 'https://media.giphy.com/media/l0K4q8tH7qz5y3t9q/giphy.gif';
let pp6 = 'https://media.giphy.com/media/3o7aD4n3a4H8y4Gq8Y/giphy.gif';
let pp7 = 'https://media.giphy.com/media/3o6Zt6p7d2V7zP8cK0/giphy.gif';
let pp8 = 'https://media.giphy.com/media/26gJd7Y5J7Y6p6v7y/giphy.gif';
const videos = [pp, pp2, pp3, pp4, pp5, pp6, pp7, pp8];
const video = videos[Math.floor(Math.random() * videos.length)];
// Enviamos el mensaje con el video y el mensaje correspondiente
let mentions = [who]; // Mencionamos al usuario que se ha citado o mencionado
conn.sendMessage(m.chat, { video: { url: video }, gifPlayback: true, caption: str, mentions }, { quoted: m });
}
}
handler.help = ['días/mornings  @tag'];
handler.tags = ['grupo'];
handler.command = ['días','dia','mornings'];
handler.group = true;
export default handler;