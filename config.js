import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs' 

//⊱ ━━━━━.⋅ Owner ⋅.━━━━ ⊰
global.owner = [
  ['51963748942', '░⃟⃜🍭ꪳ۫₎۬۟〬උнα𝐦𝚒̄τꪖ̃░⃟⃜🐾⁩🥏', true],
  ['5214531173598'], ['5214531106422'], ['593968585383'], ['5492266613038'], ['5492266466080']]  
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ

global.mods = [] 
global.prems = []

global.keysZens = ['LuOlangNgentot', 'c2459db922', '37CC845916', '6fb0eff124', 'hdiiofficial', 'fiktod', 'BF39D349845E', '675e34de8a', '0b917b905e6f']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['BrunoSobrino']
global.itsrose = ['4b146102c4d500809da9d1ff']

global.APIs = { // API Prefix.
  
//⊱ ━━━━━.⋅ name: 'https://website' ⋅.━━━━ ⊰
  amel: 'https://melcanz.com',
  bx: 'https://bx-hunter.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  fdci: 'https://api.fdci.se',
  dzx: 'https://api.dhamzxploit.my.id',
  bsbt: 'https://bsbt-api-rest.herokuapp.com',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.me',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz', 
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
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
  dhnjing: 'https://dhnjing.xyz'
},
  
global.APIKeys = { // APIKey Here
  //⊱ ━━━━━.⋅ 'https://website': 'apikey' ⋅.━━━━ ⊰
  'https://api-alc.herokuapp.com': 'ConfuMods',
  'https://api.reysekha.xyz': 'apirey',
  'https://melcanz.com': 'F3bOrWzY',
  'https://bx-hunter.herokuapp.com': 'Ikyy69',
  'https://api.xteam.xyz': '5bd33b276d41d6b4',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://bsbt-api-rest.herokuapp.com': 'benniismael',
  'https://api.zeks.me': 'apivinz',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://pencarikode.xyz': 'pais', 
  'https://api-fgmods.ddns.net': 'fg-dylux',
  'https://leyscoders-api.herokuapp.com': 'MIMINGANZ', 
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://api.lolhuman.xyz': '9b817532fadff8fc7cb86862',
  'https://botstyle-api.herokuapp.com': 'Eyar749L',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://anabotofc.herokuapp.com/': 'AnaBot'
}

// IMAGENES 
global.imagen1 = fs.readFileSync('./storage/menus/Menu1.jpg')
global.imagen2 = fs.readFileSync('./storage/menus/Menu2.jpg')
global.imagen3 = fs.readFileSync('./storage/menus/Menu3.jpg')
global.imagen4 = fs.readFileSync('./storage/menus/Menu4.jpg')
global.img = 'https://telegra.ph/file/76816166bd79aa848848d.jpg'
//⊱ ━━━━━.⋅ Sticker WM ⋅.━━━━ ⊰

global.packname = '░⃟⃜🍭ꪳ۫₎۬۟〬උнα𝐦𝚒̄τꪖ̃░⃟⃜🐾⁩'
global.author = '@kevin'

//━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ

//⊱ ━━━━━.⋅ Información ⋅.━━━━ ⊰

global.wm = '░⃟⃜🍭ꪳ۫₎۬۟〬උнα𝐦𝚒̄τꪖ̃░⃟⃜🐾⁩』'
global.azami = 'Azami ©'
global.cb = '░⃟⃜🍭ꪳ۫₎۬۟〬උнα𝐦𝚒̄τꪖ̃░⃟⃜🐾⁩'
global.wait = '*⌛ _Cargando..._ ▬▬▬▭*'
global.vs = '1.0.0'
global.yt = 'https://www.youtube.com/@Azami_19'
global.ig = 'https://instagram.com/azami.19'
global.md = 'https://github.com/Azami19/CuriosityBot-MD1'
global.nn = 'https://chat.whatsapp.com/HKY8AX69oMnHa0Q3ukh0nR'
global.nnn = 'https://chat.whatsapp.com/KLpYFsitkgzJ15YQxZrBqO'
global.paypal = 'https://paypal.me/Azami19'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ

global.multiplier = 100 // Cuanto más alto, más difícil subir de nivel | The higher, The harder levelup 

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: '🏆',
      limit: '💎',
      exp: '🕹️'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}


let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
