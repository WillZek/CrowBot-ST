import yts from 'yt-search'
import { youtubedl, youtubedlv2 } from '@bochilteam/scraper'
let limit = 320
let handler = async (m, { conn, text, args, isPrems, isOwner, usedPrefix, command }) => {

    if (!text) throw `*[🌠] Complementa tu peticion con alguna canción o video (Se recomienda especificar al autor)*.\n\n 🌠.- Ejemplo *${usedPrefix + command} Next Semester - Twenty One Pilots.*`
  let chat = global.db.data.chats[m.chat]
  let res = await yts(text)
  //let vid = res.all.find(video => video.seconds < 3600)
  let vid = res.videos[0]
  if (!vid) throw `*[🌠] Petición no encontrada.* _Intenta nuevamente_`
  let isVideo = /vid$/.test(command)
  try {
  let q = isVideo ? '360p' : '128kbps' 
  let v = vid.url
  let yt = await youtubedl(v).catch(async () => await youtubedlv2(v))
  let dl_url = await (isVideo ? yt.video[q].download() : yt.audio[q].download())
  let title = await yt.title
  let size = await (isVideo ? yt.video[q].fileSizeH : yt.audio[q].fileSizeH)
   let play = `*『  C R O W - P L A Y  ł  𝙳 . 𝙻  』*\n\n *☊.- 𝚃𝚒́𝚝𝚞𝚕𝚘: ${vid.title}*\n *🜚.- 𝚅𝚒𝚜𝚝𝚊𝚜:* ${vid.views}\n *🝓.- 𝙵𝚎𝚌𝚑𝚊 𝚍𝚎 𝙿𝚞𝚋𝚕𝚒𝚌𝚊𝚌𝚒𝚘́𝚗: ${vid.ago}*\n *🜵.- 𝙳𝚞𝚛𝚊𝚌𝚒𝚘́𝚗: ${vid.timestamp}*\n\n \`\`\`🜲.- 𝙳𝚎𝚜𝚌𝚛𝚒𝚙𝚌𝚒𝚘́𝚗:\n${vid.description}\`\`\``


conn.sendFile(m.chat, vid.thumbnail, 'play', play, m)

if (size.split('MB')[0] >= limit) return m.reply(`*『  C R O W - P L A Y ł  𝙳 . 𝙻  』*\n\n*🜵.-𝙿𝚎𝚜𝚘:* ${size}\n*🝓.-𝙲𝚊𝚕𝚒𝚍𝚊𝚍:* ${q}\n\n*[🌠]* 𝙴𝚕 𝚊𝚛𝚌𝚑𝚒𝚟𝚘 𝚜𝚘𝚕𝚒𝚌𝚒𝚝𝚊𝚍𝚘 𝚜𝚞𝚙𝚎𝚛𝚊 𝚎𝚕 𝚕í𝚖𝚒𝚝𝚎 𝚍𝚎 𝚍𝚎𝚜𝚌𝚊𝚛𝚐𝚊. +${limit} 𝚖𝚋*`) 

if (size.includes('GB')) return m.reply(`*『  C R O W - P L A Y  ł  𝙳 . 𝙻  』*\n\n*🜵.-𝙿𝚎𝚜𝚘:* ${size}\n*🝓.-𝙲𝚊𝚕𝚒𝚍𝚊𝚍:* ${q}\n\n*[🌠]* 𝙴𝚕 𝚊𝚛𝚌𝚑𝚒𝚟𝚘 𝚜𝚘𝚕𝚒𝚌𝚒𝚝𝚊𝚍𝚘 𝚜𝚞𝚙𝚎𝚛𝚊 𝚎𝚕 𝚕í𝚖𝚒𝚝𝚎 𝚍𝚎 𝚍𝚎𝚜𝚌𝚊𝚛𝚐𝚊. +${limit} 𝚖𝚋*`)   
          conn.sendFile(m.chat, dl_url, title + '.mp' + (3 + /vid$/.test(command)), ``, m, false, { mimetype: isVideo ? '' : 'audio/mpeg', asDocument: false })

    } catch {
        console.log('/////////////////////////////////\nEsta mamada no jala y alxile no sé por qué\n/////////////////////////////////');
                m.reply(global.errori)
    }

}
handler.help = ['pla', 'playvid']
handler.tags = ['dl']
handler.command = ['play', 'playvid']

export default handler