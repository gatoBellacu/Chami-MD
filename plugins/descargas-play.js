import yts from 'yt-search'
import fetch from "node-fetch"
import { youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper'
let limit = 1500
let handler = async (m, { conn, text, args, isPrems, isOwner, usedPrefix, command }) => {
  
    if (!text) throw `*⚠️ INGRESE EL NOMBRE DE LA CANCIÓN QUE ESTÁ BUSCANDO*\n\n💡 EJEMPLO\n*${usedPrefix + command} Another love*`
  let chat = global.db.data.chats[m.chat]
  let res = await yts(text)
  //let vid = res.all.find(video => video.seconds < 3600)
  let vid = res.videos[0]
  let { title, description, publishedTime, url, thumbnail, videoId, timestamp, views, published } = vid
  if (!vid) throw `✳️ Vídeo/Audio no encontrado`
  let isVideo = /vid$/.test(command)
  m.react('🎧') 
  
  try {
  let q = isVideo ? '360p' : '128kbps' 
  let v = vid.url
  let yt = await youtubedl(v).catch(async () => await youtubedlv2(v)).catch(async () => await youtubedlv3(v))
  let dl_url = await (isVideo ? yt.video[q].download() : yt.audio[q].download())
  let title = await yt.title
  let size = await (isVideo ? yt.video[q].fileSizeH : yt.audio[q].fileSizeH) 
  conn.sendFile(m.chat, vid.thumbnail, 'thumbnail.jpg', `
*📑 TÍTULO:*
${title}

*⏰ DURACIÓN:* 
${timestamp}

*💬 DESCRIPCIÓN*
${description}

*👀 VISTAS*
${views}

*📡 URL*
${url}

*🚀 Aguarde un momento en lo que envío su audio*
`.trim(), m)

if (size.split('MB')[0] >= limit) return m.reply(`🔸 *⚖️Peso* : ${size}\n🔸 *🎞️Calidad* : ${q}\n\n🔸 _El archivo supera el límite de descarga_ *+${limit} MB*`) 
if (size.includes('GB')) return m.reply(`🔸 *⚖️Peso* : ${size}\n🔸 *🎞️Calidad* : ${q}\n\n🔸 _El archivo supera el límite de descarga_ *+${limit} MB*`)   
	  conn.sendFile(m.chat, dl_url, title + '.mp' + (3 + /vid$/.test(command)), `🔸 *📌Título* : ${title}
🔸 *🎞️Calidad* : ${q}
🔸 *⚖️Peso* : ${size}
`.trim(), m, false, { mimetype: isVideo ? '' : 'audio/mpeg', asDocument: chat.useDocument })
		m.react(done) 
    } catch {
		m.reply(`Error: intenta de nuevo`)
    }

}
handler.help = ['play']
handler.tags = ['dl']
handler.command = ['play', 'playvid']

export default handler
