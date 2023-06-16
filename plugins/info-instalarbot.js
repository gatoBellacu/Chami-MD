
let { generateWAMessageFromContent } = (await import("@adiwajshing/baileys")).default 
import { performance } from 'perf_hooks'
import fs from 'fs'
let handler  = async (m, { conn, usedPrefix: _p }) => {

function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var days = Math.floor(seconds / (24 * 60 * 60 * 1000));
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `╭─────────────┈⊷
│ *INSTALACIÓN DE CURIOSITYBOT-MD*
╰┬────────────┈⊷
┌┤ *REQUISITOS PARA LAS INSTALACION*
┌┤➳ _Dudas: wa.me/59894808483_
┌┤➳ _Tutoríal: pronto_
┌┤➳ _1 GB de almacenamiento_
┌┤➳ _Termux: https://www.mediafire.com/file/3hsvi3xkpq3a64o/termux_118.apk/file_
┌┤➳ _GitHub: https://github.com/Azami19/CuriosityBot-MD_
┌┤➳ _un whatsapp inmune (secundario)_
┌┤➳ _un número victual_
┌┤➳ _2 dispositivo o una PC para escanear_
╰┬────────────┈⊷
  │ *COMANDO DE INSTALACION TERMUX*
  │> termux-setup-storage
  │> apt-get update -y && apt-get upgrade -y
  │> pkg install -y git nodejs ffmpeg imagemagick && pkg install yarn
  │> git clone https://github.com/Azami19/CuriosityBot-MD1 && cd CuriosityBot-MD1 && yarn 
  │> npm start 
  ╰────────────┈⊷`
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
sellerJid: 'https://github.com/Azami19/CuriosityBot-MD',
thumbnail: fs.readFileSync('./src/avatar_contact.png')
}}, {contextInfo: null, quoted: m})
conn.relayWAMessage(prep)
		//	conn.sendMessage(m.chat, `${teks}`, MessageType.text, rtimebro)
}

handler.command = /^(instalarbot)/i
handler.fail = null
export default handler
