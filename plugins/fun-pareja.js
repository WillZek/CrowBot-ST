const toM = (a) => '@' + a.split('@')[0];
function handler(m, {groupMetadata}) {
  const ps = groupMetadata.participants.map((v) => v.id);
  const a = ps.getRandom();
  let b;
  do b = ps.getRandom();
  while (b === a);
  let txt = `*FORMANDO PAREJA 14 DE FEBRERO 💏*\n> ${toM(a)}, Deberías Empezar Una Cita con ${toM(b)} 🌹`;

    const stickerUrl = 'https://files.catbox.moe/ajtz0u.webp'; 
    m.react('💘');

    await conn.sendFile(m.chat, stickerUrl, 'sticker.webp', '', m, null);
 
    await conn.sendMessage(m.chat, { text: txt, mentions: [a, b] });

}
handler.help = ['formarpareja'];
handler.tags = ['fun'];
handler.command = ['formarpareja', 'formarparejas', 'pareja'];
handler.group = true;

export default handler;