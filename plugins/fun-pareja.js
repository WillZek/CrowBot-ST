const toM = (a) => '@' + a.split('@')[0];

async function handler(m, {groupMetadata}) {
  const ps = groupMetadata.participants.map((v) => v.id);
  const randomIndexA = Math.floor(Math.random() * ps.length);
  const a = ps[randomIndexA];
  let b;
  do {
    const randomIndexB = Math.floor(Math.random() * ps.length);
    b = ps[randomIndexB];
  } while (b === a);

  let txt = `*FORMANDO PAREJA 💏*\n> ${toM(a)}, Deberías Empezar Una Cita con ${toM(b)} 🌹`;

  const stickerUrl = 'https://files.catbox.moe/3v8qvl.webp'; 
  m.react('💘');

  await conn.sendFile(m.chat, stickerUrl, 'sticker.webp', '', m, null);
  await conn.sendMessage(m.chat, { text: txt, mentions: [a, b] });
};

handler.help = ['formarpareja'];
handler.tags = ['fun'];
handler.command = ['formarpareja', 'formarparejas', 'pareja'];
handler.group = true

export default handler