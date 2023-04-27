let { downloadContentFromMessage } = (await import('@adiwajshing/baileys'));
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

export async function before(m, { isAdmin, isBotAdmin }) {
 
let chat = db.data.chats[m.chat]
if (/^[.~#/\$,](read)?viewonce/.test(m.text)) return
if (!chat.antiviewonce || chat.isBanned) return
if (m.mtype == 'viewOnceMessageV2') {
let msg = m.message.viewOnceMessageV2.message
let type = Object.keys(msg)[0]
let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
let buffer = Buffer.from([])
for await (const chunk of media) {
buffer = Buffer.concat([buffer, chunk])}
if (/video/.test(type)) {
return this.sendFile(m.chat, buffer, 'error.mp4', `${msg[type].caption}\n${wm2}\n\n*⚠️ Aquí no esta permitido ocultar un vídeo*`, m)
} else if (/image/.test(type)) {
return this.sendFile(m.chat, buffer, 'error.jpg', `${msg[type].caption}\n${wm2}\n\n*⚠️ Aquí no esta permitido ocultar una foto*`, m)
}}}
