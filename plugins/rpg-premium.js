let handler = async (m, { conn, usedPrefix, command, args }) => {
  let fkt2 = {
    "key": {
      "participants": "0@s.whatsapp.net",
      "remoteJid": "status@broadcast",
      "fromMe": false,
      "id": "Halo"
    },
    "message": {
      "contactMessage": {
        "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
      }
    },
    "participant": "0@s.whatsapp.net"
  }

  const xxx = '```'
  let texto = `
 *乂  ＢＵＹ  -  ＰＲＥＭＩＵＭ*
  ${xxx}-----------------------------
  • ${usedPrefix + command} 1 1h = 1 hora premium 🎁
  • 1 hora premium = 20 + 1 Diamantes 💎
   • El +1 es por la comisión. Por cada hora más de premium comprada, se aumentará, es decir, si compras 2 horas premium se te cobrarán 2 estrellas como comisión 💎
${xxx}
 *乂  ＩＮＦＯ  -  ＥＸＴＲＡ*
  ${xxx}-----------------------------
  • Recuerda que si quieres tener más tiempo premium, solo cambia el número. Ejemplo: #premium 2 1h = 2 horas ⛅
${xxx}  
`

  let name = await conn.getName(m.sender)
  if (!args[0]) return conn.reply(m.chat, texto, fkt2)

  if (args[1] !== '1h') throw `*❗ Al final del texto debe ir 1h. Ejemplo: ${usedPrefix + command} 1 1h*`

  let url = 'https://telegra.ph/file/32587ace8c770d959dc3c.jpg'
  let xx = '```'
  let com = 1
  var precio = 20
  var tiempoTl = 1 * args[0]
  let user = global.db.data.users[m.sender]

  if (!user.premiumTime) user.premiumTime = 0;

  if (isNaN(args[0])) return conn.reply(m.chat, `*❌ Solo se aceptan números. Ejemplo: ${usedPrefix + command} 1 1h*`, fkt2)
  if (user.estrellas < precio) throw `*🏦 No tienes suficientes estrellas para comprar premium!*`

  user.estrellas -= precio * args[0]
  user.estrellas -= com * args[0]

  var tiempo = 3600000 * args[0] //180000 3min | 300000 5 min | 900000 15min | 1800000 30min | 3600000 1h | 10800000 3h | 25200000 7h | 86400000 24h | 259200000 3d  
  var now = Date.now() // Cambiado a Date.now()
  if (now < user.premiumTime) user.premiumTime += tiempo
  else user.premiumTime = now + tiempo
  user.premium = true

  let txt = `
  *乂  ＰＲＥＭＩＵＭ  -  ＵＳＥＲ*
  ${xx}╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌
  • Usuario : @${m.sender.split`@`[0]} 🧝‍♂️
  • Tiempo Premium : ${tiempoTl} hora(s) 🕑
  • Total a pagar : ${precio + com} 🏦
  • Estrellas restantes : ${user.estrellas} 
  • Tenía : ${user.estrellas + precio + com} ⛅
  • Comisión : -${com} 💎
 ${xx}
`
  conn.sendMessage(m.chat, { image: { url: url }, caption: txt.trim(), mentions: [m.sender] }, { quoted: fkt2 })
}

handler.tags = ['rg']
handler.help = ['buyprem']
handler.command = ['buyprem', 'premium', 'prem']
handler.register = true
export default handler
