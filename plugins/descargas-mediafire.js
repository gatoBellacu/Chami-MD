import fs from 'fs'
import { mediafiredl } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `*⚠️ INGRESE UN ENLACE DE MEDIAFIRE*`
try {
m.react(rwait)
let res = await mediafiredl(args[0])
let { url, url2, filename, ext, aploud, filesize, filesizeH } = res
let caption = `
╭─────────────────
│ 🔰 *${wm}*
│╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌
│ 📡 *NOMBRE*
│ ${filename}
│╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌
│ 📊 *PESO*
│ ${filesizeH}
│╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌
│ 🚀 *TIPO*
│ ${ext}
╰─────────────────
`.trim()

conn.reply(m.chat, caption, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'CURIOSITYBOT-MD | By Azami ©',
body: 'Super Bot WhatsApp',         
previewType: 0, thumbnail: fs.readFileSync("./media/menus/Menu3.jpg"),
sourceUrl: `https://github.com/Azami19/Curiosity-MD.git`}}})
  
  
conn.sendFile(m.chat, url, filename, '', m, null, { mimetype: ext, asDocument: true })
m.react(done)
} catch (e) { 
m.reply(`*⚠️ VUELVA A INTENTARLO. DEBE DE SER UN ENLACE VALIDO DE MEDIAFIRE*`)
m.react(error)
console.log(e)
}}
handler.help = ['mediafire'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(mediafire|mediafiredl|dlmediafire)$/i
handler.exp = 100
export default handler
