const handler = async (m, { conn }) => {

let time = global.db.data.users[m.sender].lastclaim + 864000000; //10 dias
if (new Date - global.db.data.users[m.sender].lastclaim < 864000000) return conn.reply(m.chat, `*Ya Has Reclamado El Regalo De CrowBot💛, Vuelve En ${msToTime(time - new Date())}*`, m, );

    const user = global.db.data.users[m.sender];
    conn.sendMessage(m.chat, {text: `🎩 *@${m.sender.split('@')[0]} CrowBot Te Ha Regalado:*\n> 🌟 200 Estrellas\n> 💶 100 Experiencia\n> 🪙 200 CrowCoins`, mentions: [m.sender]}, {quoted: fkontak});
     
    user.money += 200;
    user.estrellas += 200;
    user.exp += 100;
};

handler.help = ['regalo'];
handler.tags = ['rpg'];
handler.command = /^(regalo|regalocrow|crowregalo)$/i;
handler.fail = null;

export default handler;

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}

function msToTime(duration) {
var days = Math.floor(duration / (1000 * 60 * 60 * 24));
var hours = Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((duration % (1000 * 60)) / 1000);

days = (days < 10) ? '0' + days : days;
hours = (hours < 10) ? '0' + hours : hours;
minutes = (minutes < 10) ? '0' + minutes : minutes;
seconds = (seconds < 10) ? '0' + seconds : seconds;

return days + ' Días ' + hours + ' Horas ' + minutes + ' Minutos';
}