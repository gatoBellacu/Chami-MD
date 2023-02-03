import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'

global.owner = [
  ['5214531173598', '🔰 𝐂𝐔𝐑𝐈𝐎𝐒𝐈𝐓𝐘-𝐁𝐎𝐓 🔰', true],
  ['5214621913018', '🔰 𝐂𝐔𝐑𝐈𝐎𝐒𝐈𝐓𝐘-𝐁𝐎𝐓🔰', true],
  ['51931542837', '🔰 𝐂𝐔𝐑𝐈𝐎𝐒𝐈𝐓𝐘-𝐁𝐎𝐓 🔰', true],
  ['593968585383', '🔰 𝐂𝐔𝐑𝐈𝐎𝐒𝐈𝐓𝐘-𝐁𝐎𝐓🔰', true], 
  ['529996125657'], [''], [''], [''], [''],
  [''], [''], [''], [''], ['']]
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 
global.smods = []
global.mods = [''] 
global.prems = [''] 
global.APIs = {
  nrtm: 'https://nurutomo.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = {
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}
//Thumb / Logo del bot
global.thumb = fs.readFileSync('./media/thumb.jpg')
//⊱ ━━━━━.⋅ Sticker WM ⋅.━━━━ ⊰

global.packname = 'ʙᴏᴛ ʟᴇᴏɴ 🦁'
global.author = 'ᴄʀᴀᴢʏ ᴇsᴛᴀʀ 𝟷𝟽'

//⊱ ━━━━━.⋅ Redes | cuentas | versión ⋅.━━━━ ⊰

global.vs = '1.2.0'
global.version = vs

global.creador = 'ʙᴏᴛ ʟᴇᴏɴ • ᴄʀᴀᴢʏ'
global.version = creador

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
