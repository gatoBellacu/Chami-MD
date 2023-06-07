let handler = async (m, { conn, args, usedPrefix, command }) => {
    let isClose = { 
        'open': 'not_announcement',
        'close': 'announcement',
    }[(args[0] || '')]
    if (isClose === undefined)
        throw `
*¡⚠️ FORMATO ERRÓNEO ⚠️!*\n\nEJEMPLO:
  *○ 🔒 ${usedPrefix + command} close*
  *○ 🔓 ${usedPrefix + command} open*
`.trim()
    await conn.groupSettingUpdate(m.chat, isClose)
}
handler.help = ['group *open / close*']
handler.tags = ['group']
handler.command = /^(grupo)$/i

handler.admin = true
handler.botAdmin = true
handler.group = true

export default handler

