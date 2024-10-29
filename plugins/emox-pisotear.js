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
let pp3 = 'https://qu.ax/lAJfu.mp4';
let pp4 = 'https://qu.ax/TpsnA.mp4';
let pp5 = 'https://qu.ax/ewbVV.mp4';
let pp6 = 'https://qu.ax/xRFyu.mp4';
let pp7 = 'https://qu.ax/AiMyX.mp4';
let pp8 = 'https://qu.ax/fGGn.mp4';
let pp9 = 'https://qu.ax/VmjqP.mp4';
let pp10 = 'https://qu.ax/HVWBy.mp4';
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