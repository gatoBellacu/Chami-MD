let handler = async (m, { conn }) => {

   
conn.sendButton(m.chat, `*🍧 LISTA CMD 🍧*
\`\`\`
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `(bloqueado) ${key}` : key} : ${value.text}`).join('\n\n')}
\`\`\``, null, [['✳️MENU', `/menu`]], fkon, m)
}
handler.help = ['listcmd']
handler.tags = ['database']
handler.command = ['listcmd']

export default handler
