import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'

global.owner = [
  ['5214531173598', '🔰 𝐂𝐔𝐑𝐈𝐎𝐒𝐈𝐓𝐘-𝐁𝐎𝐓 🔰', true],
  ['5214621913018', '🔰 𝐂𝐔𝐑𝐈𝐎𝐒𝐈𝐓𝐘-𝐁𝐎𝐓🔰', true],
  ['51931542837', '🔰 𝐂𝐔𝐑𝐈𝐎𝐒𝐈𝐓𝐘-𝐁𝐎𝐓 🔰', true],
  ['593968585383', '🔰 𝐂𝐔𝐑𝐈𝐎𝐒𝐈𝐓𝐘-𝐁𝐎𝐓🔰', true], 
  ['529996125657'],
  ['56964787183']]
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 
global.smods = []
global.mods = [] 
global.prems = [] 

//━━━━━━━━━━━━━━━━━━━━ ❤️

global.APIs = { // API Prefix
	//━━━━━.⋅ name: 'https://website' ⋅.━━━━
  nrtm: 'https://nurutomo.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
  aria: 'https://ariarestapii.herokuapp.com',
  amel: 'https://melcanz.com',
  bx: 'https://bx-hunter.herokuapp.com',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  fdci: 'https://api.fdci.se',
  dzx: 'https://api.dhamzxploit.my.id',
  bsbt: 'https://bsbt-api-rest.herokuapp.com',
  zeks: 'https://api.zeks.me',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  adiisus: 'https://adiixyzapi.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  pencarikode: 'https://pencarikode.xyz',
  Velgrynd: 'https://velgrynd.herokuapp.com',
  rey: 'https://server-api-rey.herokuapp.com',
  hardianto: 'http://hardianto-chan.herokuapp.com',
  shadow: 'https://api.reysekha.xyz',
  apialc: 'https://api-alc.herokuapp.com',
  botstyle: 'https://botstyle-api.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  ana: 'https://anabotofc.herokuapp.com/',
  kanx: 'https://kannxapi.herokuapp.com/',
  dhnjing: 'https://dhnjing.xyz',
  'https://violetics.pw': 'beta'
}
global.APIKeys = {
	//━━━━━.⋅ 'https://website': 'apikey' ⋅.━━━━ 
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
  'https://ariarestapii.herokuapp.com': 'aria',
  'https://api-alc.herokuapp.com': 'ConfuMods',
  'https://api.reysekha.xyz': 'apirey',
  'https://melcanz.com': 'F3bOrWzY',
  'https://bx-hunter.herokuapp.com': 'Ikyy69',
  'https://api.xteam.xyz': '5bd33b276d41d6b4',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://bsbt-api-rest.herokuapp.com': 'benniismael',
  'https://api.zeks.me': 'apivinz',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://leyscoders-api.herokuapp.com': 'MIMINGANZ', 
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://api.lolhuman.xyz': '9b817532fadff8fc7cb86862',
  'https://botstyle-api.herokuapp.com': 'Eyar749L',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://anabotofc.herokuapp.com/': 'AnaBot'
}

global.imagen1 = fs.readFileSync('./Menu2.jpg')

//⊱ ━━━━━.⋅ KEY ⋅.━━━━ ⊰

global.Key360 = ['964f-0c75-7afc'] //keys ephoto360
//global.beta = ['https://violetics.pw'] //keys ephoto360

global.keysZens = ['fiktod', 'c2459db922', 'BF39D349845E', '675e34de8a', '37CC845916', '0b917b905e6f', '6fb0eff124']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]

//Thumb / Logo del bot

global.thumb = fs.readFileSync('./media/thumb.jpg')

//━━━━━.⋅ Sticker WM ⋅.━━━━

global.packname = '🍒 𝐂𝐔𝐑𝐈𝐎𝐒𝐈𝐓𝐘-𝐁𝐎𝐓'
global.author = '𝑨𝒛𝒂𝒎𝒊 ❤️'

//⊱ ━━━━━.⋅ Redes | cuentas | versión ⋅.━━━━ ⊰

global.vs = '1.2.0'
global.version = vs

global.st = '𝐂𝐔𝐑𝐈𝐎𝐒𝐈𝐓𝐘-𝐁𝐎𝐓'
global.sity = st

//⊱ ━━━━━.⋅ Información | Information ⋅.━━━━ ⊰

global.wm = '𝐂𝐔𝐑𝐈𝐎𝐒𝐈𝐓𝐘-𝐁𝐎𝐓  : 𝐀𝐙𝐀𝐌𝐈'
global.igfg = '𝐂𝐔𝐑𝐈𝐎𝐒𝐈𝐓𝐘-𝐁𝐎𝐓 '
global.wait = '*⌛ _Cargando..._ ▬▭▭▭▭▭▭*'
global.waitt = '*⌛ _Cargando..._ ▬▬▭▭▭*'
global.waittt = '*⌛ _Cargando..._ ▬▬▬▬▭▭*'
global.waitttt = '*⌛ _Cargando..._ ▬▬▬▬▬▬▭*'
global.nomorown = '5214531173598'
global.pdoc = ['application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/msword', 'application/pdf', 'text/rtf']

global.multiplier = 100 // más alto el número, más difícil se volverá subir de nivel

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: '🧬',
      limit: '🌌',
      health: '❤️',
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      trash: '🗑',
      armor: '🥼',
      sword: '⚔️',
      wood: '🪵',
      rock: '🪨',
      string: '🕸️',
      horse: '🐎',
      cat: '🐈',
      dog: '🐕',
      fox: '🦊',
      petFood: '🍖',
      iron: '⛓️',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}


let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("[SITY_BOT] Se acaba de actualizar el archivo 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
