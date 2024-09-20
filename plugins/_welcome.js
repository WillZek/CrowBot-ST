import {WAMessageStubType} from '@whiskeysockets/baileys'
import fetch from 'node-fetch'

export async function before(m, {conn, participants, groupMetadata}) {
  if (!m.messageStubType || !m.isGroup) return !0;
  let img = imagen1
  let chat = global.db.data.chats[m.chat]

  if (chat.welcome && m.messageStubType == 27) {
    let welcome = `┌─★ *IAN BOT - MD* \n│「 𝗕𝗶𝗲𝗻𝘃𝗲𝗻𝗶𝗱𝗼 ☁ 」\n└┬★ 「 @${m.messageStubParameters[0].split`@`[0]} 」\n   │🌺  𝗕𝗶𝗲𝗻𝘃𝗲𝗻𝗶𝗱𝗼/𝗮\n   │🌺  ${groupMetadata.subject}\n   └───────────────┈ ⳹`
await conn.sendLuffy(m.chat, packname, textbot, welcome, img, img, redes, fkontak)
  }

  if (chat.welcome && m.messageStubType == 28) {
    let bye = `┌─★ *IAN BOT - MD* \n│「 𝗔𝗗𝗜𝗢𝗦 💛 」\n└┬★ 「 @${m.messageStubParameters[0].split`@`[0]} 」\n   │🌺  𝗦𝗲 𝗳𝘂𝗲\n   │🌺 𝗡𝘂𝗻𝗰𝗮 𝘁𝗲 𝗾𝘂𝗶𝘀𝗶𝗺𝗼𝘀 𝗮𝗾𝘂𝗶\n   └───────────────┈ ⳹`
await conn.sendLuffy(m.chat, packname, textbot, bye, img, img, redes, fkontak)
  }

  if (chat.welcome && m.messageStubType == 32) {
    let kick = `┌─★ *IAN BOT -MD* \n│「 𝗔𝗗𝗜𝗢𝗦 💛 」\n└┬★ 「 @${m.messageStubParameters[0].split`@`[0]} 」\n   │🌺  𝗦𝗲 𝗳𝘂𝗲\n   │🌺 𝗡𝘂𝗻𝗰𝗮 𝘁𝗲 𝗾𝘂𝗶𝘀𝗶𝗺𝗼𝘀 𝗮𝗾𝘂𝗶\n   └───────────────┈ ⳹`
await conn.sendLuffy(m.chat, packname, textbot, kick, img, img, redes, fkontak)
}}
