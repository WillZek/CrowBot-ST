import { promises as fs } from 'fs';

const brawlersFilePath = './src/database/brawlers.json';

const cooldowns = {};

async function loadBrawlers() {
    try {
        const data = await fs.readFile(brawlersFilePath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        throw new Error('❀ No se pudo cargar el archivo brawlers.json.');
    }
}

async function saveBrawlers(brawlers) {
    try {
        await fs.writeFile(brawlersFilePath, JSON.stringify(brawlers, null, 2), 'utf-8');
    } catch (error) {
        throw new Error('❀ No se pudo guardar el archivo brawlers.json.');
    }
}

let claimHandler = async (m, { conn }) => {
    const userId = m.sender;
    const now = Date.now();

    if (cooldowns[userId] && now < cooldowns[userId]) {
        const remainingTime = Math.ceil((cooldowns[userId] - now) / 1000);
        const minutes = Math.floor(remainingTime / 60);
        const seconds = remainingTime % 60;
        return await conn.reply(m.chat, `《✧》Debes esperar *${minutes} minutos y ${seconds} segundos* para usar *#c* de nuevo.`, m);
    }

    const user = global.db.data.users[m.sender];
    if (!user) {
        throw new Error('❀ Usuario no encontrado.');
    }

    if (m.quoted && m.quoted.sender === conn.user.jid) {
        const quotedMessageId = m.quoted.id;

        try {
            const brawlers = await loadBrawlers();
            const brawlerId = m.quoted.text.match(/ID: \*(.+?)\*/)[1]; 
            const brawler = brawlers.find(c => c.id === brawlerId);

            if (!brawler) {
                await conn.reply(m.chat, '《✧》El mensaje citado no es un brawler válido.', m);
                return;
            }

            if (brawler.user) {
                await conn.reply(m.chat, `《✧》El brawler ya ha sido reclamado por @${brawler.user.split('@')[0]}, inténtalo a la próxima :v.`, m);
                return;
            }

            brawler.user = userId;
            brawler.status = "Reclamado";

            await saveBrawlers(brawlers);

            await conn.reply(m.chat, `✦ Has reclamado a *${brawler.name}* con éxito.`, m);
            cooldowns[userId] = now + 30 * 60 * 1000;

            const brawlerValue = randomCharacter.value;
            user.estrellas -= brawlerValue;

            await conn.reply(m.chat, `✦ Has perdido *${brawlerValue}* estrellas. Te quedan *${user.estrellas}* estrellas.`, m);

        } catch (error) {
            await conn.reply(m.chat, `✘ Error al reclamar el brawler: ${error.message}`, m);
        }

    } else {
        await conn.reply(m.chat, '《✧》Debes citar un brawler válido para reclamar.', m);
    }
};

claimHandler.help = ['bclaim'];
claimHandler.tags = ['gacha'];
claimHandler.command = ['bclaim', 'breclamar'];

export default claimHandler;