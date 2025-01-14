function handler(m) {
  const data = global.creadorbot.filter(([id, isCreator]) => id && isCreator)
  this.sendContact(m.chat, data.map(([id, name]) => [id, name]), estilo, { contextInfo: { externalAdReply: { title: wm, body: dev, sourceUrl: 'Wa.me/50557865603?text=Hola+Owner+De+CrowBot', showAdAttribution: true }}})


}

handler.help = ['creador']
handler.tags = ['info']
handler.command = ['creador', 'creator', 'owner', 'propietario', 'dueño']


export default handler