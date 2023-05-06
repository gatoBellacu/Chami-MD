let handler = m => m
handler.all = async function (m) {
	let setting = global.db.data.settings[this.user.jid]

const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
const groupsIn = chats.filter(([id]) => id.endsWith('@g.us')) 
let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
		let bio = `🎉 Soy ${wm} || ⏰ Activo durante ${muptime} || 🌎 Modo ${global.opts['self'] ? 'Privado' : 'Publico'} || 🔰 Usuarios: ${Object.keys(global.db.data.users).length} || 🎨 Creado por ${nombreowner}`
		await this.updateProfileStatus(bio).catch(_ => _)
		setting.status = new Date() * 1

}
export default handler

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, ' Día(s)\n', h, ' Hora(a)\n', m, ' Minuto(s)\n'].map(v => v.toString().padStart(2, 0)).join('')
}
