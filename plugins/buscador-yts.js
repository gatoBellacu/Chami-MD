import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { text }) => {
if (!text) throw '*⚠️ Ingrese el nombre de un vídeo o canal de YouTube*'
const { video, channel } = await youtubeSearch(text)
let pp = './storage/IMG/curiosity1.jpg'
m.reply(wait)
let teks = [...video, ...channel].map(v => {
switch (v.type) {
case 'video': return `

*🔍 ${v.title} (${v.url})*
*⏱️ Duración: ${v.durationH}*
*📗 Publicado ${v.publishedTime}*
*🗒️ ${v.view} Vistas*
`.trim()
case 'channel': return `
🔍 *${v.channelName}* (${v.url})
👥 _${v.subscriberH} 𝚜𝚞𝚜𝚌𝚛𝚒𝚙𝚝𝚘𝚛𝚎𝚜_
🎦 ${v.videoCount} 𝚟𝚒𝚍𝚎𝚘𝚜
`.trim()
}
}).filter(v => v).join('\n\n• • ◕◕══════════════◕◕ • •\n\n')
conn.sendButton(m.chat, teks, wm, pp,
[
['gracias 💌', `.sc`]], m)
     }
handler.help = ['', 'earch'].map(v => 'yts' + v + ' <pencarian>')
handler.tags = ['tools']
handler.command = /^yts(earch)?$/i
export default handler
