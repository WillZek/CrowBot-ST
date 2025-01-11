
import fs from "fs"
let handler = async(m, { conn, usedPrefix }) {
 try {
    const user = m.sender.split("@")[0]
    if (fs.existsSync("./CrowJadiBot/" + user + "/creds.json")) {
        let token = Buffer.from(fs.readFileSync("./CrowJadiBot/" + user + "/creds.json"), "utf-8").toString("base64")
        await conn.reply(m.chat, `El token te permite iniciar sesion en otros bots, recomendamos no compartirlo con nadie.\n\n*Tu token es:*`, m, rcanal)
        await conn.reply(m.chat, token, m, rcanal)
    } else {
        await conn.reply(m.chat, `🚩 No tienes token, crea tu token usando: ${usedPrefix}serbot.`, m, rcanal)
    }
  }
  handler.command = handler.help = ['token', 'gettoken', 'serbottoken'];
  handler.tags = ['serbot'];
  handler.register = true
  handler.private = true
  handler.estrellas = 4;
  export default handler;
