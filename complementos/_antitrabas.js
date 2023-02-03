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
  let fakemek = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "51995386439-1616969743@g.us","inviteCode": "m","groupName": "P", "caption": '𝚃𝚑𝚎 𝙼𝚢𝚜𝚝𝚒𝚌 - 𝙱𝚘𝚝', 'jpegThumbnail': null}}}
   if (chat.antiTraba && m.text.length > 2000) { //Cantidad máxima de caracteres aceptados en un mensaje//
    if (isAdmin) return conn.sendMessage(m.chat, { text: `𝐄𝐥 𝐚𝐝𝐦𝐢𝐧𝐢𝐬𝐭𝐫𝐚𝐝𝐨𝐫 @${m.sender.split("@")[0]} 𝐚𝐜𝐚𝐛𝐚 𝐝𝐞 𝐞𝐧𝐯𝐢𝐚𝐫 𝐮𝐧 𝐭𝐞𝐱𝐭𝐨 𝐪𝐮𝐞 𝐜𝐨𝐧𝐭𝐢𝐞𝐧𝐞 𝐦𝐮𝐜𝐡𝐨𝐬 𝐜𝐚𝐫𝐚𝐜𝐭𝐞𝐫𝐞𝐬 -.-!`, mentions: [m.sender] }, { quoted: fakemek })
    await conn.sendButton(m.chat, `*[ ❗ ] 𝐒𝐞 𝐝𝐞𝐭𝐞𝐜𝐭𝐨 𝐮𝐧 𝐦𝐞𝐧𝐬𝐚𝐣𝐞 𝐪𝐮𝐞 𝐜𝐨𝐧𝐭𝐢𝐞𝐧𝐞 𝐦𝐮𝐜𝐡𝐨𝐬 𝐜𝐚𝐫𝐚𝐜𝐭𝐞𝐫𝐞𝐬*\n`, `${isBotAdmin ? '' : '𝐍𝐨 𝐬𝐨𝐲 𝐚𝐝𝐦𝐢𝐧𝐢𝐬𝐭𝐫𝐚𝐝𝐨𝐫, 𝐧𝐨 𝐩𝐮𝐞𝐝𝐨 𝐡𝐚𝐜𝐞𝐫 ñ 𝐧𝐚𝐝𝐚 :/'}`, author, ['[ 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝚁 𝙰𝙽𝚃𝙸 𝚃𝚁𝙰𝙱𝙰𝚂 ]', usedPrefix+'apagar antitraba'], fakemek )
        if (isBotAdmin) {
        conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
        	setTimeout(() => { 
        	conn.sendMessage(m.chat, { text: `𝐌𝐚𝐫𝐜𝐚𝐫 𝐞𝐥 𝐜𝐡𝐚𝐭 𝐜𝐨𝐦𝐨 𝐥𝐞𝐢𝐝𝐨 ✓\n${"\n".repeat(400)}\n=> 𝐄𝐥 𝐧𝐮𝐦𝐞𝐫𝐨 : wa.me/${m.sender.split("@")[0]}\n=> Alias : ${name}\n[ ❗ ] 𝐀𝐜𝐚𝐛𝐚 𝐝𝐞 𝐞𝐧𝐯𝐢𝐚𝐫 𝐮𝐧 𝐭𝐞𝐱𝐭𝐨 𝐪𝐮𝐞 𝐜𝐨𝐧𝐭𝐢𝐞𝐧𝐞 𝐦𝐮𝐜𝐡𝐨𝐬 𝐜𝐚𝐫𝐚𝐜𝐭𝐞𝐫𝐞𝐬 𝐪𝐮𝐞 𝐩𝐮𝐞𝐝𝐞 𝐨𝐜𝐚𝐬𝐢𝐨𝐧𝐚𝐫 𝐟𝐚𝐥𝐥𝐨𝐬 𝐞𝐧 𝐥𝐨𝐬 𝐝𝐢𝐬𝐩𝐨𝐬𝐢𝐭𝐢𝐯𝐨𝐬`, mentions: [m.sender] }, { quoted: fakemek })
        }, 0)
        setTimeout(() => { 
        	conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
            }, 1000)
        } else if (!bot.restrict) return m.reply('*[ ❗ ] 𝐏𝐚𝐫𝐚 𝐫𝐞𝐚𝐥𝐢𝐳𝐚𝐫 𝐚𝐜𝐜𝐢𝐨𝐧𝐞𝐬 𝐝𝐞 𝐞𝐥𝐢𝐦𝐢𝐧𝐚𝐜𝐢𝐨𝐧, 𝐦𝐢 𝐩𝐫𝐨𝐩𝐢𝐞𝐭𝐚𝐫𝐢𝐨 𝐝𝐞𝐛𝐞 𝐞𝐧𝐜𝐞𝐧𝐝𝐞𝐫 𝐞𝐥 𝐦𝐨𝐝𝐨 𝐫𝐞𝐬𝐭𝐫𝐢𝐧𝐠𝐢𝐝𝐨!!!*')
    }
    return !0
}
