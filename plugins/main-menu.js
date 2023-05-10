
let { generateWAMessageFromContent } = (await import("@adiwajshing/baileys")).default 
import { performance } from 'perf_hooks'
import { promises } from 'fs'
import { join } from 'path'
let handler  = async (m, { conn, __dirname, usedPrefix: _p }) => {
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let user = global.db.data.users[m.sender]
let { money, joincount } = global.db.data.users[m.sender]
let { exp, limit, level, role } = global.db.data.users[m.sender]
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var days = Math.floor(seconds / (24 * 60 * 60 * 1000));
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `╭─────═[ INFO USER ]═─────⋆
│╭───────────────···
┴│☂︎ *Nombre:* ${taguser}
⬡│☂︎ *Diamantes:* ${limit}
⬡│☂︎ *Role:* ${role}
⬡│☂︎ *Level:* ${level}
┬│☂︎ *Total Xp:* ${exp}
│╰────────────────···
┠─────═[ HOY ]═─────⋆
│╭────────────────···
┴│☂︎ *Fecha:* ${date}
│╰────────────────··
┠─────═[ INFO BOT ]═─────⋆
│╭────────────────···
┴│☂︎ *Nombre Del Bot:* ${wm}
⬡│☂︎ *Baileys:* Multi dispositivos 
⬡│☂︎ *Version del bot*: 2.2.2
⬡│☂︎ *tipo:* Node.Js
⬡│☂︎ *tiempo de actividad:* ${uptime}
┬│☂︎ *Base de Datos:* ${rtotalreg}
│╰────────────────···
╰──────────═┅═──────────

~|-------------------------|~
*[_>] _COMANDOS_  ☷*
~|-------------------------|~\n

  ▣──「 Descarga 」───⬣
  │○ .facebook
  ▣───────────⬣`
}
					const runtime = process.uptime()
		            const teks = `${kyun(runtime)}`
					const itsme = `0@s.whatsapp.net`
					const split = `uwu >//<`
					const rtimebro = {
					contextInfo: {
					participant: itsme,
					quotedMessage: {
					extendedTextMessage: {
				    text: split
									}
								}
							}
					}
						    
						  let prep = generateWAMessageFromContent(m.chat, { orderMessage: { 
itemCount: -10062007, status: 500,
surface: 999,
message: teks,
description: '^^',
orderTitle: 'Hi Sis',
token: '9',
curreyCode: 'IDR',
totalCurrencyCode: '>〰<',
totalAmount1000: '1000000',
sellerJid: 'https://github.com/elrebelde21/The-LoliBot-MD',
thumbnail: fs.readFileSync('./src/avatar_contact.png')
}}, {contextInfo: null, quoted: m})
conn.relayWAMessage(prep)
		//	conn.sendMessage(m.chat, `${teks}`, MessageType.text, rtimebro)
}

handler.help = ['help']
handler.tags = ['main']
handler.command = ['menu', 'help', 'menú'] 
handler.register = false

handler.admin = false
handler.botAdmin = false

handler.fail = null


export default handler

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}