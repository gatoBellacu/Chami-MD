
import fg from 'api-dylux'

let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `·˚ ༘₊· ͟͟͞͞꒰➳Uso del comando\nEjemplo*${usedPrefix + command}* https://www.instagram.com/p/CYHeKxyMj-J/?igshid=YmMyMTA2M2Y=`
    m.react(rwait)
    m.reply('Calmao 😎\n\n*Estoy descargando tu post 🔄*\n\nAguarde un momento, por favor')
    let res = await fg.igdl(args[0])
    for (let result of res.url_list) {
    conn.sendFile(m.chat, result, 'igdl.mp4', `『 Resultado 』`, m)
    m.react(done)
  }
}
handler.help = ['instagram <link ig>']
handler.tags = ['dl']
handler.command = ['ig', 'igdl', 'instagram', 'igimg', 'igvid'] 
handler.diamond = true

export default handler 
