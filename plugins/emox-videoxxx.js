// Para los pajeros xd
let handler = async(m, { conn }) => {

let chat = global.db.data.chats[m.chat];
if (!chat.nsfw) return m.reply('[❗] 𝐋𝐨𝐬 𝐜𝐨𝐦𝐚𝐧𝐝𝐨𝐬 +𝟏𝟖 𝐞𝐬𝐭𝐚́𝐧 𝐝𝐞𝐬𝐚𝐜𝐭𝐢𝐯𝐚𝐝𝐨𝐬 𝐞𝐧 𝐞𝐬𝐭𝐞 𝐠𝐫𝐮𝐩𝐨.\n> 𝐬𝐢 𝐞𝐬 𝐚𝐝𝐦𝐢𝐧 𝐲 𝐝𝐞𝐬𝐞𝐚 𝐚𝐜𝐭𝐢𝐯𝐚𝐫𝐥𝐨𝐬 𝐮𝐬𝐞 .enable nsfw');
let rvid = global.vidxxx[Math.floor(Math.random() * global.vidxxx.length)];

conn.sendMessage(m.chat, { 
        video: { url: rvid }, 
        caption: '🍭 ¡Disfruta Del Video!', 
        footer: dev, 
        buttons: [
            {
                buttonId: `.vxxx`,
                buttonText: { displayText: 'Siguiente Vídeo' }
            }
        ],
        viewOnce: true,
        headerType: 4
    }, { quoted: m });
}

handler.tag = ['emox'];
handler.help = ['videoxxx'];
handler.command = ['videoxxx', 'vxxx'];

export default handler;

global.vidxxx = [
    'https://telegra.ph/file/4a270d9945ac46f42d95c.mp4',
    'https://telegra.ph/file/958c11e84d271e783ea3f.mp4',
    'https://telegra.ph/file/f753759342337c4012b3f.mp4',
    'https://telegra.ph/file/379cee56c908dd536dd33.mp4',
    'https://telegra.ph/file/411d8f59a5cefc2a1d227.mp4',
    'https://telegra.ph/file/ee2cf1b359d6eef50d7b7.mp4',
    'https://telegra.ph/file/1e316b25c787f94a0f8fd.mp4',
    'https://telegra.ph/file/c229d33edce798cde0ca4.mp4',
    'https://telegra.ph/file/b44223e72dd7e80e415f2.mp4',
    'https://telegra.ph/file/61486d45a8a3ea95a7c86.mp4',
    'https://telegra.ph/file/76ba0dc2a07f491756377.mp4',
    'https://telegra.ph/file/831bb88f562bef3f1a15d.mp4',
    'https://telegra.ph/file/ee2cf1b359d6eef50d7b7.mp4',
    'https://telegra.ph/file/598857924f3a29ffd37ae.mp4',
    'https://telegra.ph/file/528caef6ea950ec45aeef.mp4',
'https://files.catbox.moe/nm0hdi.mp4',
'https://files.catbox.moe/prdlor.mp4',
'https://files.catbox.moe/58lkvi.mp4',
'https://files.catbox.moe/s6vc54.mp4',
'https://files.catbox.moe/vvtv05.mp4',
'https://files.catbox.moe/uxc844.mp4',
'https://files.catbox.moe/5tn2yr.mp4',
'https://files.catbox.moe/r7wz57.mp4',
'https://files.catbox.moe/njdvcp.mp4',
'https://files.catbox.moe/7hujkd.mp4',
'https://files.catbox.moe/8zxuly.mp4',
'https://files.catbox.moe/w1mcdk.mp4',
'https://files.catbox.moe/iqncuw.mp4',
'https://files.catbox.moe/6hyhs0.mp4',
'https://files.catbox.moe/age8dz.mp4',
'https://files.catbox.moe/lxawfr.mp4',
];