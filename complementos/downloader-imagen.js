import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] ejemplo de uso del comando ${usedPrefix + command} Minecraft*`
const res = await googleImage(text)
let image = res.getRandom()
let link = image
conn.sendHydrated(m.chat, `🔎 *resultado de:* ${text}
🌎 *𝙱𝚄𝙲𝙰𝙳𝙾𝚁:* Google
`, author, link, link, '🔗 𝚄𝚁𝙻', null, null, [
['🔄 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴 🔄', `/imagen ${text}`]
], m)
}
handler.help = ['gimage <query>', 'imagen <query>']
handler.tags = ['internet', 'tools']
handler.command = /^(gimage|image|imagen)$/i
handler.register = true
export default handler
