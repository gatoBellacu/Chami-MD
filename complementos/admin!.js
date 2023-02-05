let handler = async (m, { conn, isAdmin }) => {  
if (m.fromMe) return
if (isAdmin) throw '*[❗] Hola creador, cómo esta? usted ya es admin en este grupo*'
try {  
await conn.groupParticipantsUpdate(m.chat, [m.sender], "promote")
} catch {
await m.reply('*[❗] Lo siento, no fue posible darle admin*')}}
handler.command = /^autoadmin|admin!$/i
handler.rowner = true
handler.group = true
handler.botAdmin = true
export default handler
