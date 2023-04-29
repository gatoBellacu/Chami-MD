let handler = async (m, { conn }) => {
conn.reply(m.chat, `
*🚀 LISTA CMD 🚀*

${Object.entries(global.db.data.sticker).map(([key, value], index) => `*${index + 1}.-*\n*📍 CODIGO:* ${value.locked ? `*(❌ bloqueado)* ${key}` : key}\n*✅ TEXTO/COMANDO* ${value.text}`).join('\n\n')}
`.trim(), null, {mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a, b) => [...a, ...b], [])})
}
handler.command = ['listcmd', 'cmdlist']
handler.rowner = true
export default handler
