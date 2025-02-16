/** By @MoonContentCreator || https://github.com/MoonContentCreator/BixbyBot-Md **/
import _0x19a3e4 from 'node-fetch';
const handler = async (_0x5b04ea, {
  conn: _0x24d45b,
  command: _0x38ad25,
  text: _0x29b0ac,
  isAdmin: _0x9e35ac
}) => {
  if (_0x38ad25 === "mute") {
    if (!_0x9e35ac) {
      throw "💌 *Solo un administrador puede ejecutar este comando";
    }
    const _0x45f556 = global.owner[0x0][0x0] + "@s.whatsapp.net";
    if (_0x5b04ea.mentionedJid[0x0] === _0x45f556) {
      throw "🚩 *El creador del bot no puede ser mutado*";
    }
    let _0x329969 = _0x5b04ea.mentionedJid[0x0] ? _0x5b04ea.mentionedJid[0x0] : _0x5b04ea.quoted ? _0x5b04ea.quoted.sender : _0x29b0ac;
    if (_0x329969 === _0x24d45b.user.jid) {
      throw "🚩 *No puedes mutar el bot*";
    }
    const _0xeea06e = await _0x24d45b.groupMetadata(_0x5b04ea.chat);
    const _0x69b64a = _0xeea06e.owner || _0x5b04ea.chat.split`-`[0x0] + "@s.whatsapp.net";
    if (_0x5b04ea.mentionedJid[0x0] === _0x69b64a) {
      throw "🚩 *No puedes mutar el creador del grupo*";
    }
    let _0xc6ae1d = global.db.data.users[_0x329969];
    let _0x3d4fa1 = {
      'key': {
        'participants': "0@s.whatsapp.net",
        'fromMe': false,
        'id': "Halo"
      },
      'message': {
        'locationMessage': {
          'name': "𝗨𝘀𝘂𝗮𝗿𝗶𝗼 𝗺𝘂𝘁𝗮𝗱𝗼",
          'jpegThumbnail': await (await _0x19a3e4('https://telegra.ph/file/f8324d9798fa2ed2317bc.png')).buffer(),
          'vcard': "BEGIN:VCARD\nVERSION:3.0\nN:;Unlimited;;;\nFN:Unlimited\nORG:Unlimited\nTITLE:\nitem1.TEL;waid=19709001746:+1 (970) 900-1746\nitem1.X-ABLabel:Unlimited\nX-WA-BIZ-DESCRIPTION:ofc\nX-WA-BIZ-NAME:Unlimited\nEND:VCARD"
        }
      },
      'participant': "0@s.whatsapp.net"
    };
    if (!_0x5b04ea.mentionedJid[0x0] && !_0x5b04ea.quoted) {
      return _0x24d45b.reply(_0x5b04ea.chat, "🚩 *Menciona a la persona que deseas mutar*", _0x5b04ea);
    }
    if (_0xc6ae1d.muto === true) {
      throw "🚩 *Este usuario ya ha sido mutado*";
    }
    _0x24d45b.reply(_0x5b04ea.chat, "*Tus mensajes serán eliminados*", _0x3d4fa1, null, {
      'mentions': [_0x329969]
    });
    global.db.data.users[_0x329969].muto = true;
  } else {
    if (_0x38ad25 === "unmute") {
      if (!_0x9e35ac) {
        throw _0x5b04ea.reply("🚩 *Solo un administrador puede ejecutar este comando");
      }
      let _0x12128f = _0x5b04ea.mentionedJid[0x0] ? _0x5b04ea.mentionedJid[0x0] : _0x5b04ea.quoted ? _0x5b04ea.quoted.sender : _0x29b0ac;
      let _0x498844 = global.db.data.users[_0x12128f];
      let _0x2d1dfb = {
        'key': {
          'participants': "0@s.whatsapp.net",
          'fromMe': false,
          'id': "Halo"
        },
        'message': {
          'locationMessage': {
            'name': "𝗨𝘀𝘂𝗮𝗿𝗶𝗼 𝗱𝗲𝗺𝘂𝘁𝗮𝗱𝗼",
            'jpegThumbnail': await (await _0x19a3e4('https://telegra.ph/file/aea704d0b242b8c41bf15.png')).buffer(),
            'vcard': "BEGIN:VCARD\nVERSION:3.0\nN:;Unlimited;;;\nFN:Unlimited\nORG:Unlimited\nTITLE:\nitem1.TEL;waid=19709001746:+1 (970) 900-1746\nitem1.X-ABLabel:Unlimited\nX-WA-BIZ-DESCRIPTION:ofc\nX-WA-BIZ-NAME:Unlimited\nEND:VCARD"
          }
        },
        'participant': "0@s.whatsapp.net"
      };
      if (_0x12128f === _0x5b04ea.sender) {
        throw "🚩 *Sólo otro administrador puede desmutarte*";
      }
      if (!_0x5b04ea.mentionedJid[0x0] && !_0x5b04ea.quoted) {
        return _0x24d45b.reply(_0x5b04ea.chat, "🚩 *Menciona a la persona que deseas demutar*", _0x5b04ea);
      }
      if (_0x498844.muto === false) {
        throw "🚩 *Este usuario no ha sido mutado*";
      }
      global.db.data.users[_0x12128f].muto = false;
      _0x24d45b.reply(_0x5b04ea.chat, "*Tus mensajes no serán eliminados*", _0x2d1dfb, null, {
        'mentions': [_0x12128f]
      });
    }
  }
};
handler.help = ['mute *<@user>*']
handler.tags = ['group']
handler.command = ['mute', 'unmute'];
handler.group = true;
handler.admin = true;
handler.botAdmin = true;
export default handler;