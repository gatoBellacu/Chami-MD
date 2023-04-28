import fetch from 'node-fetch'
import translate from '@vitalets/google-translate-api'
let handler = async (m, { conn, text, args }) => {
if (!args[0]) throw `*⚠️ Ingrese el nombre de la apk que quiera buscar*`
try {
let enc = encodeURIComponent(text)
let json = await fetch(`https://latam-api.vercel.app/api/playstore?apikey=brunosobrino&q=${enc}`)
let gPlay = await json.json()

let curiosity = await translate(`${gPlay.descripcion}`, { to: 'es', autoCorrect: true })
if (!gPlay.titulo) return m.reply(`[ ! ] Sin resultados`)
conn.sendMessage(m.chat,{image:{url: gPlay.imagen},caption:`
*🔍  RESULTADOS DE:* ${gPlay.titulo}
➺🧬 Identificador: ${gPlay.id}
➺⛓️ Link: ${gPlay.link}
➺🖼️ Imagen: ${gPlay.imagen}
➺✍️ Desarrollador: ${gPlay.desarrollador}
➺📜 Descripcion: ${mystic.text}
➺💲 Moneda: ${gPlay.moneda}
➺🎭 Gratis?: ${gPlay.gratis}
➺💸 Precio: ${gPlay.precio}
➺📈 Puntuacion: ${gPlay.puntuacion}`},{quoted:m})
} catch {
await m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚁𝚁𝙾𝚁, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚅𝚄𝙴𝙻𝚅𝙰 𝙰 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁𝙻𝙾*')    
}}
handler.help = ['playstore <aplicacion>']
handler.tags = ['internet']
handler.command = /^(playstore)$/i
export default handler
