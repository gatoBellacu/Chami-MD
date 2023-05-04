import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['59894808483', 'Creador', true]
  ['5492266613038']]
//Numeros de owner 

global.mods = ['0'] 
global.prems = ['0']
global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  nrtm: 'https://fg-nrtm-nhie.onrender.com',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zenzapis.xyz': '675e34de8a', 
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

//❑ ━━━━━.⋅ Sticker WM ⋅.━━━━ ❐

global.packname = '𝐂𝐔𝐑𝐈𝐎𝐒𝐈𝐓𝐘-𝐁𝐎𝐓 🍧'
global.author = '𝑨𝒛𝒂𝒎𝒊 👑'

//❑━━━━━━━━━━━━━━━━━━━━ ❐

//✡︎ ━━━━━.⋅ Versión | Nombre | cuentas ⋅.━━━━ ✡︎

global.vs = 'V1'
global.version = vs

global.cb = '*® CURIOSITY-BOT-MD*'
global.curiositybot = cb

global.yt = 'https://www.youtube.com/@Azami_593'
global.youtube = yt

global.ig = 'https://instagram.com/azami_593'
global.gatadiosig = ig

global.md = 'https://github.com/AzamiWithLogic/CuriosityBotV1-MD'
global.gatabot = md

global.nna = 'https://chat.whatsapp.com/DdEtddrUJYZ0LUFi2GZvVe'
global.nnagrupo = nna //UPDATE CURIOSITYBOT
global.nna2 = 'DdEtddrUJYZ0LUFi2GZvVe'

global.nn = 'https://chat.whatsapp.com/Jt76tVg51bfJNLwHwtlmGU'
global.nngrupo = nn //Grupo 1

global.nnn = 'https://chat.whatsapp.com/Dx7SpgNO13fGvgCSuLjwpP'
global.nnngrupo = nnn //Grupo 2

global.nnnt = 'https://chat.whatsapp.com/LHkRugxY5jL3mhVSZJMjIw'
global.nnntgrupo = nnnt //Grupo 3

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ツ

//⊱ ━━━━━━━━━━━━━.⋅ Datos ⋅.━━━━━━━━━━━━━━ ⊰

global.rg = '「✅」 𝐑𝐄𝐒𝐔𝐋𝐓𝐀𝐃𝐎 「✅」\n\n'
global.resultado = rg

global.ag = '「⚠️」 𝐀𝐃𝐕𝐄𝐑𝐓𝐄𝐍𝐂𝐈𝐀 「⚠️」\n\n'
global.advertencia = ag

global.iig = '「❕」 𝐈𝐍𝐅𝐎𝐌𝐀𝐂𝐈𝐎𝐍 「❕」\n\n'
global.informacion = iig

global.fg = '「❌」 𝐅𝐀𝐋𝐋𝐎 「❌」\n\n'
global.fallo = fg

global.mg = '「❗️」 𝐋𝐎 𝐔𝐒𝐎 𝐌𝐀𝐋 「❗️」\n\n'
global.mal = mg

global.eeg = '「💌」  𝐑𝐄𝐏𝐎𝐑𝐓𝐄 「💌」\n\n'
global.envio = eeg

global.eg = '「🔰」 𝐄𝐗𝐈𝐓𝐎 「🔰」\n\n'
global.exito = eg

//𝙀𝙅𝙀𝙈𝙋𝙇𝙊 | 𝙀𝙓𝘼𝙈𝙋𝙇𝙀
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ


//⊱ ━━━━━.⋅ Información | Information ⋅.━━━━ ⊰

global.wm = 'CURIOSITY-BOT-MD : AZAMI'
global.igfg = 'CURIOSITY '
global.wait = '*⌛ _Cargando..._ ▬▭▭▭▭▭▭*'
global.waitt = '*⌛ _Cargando..._ ▬▬▭▭▭*'
global.waittt = '*⌛ _Cargando..._ ▬▬▬▬▭▭*'
global.waitttt = '*⌛ _Cargando..._ ▬▬▬▬▬▬▭*'
global.nomorown = '5214531106422'
global.pdoc = ['application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/msword', 'application/pdf', 'text/rtf']

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ

global.fgig = '® CURIOSITY-BOT-MD  : AZAMI*\n' 
global.dygp = 'https://chat.whatsapp.com/IO9jmpI72ejHiN4unRZleU'
global.fgsc = 'https://github.com/FG98F/dylux-fg' 
global.fgyt = 'https://youtube.com/fg98f'
global.fgpyp = 'https://paypal.me/fg98f'
global.fglog = 'https://i.imgur.com/Owmb93c.png' 

global.wait = '*⌛ _Cargando..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '5' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
