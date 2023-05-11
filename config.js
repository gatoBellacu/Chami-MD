import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['59894808483', 'creador', true],
  ['5492266613038'],
  ['59169316023'],
  ['593968585383']]
 //Numeros de owner 

global.mods = [] 
global.prems = []
global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  nrtm: 'https://fg-nrtm.ddns.net',
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

global.packname = '® CuriosityBot-MD\n'
global.author = 'CuriosityBot'

//❑━━━━━━━━━━━━━━━━━━━━ ❐



//⊱ ━━━━━.⋅ Información | Information ⋅.━━━━ ⊰

global.wm = '                「 ᴄᴜʀɪᴏsɪᴛʏ 𝙱𝙾𝚃 汉  」'
global.wm2 = 'CuriosityBot-MD'
global.wm3 = '⫹⫺ ᴄᴜʀɪᴏsɪᴛʏ 𝙱𝙾𝚃'
global.nombreowner = 'Azami'
global.namebot = 'Curiosity' 
global.igfg = 'CURIOSITY'
global.nomorown = '5214531106422'
global.pdoc = ['application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/msword', 'application/pdf', 'text/rtf']

global.fgig = '© Curiosity' 
global.dygp = 'https://chat.whatsapp.com/ErnXC51D9lWJtRWOD4stR2'
global.fgsc = 'https://github.com/Azami19/CuriosityBot-MD1' 
global.thumb = 'https://telegra.ph/file/580055492f04ffa8399a3.jpg'
global.fgyt = 'https://youtube.com'
global.fgpyp = 'https://paypal.me'
global.fglog = 'https://i.imgur.com/Owmb93c.png' 

global.wait = '*⌛ _Cargando..._*\n*▰▰▰▱▱▱▱▱*'
global.waitt = '*⌛ _Cargando..._*\n*▬▬▭▭▭*'
global.waittt = '*⌛ _Cargando..._*\n*▬▬▬▬▭▭*'
global.waitttt = '*⌛ _Cargando..._*\n*▬▬▬▬▬▬▭*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.dashmenu = '┅━━━═┅═❏ *ღ 𝘿𝘼𝙎𝙃𝘽𝙊𝘼𝙍𝘿 ღ* ❏═┅═━━━┅'
global.cmenut = '❏––––––『'                    
global.cmenuh = '』––––––'         
global.cmenub = '┊❀'                          
global.cmenuf = '┗━═┅═━––––––๑\n'                
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     ' 
global.pmenus = '┊'         
global.htki = '––––––『' // Hiasan Titile (KIRI)
global.htka = '』––––––' // Hiasan Title  (KANAN)
global.lopr = 'Ⓟ' //LOGO PREMIUM ON MENU.JS
global.lolm = 'Ⓛ' //LOGO LIMIT/FREE ON MENU.JS
global.htjava = '⫹⫺'    //hiasan Doang :v
global.hsquere = ['⛶','❏','⫹⫺']


global.multiplier = 69 
global.maxwarn = '6' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
