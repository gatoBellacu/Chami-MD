import { canLevelUp, xpRange } from '../lib/levelling.js'
import { levelup } from '../lib/canvas.js'

let handler = async (m, { conn }) => {
	let name = conn.getName(m.sender)
    let user = global.db.data.users[m.sender]
    if (!canLevelUp(user.level, user.role, user.exp, global.multiplier)) {
        let { min, xp, max } = xpRange(user.level, global.multiplier)
        throw `
 »»» 「 ✨ NIVEL ✨ 」
» *𝙽𝙾𝙼𝙱𝚁𝙴*
› ${name}
•-------------------
» *𝙽𝙸𝚅𝙴𝙻:* 
› *${user.level}*
•-------------------
» *𝚇𝙿:*
› *${user.exp - min}/${xp}*    

𝚃𝙴 𝙵𝙰𝙻𝚃𝙰  *${max - user.exp}* 𝙳𝙴 *XP* 𝙿𝙰𝚁𝙰 𝚂𝚄𝙱𝙸𝚁 𝙳𝙴 𝙽𝙸𝚅𝙴𝙻
`.trim()
    }
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
    if (before !== user.level) {
        let teks = `🎊 𝙵𝙴𝙻𝙸𝙲𝙸𝙳𝙰𝙳𝙴𝚂  ${conn.getName(m.sender)}  𝙻𝙻𝙴𝙶𝙰𝚂𝚃𝙴 𝙰 𝚄𝙽 𝙽𝚄𝙴𝚅𝙾 𝙽𝙸𝚅𝙴𝙻:`
        let str = `
 »»» 「 ✨ NIVEL ✨ 」
» *𝙽𝙸𝚅𝙴𝙻 𝙰𝙽𝚃𝙴𝚁𝙸𝙾𝚁:*
› *${before}*
•-------------------
» *𝙽𝙸𝚅𝙴𝙻 𝙰𝙲𝚃𝚄𝙰𝙻:*
› *${user.level}*
•-------------------
» *𝚁𝙰𝙽𝙶𝙾*
› *${user.role}*
•-------------------
» *𝙵𝙴𝙲𝙷𝙰:* 
› *${new Date().toLocaleString('id-ID')}*

_*𝙲𝚄𝙰𝙽𝚃𝙾 𝙼𝙰𝚂 𝙸𝙽𝚃𝙴𝚁𝙰𝙲𝚃𝚄𝙴𝙽 𝙲𝙾𝙽 𝙻𝙾𝚂 𝙱𝙾𝚃𝚂, 𝙼𝙰𝚈𝙾𝚁 𝚂𝙴𝚁𝙰 𝚃𝚄 𝙽𝙸𝚅𝙴𝙻!!!*_
`.trim()
        try {
            const img = await levelup(teks, user.level)
            conn.sendFile(m.chat, img, 'levelup.jpg', str, m)
        } catch (e) {
            m.reply(str)
        }
    }
}

handler.help = ['levelup']
handler.tags = ['econ']

handler.command = ['nivel', 'lvl', 'levelup', 'level'] 
handler.register = true

export default handler