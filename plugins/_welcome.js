import { WAMessageStubType } from '@whiskeysockets/baileys'
import fetch from 'node-fetch'

export async function before(m, { conn, participants, groupMetadata }) {
  if (!m.messageStubType || !m.isGroup) return true

  let who = m.messageStubParameters[0]
  let taguser = `@${who.split('@')[0]}`
  let chat = global.db.data.chats[m.chat]
  let defaultImage = 'https://files.catbox.moe/kd7vs5.jpg';

  if (chat.welcome) {
    let img;
    try {
      let pp = await conn.profilePictureUrl(who, 'image');
      img = await (await fetch(pp)).buffer();
    } catch {
      img = await (await fetch(defaultImage)).buffer();
    }

    if (m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_ADD) {
    let bienvenida = `┌─★ 𝐂𝐫𝐨𝐰𝐁𝐨𝐭-𝐒𝐓\n│「 Bienvenido 」\n└┬★ 「 @${m.messageStubParameters[0].split`@`[0]} 」\n   │💛  Bienvenido a\n   │💛  ${groupMetadata.subject}\n   └───────────────┈ ⳹`
      await conn.sendMessage(m.chat, { image: img, caption: bienvenida, mentions: [who] })
    } else if (m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_REMOVE || m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_LEAVE) {
     let bye = `┌─★ 𝐂𝐫𝐨𝐰𝐁𝐨𝐭-𝐒𝐓\n│「 ADIOS 👋 」\n└┬★ 「 @${m.messageStubParameters[0].split`@`[0]} 」\n   │💛  Se fue\n   │💛 Jamás te quisimos aquí\n   └───────────────┈ ⳹`
      await conn.sendMessage(m.chat, { image: img, caption: bye, title: textbot, body: dev, sourceUrl: channel, mentions: [who] })
    }
  }

  return true
}