const handler = async (m, { conn, isBotAdmin, groupMetadata }) => {
  if (!isBotAdmin) return m.reply('🎩 *¡NO SOY ADMIN!*');

  const participant = m.mentionedJid[0];
  if (!participant) return m.reply('🚩 *¡DEBES MENCIONAR A ALGUIEN!*');

  try {
    await conn.groupParticipantsUpdate(m.chat, [participant], 'delete');

    m.reply('🚩 *¡LA PERSONA HA SIDO MUTADA!*');

    conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, id: m.id, fromMe: false } });
    
    let usertag = conn.getName(participant);
    conn.reply('543876577197@s.whatsapp.net', `🚩 *${usertag}* ha sido mutado en:\n> ${groupMetadata.subject}.`, m, { quoted: m });
  } catch (error) {
    m.reply('🚩 Ocurrió un error: ' + error.message);
  }
};

handler.tags = ['owner'];
handler.help = ['mute @tag'];
handler.command = ['mute'];
handler.mods = true;
handler.group = true;
handler.botAdmin = true;

export default handler;