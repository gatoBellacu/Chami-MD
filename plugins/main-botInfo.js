import { cpus as _cpus, totalmem, freemem } from 'os'
import util from 'util'
import { performance } from 'perf_hooks'
import { sizeFormatter } from 'human-readable'
let format = sizeFormatter({
  std: 'JEDEC', // 'SI' (default) | 'IEC' | 'JEDEC'
  decimalPlaces: 2,
  keepTrailingZeroes: false,
  render: (literal, symbol) => `${literal} ${symbol}B`,
})
let handler = async (m, { conn, usedPrefix, command }) => {
  const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
  const groupsIn = chats.filter(([id]) => id.endsWith('@g.us')) //groups.filter(v => !v.read_only)
  const used = process.memoryUsage()
  const cpus = _cpus().map(cpu => {
    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
    return cpu
  })
  const cpu = cpus.reduce((last, cpu, _, { length }) => {
    last.total += cpu.total
    last.speed += cpu.speed / length
    last.times.user += cpu.times.user
    last.times.nice += cpu.times.nice
    last.times.sys += cpu.times.sys
    last.times.idle += cpu.times.idle
    last.times.irq += cpu.times.irq
    return last
  }, {
    speed: 0,
    total: 0,
    times: {
      user: 0,
      nice: 0,
      sys: 0,
      idle: 0,
      irq: 0
    }
  })
  let old = performance.now()
  
  let neww = performance.now()
  let speed = neww - old
  
let infobt = `
╭─────═[ INFO BOT ]═─────⋆
│╭────────────────···
┴│☂︎ *Nombre Bot:* ${wm}
⬡│☂︎ *owner: azami
⬡│☂︎ *Prefix:* #
⬡│☂︎ *Librería:* Node.Js
⬡│☂︎︎ *Usuarios:* ${Object.keys(global.db.data.users).length} 
⬡│☂︎ *${groupsIn.length}* Chats de grupo
⬡│☂︎ *${groupsIn.length}* Gropos unidos
⬡│☂︎ *${groupsIn.length - groupsIn.length}* Grupos abandonados
⬡│☂︎ *${chats.length - groupsIn.length}* Chats privados
⬡│☂︎ *${chats.length}* Total Chats
⬡│☂ GitHub : ${fgsc}
│╰────────────────···
╰──────────═┅═─────
  
 *≡ S E R V E R*
*🛑 RAM:* ${format(totalmem() - freemem())} / ${format(totalmem())}
*🔵 FreeRAM:* ${format(freemem())}

*≡  NodeJS Uso de memoria*
${'```' + Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v => v.length)), ' ')}: ${format(used[key])}`).join('\n') + '```'}
`
conn.sendButton(m.chat, infobt, fgig, null, [
  ['● APOYAR', `${usedPrefix}donate`],
   ['● GRUPOS', `${usedPrefix}gpdylux`]
 ], m)

}
handler.help = ['info']
handler.tags = ['main']
handler.command = ['info', 'infobot', 'botinfo']

export default handler

