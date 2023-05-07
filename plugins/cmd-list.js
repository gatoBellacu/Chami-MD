//import db from '../lib/database.js'

let handler = async (m, { conn }) => {
    conn.reply(m.chat, `
*🍧 LISTA DE  COMANDOS 🍧*

${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `(bloqueado) ${key}` : key} : ${value.text}`).join('\n\n')}

*🔔 INFO 🔔:* Si esta en *negrita*  esta bloqueado

`.trim(), null, {
        mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a, b) => [...a, ...b], [])
    })
}


handler.help = ['listcmd']
handler.tags = ['cmd']
handler.command = ['listcmd']

export default handler
