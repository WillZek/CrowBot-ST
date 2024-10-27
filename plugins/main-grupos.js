let media = './src/Grupo.jpg'
let handler = async (m, { conn, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
    await conn.sendMessage(m.chat, { react: { text: '⚡️', key: m.key } })
let str = `*📍 GRUPO OFICIAL*

   *_〾̷̸‣⃝⃨⃛⃰⁝̵̓ᝒ̷̸͙✨̶̩ܻᝒ̷̸꯭͙𝐂𝐫𝐨𝐰𝐁𝐨𝐭𓆩֟֯፝𓆪𝝣⃯ᵴͦ𝛒⃨ᷫ𝛆ͨ🄲⃪⃯𝛊ᷨ𝛂⃨ͦꝆ᷽ͭ🍁⃝⃙̻⃮̋⃛⃰⁌̷̸̊͟⿻᳔̶̷̸_*
  ┃🧸❏ ${gp4}

   *_ ͟͞〾𝐂𝐫𝐨𝐰𝐁𝐨𝐭 𝐎𝐟𝐢𝐜𝐢𝐚𝐥✨_*
┃🧸❏ https://chat.whatsapp.com/E78uEs2qJIE0apCLB7rSQZ
   
   *_🌟𝐂𝐫𝐨𝐰𝐁𝐨𝐭 𝙂𝙚𝙣𝙚𝙧𝙖𝙡🌟_*
┃🧸❏ https://chat.whatsapp.com/BELmEmNjNlv36w7ElRrOKa

   *_★彡[𝐓𝐄𝐀𝐌 𝐁𝐑𝐀𝐖𝐋𝐈𝐆𝐇𝐓𝐒]彡★_*
┃❤️‍🔥❏ https://chat.whatsapp.com/BuLovToIxdiLeycG2d3xJN

   *_Canal Oficial_*
┃❤️‍🔥❏ https://whatsapp.com/channel/0029VapSIvR5EjxsD1B7hU3T

   *_Canal Oficial2_*
┃❤️‍🔥❏ https://whatsapp.com/channel/0029VapSIvR5EjxsD1B7hU3T
*_╰━━━━━━━━━━━━━━━━⊜_*
`
await conn.sendButton(m.chat, str, `͟͞ 𓆩𝐍𝐢𝐧̃𝐨𝐏𝐢𝐧̃𝐚ৎ୭࠱࠭ ͟͞\n` + wm, media, [
['Menu 💖', '#Menu']], null, [
['⏤͟͞ू⃪ ፝͜⁞𝐂𝐫𝐨𝐰𝐁𝐨𝐭✰⃔࿐', `${md}`]], fkontak)}

handler.command = ['grupos','links','gruposofc','gruposoficiales']
handler.register = true
handler.exp = 33

export default handler