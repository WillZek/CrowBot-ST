/* 
- Download Playstore By Jose XrL
- Power By Team Code Titans
- https://whatsapp.com/channel/0029ValMlRS6buMFL9d0iQ0S 
*/
// *🍁 《 Playstore  - Download 》*
import gplay from 'google-play-scraper';
import fetch from 'node-fetch';

let handler = async (m, { conn, args, usedPrefix: prefix, command }) => {
    m.react('🤍');

    if (!args[0]) {
        console.log('Argumento vacío, enviando mensaje de ayuda');
        return conn.reply(m.chat, `*🚩 Ingresa el enlace de la aplicación que deseas descargar de la Play Store.*\n\n*Ejemplo:*\n\`${prefix + command} https://play.google.com/store/apps/details?id=com.whatsapp\``, m, rcanal);
    }

    const url = args[0];

    let packageName;
    try {
        packageName = new URL(url).searchParams.get("id");
        if (!packageName) throw new Error();
    } catch {
        return conn.reply(m.chat, `*❌ La URL proporcionada no es válida o no contiene un ID de aplicación.*`, m, rcanal);
    }

    console.log(`ID de paquete: ${packageName}`);

    let info;
    try {
        info = await gplay.app({ appId: packageName });
    } catch (error) {
        console.error(error);
        return conn.reply(m.chat, `*❌ No se pudo encontrar la aplicación. Asegúrate de que el enlace sea correcto.*`, m, rcanal);
    }

    const h = info.title;
    console.log(`Título de la aplicación: ${h}\nID de la aplicación: ${info.appId}`);

    let link = `https://d.apkpure.com/b/APK/${info.appId}?version=latest`;

    conn.sendFile(m.chat, link, `${h}.apk`, ``, m, false, { mimetype: 'application/vnd.android.package-archive', asDocument: true });
    m.react('✅️');

    conn.reply(m.chat, `*¡Descarga completada para "${h}"!*`, m, rcanal);
}

handler.help = ['playstore *<url>*']; 
handler.tags = ['descargas'];
handler.command = /^(playstore)$/i;
export default handler;