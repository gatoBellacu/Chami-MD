import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  [ '5214531173598' ,  '🔰 𝐂𝐔𝐑𝐈𝐎𝐒𝐈𝐓𝐘-𝐁𝐎𝐓 🔰' ,  cierto ] ,
  [ '5214621913018' ,  '🔰 𝐂𝐔𝐑𝐈𝐎𝐒𝐈𝐓𝐘-𝐁𝐎𝐓🔰' ,  cierto ] ,
  [ '51931542837' ,  '🔰 𝐂𝐔𝐑𝐈𝐎𝐒𝐈𝐓𝐘-𝐁𝐎𝐓 🔰' ,  cierto ] ,
  [ '593968585383' ,  '🔰 𝐂𝐔𝐑𝐈𝐎𝐒𝐈𝐓𝐘-𝐁𝐎𝐓🔰' ,  cierto ] , 
  [ '529996125657' ] ,
  [ '56964787183' ] ]
//━━━━━━━━━━━━━━━━━━━━━━━━━━⁔⁔⁔ ━━━━

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

// Sticker WM
global.packname = `CURIOSITY-BOT 🍒`
global.author = `AZAMI 🔰`
global.fgig = '® *CURIOSITYBOT-MD* : *AZAMI*\n' 
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
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
