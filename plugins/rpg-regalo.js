
const handler = async (m, { conn }) => {

    // Milisegundos en 10 días o 10 días en milisegundos como sea xdd
    const tenDaysInMillis = 864000000; 
    let time = global.db.data.users[m.sender].lastclaim + tenDaysInMillis;

    // Una Verificación Ya Que No Funcionó La Mrd xD
    if (new Date().getTime() - global.db.data.users[m.sender].lastclaim < tenDaysInMillis) {
        return conn.reply(m.chat, `*Ya Has Reclamado El Regalo De CrowBot💛, Vuelve En ${msToTime(time - new Date().getTime())}*`, m);
    }

    const user = global.db.data.users[m.sender];
    
    conn.sendMessage(m.chat, {text: `🎩 *@${m.sender.split('@')[0]} CrowBot Te Ha Regalado:*\n> 🌟 500 Estrellas\n> 💶 400 Experiencia\n> 🪙 200 CrowCoins`, mentions: [m.sender]}, {quoted: fkontak});

    // Aquí La Moneda Crow Es Estrellas, Ustedes La Pueden Cambiar Por Los Datos De las monedas de sus bots pijes
    user.money += 200;
    user.estrellas += 500;
    user.exp += 400;

    user.lastclaim = new Date().getTime();
};

handler.help = ['regalo'];
handler.tags = ['rpg'];
handler.command = /^(regalo|regalocrow|crowregalo)$/i;
handler.fail = null;

export default handler;

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)];
}

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