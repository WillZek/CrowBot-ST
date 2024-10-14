import ws from 'ws';
import PhoneNumber from 'awesome-phonenumber';

let handler = async (m, { conn, usedPrefix, text, args, command }) => {
    let uniqueUsers = new Map();

    let users = [...uniqueUsers.values()];
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let totalUsers = users.length;
    let totalusr = Object.keys(global.db.data.users).length;
    let rtotal = Object.entries(global.db.data.users).length || '0'
    let _uptime = process.uptime() * 1000;
    let uptime = clockString(_uptime);
    let username = conn.getName(m.sender);
    let name = conn.getName(m.sender)
    let api = await axios.get(`https://deliriusapi-official.vercel.app/tools/country?text=${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}`)
   let userNationalityData = api.data.result
   let userNationality = userNationalityData ? `${userNationalityData.name}` : 'Desconocido'
    let locale = 'es';
    let d = new Date(new Date + 3600000);
    let time = d.toLocaleTimeString(locale, {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    });

    let totalreg = Object.keys(global.db.data.users).length;
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length;

    m.react("🌸");
    let menu = ``;

    let txt =  `Hσʅα ! Sσყ CrowBot, ρҽɾʂσɳιƚα ʅιɳԃα αϙυι ƚιҽɳҽʂ ɱι ɱҽɳυ`
txt+= '.͜°˖ `ᴄʀᴇᴀᴅᴏʀ ::`' + ` NiñoPiña\n`;
txt+= '.͜°˖ `ʙᴏᴛ ::`' + ` CrowBot-MD\n`;
txt+= '.͜°˖ `ꜰᴇᴄʜᴀ ::`' + ` ${moment.tz('America/Bogota').format('DD/MM/YY')}\n`;
txt+= '.͜°˖ `ᴘᴀɪs ::`' + ` ${userNationality}\n`;
txt+= '.͜°˖ `ᴘʀᴇꜰɪᴊᴏ ::`' + ` 「 ${usedPrefix} 」\n`;
txt+= '.͜°˖ `ᴜꜱᴜᴀʀɪᴏꜱ ::`' + ` ${rtotal}\n`;
txt+= '.͜°˖ `ᴄᴏɴᴛᴀᴄᴛᴏ ::` #owner\n\n';
txt+= '.͜°˖ `ᴀᴄᴛɪᴠᴏ ::`' + ` ${uptime}\n`;
txt+= "✬✭✰✬"

    let listSections = [];

        listSections.push({
        title: `SELECCIÓNA LO QUE NECESITES`, highlight_label: `Popular CrowBot`,
        rows: [
            {
                header: "Aυƚσ Vҽɾιϝιƈαɾ ╎🌸",
                title: "",
                description: `🗃 Verificacion Automáticamente`,
                id: `#reg ${name}.18`,
            },
            {
                header: "Mҽɳυ Cσɱρʅҽƚσ ╎ 🌸",
                title: "",
                description: `🌸 Muestra el menú completo.`,
                id: `.allmenu`,
            },
            {
                header: "Mҽɳυ NSFW ╎ 🌸",
                title: "",
                description: `🔥 Muestra el menú +18.`,
                id: `.hornymenu`,
            },
            {
                header: "Gιƚ HυႦ ╎ ⭐️",
                title: "",
                description: `🌸 Muestra el github del bot.`,
                id: `#sc`,
            },
            {
                header: "Sƙყ Uʅƚɾα Pʅυʂ ╎ 💸",
                title: "",
                description: `⚡️ Super hosting, Sky Ultra Plus.`,
                id: `#skyplus`,
            },
            {
                header: "Sρҽҽԃ ╎ 🌸",
                title: "",
                description: `🚀 Muestra su velocidad y mas.`,
                id: `#speed`,
            },
            {
                header: "SҽɾႦσƚ Cσԃҽ  ╎ 🌸",
                title: "",
                description: `🌸 Ser subbot mediante un codigo de 8 digitos.`,
                id: `.code`,
            },
            {
                header: "SҽɾႦσƚ QR ╎ 🌸",
                title: "",
                description: `☁️ Ser subbot mediante un codigo QR.`,
                id: `.serbot`,
            },
            {
                header: "SυႦ Bσƚʂ ╎ 🌸",
                title: "",
                description: `🟢 Muestra su subbots onlines.`,
                id: `.bots`,
            },
            {
                header: "Gɾυρσʂ 🌸",
                title: "",
                description: `📲 Muestra los grupos principales de la bot.`,
                id: `.grupos`,
            },
        ],
    });

    let vid = "https://qu.ax/lHgv.mp4";
    let img = "https://qu.ax/DwRoz.jpg";
    let img2 = "https://qu.ax/HHXnW.jpg";

    await conn.sendListB(m.chat, menu, txt, `*ೃ༄ Mҽɳυ 🌸 ೄྀ࿐⁩`, [vid, img, img2].getRandom(), listSections, esti);
};

handler.tags = ['main'];
handler.help = ['menu'];
handler.command = ["menu", "help", "menú"];

export default handler;


function clockString(ms) {
  const h = Math.floor(ms / 3600000);
  const m = Math.floor(ms / 60000) % 60;
  const s = Math.floor(ms / 1000) % 60;
  console.log({ ms, h, m, s });
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
}


  var ase = new Date();
  var hour = ase.getHours();
switch(hour){
  case 0: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌙'; break;
  case 1: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 💤'; break;
  case 2: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🦉'; break;
  case 3: hour = 'Bᴜᴇɴᴏs Dɪᴀs ✨'; break;
  case 4: hour = 'Bᴜᴇɴᴏs Dɪᴀs 💫'; break;
  case 5: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌅'; break;
  case 6: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌄'; break;
  case 7: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌅'; break;
  case 8: hour = 'Bᴜᴇɴᴏs Dɪᴀs 💫'; break;
  case 9: hour = 'Bᴜᴇɴᴏs Dɪᴀs ✨'; break;
  case 10: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌞'; break;
  case 11: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌨'; break;
  case 12: hour = 'Bᴜᴇɴᴏs Dɪᴀs ❄'; break;
  case 13: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌤'; break;
  case 14: hour = 'Bᴜᴇɴᴀs Tᴀʀᴅᴇs 🌇'; break;
  case 15: hour = 'Bᴜᴇɴᴀs Tᴀʀᴅᴇs 🥀'; break;
  case 16: hour = 'Bᴜᴇɴᴀs Tᴀʀᴅᴇs 🌹'; break;
  case 17: hour = 'Bᴜᴇɴᴀs Tᴀʀᴅᴇs 🌆'; break;
  case 18: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌙'; break;
  case 19: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌃'; break;
  case 20: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌌'; break;
  case 21: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌃'; break;
  case 22: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌙'; break;
  case 23: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌃'; break;
}
  var greeting = hour;