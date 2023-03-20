let handler = async (m, { conn, text, usedPrefix, command, customPrefix }) => {
let stikerwelgc = "./storage/welgc.webp"
let stikerbyegc = "./storage/byegc.webp"
if (command == 'welcomegc') {
conn.sendFile(m.chat, stikerwelgc, 'sticker.webp', null, m, false, { 
contextInfo: { externalAdReply: { title: 'CutiosityBot-MD', body: '@Azami19', sourceUrl: `https://github.com/Azami19/CuriosityBotV1-MD`, thumbnail: img1}}})  
}
if (command == 'byegc') {
conn.sendFile(m.chat, stikerbyegc, 'sticker.webp', null, m, false, { 
contextInfo: { externalAdReply: { title: 'CuriosityBot-MD', body: '@Azami19', sourceUrl: `https://github.com/Azami19/CuriosityBotV1-MD`, thumbnail: img1}}})
}}
handler.command = ['welcomegc', 'byegc']
export default handler
function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]}
