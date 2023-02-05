const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
let handler = async (m, { conn, usedPrefix }) => {
let pp = './Menu2.jpg'
let vn = './media/menu2.mp3'
await conn.sendFile(m.chat, vn, 'menu2.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true})
try {
} catch (e) {
} finally {
//let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
let name = await conn.getName(m.sender)
let str = `
╭─「 TheKillerMaxOfficial 」\n│ Hola!, Espero que tengas un lindo día o noche!!\n│\n┏ ❤️🦈Bot Tiburón🦈❤️\n╿\n┷┯ ❤️AUDIOS DEL BOT❤️\n╽\n┠❥ *A*\n┠❥ *Buenos dias*\n┠❥ *Onichan*\n┠❥ *Nya*\n┠❥ *Ora*\n┠❥ *Ara ara*\n┠❥ *Loli*\n┠❥ *Yamete*\n┠❥ *Gemime*\n┠❥ *Joder*\n┠❥ *Pespes*\n┠❥ *Darling*\n┠❥ *Gay*\n┠❥ *Hace frio*\n┠❥ *Tetas*\n┠❥ *Pack*\n┠❥ *Dormimos*\n┠❥ *Senpai*\n┠❥ *Mujer*\n┠❥ *Gracias bot*\n┠❥ *Bot te amo*\n┠❥ *Gambare*\n┠❥ *No sirves*\n┠❥ *Feliz jueves*\n┠❥ *Sexo*\n┠❥ *Bot maricon*\n┠❥ *Gemime más fuerte*\n┠❥ *Facha*\n┠❥ *Konede*\n┠❥ *Sexual*\n┠❥ *Bañate*\n┠❥ *Cristo*\n┠❥ *Manos*\n┠❥ *Temon*\n┠❥ *Admin*\n┠❥ *Nico nico*\n┠❥ *Bts*\n┠❥ *Cringe*\n┠❥ *Bait*\n┠❥ *Espera*\n┠❥ *Shitpost*\n┠❥ *Dinos onichan*\n┠❥ *Buenas noches*\n┠❥ *Beastars*\n┠❥ *Semen*\n┠❥ *Triste*\n┠❥ *Primo*\n┠❥ *Nos vale*\n┠❥ *Kya*\n╿\n╿\n┠❥ *NOTA: Si quieres dar ideas o sugerencias para más audios, habla con el creador*\n┠╼❥Chat Creador\n╰╼❥wa.me/56937358804
`.trim()
conn.sendHydrated(m.chat, str, wm, pp, '', 'nose', null, null, [
['𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻', '/menu']
], m)
}}
handler.help = ['menu2', 'help2', '?2', 'menuaudios']
handler.tags = ['main']
handler.command = /^(menu2|audios|menú2|memu2|menuaudio|menuaudios|memuaudios|memuaudio|audios|audio)$/i
handler.fail = null
handler.register = true
export default  handler
