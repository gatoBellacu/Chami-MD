let handler = async (m, { conn }) => {
let name = conn.getName(who)
let fkon = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${wm2}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${wm2}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
   
conn.sendButton(m.chat, `*🍧 LISTA CMD 🍧*
\`\`\`
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `(bloqueado) ${key}` : key} : ${value.text}`).join('\n\n')}
\`\`\``, null, [['✳️MENU', `/menu`]], fkon, { contextInfo: { mentionedJid: [who], forwardingScore: 999, isForwarded: true}})
}
handler.help = ['listcmd']
handler.tags = ['database']
handler.command = ['listcmd']

export default handler
