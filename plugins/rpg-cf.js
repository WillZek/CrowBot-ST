let users = {};

let handler = async (m, { conn, text, usedPrefix, command }) => {
    let [eleccion, cantidad] = text.split(' ');
    if (!eleccion || !cantidad) {
        return m.reply(`${emoji} Por favor, elige cara o cruz y una cantidad de Estrellas para apostar.\nEjemplo: *${usedPrefix + command} cara 50*`);
    }

    eleccion = eleccion.toLowerCase();
    cantidad = parseInt(cantidad);
    if (eleccion !== 'cara' && eleccion !== 'cruz') {
        return m.reply(`${emojis} Elección no válida. Por favor, elige cara o cruz.\nEjemplo: *${usedPrefix + command} cara*`);
    }

    if (isNaN(cantidad) || cantidad <= 0) {
        return m.reply(`${emojis} Cantidad no válida. Por favor, elige una cantidad de Estrellas para apostar.\nEjemplo: *${usedPrefix + command} cara 50*`);
    }

    let userId = m.sender;
    if (!users[userId]) users[userId] = { estrellas: 100 };
    let user = global.db.data.users[m.sender];
    if (user.estrellas < cantidad) {
        return m.reply(`${emojis} No tienes suficientes Estrellas para apostar. Tienes ${user.estrellas} Estrellas.`);
    }

    let resultado = Math.random() < 0.5 ? 'cara' : 'cruz';
   let mensaje = `⭐️ La moneda ha caído en `
    if (resultado === eleccion) {
        user.estrellas += cantidad; 
    mensaje += `*${resultado}* y has ganado *${cantidad} Estrelllas*!`;
    } else {
        user.estrellas -= cantidad;
        mensaje += `*${resultado}* y has perdido *${cantidad} estrellas*!`;
    }

  await conn.reply(m.chat, mensaje, m);
};

handler.help = ['cf'];
handler.tags = ['rpg'];
handler.command = ['cf', 'suerte', 'caracruz'];

export default handler;