// Código Hecho Por Niño Piña wa.me/50557865603
let cooldowns = {}
let handler = async (m, { conn, isPrems }) => {
let user = global.db.data.users[m.sender]
let tiempo = 5 * 60
if (cooldowns[m.sender] && Date.now() - cooldowns[m.sender] < tiempo * 1000) {
const tiempo2 = segundosAHMS(Math.ceil((cooldowns[m.sender] + tiempo * 1000 - Date.now()) / 1000))
conn.reply(m.chat, `*⏰ Espera 🌠* *${tiempo2}* *Para Seguir Prostituyendote.*`, m, rcanal)
return
}
let rsl = Math.floor(Math.random() * 5000)
cooldowns[m.sender] = Date.now()
await conn.reply(m.chat, `🌠 ${pickRandom(trabajo)} *${toNum(rsl)}* ( *${rsl}* ) XP 🔮.`, m, rcanal)
user.exp += rsl
}
handler.help = ['prostituirse']
handler.tags = ['rpg']
handler.command = ['prostituirse', 'prostituta', 'prostituir', 'sentones']
handler.register = true
export default handler
function toNum(number) {
if (number >= 1000 && number < 1000000) {
return (number / 1000).toFixed(1) + 'k'
} else if (number >= 1000000) {
return (number / 1000000).toFixed(1) + 'M'
} else {
return number.toString()
}
}
function segundosAHMS(segundos) {
let minutos = Math.floor((segundos % 3600) / 60)
let segundosRestantes = segundos % 60
return `${minutos} minutos y ${segundosRestantes} segundos`
}
function pickRandom(list) {
return list[Math.floor(list.length * Math.random())];
}
// Lista de trabajos
const trabajo = [
"Tuviste Sexo Con Tu Tu Vecino y ganastes",
"Cabalgaste Cómo Nunca Arriba De Un Artista y obtienes",
"Te dedicas a ser un/a seductor/a, Te Prostituyes y ganas",
"Eres un experto en prostitucion y recibes",
"Trabajas en la industria del romance y te Prostituyes con los trabajadores y ganas",
"Eres un/a conquistador/a y obtienes",
"Te dedicas a hacer felices a los demás y ganas",
"Eres un/a experto/a moviendo esas nalgas y recibes",
"Le Distes Unos Sentones a mi creador y ganas",
"Te Acostastes Con Tu JeFe Y Obtuvistes",
]