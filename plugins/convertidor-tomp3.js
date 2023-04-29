import { toAudio } from '../lib/converter.js'
let handler = async (m, { conn, usedPrefix, command }) => {
let q = m.quoted ? m.quoted : m
let mime = (q || q.msg).mimetype || q.mediaType || ''
if (!/video|audio/.test(mime)) throw `*⚠️ Responda al vídeo o nota de voz que desee convertir a Audio/MP3*`
let media = await q.download()
if (!media) throw '*⚠️ Lo lamento, ocurrió un fallo al descargar su video, vuelva a intentarlo*'
let audio = await toAudio(media, 'mp4')
if (!audio.data) throw '*⚠️ Lo lamento, ocurrió un fallo al convertir su nota de voz a audio/MP3, vuelva a intentarlo*'
conn.sendMessage(m.chat, { audio: audio.data,  mimetype: 'audio/mpeg' }, { quoted: m })
}
handler.alias = ['tomp3', 'toaudio']
handler.command = /^to(mp3|audio)$/i
export default handler
