import MessageType from '@adiwajshing/baileys'
let pajak = 0
let handler = async (m, { conn, text }) => {
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw `*⚠️ DEBE DE ETIQUETAR AL USUARIO*`
let txt = text.replace('@' + who.split`@`[0], '').trim()
if (!txt) throw `*⚠️ INGRESE LA CANTIDAD DE SITYCOINS*`
if (isNaN(txt)) throw `*⚠️ SIN SÍMBOLOS, SOLO INGRESE NÚMEROS*`
let nekocoins = parseInt(txt)
let money = nekocoins
let pjk = Math.ceil(nekocoins * pajak)
money += pjk
if (money < 1) throw `*⚠️ EL NÚMERO MINIMO DE SITYCOINS ES DE 1*`
let users = global.db.data.users
users[who].money += nekocoins
  m.reply(`≡ *𝚇𝙿 𝙰𝙽̃𝙰𝙳𝙸𝙳𝙾*
┌──────────────
▢  *𝚃𝚘𝚝𝚊𝚕:* ${xp}
└──────────────`)
/*conn.sendHydrated(m.chat, `╭━━━[ 𝗡𝗘𝗞𝗢𝘾𝙊𝙄𝙉𝙎 🔮 ]━━━⬣\n┃\n┃ღ *PARA | FOR:*\n┃ღ *${text}*\n┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n┃ღ *SE LE AÑADIÓ | NOW YOU HAVE*\n┃ღ *${gatacoins} NekoCoin(s)* 🔮\n┃\n╰━━━━━━━━━━━━━━⬣`, wm, null, md, '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
['💗 𝙈𝙚𝙣𝙪 𝘼𝙫𝙚𝙣𝙩𝙪𝙧𝙖 | 𝙍𝙋𝙂 💗', '.rpgmenu'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']], m)*/
}
handler.help = ['addgb <@user>']
handler.tags = ['nekocoins']
handler.command = ['añadirsitycoins', 'añadirsity', 'añadircoins', 'darsityoins', 'darsity', 'darcoins'] 
handler.rowner = true
export default handler
