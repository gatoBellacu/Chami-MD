import { youtubeSearch, youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper' 
import fetch from "node-fetch"
import yts from 'yt-search'
let handler = async (m, { conn, command, text, usedPrefix }) => {
let q, v, yt, dl_url, ttl, size, lolhuman, lolh, n, n2, n3, n4, cap, qu, currentQuality
	if (!text) throw `*⚠️ INGRESE EL NOMBRE DE LA CANCIÓN QUE ESTÁ BUSCANDO*\n\n💡 EJEMPLO\n*${usedPrefix + command} Another love*`
	m.react('🎧') 
	let vid = (await yts(text)).all[0]
let { title, description, publishedTime, url, thumbnail, videoId, timestamp, views, published } = vid
try {
if (command == 'play') {	
conn.sendFile(m.chat, thumbnail, 'thumbnail.jpg', `
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
q = '128kbps'
v = url
yt = await youtubedl(v).catch(async () => await youtubedlv2(v)).catch(async () => await youtubedlv3(v))
dl_url = await yt.audio[q].download()
title = await yt.title
size = await yt.audio[q].fileSizeH
await conn.sendFile(m.chat, dl_url, title + '.mp3', null, m, false, { mimetype: 'audio/mp4' })
}
if (command == 'play2') {
conn.sendFile(m.chat, thumbnail, 'thumbnail.jpg', `
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

*🚀 Aguarde un momento en lo que envío su video*
`.trim(), m)
let qu = args[1] || '360'
let q = qu + 'p'
let v = args[0]
const yt = await youtubedl(v).catch(async _ => await youtubedlv2(v)).catch(async _ => await youtubedlv3(v))
const dl_url = await yt.video[q].download()
const ttl = await yt.title
const size = await yt.video[q].fileSizeH
m.react(done)
await await conn.sendMessage(m.chat, { video: { url: dl_url }, fileName: `${ttl}.mp4`, mimetype: 'video/mp4', caption: `*🔰 Aqui esta tu video*\n*🔥 Titulo: ${ttl}`, thumbnail: await fetch(yt.thumbnail) }, { quoted: m })
}
} catch (e) {
}}
handler.help = ['play', 'play2'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = ['play', 'play2']

export default handler
