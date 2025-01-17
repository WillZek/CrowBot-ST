/* Código Hecho Por WillZek
- https://github.com/WillZek
- https://whatsapp.com/channel/0029Vb1AFK6HbFV9kaB3b13W
*/

const handler = async (m, {command, text, usedPrefix}) => {

    if (!text) return conn.reply(m.chat, '🍭 Por favor, ingresa el texto que quieres transformar.', m, rcanal);

    let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text;

    if (command == 'letra1' || command == 'font1') {
        m.reply(teks.replace(/[a-z]/gi, v => {
            return {
                'a': 'ᥲ',
                'b': 'ᑲ',
                'c': 'ᥴ',
                'd': 'ძ',
                'e': 'ᥱ',
                'f': '𝖿',
                'g': 'g',
                'h': 'һ',
                'i': 'і',
                'j': 'ȷ',
                'k': 'k',
                'l': 'ᥣ',
                'm': 'm',
                'n': 'ᥒ',
                'o': '᥆',
                'p': '⍴',
                'q': '𝗊',
                'r': 'r',
                's': 's',
                't': '𝗍',
                'u': 'ᥙ',
                'v': '᥎',
                'w': 'ᥕ',
                'x': '᥊',
                'y': 'ᥡ',
                'z': 'z'
            }[v.toLowerCase()] || v;
        }));
    } else if (command == 'letra2' || command == 'font2') {
        m.reply(teks.replace(/[a-z]/gi, v => {
            return {
                'a': '𝐚',
                'b': '𝐛',
                'c': '𝐜',
                'd': '𝐝',
                'e': '𝐞',
                'f': '𝐟',
                'g': '𝐠',
                'h': '𝐡',
                'i': '𝐢',
                'j': '𝐣',
                'k': '𝐤',
                'l': '𝐥',
                'm': '𝐦',
                'n': '𝐧',
                'o': '𝐨',
                'p': '𝐩',
                'q': '𝐪',
                'r': '𝐫',
                's': '𝐬',
                't': '𝐭',
                'u': '𝐮',
                'v': '𝐯',
                'w': '𝐰',
                'x': '𝐱',
                'y': '𝐲',
                'z': '𝐳'
            }[v.toLowerCase()] || v;
        }));
    } else if (command == 'letra3' || command == 'font3') {
        m.reply(teks.replace(/[a-z]/gi, v => {
            return {
                'a': '𝓪',
                'b': '𝓫',
                'c': '𝓬',
                'd': '𝓭',
                'e': '𝓮',
                'f': '𝓯',
                'g': '𝓰',
                'h': '𝓱',
                'i': '𝓲',
                'j': '𝓳',
                'k': '𝓴',
                'l': '𝓵',
                'm': '𝓶',
                'n': '𝓷',
                'o': '𝓸',
                'p': '𝓹',
                'q': '𝓺',
                'r': '𝓻',
                's': '𝓼',
                't': '𝓽',
                'u': '𝓾',
                'v': '𝓿',
                'w': '𝔀',
                'x': '𝔁',
                'y': '𝔂',
                'z': '𝔃'
            }[v.toLowerCase()] || v;
        }));
    } else if (command == 'letra4' || command == 'font4') {
        m.reply(teks.replace(/[a-z]/gi, v => {
            return {
                'a': '𝖆',
                'b': '𝖇',
                'c': '𝖈',
                'd': '𝖉',
                'e': '𝖊',
                'f': '𝖋',
                'g': '𝖌',
                'h': '𝖍',
                'i': '𝖎',
                'j': '𝖏',
                'k': '𝖐',
                'l': '𝖑',
                'm': '𝖒',
                'n': '𝖓',
                'o': '𝖔',
                'p': '𝖕',
                'q': '𝖖',
                'r': '𝖗',
                's': '𝖘',
                't': '𝖙',
                'u': '𝖚',
                'v': '𝖛',
                'w': '𝖜',
                'x': '𝖝',
                'y': '𝖞',
                'z': '𝖟'
            }[v.toLowerCase()] || v;
        }));
    } else if (command == 'letra5' || command == 'font5') {
        m.reply(teks.replace(/[a-z]/gi, v => {
            return {
                'a': 'ɑׁׅ',
                'b': '֮ϐׁ',
                'c': 'ᝯׁ֒',
                'd': 'ժׁׅ݊',
                'e': 'ꫀׁׅܻ݊',
                'f': 'ܻ⨍',
                'g': 'ᧁׁ',
                'h': 'hׁׅ֮',
                'i': 'ꪱׁׁׁׅׅׅ',
                'j': 'յׁׅ',
                'k': 'ƙׁׅ',
                'l': 'ᥣׁׅ֪',
                'm': 'ꩇׁׅ֪݊ ',
                'n': '݊ꪀ',
                'o': 'ᨵׁׅׅ',
                'p': '℘',
                'q': 'qׁׅ',
                'r': 'ꭈׁׅ',
                's': 'ׅ꯱',
                't': 'tׁׅ',
                'u': 'υׁׅ',
                'v': 'ׁׅ᥎ׁׅ',
                'w': 'ᨰׁׅ',
                'x': '᥊ׁׅ',
                'y': 'ᨮׁׅ֮',
                'z': 'zׁׅ֬'
            }[v.toLowerCase()] || v;
        }));
    } else if (command == 'letrarandom' || command == 'fontrandom') {
        m.reply(teks.replace(/[a-z]/gi, v => {
            return {
                'a': 'α',
                'b': 'в',
                'c': '¢',
                'd': '∂',
                'e': 'є',
                'f': 'ƒ',
                'g': 'g',
                'h': 'н',
                'i': 'ι',
                'j': 'ι',
                'k': 'к',
                'l': 'ℓ',
                'm': 'м',
                'n': 'η',
                'o': 'σ',
                'p': 'ρ',
                'q': 'q',
                'r': 'я',
                's': 'ׅѕ',
                't': '꓄',
                'u': 'ꀎ',
                'v': 'ׁׅ꒦',
                'w': 'ꅏ',
                'x': 'ꉼ',
                'y': 'ꐞ',
                'z': 'ꑓ'
            }[v.toLowerCase()] || v;
        }));
    } else if (command == 'letra6' || command == 'font6') {
        m.reply(teks.replace(/[a-z]/gi, v => {
            return {
                'a': '𝕒',
                'b': '𝕓',
                'c': '𝕔',
                'd': '𝕕',
                'e': '𝕖',
                'f': '𝕗',
                'g': '𝕘',
                'h': '𝕙',
                'i': '𝕚',
                'j': '𝕛',
                'k': '𝕜',
                'l': '𝕝',
                'm': '𝕞',
                'n': '𝕟',
                'o': '𝕠',
                'p': '𝕡',
                'q': '𝕢',
                'r': '𝕣',
                's': 'ׅ𝕤',
                't': '𝕥',
                'u': '𝕦',
                'v': 'ׁׅ𝕧',
                'w': '𝕨',
                'x': '𝕩',
                'y': '𝕪',
                'z': '𝕫'
            }[v.toLowerCase()] || v;
        }));
    } else if (command == 'letra7' || command == 'font7') {
        m.reply(teks.replace(/[a-z]/gi, v => {
            return {
                'a': '🇦',
                'b': '🇧',
                'c': '🇨',
                'd': '🇩',
                'e': '🇪',
                'f': '🇫',
                'g': '🇬',
                'h': '🇭',
                'i': '🇮',
                'j': '🇯',
                'k': '🇰',
                'l': '🇱',
                'm': '🇲',
                'n': '🇳',
                'o': '🇴',
                'p': '🇵',
                'q': '🇶',
                'r': '🇷',
                's': 'ׅ🇸',
                't': '🇹',
                'u': '🇺',
                'v': 'ׁׅ🇻',
                'w': '🇼',
                'x': '🇽',
                'y': '🇾',
                'z': '🇿'
            }[v.toLowerCase()] || v;
        }));
    } else if (command == 'letra8' || command == 'font8') {
        m.reply(teks.replace(/[a-z]/gi, v => {
            return {
                'a': '🄰',
                'b': '🄱',
                'c': '🄲',
                'd': '🄳',
                'e': '🄴',
                'f': '🄵',
                'g': '🄶',
                'h': '🄷',
                'i': '🄸',
                'j': '🄹',
                'k': '🄺',
                'l': '🄻',
                'm': '🄼',
                'n': '🄽',
                'o': '🄾',
                'p': '🄿',
                'q': '🅀',
                'r': '🅁',
                's': 'ׅ🅂',
                't': '🅃',
                'u': '🅄',
                'v': 'ׁׅ🅅',
                'w': '🅆',
                'x': '🅇',
                'y': '🅈',
                'z': '🅉'
            }[v.toLowerCase()] || v;
        }));
    } else if (command == 'letra9' || command == 'font9') {
        m.reply(teks.replace(/[a-z]/gi, v => {
            return {
                'a': '🅐',
                'b': '🅑',
                'c': '🅒',
                'd': '🅓',
                'e': '🅔',
                'f': '🅕',
                'g': '🅖',
                'h': '🅗',
                'i': '🅘',
                'j': '🅙',
                'k': '🅚',
                'l': '🅛',
                'm': '🅜',
                'n': '🅝',
                'o': '🅞',
                'p': '🅟',
                'q': '🅠',
                'r': '🅡',
                's': 'ׅ🅢',
                't': '🅣',
                'u': '🅤',
                'v': 'ׁׅ🅥',
                'w': '🅦',
                'x': '🅧',
                'y': '🅨',
                'z': '🅩'
            }[v.toLowerCase()] || v;
        }));
    } else if (command == 'letra10' || command == 'font10') {
        m.reply(teks.replace(/[a-z]/gi, v => {
            return {
                'a': 'ᴀ',
                'b': 'ʙ',
                'c': 'ᴄ',
                'd': 'ᴅ',
                'e': 'ᴇ',
                'f': 'ғ',
                'g': 'ɢ',
                'h': 'ʜ',
                'i': 'ɪ',
                'j': 'ᴊ',
                'k': 'ᴋ',
                'l': 'ʟ',
                'm': 'ᴍ',
                'n': 'ɴ',
                'o': 'ᴏ',
                'p': 'ᴘ',
                'q': 'ǫ',
                'r': 'ʀ',
                's': 'ׅs',
                't': 'ᴛ',
                'u': 'ᴜ',
                'v': 'ׁׅᴠ',
                'w': 'ᴡ',
                'x': 'x',
                'y': 'ʏ',
                'z': 'ᴢ'
            }[v.toLowerCase()] || v;
        }));
    }
};

handler.help = ['font1', 'font2', 'font3', 'font4', 'font5', 'fontrandom', 'font6', 'font7', 'font8', 'font9', 'font10'];
handler.tags = ['teclado'];
handler.command = ['letra1', 'font1', 'letra2', 'font2', 'letra3', 'font3', 'font4', 'letra4', 'letra5', 'font5', 'letrarandom', 'fontrandom', 'letra6', 'font6', 'letra7', 'font7', 'letra8', 'font8', 'letra9', 'font9', 'letra10', 'font10'];
handler.register = true;

export default handler;