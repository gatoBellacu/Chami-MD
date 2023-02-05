import moment from 'moment-timezone'
let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
let locale = 'es'
let d = new Date(new Date + 3600000)
let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    }) 

let pp = '.media/menu2.jpg'
let { money, joincount } = global.db.data.users[m.sender]
let { exp, limit, level, role } = global.db.data.users[m.sender]
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
}) 
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 

const sections = [  
{
title: `🅒🅤🅡🅘🅞🅢🅘🅣🅨🅑🅞🅣-🅜🅓 🍒✨ Menu`,
rows: [
       {title: "/info", description: "para vez el cuentos grupos esta el bot", rowId: `${usedPrefix}grouplist`},
        {title: "/creador", description: "para mostra el numeor del creador", rowId: `${usedPrefix}owner`},
        {title: "/menu completo", description: "para vez la lista del menu completo", rowId: `${usedPrefix}menusimple`},
      {title: "/hidetag", description: "Para mencionar a todos con un texto", rowId: `${usedPrefix}hidetag`},
      {title: "/tagall️", description: "Para mencionar a todos en una lista", rowId: `${usedPrefix}tagall`},
      {title: "/del", description: "Para eliminar un mensaje del bot", rowId: `${usedPrefix}del`},
      {title: "/audios", description: "para los audios del bot", rowId: `${usedPrefix}menu2`},
       {title: "/dado", description: "para lanzar un dado", rowId: `${usedPrefix}dado`},
      {title: "/mates", description: "para realiza cálculos matematicos y ganas xp", rowId: `${usedPrefix}math`},
      {title: "/ppt", description: "para jugar piedras, papel y tijeras", rowId: `${usedPrefix}ppt`},
      {title: "/slot", description: "para apostar y ganar xp", rowId: `${usedPrefix}slot`},
      {title: "/ib", description: "para vez el top", rowId: `${usedPrefix}ib`},
      {title: "/level", description: "para subir del nivel", rowId: `${usedPrefix}levelup`},
      {title: "/buy", description: "para comprar mas Diamante", rowId: `${usedPrefix}buy`},
      {title: "/reg", description: "para registrarse el bot", rowId: `${usedPrefix}reg`},
      {title: "/unreg", description: "para borra tu registros en el bot", rowId: `${usedPrefix}unreg`},
      {title: "/attp", description: "para crear stickers", rowId: `${usedPrefix}attp`},
       {title: "/s", description: "para convertir una imagen al sticker", rowId: `${usedPrefix}s`},
        {title: "/robar", description: "para cambia el nombre del stickers", rowId: `${usedPrefix}wm`},
         {title: "/imagen", description: "para buscar una imagen del Google", rowId: `${usedPrefix}imagen`},
          {title: "/pinterest", description: "para biscar una imagen del pinterest", rowId: `${usedPrefix}pinterest`},
           {title: "/add", description: "para añadir alguien al grupo", rowId: `${usedPrefix}add`},
            {title: "/kick", description: "para eliminar al alguien del grupo", rowId: `${usedPrefix}kick`},
             {title: "/enable", description: "para activa/desactiva algunas opciones", rowId: `${usedPrefix}enable`},
              {title: "/attp", description: "para crear stickers", rowId: `${usedPrefix}attp`},
              {title: "/pack", description: "para que el bot pase pack", rowId: `${usedPrefix}pack`},
              {title: "/google", description: "para buscar algo del google", rowId: `${usedPrefix}google`},
              {title: "/play", description: "descarga musica/video", rowId: `${usedPrefix}play`},
              {title: "/tiktok", description: "para descarga un video del.tiktok", rowId: `${usedPrefix}tiktok`},
              {title: "/mediafire", description: "para descarga algun archivo del mediafire", rowId: `${usedPrefix}mediafire`},
              {title: "/link", description: "para manda el link del grupo", rowId: `${usedPrefix}link`},
              {title: "/tts", description: "para convertir un texto el audio", rowId: `${usedPrefix}tts`},
              {title: "/piropo", description: "piropo para tu amor", rowId: `${usedPrefix}piropo`},
              {title: "/pack", description: "para que bot mande pack", rowId: `${usedPrefix}pack`},
              {title: "/waifu", description: "para que bot mande una waifu", rowId: `${usedPrefix}waifu`},
              {title: "/meme", description: "el bot manda unos memes", rowId: `${usedPrefix}meme`},
              {title: "/daily", description: "para recibir una recompensa", rowId: `${usedPrefix}daily`},
              {title: "/work", description: "para trabaja y ganar xp", rowId: `${usedPrefix}work`},
]}, ]
let name = await conn.getName(m.sender)
const listMessage = {
text: `╔════ ≪ •❈• ≫ ════╗\n║ *${ucapan()}*\n║❤️•.¸❤️.• *${taguser}* •.¸❤️¸.•❤️\n╚═════ೋೋ═════╝

╔════ ≪ •🌐• ≫ ════╗
║🅒🅤🅡🅘🅞🅢🅘🅣🅨🅑🅞🅣-🅜🅓 🍒✨ 
║📡 𝙱𝙸𝙴𝙽𝚅𝙴𝙽𝙸𝙳𝙾 𝙰𝙻 𝙼𝙴𝙽𝚄 𝙻𝙸𝚂𝚃𝙰 
║◤━━━━━ ☆. ∆ .☆ ━━━━━◥
║🎁 𝙸𝙽𝙵𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃 🎁
║◤━━━━━ ☆. ∆ .☆ ━━━━━◥
║⏱️ ❥ ғᴇᴄʜᴀ: ${date}
║⏱️ ❥ ʜᴏʀᴀ: ${time}
║⏰ ❥ ᴀᴄᴛɪᴠɪᴅᴀᴅᴀᴅ: ${uptime}
║👑 ❥ ᴠᴇʀsɪᴏɴ ᴅᴇʟ ʙᴏᴛ: ${vs}
║ 📚 ❥ ʟɪʙʀᴇʀɪᴀ:  h
║👥 ❥ ᴜsᴜᴀʀɪᴏ(s): ${Object.keys(global.db.data.users).length}
║◤━━━━━ ☆. ∆ .☆ ━━━━━◥
║🍄 𝙸𝙽𝙵𝙾 𝙳𝙴𝙻 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 🍄
║◤━━━━━ ☆. ∆ .☆ ━━━━━◥
║ 🎖️ ❥ 𝙽𝙸𝚅𝙴𝙻: ${level}
║ 🧰 ❥ 𝙴𝚇𝙿𝙴𝚁𝙸𝙴𝙽𝙲𝙸𝙰: ${exp}
║ 💎 ❥ 𝙳𝙸𝙰𝙼𝙰𝙽𝚃𝙴𝚂: ${limit}
║ 👻 ❥ 𝚁𝙰𝙽𝙶𝙾: ${role}
║ 🪙  ❥ 𝚂𝙸𝚃𝚈-𝙲𝙾𝙸𝙽𝚂: ${money}
╚═════ೋೋ═════╝
*🅒🅤🅡🅘🅞🅢🅘🅣🅨🅑🅞🅣-🅜🅓 🍒✨*`, footer: ``, pp,
title: null,
buttonText: "🅗🅐🅖🅐 🅒🅛🅘🅒🅚 🅐🅠🅤🅘", 
sections }

conn.sendMessage(m.chat, listMessage)
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(menu|menú|memu|memú|help|info|comandos|2help|menu1.2|ayuda|commands|commandos|m|\?)$/i
handler.register = true
export default handler


function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function ucapan() {
  const time = moment.tz('America/Los_Angeles').format('HH')  //America/Los_Angeles  Asia/Jakarta   America/Toronto
  let res = `𝙱𝚄𝙴𝙽𝙾𝚂 𝙳𝙸𝙰𝚂 | 𝙶𝙾𝙾𝙳 𝙼𝙾𝚁𝙽𝙸𝙽𝙶`
  if (time >= 4) {
    res = `𝙱𝚄𝙴𝙽𝙾𝚂 𝙳𝙸𝙰𝚂 | 𝙶𝙾𝙾𝙳 𝙼𝙾𝚁𝙽𝙸𝙽𝙶`
  }
  if (time >= 11) {
    res = `𝙱𝚄𝙴𝙽𝙰𝚂 𝚃𝙰𝚁𝙳𝙴𝚂 | 𝙶𝙾𝙾𝙳 𝙴𝚅𝙴𝙽𝙸𝙽𝙶`
  }
  if (time >= 15) {
    res = `𝙱𝚄𝙴𝙽𝙰𝚂 𝚃𝙰𝚁𝙳𝙴𝚂 | 𝙶𝙾𝙾𝙳 𝙴𝚅𝙴𝙽𝙸𝙽𝙶`
  }
  if (time >= 17) {
    res = `𝙱𝚄𝙴𝙽𝙰𝚂 𝙽𝙾𝙲𝙷𝙴𝚂 | 𝙶𝙾𝙾𝙳 𝙽𝙸𝙶𝚃𝙷`
  }
  return res
} 