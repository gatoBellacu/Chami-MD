import fetch from 'node-fetch'
import { lyrics, lyricsv2 } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''
if (!teks) throw `*⚠️ Ejemplo de uso correcto de comando: ${usedPrefix + command} beret ojala*`
try {
const result = await lyricsv2(teks).catch(async _ => await lyrics(teks))
let res = await fetch(global.API('https://some-random-api.ml', '/lyrics', {
title: result.author + result.title}))
if (!res.ok) throw await res.text()
let json = await res.json()
if (!json.thumbnail.genius) throw json
let letratexto =`TITULO: *${result.title}*\nAUTOR: *${result.author}*\n\nLETRA: ${result.lyrics}`.trim()
let linkresult = monospace + result.link + monospace
conn.sendButton(m.chat, letratexto, `\nURL: ${linkresult}\n${wm}`, json.thumbnail.genius, [['🎵 Descargar audio 🎵', `#play.1 ${text}`], ['🎥 Descargar video 🎥', `#play.2 ${text}`]], m)
} catch {
await m.reply('*⚠️ Error, por favor vuelva a intentarlo*')}}
handler.help = ['lirik','letra'].map(v => v + ' <Apa>')
handler.tags = ['internet']
handler.command = /^(lirik|lyrics|lyric|letra)$/i
export default handler
let mono = '`' + '`' + '`'
global.monospace = mono
