
import { areJidsSameUser } from '@adiwajshing/baileys'

let handler = async (m, { conn, args, participants }) => {
  let users = Object.entries(global.db.data.users).map(([key, value]) => {
    return {...value, jid: key}
  })
  let sortedExp = users.map(toNumber('exp')).sort(sort('exp'))
  let sortedLim = users.map(toNumber('diamond')).sort(sort('diamond'))
  let sortedLevel = users.map(toNumber('level')).sort(sort('level'))
  let usersExp = sortedExp.map(enumGetKey)
  let usersLim = sortedLim.map(enumGetKey)
  let usersLevel = sortedLevel.map(enumGetKey)
  let len = args[0] && args[0].length > 0 ? Math.min(50, Math.max(parseInt(args[0]), 9)) : Math.min(9, sortedExp.length)
  let text = `
𝚃𝙰𝙱𝙻𝙰 𝙳𝙴 𝙲𝙻𝙰𝚂𝙸𝙵𝙸𝙲𝙰𝙲𝙸𝙾𝙽
 
╔═❖ *𝚃𝙾𝙿 ${len} 𝚇𝙿* 🧬 
║𝚃𝚞 : *${usersExp.indexOf(m.sender) + 1}* 𝚍𝚎 *${usersExp.length}*
${sortedExp.slice(0, len).map(({ jid, exp }, i) => `║${i + 1}. ${participants.some(p => areJidsSameUser(jid, p.id)) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} ➭ _*𝚡𝚙 ${exp}*_`).join`\n`}
╚═══════════════  

╔═❖ *𝚃𝙾𝙿 ${len} 𝙳𝙸𝙰𝙼𝙰𝙽𝚃𝙴𝚂 💎*
║𝚃𝚞 : *${usersLim.indexOf(m.sender) + 1}* 𝚍𝚎 *${usersLim.length}*
${sortedLim.slice(0, len).map(({ jid, diamond }, i) => `║${i + 1}. ${participants.some(p => areJidsSameUser(jid, p.id)) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} ➭ _*𝙳𝚒𝚊𝚖𝚊𝚗𝚝𝚎𝚜 ${diamond}*_`).join`\n`}
╚═══════════════

╔═❖ *𝚃𝙾𝙿 ${len} 𝙽𝙸𝚅𝙴𝙻* ⬆️
║𝚃𝚞 : *${usersLevel.indexOf(m.sender) + 1}* 𝚍𝚎 *${usersLevel.length}*
${sortedLevel.slice(0, len).map(({ jid, level }, i) => `║${i + 1}. ${participants.some(p => areJidsSameUser(jid, p.id)) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} ➭ _*𝙽𝚒𝚟𝚎𝚕 ${level}*_`).join`\n`}
╚═══════════════`.trim()
  conn.reply(m.chat, text, m, {
    mentions: [...usersExp.slice(0, len), ...usersLim.slice(0, len), ...usersLevel.slice(0, len)].filter(v => !participants.some(p => areJidsSameUser(v, p.id) )) 
})
 
}
handler.help = ['leaderboard']
handler.tags = ['econ']
handler.command = ['leaderboard', 'lb', 'top'] 
handler.register = true
export default handler

function sort(property, ascending = true) {
  if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property]
  else return (...args) => args[ascending & 1] - args[!ascending & 1]
}

function toNumber(property, _default = 0) {
  if (property) return (a, i, b) => {
    return {...b[i], [property]: a[property] === undefined ? _default : a[property]}
  }
  else return a => a === undefined ? _default : a
}

function enumGetKey(a) {
  return a.jid
}
