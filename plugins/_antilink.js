let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
export async function before(m, { isAdmin, isBotAdmin }) {
if (m.isBaileys && m.fromMe)
return !0
let vn = './media/antilink.mp3'
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
let delet = m.key.participant
let bang = m.key.id
let bot = global.db.data.settings[this.user.jid] || {}
const isGroupLink = linkRegex.exec(m.text)
const grupo = `https://chat.whatsapp.com`
if (isAdmin && chat.antiLink && m.text.includes(grupo)) return m.reply('*Hey!! el antilink esta activo, pero eres un admin no te puedo eliminar 😎!*')
if (chat.antiLink && isGroupLink && !isAdmin) {
if (isBotAdmin) {
const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
if (m.text.includes(linkThisGroup)) return !0
}    
await m.reply(`*「 ⚠️ ENLACE DETECTADO ⚠️  」*\n\n*Hasta la vista 👋, ${await this.getName(m.sender)} rompiste las reglas del grupo serás eliminado....!!*`)   
if (!isBotAdmin) return m.reply('*Te salvaste de mi, no soy admin no te puedo eliminar*')  
if (isBotAdmin) {
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
let responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (responseb[0].status === "404") return   
/*} else if (!bot.restrict) return m.reply('*⚠️ Mi propietario no tine activo rl modo restringido*)*/
conn.sendMessage(m.chat, { audio: { url: vn }, contextInfo: { "externalAdReply": { "title": wm, "body": ` `, "previewType": "PHOTO", "thumbnailUrl": null,"thumbnail": imagen1, "sourceUrl": `https://github.com/elrebelde21/The-LoliBot-MD`, "showAdAttribution": true}}, ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m })
}
return !0
}





/*const linkRegex = /chat.whatsapp.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i

export async function before(m, {conn, isAdmin, isBotAdmin }) {
    if (m.isBaileys && m.fromMe)
        return !0
    if (!m.isGroup) return !1
    let chat = global.db.data.chats[m.chat]
    let bot = global.db.data.settings[this.user.jid] || {}
    const isGroupLink = linkRegex.exec(m.text)
    if (chat.antiLink && isGroupLink && !isAdmin) {
        if (isBotAdmin) {
            const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
            if (m.text.includes(linkThisGroup)) return m.reply('[ ! ] Aea causa acabas de enviar un enlace, lo weno es que el enlace detectado es de este grupo owo')
        }
        if (!isBotAdmin) return conn.sendButton(m.chat, `*⚠️ ENLACE DETECTADO ⚠️*\n`, `Por suerte no soy acmin, asi que no puedo hacer nada :v`, wm, ['[ DESACTIVAR ANTILINK ]', usedPrefix+'disable antilink'], m)
        await  conn.sendMessage(m.chat, { text: `*⚠️ ENLACE DETECTADO ⚠️*\n\n*Valiste vrg @${m.sender.split("@")[0]} Adios..._\n`, mentions: [m.sender] }) 
        conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: yid, participant: prt }})
setTimeout(() => { 
	conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}, 1000)
        /**if (isBotAdmin && bot.restrict) {   
            await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        } else if (!bot.restrict) return m.reply('[ ! ] Para realizar acciones de eliminación, mi dueño tiene que encender el modo restringido!')**/
    }
    return !0
}*/
