//import db from '../lib/database.js'

let handler = async (m, { conn, text }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw '*⚠️ Taguea al usuario*'
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (!txt) throw '*⚠️ Ingrese la cantidad de Diamantes que quiere añadir*'
    if (isNaN(txt)) throw '*🔢 sólo números*'
    let dmt = parseInt(txt)
    let diamond = dmt
    
    if (diamond < 1) throw '*⚠️ Lo minimo que puedes añadir es 1*'
    let users = global.db.data.users
   users[who].diamond += dmt

    await m.reply(`*💎 DIAMANTES AÑADIDOS 💎*
    
► *Total añadido:* ${dmt}
`)
   conn.fakeReply(m.chat, `*► Recibiste*\n\n *${dmt}* Diamantes 💎`, who, m.text)
}
handler.help = ['adddi <@user>']
handler.tags = ['econ']
handler.command = ['adddi'] 
handler.rowner = true

export default handler

