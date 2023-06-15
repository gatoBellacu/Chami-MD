async function handler(m, { usedPrefix }) {
let users = [...new Set([...global.conns.filter(conn => conn.user && conn.state !== 'close').map(conn => conn.user)])]  
const message = users.map(v => '👉 wa.me/' + v.jid.replace(/[^0-9]/g, '') + `?text=${usedPrefix}estado\n(${v.name})\n\n`).join('\n')
const replyMessage = (message.length === 0) ? "*NO HAY SUB BOTS DISPONIBLE. VERIFIQUE MÁS TARDE.*" : message
await m.reply( '*·˚ ༘₊· ͟͟͞͞꒰➳ 𝙰𝚀𝚄𝙸 𝚃𝙸𝙴𝙽𝙴𝚂 𝙻𝙰 𝙻𝙸𝚂𝚃𝙰 𝙳𝙴 𝚂𝚄𝙱𝙱𝙾𝚃𝚂 (𝚂𝙴𝚁𝙱𝙾𝚃/𝙹𝙰𝙳𝙸𝙱𝙾𝚃) 𝙰𝙲𝚃𝙸𝚅𝙾𝚂 🤖️*')
await m.reply(replyMessage.trim())}
handler.command = handler.help = ['listjadibot','bots','subsbots']
handler.tags = ['jadibot']
export default handler
