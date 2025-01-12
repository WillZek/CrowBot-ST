
const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    return;
  }
  const pesan = args.join` `;
  const colombia = `💌 *Mensaje:* ${pesan}`;
  let teks = `💛 *Revivan Plantas*\n${colombia}\n\n┏ 𝐂𝐫𝐨𝐰𝐁𝐨𝐭-𝐒𝐓\n`;
  for (const mem of participants) {
    teks += `┋🔱@${mem.id.split('@')[0]}\n`;
    teks += `┗ ${textbot}`;
  }
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall *<mensaje>*', 'invocar *<mensaje>*'];
handler.tags = ['grupo'];
handler.command = ['tagall', 'invocar', 'todos'];
handler.admin = true;
handler.group = true;
export default handler;
