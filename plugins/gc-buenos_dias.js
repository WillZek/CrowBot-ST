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
let pp3 = 'https://tenor.com/es-419/view/buenos-dias-buenos-dias-amor-buenos-dias-jueves-buenos-dias-mi-amor-good-morning-gif-17200654644161685472';
let pp4 = 'https://tenor.com/es-419/view/lindo-dia-buenos-deseos-gif-8402695432373629989';
let pp5 = 'https://tenor.com/es-419/view/goodbye-thank-you-jerry-the-mouse-waving-hi-gif-17526061193307625878';
let pp6 = 'https://tenor.com/es-419/view/winnie-the-pooh-good-morning-gm-gif-3036137020568944157';
let pp7 = 'https://tenor.com/es-419/view/gm-goodmorning-morning-good-morning-g-m-gif-3477492737627610981';
let pp8 = 'https://tenor.com/es-419/view/good-morning-cute-coffee-gif-8173999760206959925';
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