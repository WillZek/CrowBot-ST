const handler = async (m, {command, text, usedPrefix}) => {

if (!text) return conn.reply(m.chat, '🍬 Por favor, ingresa el texto que quieres transformar.', m, rcanal)

if (command == 'letra1' || command == 'font1') {

let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text

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
}[v.toLowerCase()] || v }))}

if (command == 'letra2' || command == 'font2') {

let tekss = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text

m.reply(tekss.replace(/[a-z]/gi, v => {
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
}[v.toLowerCase()] || v }))}

handler.help = ['letra *<texto>*']
handler.tags = ['fun']
handler.command = ['letra1', 'font1', 'letra2', 'font2']
handler.register = true

export default handler;