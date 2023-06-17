import { youtubedl, youtubeSearch, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper'
   let handler = async (m, { conn, text, args, isPrems, isOwner, usedPrefix, command }) => {
  if (!text) throw '*⚠️ INGRESE EL NOMBRE DE LA CANCIÓN QUE ESTÁ BUSCANDO*\n\n*💡 EJEMPLO*\n*${usedPrefix + command}* Another love'
  try {
    var vid = (await youtubeSearch(text)).video[0]
    if (!vid) throw '[❗] 𝙴𝚁𝚁𝙾𝚁 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰𝚁 𝙴𝙻 𝙰𝚄𝙳𝙸𝙾'
    var { title, description, thumbnail, videoId, durationH, durationS, viewH, publishedTime } = vid
    var url = 'https://www.youtube.com/watch?v=' + videoId

    let vide = `https://yt.btch.bz/download?URL=${url}&videoName=video`
    var tmb = thumbnail
    var captionvid = `  
 *∘ 📑 TÍTULO:*
   ${title}
   
 *∘ 📆 PUBLICADO:* 
  ${publishedTime}
  
  *∘ ⏰ DURACIÓN:* 
  ${durationH}
  
  *∘ 👀 VISTAS* 
  ${viewH}  
  
  *∘ 📡 URL*  
  ${url}
  
  *∘ 💬 DESCRIPCIÓN* 
  ${description}`
    var pesan = await conn.sendMessage(m.chat, {
      text: captionvid,
      contextInfo: {
        externalAdReply: {
          title: "",
          body: "CuriosityBot-MD",
          thumbnailUrl: tmb ,
          sourceUrl: vide,
          mediaType: 1,
          showAdAttribution: true,
          renderLargerThumbnail: true
        }
      }
    })
    if (durationS > 18000) return conn.sendMessage(m.chat, { text: `*Link Original:* ${await cut(url)}\n\n_Durasi terlalu panjang..._\n*Duration Limit!*` }, { quoted: pesan })

    conn.sendMessage(m.chat, {
      video: {
        url: vide,
        mimetype: 'video/webm',
        attributes: [
          {
            name: 'controls',
            value: 'true'
          },
          {
            name: 'autoplay',
            value: 'true'
          }
        ]
      }
    }, { quoted: pesan })
  } catch (e) {
    throw '[❗] 𝙴𝚁𝚁𝙾𝚁 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰𝚁 𝙴𝙻 𝙰𝚄𝙳𝙸𝙾'
  }
}

handler.command = handler.help = ['play2', 'ytmp4', 'ytv']
handler.tags = ['downloader']
handler.exp = 0
handler.limit = true
handler.premium = false
export default handler
