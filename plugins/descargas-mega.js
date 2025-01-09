import { File } from "megajs"

let handler = async (m, { conn, args, usedPrefix, text, command }) => {
    try {
        if (!text) return m.reply(`*❗ Uso correcto del comando:*\n${usedPrefix + command} https://mega.nz/file/`);

        const file = File.fromURL(text);
        await file.loadAttributes();

        if (file.size >= 300000000) return m.reply('Error: el tamaño del archivo es demasiado grande (Tamaño máximo: 300 MB)');
        //m.react(rwait)
        m.reply(`*_🌾 Espere un momento en lo que descargo el archivo..._*\n\n${file.name} se está descargando...`);

        const data = await file.downloadBuffer();


        if (/mp4/.test(file.name)) {
            await conn.sendMessage(m.chat, { document: data, mimetype: "video/mp4", filename: `${file.name}.mp4` }, { quoted: m });
        } else if (/pdf/.test(file.name)) {
            await conn.sendMessage(m.chat, { document: data, mimetype: "application/pdf", filename: `${file.name}.pdf` }, { quoted: m });
        } else if (/zip/.test(file.name)) {
            await conn.sendMessage(m.chat, { document: data, mimetype: "application/zip", filename: `${file.name}.zip` }, { quoted: m });
        } else if (/rar/.test(file.name)) {
            await conn.sendMessage(m.chat, { document: data, mimetype: "application/x-rar-compressed", filename: `${file.name}.rar` }, { quoted: m });
        } else if (/7z/.test(file.name)) {
            await conn.sendMessage(m.chat, { document: data, mimetype: "application/x-7z-compressed", filename: `${file.name}.7z` }, { quoted: m });
        } else if (/jpg|jpeg/.test(file.name)) {
            await conn.sendMessage(m.chat, { document: data, mimetype: "image/jpeg", filename: `${file.name}.jpg` }, { quoted: m });
        } else if (/png/.test(file.name)) {
            await conn.sendMessage(m.chat, { document: data, mimetype: "image/png", filename: `${file.name}.png` }, { quoted: m });
        } else {
            return m.reply('Error: formato de archivo no compatible');
        }
    } catch (error) {
        return m.reply(`Error: ${error.message}`);
    }
}

handler.help = ['mega']
handler.tags = ['descargas']
handler.command = /^(mega)$/i
handler.estrellas = 7;

export default handler