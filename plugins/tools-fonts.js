/* Código Hecho Por WillZek
- https://github.com/WillZek
*/

const handler = async (m, {command, text, usedPrefix}) => {

    if (!text) return conn.reply(m.chat, '🍬 Por favor, ingresa el texto que quieres transformar.', m, rcanal);

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
}
    else if (command == 'letra4' || command == 'font4') {
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
}

handler.help = ['letra *<texto>*'];
handler.tags = ['fun'];
handler.command = ['letra1', 'font1', 'letra2', 'font2', 'letra3', 'font3', 'font4', 'letra4'];
handler.register = true;

export default handler;