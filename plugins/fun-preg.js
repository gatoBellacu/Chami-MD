import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
	
 let name = conn.getName(m.sender)
  if (!text) throw `*⚠️ Ejemplo :*\n\n *${usedPrefix + command}* soy feo?`  
  //let res = await fetch(global.API('https://api.simsimi.net', '/v2/', { text: encodeURIComponent(text), lc: "es" }, ''))
  let res = await fetch(`https://api.simsimi.net/v2/?text=${text}&lc=es`)
  let json = await res.json()
  if (json.success) 
m.reply(`*🍧 PREGUNTAS 🍧*
 
⇨ *Pregunta:* ${text}
⇨ *Respuesta :* ${json.success.replace('simsimi', 'Curiosity').replace('Simsimi', 'Curiosity').replace('sim simi', 'Curiosity')}`) 
  else throw json
}

handler.help = ['pregunta']
handler.tags = ['fun']
handler.command = ['pregunta', 'preg'] 

export default handler
