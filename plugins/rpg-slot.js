let cooldowns = {}

let handler = async (m, { conn, args, usedPrefix, command }) => {

if (!args[0]) return m.reply('🚩 Ingresa la cantidad de *🌟 Estrellas* que deseas apostar.\n\n`Ejemplo:`\n' + `> *${usedPrefix + command}* 10`)
if (isNaN(args[0])) return m.reply('🚩 Ingresa la cantidad de *🌟 Estrellas* que deseas apostar.\n\n`Ejemplo:`\n' + `> *${usedPrefix + command}* 10`)
let apuesta = parseInt(args[0])
let users = global.db.data.users[m.sender]
let tiempoEspera = 15
if (cooldowns[m.sender] && Date.now() - cooldowns[m.sender] < tiempoEspera * 1000) {
let tiempoRestante = segundosAHMS(Math.ceil((cooldowns[m.sender] + tiempoEspera * 1000 - Date.now()) / 1000))
m.reply(`⏱ Espera *${tiempoRestante}* para apostar nuevamente.`)
return
}
let emojis = ["🍎", "🍉", "🍓"];
let a = Math.floor(Math.random() * emojis.length);
let b = Math.floor(Math.random() * emojis.length);
let c = Math.floor(Math.random() * emojis.length);
let x = [],
y = [],
z = [];
for (let i = 0; i < 3; i++) {
x[i] = emojis[a];
a++;
if (a == emojis.length) a = 0;
}
for (let i = 0; i < 3; i++) {
y[i] = emojis[b];
b++;
if (b == emojis.length) b = 0;
}
for (let i = 0; i < 3; i++) {
z[i] = emojis[c];
c++;
if (c == emojis.length) c = 0;
}
let end;
if (a == b && b == c) {
end = `Acabas de ganar *${apuesta} 🌟 Estrellas*`
users.estrellas += apuesta
} else if (a == b || a == c || b == c) {
end = `Casi lo logras sigue intentando :) \nTen *1 🌟 Estrellas.*`
users.estrellas += 1
} else {
end = `Perdiste  *${apuesta} 🌟 Estrellas*`
users.estrellas -= apuesta
}
cooldowns[m.sender] = Date.now()
return await conn.reply(m.chat, `🎰 *S L O T S*\n──────────\n${x[0]} : ${y[0]} : ${z[0]}\n${x[1]} : ${y[1]} : ${z[1]}\n${x[2]} : ${y[2]} : ${z[2]}\n──────────\n\n${end}`, m, rcanal) 
}
handler.help = ['slot <apuesta>']
handler.tags = ['rpg']
handler.command = ['slot']
handler.register = true
handler.group = false 
export default handler

function segundosAHMS(segundos) {
let segundosRestantes = segundos % 60
return `${segundosRestantes} segundos`
}