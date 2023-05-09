//import db from '../lib/database.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
    let poin = 300
    let reseqv = `*⚠️ Seleccione piedra/papel/tijera*\n\n*🔰 Ejemplo : ${usedPrefix + command}* papel\n`
    if (!text) throw reseqv
    var astro = Math.random()

    if (astro < 0.34) {
        astro = 'piedra'
    } else if (astro > 0.34 && astro < 0.67) {
        astro = 'tijera'
    } else {
        astro = 'papel'
    }


    if (text == astro) {
      global.db.data.users[m.sender].exp += 100
        m.reply(`*Empate*\n\nTú : ${text}\nCuriosity : ${astro}\n\n🎁 Puntos (±)100 XP`)
    } else if (text == 'piedra') {
        if (astro == 'tijera') {
            global.db.data.users[m.sender].exp += 300
            m.reply(`*Ganaste* 🎊\n\nTú : ${text}\nCuriosity : ${astro}\n\n🎁 Puntos *+${poin} XP*`)
        } else {
          global.db.data.users[m.sender].exp -= 300
            m.reply(`*Perdiste*\n\nTú : ${text}\nCuriosity : ${astro}\n\n Puntos *-${poin} XP*`)
        }
    } else if (text == 'tijera') {
        if (astro == 'papel') {
            global.db.data.users[m.sender].exp += 300
            m.reply(`*Ganaste* 🎊\n\nTú : ${text}\nCuriosity : ${astro}\n\n🎁 Puntos *+${poin} XP*`)
        } else {
          global.db.data.users[m.sender].exp -= 300
            m.reply(`▢ *Perdiste*\n\nTú : ${text}\nCuriosity : ${astro}\n\nPuntos *-${poin} XP*`)
        }
    } else if (text == 'papel') {
        if (astro == 'piedra') {
            global.db.data.users[m.sender].exp += 300
            m.reply(`*Ganaste* 🎊\n\nTú : ${text}\nCuriosity : ${astro}\n\n🎁 Puntos *+${poin} XP*`)
        } else {
          global.db.data.users[m.sender].exp -= 300
            m.reply(`*Perdiste*\n\nTú : ${text}\nCuriosity : ${astro}\n\nPuntos *-${poin} XP*`)
        }
    } else {
        throw reseqv
    }
}
handler.help = ['ppt <piedra/papel/tijera>']
handler.tags = ['game']
handler.command = ['ppt'] 
handler.register = false

export default handler
