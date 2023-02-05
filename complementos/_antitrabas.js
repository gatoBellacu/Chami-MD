//
//By @NeKosmic || https://github.com/NeKosmic/
//

import * as fs from 'fs'
import db from '../lib/database.js'

export async function before(m, { conn, isAdmin, isBotAdmin, usedPrefix }) {
  if (m.isBaileys && m.fromMe)
       return !0
  if (!m.isGroup) return !1
  let chat = db.data.chats[m.chat]
  let bot = db.data.settings[this.user.jid] || {}
  let delet = m.key.participant
  let bang = m.key.id
  let name = await conn.getName(m.sender)
  let fakemek = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "51995386439-1616969743@g.us","inviteCode": "m","groupName": "P", "caption": '𝙲𝚄𝚁𝙸𝙾𝚂𝙸𝚃𝚈 𝙱𝙾𝚃-𝙼𝙳', 'jpegThumbnail': null}}}
   if (chat.antiTraba && m.text.length > 2000) { //Cantidad máxima de caracteres aceptados en un mensaje//
    if (isAdmin) return conn.sendMessage(m.chat, { text: `El administrador @${m.sender.split("@")[0]} acaba de enviar un texto que contiene muchos caracteres -.-!`, mentions: [m.sender] }, { quoted: fakemek })
    await conn.sendButton(m.chat, `*[!] Se detecto un mensaje que contiene muchos caracteres*\n`, `${isBotAdmin ? '' : 'No soy administrador, no puedo hacer nada :/'}`, author, ['[ 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝚁 𝙰𝙽𝚃𝙸 𝚃𝚁𝙰𝙱𝙰𝚂 ]', usedPrefix+'apagar antitraba'], fakemek )
        if (isBotAdmin) {
        conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
        	setTimeout(() => { 
        	conn.sendMessage(m.chat, { text: `𝐌𝐚𝐫𝐜𝐚𝐫 𝐞𝐥 𝐜𝐡𝐚𝐭 𝐜𝐨𝐦𝐨 𝐥𝐞𝐢𝐝𝐨 ✓\n${"\n".repeat(400)}\n=> El número : wa.me/${m.sender.split("@")[0]}\n=> Alias : ${name}\n[!] Acaba de enviar un texto que contiene muchos caracterres que pueden ocasionar fallos en los dispositivos`, mentions: [m.sender] }, { quoted: fakemek })
        }, 0)
        setTimeout(() => { 
        	conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
            }, 1000)
        } else if (!bot.restrict) return m.reply('*[!] El propietario del bot no tiene habilitado las restricciones (#enable restrinct) contacte con el para qué lo habilite*')
    }
    return !0
}
