let handler = async (m, { conn, groupMetadata }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.quoted.sender
let mention = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
    if (!mention) throw `[❗] 𝐌𝐄𝐍𝐂𝐈𝐎𝐍𝐀 𝐀 𝐔𝐍 𝐔𝐒𝐔𝐀𝐑𝐈𝐎 𝐏𝐀𝐑𝐀 𝐃𝐀𝐑𝐋𝐄 𝐔𝐍𝐀 𝐀𝐃𝐕𝐄𝐑𝐓𝐄𝐍𝐂𝐈𝐀`
    let warn = global.db.data.users[mention].warn
    if (warn < 2) {
        global.db.data.users[mention].warn += 1
        m.reply(`⚠️ *_𝐒𝐄 𝐋𝐄 𝐃𝐈𝐎 𝐔𝐍𝐀 𝐀𝐃𝐕𝐄𝐑𝐓𝐄𝐍𝐂𝐈𝐀 +1_*
*_𝐀𝐋 𝐀𝐂𝐔𝐌𝐔𝐋𝐀𝐑 3 𝐒𝐄𝐑𝐀 𝐄𝐗𝐏𝐔𝐋𝐒𝐀𝐃𝐎 𝐃𝐄𝐋 𝐆𝐑𝐔𝐏𝐎_*⚠️`)
        m.reply('*Recibiste una advertencia del administrador del grupo, tu advertencia total ahora es* ' + (warn + 1) + ', *si recibes una advertencia 3 veces, serás eliminado del grupo*', mention)
    } else if (warn == 2) {
        global.db.data.users[mention].warn = 0
        m.reply('*[❗] 𝐒𝐄𝐑𝐀𝐒 𝐄𝐋𝐈𝐌𝐈𝐍𝐀𝐃𝐎 𝐏𝐎𝐑 𝐀𝐂𝐔𝐌𝐔𝐋𝐀𝐑 3 𝐀𝐃𝐕𝐄𝐑𝐓𝐄𝐍𝐂𝐈𝐀𝐒*')
        await time(5000)
        await conn.groupParticipantsUpdate(m.chat, [who], 'remove')
        m.reply(`*Fuiste eliminado del grupo* ${groupMetadata.subject} *porque has recibido 3 advertencias*`, mention)
}}
handler.help = ['warn [@user]']
handler.tags = ['group']
handler.command = /^warn$/i

handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler

const time = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms))
}
