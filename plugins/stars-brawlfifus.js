import { promises as fs } from 'fs';

const charactersFilePath = './src/database/brawlers.json';

const cooldowns = {};

async function loadCharacters() {
    try {
        const data = await fs.readFile(charactersFilePath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        throw new Error('❀ No se pudo cargar el archivo characters.json.');
    }
}

async function saveCharacters(characters) {
    try {
        await fs.writeFile(charactersFilePath, JSON.stringify(characters, null, 2), 'utf-8');
    } catch (error) {
        throw new Error('❀ No se pudo guardar el archivo characters.json.');
    }
}

let rollHandler = async (m, { conn }) => {
    const userId = m.sender;
    const now = Date.now();

    if (cooldowns[userId] && now < cooldowns[userId]) {
        const remainingTime = Math.ceil((cooldowns[userId] - now) / 1000);
        const minutes = Math.floor(remainingTime / 60);
        const seconds = remainingTime % 60;
        return await conn.reply(m.chat, `《✧》Debes esperar *${minutes} minutos y ${seconds} segundos* para usar *#rw* de nuevo.`, m);
    }

    try {
        const characters = await loadCharacters();
        const randomCharacter = characters[Math.floor(Math.random() * characters.length)];

        const statusMessage = randomCharacter.user 
            ? `Reclamado por @${randomCharacter.user.split('@')[0]}` 
            : 'Libre';

        const message = `🔱 Brawler » *${randomCharacter.name}*
♀️ Género » *${randomCharacter.gender}*
🪙 Valor » *${randomCharacter.value}*
🪩 Estado » *${statusMessage}*
🔎 Categoria » *${randomCharacter.source}*
> ID: *${randomCharacter.id}*`;

        await conn.sendFile(m.chat, randomCharacter.img, `${randomCharacter.name}.jpg`, message, m);
        cooldowns[userId] = now + 15 * 60 * 1000;

    } catch (error) {
        await conn.reply(m.chat, `✘ Error al cargar el personaje: ${error.message}`, m);
    }
};

rollHandler.help = ['rw', 'rollwaifu'];
rollHandler.tags = ['gacha'];
rollHandler.command = ['brawlr', 'brw', 'rollwaifub', 'brver'];
rollHandler.estrellas = 2;

export default rollHandler;