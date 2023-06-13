let handler = async (m, { conn, text, command, usedPrefix }) => {
if (!text) throw `*⚠️ ETIQUETA A ALGUIEN PARA DESBANEAR*\n💡 EJEMPLO\n*${usedPrefix + command} @tag*`
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw `*⚠️ ETIQUETA A ALGUIEN PARA DESBANEAR*\n💡 EJEMPLO\n*${usedPrefix + command} @tag*`
let users = global.db.data.users
users[who].banned = false
conn.reply(m.chat, ` *✅ EL/LA USUARIO(A) FUE DESBANEADO*\n🎊 Ya puede usar a ${cb}`, m)
}
handler.help = ['unbanuser']
handler.tags = ['owner']
handler.command = /^unbanuser$/i
handler.group = true
handler.admin = true 
export default handler
