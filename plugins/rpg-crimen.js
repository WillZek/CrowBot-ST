let cooldowns = {}

let handler = async (m, { conn, text, command, usedPrefix }) => {
    let users = global.db.data.users
    let senderId = m.sender
    let senderName = conn.getName(senderId)

    let tiempo = 5 * 60
    if (cooldowns[m.sender] && Date.now() - cooldowns[m.sender] < tiempo * 1000) {
        let tiempo2 = segundosAHMS(Math.ceil((cooldowns[m.sender] + tiempo * 1000 - Date.now()) / 1000))
        m.reply(`《✧》Debes esperar *${tiempo2}* para usar *#crime* de nuevo.`)
        return
    }
    cooldowns[m.sender] = Date.now()
    let senderEstrellas = users[senderId].estrellas || 0
    let randomUserId = Object.keys(users)[Math.floor(Math.random() * Object.keys(users).length)]
    while (randomUserId === senderId) {
        randomUserId = Object.keys(users)[Math.floor(Math.random() * Object.keys(users).length)]
    }
    let randomUserEstrellas = users[randomUserId].estrellas || 0
    let minAmount = 15
    let maxAmount = 50
    let amountTaken = Math.floor(Math.random() * (maxAmount - minAmount + 1)) + minAmount
    let randomOption = Math.floor(Math.random() * 7)

    let amountSubtracted;

    switch (randomOption) {
        case 0:
            users[senderId].estrellas += amountTaken
            users[randomUserId].estrellas -= amountTaken
            conn.sendMessage(m.chat, {
                text: `✿ Entraste a una mansión y vendiste todos los focos que tenían, ganando *🌟${amountTaken} Estrellas*.`,
                contextInfo: {
                    mentionedJid: [randomUserId],
                }
            }, { quoted: m })
            break
        case 1:
            amountSubtracted = Math.min(Math.floor(Math.random() * (senderEstrellas - minAmount + 1)) + minAmount, maxAmount)
            users[senderId].estrellas -= amountSubtracted
            conn.reply(m.chat, `✿ Estas pendejo, fallaste y perdiste *-🌟${amountSubtracted} Estrellas*, pinche pendejo.`, m, rcanal)
            break
        case 2:
            let smallAmountTaken = Math.min(Math.floor(Math.random() * (randomUserEstrellas / 2 - minAmount + 1)) + minAmount, maxAmount)
            users[senderId].estrellas += smallAmountTaken
            users[randomUserId].estrellas -= smallAmountTaken
            conn.sendMessage(m.chat, {
                text: `✿ Lograste Cometer Tu Crimen Con Éxito, Pero te descubrieron y solo lograste tomar *🌟${smallAmountTaken} Estrellas*`,
                contextInfo: {
                    mentionedJid: [randomUserId],
                }
            }, { quoted: m })
            break
        case 3:
            users[senderId].yenes += amountTaken
            users[randomUserId].yenes -= amountTaken
            conn.sendMessage(m.chat, {
                text: `✿ Vendiste la contraseña del wifi de tu ex por *🌟${amountTaken} Estrellas*.`,
                contextInfo: {
                    mentionedJid: [randomUserId],
                }
            }, { quoted: m })
            break
        case 4:
            users[senderId].estrellas += amountTaken
            users[randomUserId].estrellas -= amountTaken
            conn.sendMessage(m.chat, {
                text: `✿ Con que haciendo maldades? Toma *🌟${amountTaken} Estrellas* y no se lo digas a nadie.`,
                contextInfo: {
                    mentionedJid: [randomUserId],
                }
            }, { quoted: m })
            break
        case 5:
            amountSubtracted = Math.min(Math.floor(Math.random() * (senderEstrellas - minAmount + 1)) + minAmount, maxAmount)
            users[senderId].estrellas -= amountSubtracted
            conn.reply(m.chat, `✿ Intentaste saquear una tienda y los chinos te corrieron 10 cuadras, perdiste *-🌟${amountSubtracted} Estrellas* en el camino.`, m, rcanal)
            break
        case 6:
            amountSubtracted = Math.min(Math.floor(Math.random() * (senderEstrellas - minAmount + 1)) + minAmount, maxAmount)
            users[senderId].estrellas -= amountSubtracted
            conn.reply(m.chat, `✿ Intentaste robarle a los admins pero hicieron que un vagabundo te violara, perdiendo *-🌟${amountSubtracted} Estrellas*.`, m, rcanal)
            break
    }
    global.db.write()
}

handler.tags = ['rpg']
handler.help = ['crimen']
handler.command = ['crimen', 'crime']
handler.register = true
handler.group = true

export default handler

function segundosAHMS(segundos) {
    let horas = Math.floor(segundos / 3600)
    let minutos = Math.floor((segundos % 3600) / 60)
    let segundosRestantes = segundos % 60
    return `${minutos} minutos y ${segundosRestantes} segundos`
}