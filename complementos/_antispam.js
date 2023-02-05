import db from '../lib/database.js'

export async function all(m) {
    if (!m.message)
        return
    this.spam = this.spam ? this.spam : {}
    if (m.sender in this.spam) {
        this.spam[m.sender].count++
        if (m.messageTimestamp.toNumber() - this.spam[m.sender].lastspam > 10) {
            if (this.spam[m.sender].count > 10) {
                //db.data.users[m.sender].banned = true
                m.reply('𝙲𝚄𝚁𝙸𝙾𝚂𝙸𝚃𝚈 𝙱𝙾𝚃-𝙼𝙳 | ⚠️ *「 𝐀𝐍𝐓𝐈𝐒𝐏𝐀𝐌 𝐕𝟏 」*\n\npara con el spam ')
            }
            this.spam[m.sender].count = 0
            this.spam[m.sender].lastspam = m.messageTimestamp.toNumber()
        }
    }
    else
        this.spam[m.sender] = {
            jid: m.sender,
            count: 0,
            lastspam: 0
        }
}
