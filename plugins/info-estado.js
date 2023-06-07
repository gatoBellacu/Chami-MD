import fs from 'fs'
let handler = async (m, { conn, command, usedPrefix }) => {
let picture = './storage/menus/Menu4.jpg'
let ftroli = { key: { participant: '0@s.whatsapp.net' }, message: { orderMessage: { itemCount: 99999999, status: 1, surface: 1, message: cb, orderTitle: author, sellerJid: '0@s.whatsapp.net' }}}
let name = await conn.getName(m.sender)
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) { process.send('uptime')
_muptime = await new Promise(resolve => { process.once('message', resolve) 
setTimeout(resolve, 1000) }) * 1000}
let uptime = clockString(_uptime)
let estado =`
🔰 *ESTADO* 🔰 
*✨ Hola ${name}*
----------------------
*🤖 Estado del bot 🤖*
*📑 Bot activo ✅*
*📡 Bot de uso público ✅*
*⏰ Tiempo activo:* ${uptime}
`.trim()

await conn.sendFile(m.chat, picture, 'Curiosity.jpg', estado, ftroli)}

handler.help = ['estado']
handler.tags = ['main']
handler.command = /^(estado|status|estate|state|stado|stats)$/i
export default handler

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}

