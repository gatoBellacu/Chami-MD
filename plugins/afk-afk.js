let handler = async (m, { text }) => {
let user = global.db.data.users[m.sender]
user.afk = + new Date
user.afkReason = text
m.reply(`*「 🚀 CURIOSITY AFK 🚀 」*\n\n*⚠️ El usuario ${conn.getName(m.sender)} estará inactivo, por favor no lo vayan a etiquetar*\n\n*📍 Motivo de inactividad: ${text ? ': ' + text: ''}*
`)}
handler.help = ['afk [alasan]']
handler.tags = ['main']
handler.command = /^afk$/i
export default handler
