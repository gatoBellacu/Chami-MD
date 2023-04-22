import { canLevelUp, xpRange } from '../lib/levelling.js'
import { levelup } from '../lib/canvas.js'
export function before(m, { conn }) {
//if (!db.data.chats[m.chat].autonivel && m.isGroup) throw 
	
let user = global.db.data.users[m.sender]
 if (!user.autolevelup) //throw `𝙀𝙇 𝘼𝙐𝙏𝙊𝙉𝙄𝙑𝙀𝙇 𝙀𝙎𝙏𝘼 𝘿𝙀𝙎𝘼𝘾𝙏𝙄𝙑𝘼𝘿𝙊 𝙐𝙎𝙀 *#on autolevelup* 𝙋𝘼𝙍𝘼 𝘼𝘾𝙏𝙄𝙑𝘼𝙍`
  return !0
let teks = `✨ Bien hecho ! ${conn.getName(m.sender)}`
let before = user.level * 1
while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
 if (before !== user.level) {
	  
m.reply(`
*╭━━━[ 𝗦𝗨𝗕𝗜𝗦𝗧𝗘 𝗗𝗘 𝗡𝗜𝗩𝗘𝗟 ]━━━━⬣*
*┃ ${teks}*
*┃                       [${before}] → [${user.level}]*
*┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈*
*┃ FECHA: ${new Date().toLocaleString('id-ID')}*
*╰━━━〔 𓃠 ${wm} 〕━━━━━⬣*

*_Cuanto más interactúes con UpaBot-MD, mayor será tu nivel!!_*
`.trim())
    }
}		
//export const disabled = false 
