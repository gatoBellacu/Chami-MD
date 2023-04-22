let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
const sections = [
{
title: `𝐋𝐈𝐒𝐓𝐀 𝐃𝐄 𝐎𝐏𝐂𝐈𝐎𝐍𝐄𝐒`,
rows: [
title: comando + 'ᴄᴏᴍᴀɴᴅᴏs ᴘᴀʀᴀ ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀᴇs' + comando2, 
rows: [
{title: "🎉 BIENVENIDA 🎉", description: "Mensaje de Bienvenida para nuevos Miembros en Grupos", rowId: `${usedPrefix + command} welcome`},
{title: "🔞 MODO HORNY 🔞", description: "Mostrar contenido para Adulto en los Chats", rowId: `${usedPrefix + command} modohorny`},
{title: "🔗 ANTI ENLACES 🔗", description: "Eliminar Personas que envíen enlaces de Grupos de WhatsApp", rowId: `${usedPrefix + command} antilink`},  
{title: "🔗 ANTI ENLACES 2 🔗", description: "Eliminar Personas que envíen enlaces que contengan https", rowId: `${usedPrefix + command} antilink2`},     
{title: "🔔 AVISOS 🔔", description: "Avisos de acciones dentro del Grupo", rowId: `${usedPrefix + command} detect`},
{title: "☢️ ANTI TÓXICOS ☢️", description: "Enviar Advertencias aquellas personas que insulten", rowId: `${usedPrefix + command} antiInsultos`},
{title: "⚠️ ANTI TRABAS ⚠️",description: "Grupo inmine a virus/trabas/virtex", rowId: `${usedPrefix + command} antivirtex`},
{title: "🔊 AUDIOS 🔊", description: "Habilitar el envio automático de Audios a todos", rowId: `${usedPrefix + command} audios`},
{title: "😼 SIMI 😼", description: "El bot hablara cómo una persona", rowId: `${usedPrefix + command} simi`},
{title: "🎁 STICKERS AUTOMÁTICOS 🎁", description: "Los vídeos, Gif, imágenes, enlaces jpg o jpeg; Se convertirán en Stickers Automáticamente", rowId: `${usedPrefix + command} autosticker`},
{title: "🎈 ANTI STICKERS 🎈", description: "El bot eliminara a las personas que manden stickers", rowId: `${usedPrefix + command} antisticker`},
{title: "👀 MODO OBSERVAR 👀", description: "Permitir que las imágenes, Gif y Vídeos se puedan ver para todos", rowId: `${usedPrefix + command} viewonce`},
{title: "🆙 NIVEL AUTOMÁTICO 🆙", description: "Sube de nivel a todos de manera automática; (Aplica recompensas por subir de Nivel", rowld: `${usedPrefix + command} autolevelup`},
title: comando + 'ᴄᴏᴍᴀɴᴅᴏs ᴘᴀʀᴀ ᴘʀᴏᴘɪᴇᴛᴀʀɪᴏ' + comando2, 
rows: [
{title: "⛔ RESTRINGIR ⛔", description: "Habilitar función para agregar o eliminar personas en Grupos", rowId: `${usedPrefix + command} restrict`},   
{title: "😎 LECTURA AUTOMÁTICA 😎", description: "Dejar los mensajes o chats como Leídos", rowId: `${usedPrefix + command} autoread`}, 
{title: "📍 SOLO CHATS PRIVADOS 📍", description: "Permitir que solo se use en Chats Privados", rowId: `${usedPrefix + command} pconly`},
{title: "🧪 SOLO GRUPOS 🧪", description: "Permitir que solo se use en Chats Grupales", rowId: `${usedPrefix + command} gconly`},
{title: "🌐 MODO PÚBLICO 🌐", description: "Habilr función para que todos puedan usar CuriosityBot", rowId: `${usedPrefix + command} public`},
]}, ]
let name = await conn.getName(m.sender)
const listMessage = {
text: ' ',
footer: `╭══〘 ✯✯✯✯✯✯✯✯ 〙═╮
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
║➤ *✨𝐇𝐎𝐋𝐀, ${name}!!*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
╰══╡✯✯✯✯✯✯✯✯╞══╯
┏━━━━━━━━━━━━━┓
┣❧ *𝚂𝙴𝙻𝙴𝙲𝙲𝙸𝙾𝙽𝙰 𝚄𝙽𝙰 𝙳𝙴 𝙻𝙰𝚂 𝙾𝙲𝙿𝙸𝙾𝙽𝙴𝚂 𝚀𝚄𝙴 𝚂𝙰𝙻𝙴𝙽 𝙴𝙽 𝙻𝙰 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴 𝙻𝙸𝚂𝚃𝙰 𝙾 𝙳𝙰 𝙲𝙻𝙸𝙲𝙺 𝙴𝙽 𝙰𝙻𝙶𝚄𝙽 𝙱𝙾𝚃𝙾𝙽 𝙳𝙴 𝙴𝚂𝚃𝙴 𝙼𝙴𝙽𝚂𝙰𝙹𝙴*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ඬ⃟ℹ️ _${usedPrefix}on/off *welcome*_
┣ ඬ⃟ℹ️ _${usedPrefix}on/off *public*_
┣ ඬ⃟ℹ️ _${usedPrefix}on/off *modohorny*_
┣ ඬ⃟ℹ️ _${usedPrefix}on/off *antilink*_
┣ ඬ⃟ℹ️ _${usedPrefix}on/off *antilink2*_
┣ ඬ⃟ℹ️ _${usedPrefix}on/off *detect*_
┣ ඬ⃟ℹ️ _${usedPrefix}on/off *restrict*_
┣ ඬ⃟ℹ️ _${usedPrefix}on/off *pconly*_
┣ ඬ⃟ℹ️ _${usedPrefix}on/off *gconly*_
┣ ඬ⃟ℹ️ _${usedPrefix}on/off *autoread*_
┣ ඬ⃟ℹ️ _${usedPrefix}on/off *audios*_
┣ ඬ⃟ℹ️ _${usedPrefix}on/off *autosticker*_
┣ ඬ⃟ℹ️ _${usedPrefix}on/off *antisticker*_
┣ ඬ⃟ℹ️ _${usedPrefix}on/off *viewonce*_
┣ ඬ⃟ℹ️ _${usedPrefix}on/off *simi*_
┣ ඬ⃟ℹ️ _${usedPrefix}on/off *antitrabas*_
┣ ඬ⃟ℹ️ _${usedPrefix}on/off *antiInsultos*_
┗━━━━━━━━━━━━━┛
${author}`,
title: null,
buttonText: "𝐒𝐄𝐋𝐄𝐂𝐂𝐈𝐎𝐍𝐄 𝐀𝐐𝐔𝐢",
sections }

let isEnable = /true|enable|(turn)?on|1/i.test(command)
let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[m.sender]
let bot = global.db.data.settings[conn.user.jid] || {}
let type = (args[0] || '').toLowerCase()
let isAll = false, isUser = false
switch (type) {
case 'welcome':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.welcome = isEnable
break
    case 'detect':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn)
        throw false
      }
      chat.detect = isEnable
break
case 'antitraba':
case 'antitrabas':
      if (m.isGroup) {
      if (!(isAdmin || isOwner)) {
      global.dfail('admin', m, conn)
      throw false
        }}
      chat.antiVirtex = isEnable
    break
      case 'antinsultos':
      case 'antiinsultos':
      case 'insultos':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('owner', m, conn)
          throw false
        }
      }
      chat.antiSatir = isEnable
break
case 'delete':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.delete = isEnable
break
case 'antidelete':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.delete = !isEnable
break
case 'viewonce':
if (m.isGroup) {
if (!(isAdmin || isOwner)) return dfail('admin', m, conn)
}
chat.viewonce = isEnable
break
case 'public':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['self'] = !isEnable
break
case 'antilink':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink = isEnable
break
case 'antilink2':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink2 = isEnable 
break
case 'autolevelup':
isUser = true
user.autolevelup = isEnable
break
case 'modohorny':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.modohorny = isEnable          
break
case 'antisticker':
if (m.isGroup) {
if (!(isAdmin || isOwner)) return dfail('admin', m, conn)
}
chat.antiSticker = isEnable
break
case 'antispam':
isAll = true
if (!isOwner) {
global.dfail('owner', m, conn)
throw false
}
chat.antispam = isEnable
break
case 'autosticker':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.autosticker = isEnable          
break
case 'audios':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.audios = isEnable          
break
case 'restrict':
isAll = true
if (!isOwner) {
global.dfail('owner', m, conn)
throw false
}
bot.restrict = isEnable
break
case 'simi':
if (m.isGroup) {
if (!(isAdmin || isOwner)) return dfail('admin', m, conn)
}
chat.simi = isEnable
break
case 'nyimak':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['nyimak'] = isEnable
break
case 'autoread':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['autoread'] = isEnable
break
case 'pconly':
case 'privateonly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['pconly'] = isEnable
break
case 'gconly':
case 'grouponly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['gconly'] = isEnable
break
case 'swonly':
case 'statusonly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['swonly'] = isEnable
break
default:
if (!/[01]/.test(command)) return await conn.sendMessage(m.chat, listMessage)
throw false
}
conn.sendButton(m.chat, `🗂️ 𝐎𝐏𝐂𝐈𝐎𝐍: ${type} 
🎚️ 𝐄𝐒𝐓𝐀𝐃𝐎: ${isEnable ? '𝙰𝙲𝚃𝙸𝚅𝙰𝙳𝙾' : '𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝙳𝙾'}
📣 𝐏𝐀𝐑𝐀: ${isAll ? '𝙴𝚂𝚃𝙴 𝙱𝙾𝚃' : isUser ? '' : '𝙴𝚂𝚃𝙴 𝙲𝙷𝙰𝚃'}`, author, null, [[`${isEnable ? '✖️ 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝚁 ✖️' : '✔️ 𝙰𝙲𝚃𝙸𝚅𝙰𝚁 ✔️'}`, `${isEnable ? `.off ${type}` : `.on ${type}`}`], ['👾 𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻 👾', '.menu']],m)}

handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^((en|dis)able|(turn)?o(n|ff)|[01])$/i
export default handler
