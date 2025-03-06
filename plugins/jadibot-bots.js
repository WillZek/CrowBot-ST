import fs from 'fs'
import ws from 'ws'

async function handler(m, { conn: stars, usedPrefix }) {
  let uniqueUsers = new Map()

  if (!global.conns || !Array.isArray(global.conns)) {
    global.conns = []
  }

  global.conns.forEach((conn) => {
    if (conn.user && conn.ws?.socket?.readyState !== ws.CLOSED) {
      uniqueUsers.set(conn.user.jid, conn)
    }
  })

  let users = [...uniqueUsers.values()]
  let totalUsers = uniqueUsers.size

  let img = 'https://i.ibb.co/HT2NNf6r/file.jpg';

  let message = users.map((v, index) => `
*[ \`${index + 1}\` - ${v.user.name || 'Sin Nombre'} ]*
🤍 *Link:* https://wa.me/${v.user.jid.replace(/[^0-9]/g, '')}
`).join('\n\n')

  let responseMessage = `🍭 *${msg.botlist}: ${totalUsers}*\n\n${message.trim() || '_No hay subbots activos en este momento._'}`

  await stars.sendFile(
    m.chat,
    img,
    'thumbnail.jpg',
    responseMessage,
    m,
    null,
    fake,
    false,
    { mentions: stars.parseMention(responseMessage) }
  )
}

handler.command = ['listjadibot', 'bots']
handler.help = ['bots']
handler.tags = ['serbot']

export default handler