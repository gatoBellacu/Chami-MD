import { sticker } from '../lib/sticker.js'
import fetch from 'node-fetch'
import MessageType from '@adiwajshing/baileys'
let handler = async (m, { conn}) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.quoted.sender
let username = conn.getName(who)
let name = conn.getName(m.sender)
try {   
if(m.quoted?.sender) m.mentionedJid.push(m.quoted.sender)
if(!m.mentionedJid.length) m.mentionedJid.push(m.sender)
let res = await fetch('https://nekos.life/api/kiss')
let json = await res.json()
let { url } = json
let stiker = await sticker(null, url, `${name} le dio besos a ${m.mentionedJid.map((user)=>(user === m.sender)? 'alguien ': `${username}`).join(', ')}`)
conn.reply(m.chat, stiker, null, { asSticker: true })
} catch (e) { }}
handler.command = /^(kiss|skiss|kis|besos|beso)$/i
export default handler
