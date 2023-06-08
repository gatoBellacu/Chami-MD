let handler = async (m, { conn, text, command, usedPrefix }) => {
if (!text) throw `*⚠️ ETIQUETE A ALGUIEN PARA BANEAR*\n\n💡 EJEMPLO\n*${usedPrefix + command} @tag*`
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw `*⚠️ ETIQUETA A ALGUIEN PARA BANEAR*\n\n💡 EJEMPLO\n*${usedPrefix + command} @tag*`
let users = global.db.data.users
users[who].banned = true
conn.reply(m.chat, `*⚠️ EL USUARIO FUE BANEADO*\n😱 NO PODRA USAR ${cb}`, m)
}
handler.help = ['banuser']
handler.tags = ['owner']
handler.command = /^banuser$/i
handler.group = true
handler.admin = true 
export default handler
