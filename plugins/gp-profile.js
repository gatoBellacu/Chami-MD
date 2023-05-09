import { createHash } from 'crypto'
import PhoneNumber from 'awesome-phonenumber'
import { canLevelUp, xpRange } from '../lib/levelling.js'
//import db from '../lib/database.js'

let handler = async (m, { conn, usedPrefix, command}) => {

let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `*⚠️ El usuario no se encuentra en mi base de datos*`
let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './src/avatar_contact.png')
let user = global.db.data.users[who]
let { name, exp, diamond, lastclaim, registered, regTime, age, level, role, warn } = global.db.data.users[who]
let { min, xp, max } = xpRange(user.level, global.multiplier)
let username = conn.getName(who)
let math = max - xp
let prem = global.prems.includes(who.split`@`[0])
let sn = createHash('md5').update(who).digest('hex')
let fkon = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
let str = `
]──────❏ *PERFIL* ❏──────[
 *💌 • Nombre:* ${username} ${registered ? '\n*🎐 • Nombre de usuario:* ' + name + ' ': ''}
 *📧 • Tag:* @${who.replace(/@.+/, '')}
 *📞 • Numero:* ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
 *🔗 • Link:* wa.me/${who.split`@`[0]}${registered ? '\n*🎨 • Edad*: ' + age + ' años' : ''}
 *⚠️ • Advertencias:* ${warn}/${maxwarn}
 *💎 • Diamantes :* ${diamond}
 *📊 • Nivel* : ${level}
 *✨ • XP* : Total ${exp} (${user.exp - min} / ${xp})\n${math <= 0 ?
 *🏆 • Rango:* ${role}
 *📑 • Registrado :* ${registered ? '✅': '❌'}
 *⭐ • Premium* : ${prem ? '✅' : '❌'}`
    //conn.sendFile(m.chat, pp, 'perfil.jpg', str, m, false, { mentions: [who] })
  conn.sendButton(m.chat, str, wm2, pp, [[`${registered ? 'Menu':'Verificar'}`, `${user.registered ? '.menu':'.verify'}`]], fkon, { contextInfo: { mentionedJid: [who], forwardingScore: 999, isForwarded: true}})

}
handler.help = ['perfil']
handler.tags = ['group']
handler.command = ['profile', 'perfil'] 

export default handler


