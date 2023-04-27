export function before(m) {
    let user = global.db.data.users[m.sender]
    if (user.afk > -1) {
        m.reply(`
  *⚠️ Dejaste de estar inactivo${user.afkReason ? ' Después de estar inactivo por el motivo: ' + user.afkReason : ''}*
  
  *Tiempo de inactividad: ${(new Date - user.afk).toTimeString()}*
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
        m.reply(`*⚠️ No lo etiquetes ⚠️*

*⚠️ El usuario que etiquetaste está inactivo*      
*—◉ ${reason ? 'motivo de inactividad: ' + reason : 'motivo de inactividad: _sin motivo_'}*
*⚠️ Tiempo transcurrido de inactividad: ${(new Date - afkTime).toTimeString()}*
  `.trim())
    }
    return true
}
