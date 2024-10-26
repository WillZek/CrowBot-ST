//Codígo creado por Destroy wa.me/584120346669

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
    m.react('😛');

    // Construimos el mensaje dependiendo de si hay una mención o no
    let str;
    if (m.mentionedJid.length > 0) {
        str = `${name2} está  tímid﹫ por ${name || who}.`; // Usamos nombre agendado o número si no está agendado
    } else if (m.quoted) {
        str = `${name2} está  tímid﹫ por ${name || who}.`; // Mensaje cuando se cita a otro usuario
    } else {
        str = `${name2} es muy timid﹫.`.trim();
    }
    
    if (m.isGroup) {
        let pp = 'https://telegra.ph/file/a9ccfa5013d58fad2e677.mp4'; 
        let pp2 = 'https://telegra.ph/file/2cd355afa143095b97890.mp4'; 
        let pp3 = 'https://telegra.ph/file/362c8566dc9367a5a473d.mp4';
        let pp4 = 'https://telegra.ph/file/362c8566dc9367a5a473d.mp4';
        let pp5 = 'https://telegra.ph/file/4f9323ca22e126b9d275c.mp4';
        let pp6 = 'https://telegra.ph/file/51b688e0c5295bc37ca92.mp4';
        let pp7 = 'https://telegra.ph/file/dfe74d7eee02c170f6f55.mp4';
        let pp8 = 'https://telegra.ph/file/697719af0e6f3baec4b2f.mp4';
        let pp9 = 'https://telegra.ph/file/89e1e1e44010975268b38.mp4';
        let pp10 = 'https://telegra.ph/file/654313ad5a3e8b43fc535.mp4';
        
        const videos = [pp, pp2, pp3, pp4, pp5, pp6, pp7, pp8, pp9, pp10];
        const video = videos[Math.floor(Math.random() * videos.length)];
        
        // Enviamos el mensaje con el video y el mensaje correspondiente
        let mentions = [who]; // Mencionamos al usuario que se ha citado o mencionado
        conn.sendMessage(m.chat, { video: { url: video }, gifPlayback: true, caption: str, mentions }, { quoted: m });
    }
}

handler.help = ['shy/timida @tag'];
handler.tags = ['emox'];
handler.command = ['shy','timida'];
handler.group = true;

export default handler;