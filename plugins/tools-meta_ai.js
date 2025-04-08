// By WillZek

const handler = async (m, {conn, text, usedPrefix, command}) => {

if (!text) return m.reply(`*🧑‍💻 Ingresa un texto para generar tu imagen a tu gusto*`);

m.react('🕒');
await conn.sendMessage(m.chat, {text: '*🧑‍💻 Espere, Estamos Trabajando en su imagen*'}, {quoted: m});
try {
const crow = `https://eliasar-yt-api.vercel.app/api/ai/text2img?prompt=${text}`;

const texto = `*Resultados De:* ${text}`;
m.react(rwait);
await conn.sendMessage(m.chat, { image: { url: crow }, caption: texto }, { quoted: m });
m.react(done);

} catch (error) {
console.error(error);
m.reply('*🚨 No Encontré Resultados*');
}
}
handler.tags = ['tools'];
handler.help = ['crowai'];
handler.command = ['crowai'];

export default handler;
