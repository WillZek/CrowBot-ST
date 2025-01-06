import fetch from 'node-fetch';

let handler = async (m, { conn, command }) => {
    if (command === 'declaracion') {
        const imageUrl = 'https://qu.ax/VccqK.jpg';

        const messageText = `Hola Valentina \nVengo a decirte que de hace mucho me gustas pero no fui capaz de demostrar amor y cariño, te quiero pedir disculpas por mi comportamiento en dejarte hablar\nPero con el tiempo me di cuenta que el error fue mio y quiero pedirte disculpas\nEstraño los abrazos que nos dabamos demostraban cariño, realmente quiero que me perdones y empezar otra vez. \n\n¿ Me Perdonas ?\n\n\n`;

        await conn.sendMessage(m.chat, messageText, 'Perdoname', imageUrl);
    }
};

let siHandler = async (m, { conn }) => {
    const yesImageUrl = 'https://qu.ax/abKS.jpg';
    const yesAudioUrl = 'https://qu.ax/lyds.mp3';
    const yesMessageText = `¡Qué alegría que hayas aceptado! Me siento increíblemente feliz y emocionado por lo que está por venir. Desde que te conocí, he soñado con este momento, y ahora que es real, no puedo esperar para vivir momentos inolvidables contigo.\n\nGracias por darme esta oportunidad. 💖`;

    await conn.sendMessage(m.chat, { 
        image: { url: yesImageUrl }, 
        caption: yesMessageText
    }, { quoted: m });

    await conn.sendMessage(m.chat, { 
        audio: { url: yesAudioUrl }, 
        mimetype: 'audio/mpeg'
    }, { quoted: m });
};

let noHandler = async (m, { conn }) => {
    const noImageUrl = 'https://qu.ax/eFBg.jpg';
    const noMessageText = `Entiendo y agradezco tu sinceridad. Aunque no haya sido el resultado que esperaba, valoro mucho nuestra amistad y quiero que sepas que seguiré aquí para ti. 😊`;
    const noAudioUrl = 'https://qu.ax/Pgxz.mp3';

    await conn.sendMessage(m.chat, { 
        image: { url: noImageUrl }, 
        caption: noMessageText
    }, { quoted: m });

    await conn.sendMessage(m.chat, { 
        audio: { url: noAudioUrl }, 
        mimetype: 'audio/mpeg'
    }, { quoted: m });
};

handler.command = ['declaracion', 'dclarar', 'si', 'no', 'Si', 'No'];
handler.tags = ["downloader"];
handler.help = ["declaracion"];

export default handler;