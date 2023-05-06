//import db from '../lib/database.js'

let handler = async (m, { text, conn }) => {
    let user = global.db.data.users[m.sender]
    user.afk = + new Date
    user.afkReason = text
    m.reply(`
   *「 🚀 CURIOSITY AFK 」* 
▢ *Usuario:* ${conn.getName(m.sender)} 
▢ *Razon:* ${text ? text : ''}
  `)
conn.fakeReply(m.chat, *⚠️ Si mandas un mensaje dejaras de estar afk automáticamente*, '0@s.whatsapp.net', '*🍧 CuriosityBot-MD 🍧*', 'status@broadcast')
}
handler.help = ['afk <razon>']
handler.tags = ['fun']
handler.command = ['afk']
handler.group = true

export default handler
