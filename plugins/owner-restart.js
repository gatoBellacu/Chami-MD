import { spawn } from 'child_process'
let handler = async (m, { conn, isROwner, text }) => {
    if (!process.send) throw 'Dont: node main.js\nDo: node index.js'
    if (global.conn.user.jid == conn.user.jid) {
    await m.reply('```REINICIANDO...```')
    process.send('reset')
    m.reply('Reinicio completado✅')
  } else throw '_eeeeeiiittsssss..._'
m.reply('Reinicio completado✅')
}
handler.help = ['restart']
handler.tags = ['owner']
handler.command = /^restart|reiniciar$/

handler.rowner = true

export default handler
