import fs from "fs";
import path from "path";
import crypto from "crypto";
import fetch from "node-fetch";
import FormData from "form-data";

let handler = async (m, { conn, text, command, usedPrefix }) => {
    let q = m.quoted ? m.quoted : m;
    if (!q) return m.reply(`🍭 Responde a un archivo usando: ${usedPrefix + command}`);

    let buffer;
    
    try {
        buffer = await q.download();
    } catch (e) {
        if (q.url) {
            console.log("Descargando desde URL:", q.url);
            buffer = await fetch(q.url).then(res => res.buffer());
        }
    }

    if (!buffer) return m.reply("No se pudo descargar el archivo.");

    let mimeType = q.mimetype || "application/octet-stream";
    let ext = mimeType.includes("/") ? mimeType.split("/")[1] : "bin";
    let name = crypto.randomBytes(5).toString("hex") + "." + ext;
    let filePath = `./src/${name}`;

    fs.writeFileSync(filePath, buffer);

    let file = await upload(filePath);
    fs.unlinkSync(filePath);

    if (!file || !file[0]?.url) return m.reply("Error al subir el archivo.");

    let sizeMB = (file[0].size / (1024 * 1024)).toFixed(2);
    let cap = `
◜ Upload - Mega ◞

≡ 🖇️ \`URL :\` ${file[0].url}
≡ 🍫 \`Nombre :\` ${file[0].name}
≡ ⚖️ \`Tamaño :\` ${sizeMB} MB
`;

    conn.sendMessage(m.chat, { text: cap }, { quoted: m });
};
handler.tags = ["tools"]
handler.help = handler.command = ["up", "tourl2"];
export default handler;

async function upload(filePath) {
    try {
        const formData = new FormData();
        formData.append("file", fs.createReadStream(filePath));

        const response = await fetch("https://cdnmega.vercel.app/upload", {
            method: "POST",
            body: formData,
            headers: formData.getHeaders()
        });

        const result = await response.json();
        return result.success ? result.files : null;
    } catch (error) {
        console.error("Error al subir archivo:", error);
        return null;
    }
}