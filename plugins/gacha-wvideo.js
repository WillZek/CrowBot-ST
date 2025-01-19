import { promises as fs } from 'fs';

const charactersFilePath = './src/database/characters.json';

async function loadCharacters() {
    try {
        const data = await fs.readFile(charactersFilePath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        throw new Error('❀ No se pudo cargar el archivo characters.json.');
    }
}

let wvideoHandler = async (m, { conn, args }) => {
    const characterName = args.join(' ').toLowerCase().trim();

    try {
        const characters = await loadCharacters();
        const character = characters.find(c => c.name.toLowerCase() === characterName);

        if (!character) {
            await conn.reply(m.chat, `《✧》No se ha encontrado el personaje *${characterName}*. Asegúrate de que el nombre esté correcto.`, m);
            return;
        }

        const message = `❀ Nombre » *${character.name}*
⚥ Género » *${character.gender}*
❖ Fuente » *${character.source}*`;

        await conn.sendFile(m.chat, character.video, `${character.name}.mp4`, message, m);
    } catch (error) {
        await conn.reply(m.chat, `✘ Error al cargar el video del personaje: ${error.message}`, m);
    }
};

wvideoHandler.help = ['wvideo <nombre del personaje>'];
wvideoHandler.tags = ['gacha'];
wvideoHandler.command = ['charvideo', 'cvideo', 'wvideo', 'waifuvideo'];

export default wvideoHandler;