    export function before(m) {
    let user = global.db.data.users[m.sender]
    if (user.afk > -1) {
        m.reply(`
*⚠️ Dejaste de estar afk*

🔰 *Estuviste inactivo por:* ${(new Date - user.afk).toTimeString()}
`.trim())
        user.afk = -1
        user.afkReason = ''
    }
    let jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
    for (let jid of jids) {
        let user = global.db.data.users[jid]
        if (!user)
            continue
        let afkTime = user.afk
        if (!afkTime || afkTime < 0)
            continue
        let reason = user.afkReason || ''
        m.reply(`
*⚠️ No lo etiquetes ⚠️*
*Este usuario que mencionaste está afk*

${reason ? '🔰 *Razon* : ' + reason : '🔰 *Razon* : sin razón xd'}
📍 *Inactivo durante:* ${(new Date - afkTime).toTimeString()}
  `.trim())
    }
    return true
}
