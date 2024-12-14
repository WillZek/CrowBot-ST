// Hecho Por I'm Fz~ y Mejorado Por WillZek

let handler = async (m, { conn, usedPrefix, command }) => {
   let user = db.data.users[m.sender]
   async function explorarMazmorra(usuario) {
      const estrellasEncontradas = randomNumber(10, 20); // Genera una cantidad aleatoria de monedas
      const probabilidadMonstruo = randomNumber(1, 16); // Probabilidad de encontrar un monstruo

      if (probabilidadMonstruo <= 15) { // Probabilidad de 30% de encontrar un monstruo
         const fuerzaUsuario = randomNumber(51, 100); // Fuerza del usuario
         const fuerzaMonstruo = randomNumber(50, 90); // Fuerza del monstruo

         if (fuerzaUsuario > fuerzaMonstruo) {
            const bonoExtra = randomNumber(20, 30);
            global.db.data.users[m.sender].estrellas += bonoExtra + estrellasEncontradas;
            conn.reply(m.chat, `*[ 🏆  ¡Encontraste un monstruo! Lo derrotaste y encontraste ${estrellasEncontradas} Estrellas 💫 más ➔ ${bonoExtra} como bono extra. ]*\n\n> ${textbot}`, m, rcanal);
         } else {
            global.db.data.users[m.sender].estrellas -= estrellasEncontradas;
            conn.reply(m.chat, `*[ ⚠️  ¡Encontraste un monstruo! El monstruo te derrotó y perdiste ➔ ${estrellasEncontradas} Estrellas 💫. ]*\n\n> ${textbot}`, m, rcanal);
         }
      } else {
         global.db.data.users[m.sender].estrellas += estrellasEncontradas; 
         conn.reply(m.chat, `*[ 🎆 ¡Exploraste la mazmorra y encontraste ${estrellasEncontradas} Estrellas 💫]*\n\n> ${textbot}`, m, rcanal);
      }
   }
   await explorarMazmorra(m.sender, m.chat, m, rcanal);
}
handler.help = ['mazmorra']
handler.tags = ['rpg']
handler.command = ['explorar', 'mazmorra']

export default handler
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}