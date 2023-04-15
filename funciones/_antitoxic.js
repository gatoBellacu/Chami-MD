let handler = m => m

let toxic = /g0re|g0r3|g.o.r.e|sap0|sap4|malparido|malparida|malparidos|malparidas|m4lp4rid0|m4lp4rido|m4lparido|malp4rido|m4lparid0|malp
handler.before = function (m, { user }) {
  if (m.isBaileys && m.fromMe) return true
  if (/masuk|lanjutkan|banjir|(per)?panjang/g.exec(m.text)) return true
  let chat = global.db.data.chats[m.chat]
  let isGroupToxic = toxic.exec(m.text)

  if (chat.antiToxic && isGroupToxic) {
    m.reply('*⚠️ no seas toxico!!*\n' + readMore + '\n *¿Quieres apagar? tipo /disable antitoxic*')
    if (global.opts['restrict']) {
      // if (!user.isAdmin) return true
      // this.groupRemove(m.chat, [m.sender])
    }
  }
  return true
}

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
