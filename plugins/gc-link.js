let handler = async (m, { conn }) => {
  try {
    conn.reply(m.chat, `*Aqui tienes el link del grupo:*\n ${await conn.getName(m.chat)}\n\nhttps://chat.whatsapp.com/` + await conn.groupInviteCode(m.chat) + `\n\nLink proporcionado por ${conn.user.name}`, m,)
  } catch {
    conn.reply(m.chat, `Hazle admin a @${conn.user.jid.split('@')[0]} para que pueda enviar link de este grupo!!`, m, { mentions: [conn.user.jid] })
  }
}
handler.help = ['linkgroup']
handler.tags = ['group']
handler.command = /^link(g(c)?ro?up)?$/i

handler.group = true
//handler.botAdmin = true

export default handler
