let handler = async (m, { conn, text, args, usedPrefix, command }) => {

  let txt = `《★》${msg.langList}\n- es (Español)\n- en (Inglés)\n- id (Indonesia)\n- pt (Portugues)\n- ar (Árabe)\n\n🍫 ${mssg.example}: *${usedPrefix + command}* en`
  if (!text) return conn.reply(m.chat, txt, m, rcanal);
  let users = global.db.data.users[m.sender]
   if (args[0] === "es") {
       users.language = args[0]
       m.reply("🍭 *El Idioma: Español Seleccionado*\n\nAhora el bot responderá en Español.")
      } else if (args[0] === "en") {
       users.language = args[0]
       m.reply("🍭 *Selected English*\n\nNow the bot will reply to your message in English")
      } else if (args[0] === "id") {
      users.language = args[0]
       m.reply("🍭 *Bahasa Indonesia terpilih*\n\nSekarang bot akan membalas pesanmu dengan bahasa Indonesia")
      } else if (args[0] === "pt") {
        users.language = args[0]
         m.reply("🍭 *Português selecionados*\n\nAgora o bot vai responder a sua mensagem em Português")
       } else if (args[0] === "ar") {
        users.language = args[0]
        m.reply("🍭 *تم اختيار اللغة العربية*\n\nالآن سيقوم البوت بالرد على رسائلك باللغة العربية")
      } else {
       m.reply(txt)
     }

 }
 handler.help = ['idioma <es-en...>']
 handler.tags = ['main']
 handler.command = ['idioma'] 

 export default handler