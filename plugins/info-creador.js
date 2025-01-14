function handler(m) {
  const data = global.creadorbot.filter(([id, isCreator]) => id && isCreator)
  this.sendContact(m.chat, data.map(([id, name]) => [id, name]), rcanal, { contextInfo: { externalAdReply: { showAdAttribution: true }}})


}

handler.help = ['creador']
handler.tags = ['info']
handler.command = ['creador', 'creator', 'owner', 'propietario', 'dueño']


export default handler