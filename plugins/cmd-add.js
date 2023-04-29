let handler = async (m, { conn, text, usedPrefix, command }) => {
global.db.data.sticker = global.db.data.sticker || {}
if (!m.quoted) throw '*⚠️ Responde a una imagen o a un sticker el cuál se le agregara un comando o texto según usted decida*'
if (!m.quoted.fileSha256) throw '*⚠️ Solo puedes agregar comandos o textos a stickers e imagenes*'
if (!text) throw `*⚠️ Fallo de uso, texto faltante*\n\n*📍 Uso correcto de comando:*\n*✅ ${usedPrefix + command} <texto> <responder a sticker o imagen>*\n\n*🚀 Ejemplo de uso correcto:*\n*✅ ${usedPrefix + command} <#menu> <responder a sticker o imagen>*`
let sticker = global.db.data.sticker
let hash = m.quoted.fileSha256.toString('base64')
if (sticker[hash] && sticker[hash].locked) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝚂𝙾𝙻𝙾 𝙴𝙻 𝙾𝚆𝙽𝙴𝚁 𝙿𝚄𝙴𝙳𝙴 𝚁𝙴𝙰𝙻𝙸𝚉𝙰𝚁 𝙻𝙰 𝙼𝙾𝙳𝙸𝙵𝙸𝙲𝙰𝙲𝙸𝙾𝙽*'
sticker[hash] = { text, mentionedJid: m.mentionedJid, creator: m.sender, at: + new Date, locked: false }
m.reply(`*✅ El texto/comando fue agregado al sticker/imagen y se encuentra agregado en la base de datos*`)
}
handler.command = ['setcmd', 'addcmd', 'cmdadd', 'cmdset']
handler.rowner = true
export default handler
