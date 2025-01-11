let handler = async (m, { conn, text }) => {

if (text) {
global.db.data.chats[m.chat].emojiTag = text;
m.reply('*Emoji Cambiado Con Éxito👻*.');
} else {
m.reply('*Y el emoji?🧐*');
}

}
handler.command = ['emotag']
handler.help = ['emotag < emoji >']
handler.tags = ['grupo']
export default handler