const handler = async (m, {conn, text}) => {

if (!text) return await conn.reply(m.chat, `🌠 Y el texto que quiere transmitir al canal?`, m)

try {
await m.react('🕐')

await conn.reply(m.chat, `🌠 El texto se envió correctamente al canal.`, m, idchannel)
await conn.reply(global.idchannel, text, null, idchannel)
await m.react('✖️')

} catch (error) {
await conn.reply(m.chat, `🥀 No se pudo enviar el mensaje al canal.`, m, idchannel)
await m.react('🔮')}}

handler.command = ['enviarmsg', 'enviarmsgcanal', 'enviarmsgchannel', 'canals']
handler.rowner = true
export default handler