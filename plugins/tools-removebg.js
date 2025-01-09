import fetch from 'node-fetch';
const handler = async (m, {conn, text, usedPrefix, command}) => {
if (!text) throw `*🧑‍💻 ingrese la URL de la imagen.*`;
m.react('🕒');
await conn.sendMessage(m.chat, {text: '*🧑‍💻 Eliminando, Espere Un Momento...*'}, {quoted: m});
try {
const formData = new FormData();
formData.append("size", "auto");
formData.append("image_url", text);
const response = await fetch("https://api.remove.bg/v1.0/removebg", {
method: "POST",
headers: { "X-Api-Key": "pZoqmwkwmMSJAVdJFDnMgWB8" },
body: formData,
});
if (!response.ok) throw new Error('Network response was not ok');
const buffer = await response.arrayBuffer();
m.react('☑️');
await conn.sendMessage(m.chat, {image: Buffer.from(buffer)}, {quoted: m});
} catch (error) {
throw `Error: ${error.message}`;
}
}
handler.tags = ['tools'];
handler.help = ['removebg'];
handler.command = ['removebg','bg'];
export default handler;
