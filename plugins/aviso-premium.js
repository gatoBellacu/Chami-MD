let handler = m => m

export async function all(m) {
    for (const user of Object.values(global.db.data.users)) {
        if (user.premiumTime != 0 && user.premium) {
            if (new Date() * 1 >= user.premiumTime) {
                user.premiumTime = 0
                user.premium = false
                let JID = Object.keys(global.db.data.users).find(key => global.db.data.users[key] === user)
                let usuarioJid = JID.split`@`[0]
                let textoo = `*⚠️ @${usuarioJid} Tu tiempo como usuario premium de a terminado, ya no eres premium*`
                await this.sendMessage(JID, { text: textoo, mentions: [JID] }, { quoted: ''})
            }
        }
    }
}

/*let handler = m => m

export async function all(m) {
  let user = global.db.data.users[m.sender]
  if (m.chat.endsWith('broadcast')) return

  if (user.premiumTime != 0 && user.premium && new Date() * 1 >= user.premiumTime) {
    user.premiumTime = 0
    user.premium = false

    await m.reply(`*⚠️ @${m.sender.split`@`[0]} Tu tiempo como usuario premium de a terminado, ya no eres premium*`, m.sender, { mentions: [m.sender] })
  }
}*/
