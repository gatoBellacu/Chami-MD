let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let teks = `
┌─「 Donasi • Pulsa 」
│ • *Apoyar:* No tengo paypal
❏────
`

let you = flaaa.getRandom()

const buttons = [
  {buttonId: '.? all', buttonText: {displayText: 'menu'}, type: 1},
  {buttonId: '.ping', buttonText: {displayText: 'velocidad'}, type: 1},
  {buttonId: '.creator', buttonText: {displayText: 'creador'}, type: 1}
]

const templateMessage = {
    image: {url: you + 'Donasi'},
    caption: teks, 
    footer: wm,
    buttons: buttons,
    headerType: 4
}
await conn.sendMessage(m.chat, templateMessage, m)}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^donar(donasi|apoyo)$/i

export default handler






/*let handler = async(m, { conn, usedPrefix, command }) => {

    let don = `
si quieres ayudar puede donar un Número para bot y tenga las siguientes recompensas`
let img = 'https://i.ibb.co/37FP2bk/donate.jpg'
conn.sendButton(m.chat, don, 'Haga click en boton si quiere comprar o alquilar al bot', img, [['Buy Premium', `${usedPrefix}buyprem`]],m, rpyp)
}

handler.help = ['donate']
handler.tags = ['main']
handler.command = ['apoyar', 'donate', 'donar'] 

export default handler*/
