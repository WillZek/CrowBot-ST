import fetch from "node-fetch";
import crypto from "crypto";
import { FormData, Blob } from "formdata-node";
import { fileTypeFromBuffer } from "file-type";

const handler = async (m, { conn }) => {
    let q = m.quoted ? m.quoted : m;
    let mime = (q.msg || q).mimetype || "";
    if (!mime) return m.reply("No media found", null, { quoted: fkontak });
    
    let media = await q.download();

    // Enviamos el archivo como documento en lugar de un enlace
    await conn.sendMessage(m.chat, {
        document: media,
        mimetype: mime,
        fileName: `Archivo.${mime.split('/')[1]}` // Usamos la extensión del mime
    }, { quoted: m });

    let caption = `*Documento* ${formatBytes(media.length)}`;

    await m.reply(caption, { quoted: fkontak });
}

handler.command = handler.help = ['todoc']
handler.tags = ['tools']
handler.diamond = true;
handler.estrellas = 5;
export default handler;

function formatBytes(bytes) {
    if (bytes === 0) {
        return "0 B";
    }
    const sizes = ["B", "KB", "MB", "GB", "TB"];
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return `${(bytes / 1024 ** i).toFixed(2)} ${sizes[i]}`;
}