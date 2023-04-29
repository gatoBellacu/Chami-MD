import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*⚠️ Ejemplo de uso de comando ${usedPrefix + command} Robot Curiosity*`
const res = await googleImage(text)
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let image = await res.getRandom()
let link = image
let captionn = `*☂️ RESULTADO DE:* ${text}\n*📍 ENLACE* ${link}\n*🌐 BUSCADOR:* Google`
conn.sendButton(m.chat, captionn, wm2, link, [['⏭️ SIGUIENTE ⏭️', `#imagen ${text}`]], m)}
handler.help = ['gimage <query>', 'imagen <query>']
handler.tags = ['internet', 'tools']
handler.command = /^(gimage|image|imagen)$/i
export default handler
