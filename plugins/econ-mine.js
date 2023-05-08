//import db from '../lib/database.js'

let handler = async (m, { conn }) => {
const fkontak = {
        "key": {
        "participants":"0@s.whatsapp.net",
            "remoteJid": "status@broadcast",
            "fromMe": false,
            "id": "Halo"    
        },
        "message": {
            "contactMessage": {
                "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
            }
        },
        "participant": "0@s.whatsapp.net"
    }

let user = global.db.data.users[m.sender]
  let hasil = Math.floor(Math.random() * 5000)
  let time = global.db.data.users[m.sender].lastmiming + 300000
  if (new Date - global.db.data.users[m.sender].lastmiming < 300000) throw `⏳ 𝔼𝕤𝕡𝕖𝕣𝕒 *${msToTime(time - new Date())}* ℙ𝕒𝕣𝕒 𝕧𝕠𝕝𝕧𝕖𝕣 𝕒 𝕞𝕚𝕟𝕒𝕣`
  global.db.data.users[m.sender].exp += hasil
  m.reply(`⛏️ 𝔾𝕖𝕟𝕚𝕒𝕝 𝕞𝕚𝕟𝕒𝕤𝕥𝕖 ${hasil} 𝕏ℙ`)
  global.db.data.users[m.sender].lastmiming = new Date * 1
}
handler.help = ['mine']
handler.tags = ['econ']
handler.command = ['minar', 'miming', 'mine'] 
handler.register = true

export default handler

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours + " hora(s) " + minutes + " minuto(s) " + seconds + " segundo(s)" 
}

