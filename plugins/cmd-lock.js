let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!m.quoted) throw '*⚠️ Etiqueta el mensaje!*'
    if (!m.quoted.fileSha256) throw '*⚠️ Falta hash SHA256*'
    let sticker = db.data.sticker
    let hash = m.quoted.fileSha256.toString('hex')
    if (!(hash in sticker)) throw '*⚠️ Hash no encontrado en la base de datos*'
    sticker[hash].locked = !/^un/i.test(command)
    m.reply('*✅ hecho!*')
} 
handler.help = ['un', ''].map(v => v + 'lockcmd')
handler.tags = ['database']
handler.command = /^(un)?lockcmd$/i

export default handler
