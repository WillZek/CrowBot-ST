let handler = async (m, { conn, usedPrefix, command }) => {

let grupos = `╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈≫\n\n☕︎︎ *Hola!, te invito a unirte a los grupos oficiales del Bot para convivir con la comunidad oficial* 💛

- ⧼★⧽ grᥙ⍴᥆ ᥆𝖿іᥴіᥲᥣ
*❑* ${grupo}

- ⧼★⧽ grᥙ⍴᥆ ᥆𝖿іᥴіᥲᥣ 𝗍ᥱᥲm
*❑* ${gteam}

- ⧼★⧽ grᥙ⍴᥆ ძᥱ s᥆⍴᥆r𝗍ᥱ
*❑* ${gsupport}

•┈┈┈┈┈┈••✦ ♡ ✦••┈┈┈┈┈┈•
 

⧼★⧽ ᥴᥲᥒᥲᥣ ᥆𝖿іᥴіᥲᥣ
*❏* ${channel}

> ${dev}

╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈≫`

let img = 'https://cdnmega.vercel.app/media/0koXFaLT@i7K8L3tXymGVsjK7a1cLTaxk5th9cUTCpRU4FSchn-4';

conn.sendMessage(m.chat, { image: { url: img }, caption: grupos }, { quoted: m });
}

handler.help = ['grupos']
handler.tags = ['main']
handler.command = ['grupos', 'crowgrupos', 'gruposcrow']

export default handler