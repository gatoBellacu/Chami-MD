import { canLevelUp } from '../lib/levelling.js'

export async function before(m, { conn }) {
    let user = global.db.data.users[m.sender]
    if (!user.autolevelup)
        return !0
    let before = user.level * 1
    let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
    while (canLevelUp(user.level, user.exp, global.multiplier))
        user.level++
    user.role = global.rpg.role(user.level).name
    if (before !== user.level) {
    conn.sendButton(m.chat, `*🍧 NUEVO NIVEL 🍧*
    
 ${taguser} subiste de nivel
 *[ ${before} ]* ‣ *[ ${user.level} ]*
 🔰 Rango : *${user.role}*
 
 //_⚠️ para desactivar escribe_
//_*/off autolevelup*_ׂ`, null, [['✳️MENU', `/menu`]], fkontak, m)
    }
}
