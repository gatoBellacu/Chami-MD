import yts from 'yt-search'

var handler = async(m, { conn, usedPrefix, text, args, command }) => {
let name = await conn.getName(m.sender)

  if (!text) throw 'Qué estás buscando?'
  let cari = await yts(`${text}`)
    let dapet = cari.all
    let listSections = []
	Object.values(dapet).map((v, index) => {
	listSections.push([index + ' ' + cmenub + ' ' + v.title, [
          ['Video 🎥', usedPrefix + 'getvid ' + v.url, '\n⌚ *Duración:* ' + v.timestamp + '\n⏲️ *Subido:* ' + v.ago + '\n👁️ *Vistas:* ' + v.views + '\n📎 *Url:* ' + v.url],
          ['Audio 🎧', usedPrefix + 'getaud ' + v.url, '\n⌚ *Duración:* ' + v.timestamp + '\n⏲️ *Subido:* ' + v.ago + '\n👁️ *Vistas:* ' + v.views + '\n📎 *Url:* ' + v.url]
        ]])
	}) 
	return conn.sendList(m.chat, '*───「 Youtube Search 」───*', `Seleccione un tipo a continuación...\n*El texto que solicitaste:* ${text}\n\Vuelva a escribir *${usedPrefix + command}* su texto para cambiar el texto de nuevo`, wm2, `YouTube Search 🔎`, listSections, m)
}
handler.help = ['ytsearch <query>']
handler.tags = ['internet']
handler.command = /^yts(earch)?$/i


export default handler




/*import yts from 'yt-search'

let handler = async (m, {conn, text }) => {
  if (!text) throw '*⚠️ Que quieres que busque en YouTube?*'
  let results = await yts(text)
  let tes = results.all
  let teks = results.all.map(v => {
    switch (v.type) {
      case 'video': return `
⬡ ${v.title}
*⬡ Link* : ${v.url}
*⬡ Duración* : ${v.timestamp}
*⬡ Subido :* ${v.ago}
*⬡ Vistas:* ${v.views}

   `.trim()
      case 'canal': return `
⬡ *${v.name}* (${v.url})
⬡ ${v.subCountLabel} (${v.subCount}) Suscribirse
⬡ ${v.videoCount} videos
`.trim()
    }
  }).filter(v => v).join('\n\n________________________\n\n')
  conn.sendFile(m.chat, tes[0].thumbnail, 'yts.jpeg', teks, m)
}
handler.help = ['ytsearch'] 
handler.tags = ['dl']
handler.command = ['ytsearch', 'yts'] 

export default handler*/
