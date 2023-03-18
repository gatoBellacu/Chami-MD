export async function all(m, conn) {
   
if (!m.isGroup)
return
let chats = global.db.data.chats[m.chat]
if (!chats.expired)
return !0
if (+new Date() > chats.expired) {
let caption = `*⚠️ El bot se va del grupo! Si quiere que vuelva, use el comando #bottemporal para que vuelva al grupo!!*`
let pp = './Menu2.jpg'
    
await this.sendButton(m.chat, caption, wm, pp, [['Adios 😎', '.hastapronto']], null)
await this.groupLeave(m.chat)
chats.expired = null
}}
