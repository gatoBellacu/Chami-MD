let handler = async (m, {usedPrefix}) => {	
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender
let name = conn.getName(who) 
m.reply(`
┌──── 𝐁𝐀𝐋𝐀𝐍𝐂𝐄 ──✦
🔰 *NOMBRE:* ${name}
💎 *DIAMANTES:* ${global.db.data.users[who].limit}
└───────────────✦
*🔔 NOTA:* 
puedes comprar diamantes usando los comandos:
❏ *${usedPrefix}buy <cantidad>*
❏ *${usedPrefix}buyall*`)
}
handler.help = ['bal']
handler.tags = ['xp']
handler.command = ['bal', 'diamantes', 'diamond', 'balance'] 
export default handler
