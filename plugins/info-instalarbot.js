import { generateWAMessageFromContent } from '@adiwajshing/baileys'
let handler  = async (m, { conn }) => {
let texto = `
*—◉ Muy pronto` 
let aa = { quoted: m, userJid: conn.user.jid }
let prep = generateWAMessageFromContent(m.chat, { extendedTextMessage: { text: `${texto}`.trim(), contextInfo: { externalAdReply: { title: 'Curiositybug', body: null, thumbnail: imagen1, sourceUrl: 'https://github.com/Azami19/CuriosityBot-MD' }, mentionedJid: [m.sender] }}}, aa)
conn.relayMessage(m.chat, prep.message, { messageId: prep.key.id, mentions: [m.sender] })  
}
handler.command = /^(instalarbot)/i
export default handler
