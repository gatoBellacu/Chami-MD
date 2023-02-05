import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `▶⏸ *PLAY*\n\nQué estás buscando?`
  let vid = (await youtubeSearch(text)).video[0]
  if (!vid) throw '▶⏸ *PLAY*\n\nVideo/audio no encontrado'
  let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
  const url = 'https://www.youtube.com/watch?v=' + videoId
  await conn.sendHydrated(m.chat, `
❒═════❬ PLAY ❭═════╾❒
├‣ Nombre : 
┴
${title}
┬
├‣ Descripcion : 
┴
${description} 
┬
├‣ Publicado : 
┴
${publishedTime} 
┬
├‣ Duracion : 
┴
${durationH}
┬
❒═════════════════╾❒
  `.trim(), author, thumbnail, url, '📺Ir a Youtube!', null, null, [
    ['Audio ', `${usedPrefix}yta ${url} yes`],
    ['Video ', `${usedPrefix}ytv ${url} yes`],
    ['Entrar a yt', `${usedPrefix}yts ${url}`]
  ], m)
}
handler.help = ['play', 'play2'].map(v => v + ' <Mensaje>')
handler.tags = ['downloader']
handler.command = /^play2?$/i
handler.register = true

handler.exp = 0
handler.limit = false

export default handler

