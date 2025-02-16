const handler = async (m, {conn, participants, groupMetadata}) => {
  const pp = await conn.profilePictureUrl(m.chat, 'image').catch((_) => null) || 'https://files.catbox.moe/kd7vs5.jpg';
  const { antiToxic, antidelete, antiver, antiLink2, welcome, detect, antiLink, reaction } = global.db.data.chats[m.chat];
  const groupAdmins = participants.filter((p) => p.admin);
  const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n');
  const owner = groupMetadata.owner || groupAdmins.find((p) => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net';
  const text = `💥 *INFO GRUPO*
☁ *ID:*
→ ${groupMetadata.id}
💛 *Nombre:*
→ ${groupMetadata.subject}
💛 *Descripción:*
→ ${groupMetadata.desc?.toString() || '*CrowBot-ST*'}
💫 *Miembros:*
→ ${participants.length} Participantes
👑 *Creador del Grupo:*
→ @${owner.split('@')[0]}
💛 *Administradores:*
${listAdmin}

💭 *CONFIGURACIÓN*

◈ *Welcome:* ${welcome ? '✅' : '❌'}
◈ *Detect:* ${detect ? '✅' : '❌'}  
◈ *Antilink:* ${antiLink ? '✅' : '❌'} 
◈ *Antilink 𝟸:* ${antiLink2 ? '✅' : '❌'}  
◈ *Antiver:* ${antiver ? '✅' : '❌'} 
◈ *Reacción* ${reaction ? "✅️" : "❌️"}
◈ *Delete:* ${antidelete ? '✅' : '❌'} 
◈ *Antitoxic:* ${antiToxic ? '✅' : '❌'} 
`.trim();
  conn.sendFile(m.chat, pp, 'img.jpg', text, m, false, {mentions: [...groupAdmins.map((v) => v.id), owner]});
};
handler.help = ['infogrupo'];
handler.tags = ['grupo'];
handler.command = ['infogrupo', 'gp', 'infogp'];
handler.register = true
handler.group = true;
export default handler;
