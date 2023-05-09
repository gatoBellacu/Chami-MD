let handler = async (m, { conn }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
//l
 
conn.sendButton(m.chat, `*📑 LISTA CMD 📑*
\`\`\`
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `(bloqueado) ${key}` : key} : ${value.text}`).join('\n\n')}
\`\`\``, null, [['✨ MENU ✨', `/menu`]], fdoc, { contextInfo: { mentionedJid: [who], forwardingScore: 999, isForwarded: true}})
}
handler.help = ['listcmd']
handler.tags = ['database']
handler.command = ['listcmd']

export default handler
