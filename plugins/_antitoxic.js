const isSatir = /mierda|muertos|pesao|hijo de puta|cabron|hdp|mrd|zorra|asco|idiota|tonto|gilipollas|hijo puta|bot puta |gay|pito|pollas|muerto|dorrat|pendejo|pdj|Diego/i  // tambahin sendiri

export async function before(m, { conn, args, usedPrefix, command, isAdmin, isBotAdmin }) {
    if (m.isBaileys && m.fromMe)
        return !0
    if (!m.isGroup) return !1
    let chat = global.db.data.chats[m.chat]
    let bot = global.db.data.settings[this.user.jid] || {}
    const isAntiSatir = isSatir.exec(m.text)

    if (chat.antiSatir && isAntiSatir) {
        await conn.sendButton(m.chat, `*⚠️ Insulto detectado ⚠️*`, wm, ['Desactivar Antitoxic', '#disable antitoxic'], m)
await conn.sendButton(m.chat, ⚠️` *Te acabo de quitar 5 diamantes por insultar :)*`, wm, null, [
['Perdon', `.say *❕ Si te has arrepentido o no sabias nada hablale a mi creador para que te devuelva los diamantes*\n\nwa.me/+524531106422`],
['Limites', `.limit`]
    ], m)
        if (isBotAdmin && bot.restrict) {
            // await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
    global.db.data.users[m.sender].limit -= 5
    
    
        } else if (!bot.restrict) return m.reply('Gk bisa gw kick!')
    }
    return !0
}

