import db from '../lib/database.js'

let linkRegex = /chat.whatsapp.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i

export async function before(m, { conn, isAdmin, isBotAdmin, usedPrefix }) {
    if (m.isBaileys && m.fromMe)
        return !0
    if (!m.isGroup) return !1
    let chat = db.data.chats[m.chat]
    let bot = db.data.settings[this.user.jid] || {}
    let prt = m.key.participant
    let yid = m.key.id
    const isGroupLink = linkRegex.exec(m.text)
    if (chat.antiLink && isGroupLink && !isAdmin) {
        if (isBotAdmin) {
            const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
            if (m.text.includes(linkThisGroup)) return m.reply('*⚠️ Acabas de enviar un enlace, pero el enlace es de este grupo*')
        }
        if (!isBotAdmin) return conn.sendButton(m.chat, `*⚠️ ENLACE DETECTADO ⚠️*\n`, `*Por suerte no soy admin, asi que no puedo hacer nada :v*`, wm, ['DESACTIVAR ANTILINK ', usedPrefix+'apagar antilink'], m)
        await  conn.sendMessage(m.chat, { text: `*[ ! ] Enlace detectado [ ! ]*\n_Ahora si k_gaste @${m.sender.split("@")[0]} Adios..._\n`, mentions: [m.sender] }) 
        conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: yid, participant: prt }})
setTimeout(() => { 
	conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}, 1000)
    }
    return !0
}

