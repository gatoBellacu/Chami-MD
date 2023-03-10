require('./config')
"use strict";
const { BufferJSON, WA_DEFAULT_EPHEMERAL, proto, prepareWAMessageMedia, areJidsSameUser, getContentType, processSenderKeyMessage } = require('@adiwajshing/baileys')
const { downloadContentFromMessage, generateWAMessage, generateWAMessageFromContent, MessageType, buttonsMessage } = require("@adiwajshing/baileys")
const { exec, spawn } = require("child_process");
const { color, bgcolor, pickRandom, randomNomor } = require('./function/Data_Server_Bot/Console_Data')
const { removeEmojis, bytesToSize, getBuffer, fetchJson, getRandom, getGroupAdmins, runtime, sleep, makeid, isUrl, generateProfilePicture } = require("./function/func_Server");
const { TelegraPh, UploadFileUgu, AnonFiles } = require("./function/uploader_Media");
const { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('./function/func_Addlist');
const { media_JSON, mess_JSON, setting_JSON, antilink_JSON, db_user_JSON, server_eror_JSON, welcome_JSON, db_menfes_JSON, db_respon_list_JSON, auto_downloadTT_JSON } = require('./function/Data_Location.js')
const { mediafireDl } = require('./function/scrape_Mediafire')
const { webp2mp4File } = require("./function/Webp_Tomp4")
const { cerpen } = require('./function/Search_Cerpen')
const { bioskop, bioskopNow, latinToAksara, aksaraToLatin, gempa, gempaNow, jadwalTV, listJadwalTV, jadwalsholat} = require ('@bochilteam/scraper') 
const { 
listmenu,
verify_teksi,
textmenu,
chatgpttext,
cuevanatxt,
antilinkmg,
antilinkmga,
antilinkmsgk,
tiktokautotxt,
packnamestk,
authorstk,
roommsg,
roommsgn,
roommsgc,
mediafiretxt,
roommsgex,
roommsginvit,
setnametxtbot,
setnametxtuser,
ytmp3txtx,
ytmp4txtx,
tourl,
infogrupo,
scpnum,
usernamew,
npm_text,
textGitthub,
stkfreem,
rulesBot,
text_playmp3,
soundcm,
soundctxt,
text_playmp4,
infobott,
playsrch,
roomtxt,
tiktoktxt,
menutxtx,
donasiBot,
infoOwner, 
aufnc,
cuturl,
cuturltini,
stkfree,
daftarprem,
checkpremtxt
} = require('./help')
const { jadibot, listJadibot } = require('./function/jadibot')

// database tbs
const { philips } = require('./function/virtex/philips')
const { virus } = require('./function/virtex/virus')
const { ngazap } = require('./function/virtex/ngazap')

const fs = require("fs");
const ms = require("ms");
const chalk = require('chalk');
const axios = require("axios");
const { load } = require('cheerio')

const os = require('os');
const qs = require("querystring");
const fetch = require("node-fetch");
const colors = require('colors/safe');
const ffmpeg = require("fluent-ffmpeg");
const moment = require("moment-timezone");
const { Primbon } = require("scrape-primbon");
const primbon = new Primbon()

const Exif = require("./function/set_WM_Sticker")
const exif = new Exif()

const msgFilter = require("./function/func_Spam");
const { stalkff, stalkml } = require("./function/func_Stalker");
const mekih = fs.readFileSync ('./function/mod.jpg')

let orang_spam = []
let medianya = []



const mess = mess_JSON
const antilink = antilink_JSON
const db_user = db_user_JSON
const server_eror = server_eror_JSON
const welcomeJson = welcome_JSON
const db_menfes = db_menfes_JSON
const db_respon_list = db_respon_list_JSON
const auto_downloadTT = auto_downloadTT_JSON


const { Configuration, OpenAIApi } = require("openai");
const { checkPrime } = require('crypto');



const configuration = new Configuration({ apiKey: global.apikeyOpenAI, });

	const openai = new OpenAIApi(configuration);

moment.tz.setDefault("America/Santiago").locale("es");
module.exports = async(conn, msg, m, _setting, _store) => {
try {
const { type, quotedMsg, mentioned, now, fromMe, isBaileys } = msg
if (msg.isBaileys) return
const jam = moment.tz('America/Santiago').format('HH:mm:ss')
const tanggal = moment().tz("America/Santiago").format("ll")
let dt = moment(Date.now()).tz('America/Santiago').locale('es').format('a')
const ucapanWaktu = "Feliz "+dt.charAt(0).toUpperCase() + dt.slice(1)
const content = JSON.stringify(msg.message)
const from = msg.key.remoteJid
const time = moment(new Date()).format("HH:mm");
var chats = (type === 'conversation' && msg.message.conversation) ? msg.message.conversation : (type === 'imageMessage') && msg.message.imageMessage.caption ? msg.message.imageMessage.caption : (type === 'videoMessage') && msg.message.videoMessage.caption ? msg.message.videoMessage.caption : (type === 'extendedTextMessage') && msg.message.extendedTextMessage.text ? msg.message.extendedTextMessage.text : (type === 'buttonsResponseMessage') && quotedMsg.fromMe && msg.message.buttonsResponseMessage.selectedButtonId ? msg.message.buttonsResponseMessage.selectedButtonId : (type === 'templateButtonReplyMessage') && quotedMsg.fromMe && msg.message.templateButtonReplyMessage.selectedId ? msg.message.templateButtonReplyMessage.selectedId : (type === 'messageContextInfo') ? (msg.message.buttonsResponseMessage?.selectedButtonId || msg.message.listResponseMessage?.singleSelectReply.selectedRowId) : (type == 'listResponseMessage') && quotedMsg.fromMe && msg.message.listResponseMessage.singleSelectReply.selectedRowId ? msg.message.listResponseMessage.singleSelectReply.selectedRowId : ""
if (chats == undefined) { chats = '' }
const prefix = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(chats) ? chats.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : '#'
const isGroup = msg.key.remoteJid.endsWith('@g.us')
const sender = isGroup ? (msg.key.participant ? msg.key.participant : msg.participant) : msg.key.remoteJid
const isOwner = [`${ownerNumber}`,"56973856790@s.whatsapp.net","529996125657@s.whatsapp.net","59895633881@s.whatsapp.net"].includes(sender) ? true : false
const pushname = msg.pushName
const body = chats.startsWith(prefix) ? chats : ''
const args = body.trim().split(/ +/).slice(1);
const q = args.join(" ");
const isCommand = body.startsWith(prefix);
const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
const isCmd = isCommand ? body.slice(1).trim().split(/ +/).shift().toLowerCase() : null;
const botNumber = conn.user.id.split(':')[0] + '@s.whatsapp.net'

const groupMetadata = isGroup ? await conn.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupId = isGroup ? groupMetadata.id : ''
const participants = isGroup ? await groupMetadata.participants : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
const isGroupAdmins = groupAdmins.includes(sender)
const groupOwner = isGroup ? groupMetadata.owner : 'Error'
const groupDesc = isGroup ? groupMetadata.desc : 'No tiene'

const isWelcome = isGroup ? welcomeJson.includes(from) : false
const isAntiLink = antilink.includes(from) ? true : false
const isAutoDownTT = auto_downloadTT.includes(from) ? true : false


const quoted = msg.quoted ? msg.quoted : msg
var dataGroup = (type === 'buttonsResponseMessage') ? msg.message.buttonsResponseMessage.selectedButtonId : ''
var dataPrivate = (type === "messageContextInfo") ? (msg.message.buttonsResponseMessage?.selectedButtonId || msg.message.listResponseMessage?.singleSelectReply.selectedRowId) : ''
const isButton = dataGroup.length !== 0 ? dataGroup : dataPrivate
var dataListG = (type === "listResponseMessage") ? msg.message.listResponseMessage.singleSelectReply.selectedRowId : ''
var dataList = (type === 'messageContextInfo') ? (msg.message.buttonsResponseMessage?.selectedButtonId || msg.message.listResponseMessage?.singleSelectReply.selectedRowId) : ''
const isListMessage = dataListG.length !== 0 ? dataListG : dataList

const isImage = (type == 'imageMessage')
const isQuotedMsg = (type == 'extendedTextMessage')
const isMedia = (type === 'imageMessage' || type === 'videoMessage');
const isQuotedImage = isQuotedMsg ? content.includes('imageMessage') ? true : false : false
const isVideo = (type == 'videoMessage')
const isQuotedVideo = isQuotedMsg ? content.includes('videoMessage') ? true : false : false
const isSticker = (type == 'stickerMessage')
const isQuotedSticker = isQuotedMsg ? content.includes('stickerMessage') ? true : false : false 
const isQuotedAudio = isQuotedMsg ? content.includes('audioMessage') ? true : false : false
	
const mentionByTag = type == "extendedTextMessage" && msg.message.extendedTextMessage.contextInfo != null ? msg.message.extendedTextMessage.contextInfo.mentionedJid : []
const mentionByReply = type == "extendedTextMessage" && msg.message.extendedTextMessage.contextInfo != null ? msg.message.extendedTextMessage.contextInfo.participant || "" : ""
const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
mention != undefined ? mention.push(mentionByReply) : []
const mentionUser = mention != undefined ? mention.filter(n => n) : []

try {
var pp_user = await conn.profilePictureUrl(sender, 'image')
} catch {
var pp_user = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
try {
    var ppgcc = await conn.profilePictureUrl(from, 'image')
    } catch {
    var ppgcc = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
    }
const PathAuto = "./function/menuPath/"

function mentions(teks, mems = [], id) {
if (id == null || id == undefined || id == false) {
let res = conn.sendMessage(from, { text: teks, mentions: mems })
return res
} else {
let res = conn.sendMessage(from, { text: teks, mentions: mems }, { quoted: msg })
return res
}
}

function monospace(string) {
return '```' + string + '```'
}

function parseMention(text = '') {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}

const virusnya = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "" } : {}) 
},
"message": {
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/Aj85sbZCtNtq1cJ6JupaBUTKfgrl2zXRXGvVNWAbFnsp.enc",
"mimetype": "application/octet-stream",
"fileSha256": "TSSZu8gDEAPhp8vjdtJS/DXIECzjrSh3rmcoHN76M9k=",
"fileLength": "64455",
"pageCount": 1,
"mediaKey": "P32GszzU5piUZ5HKluLD5h/TZzubVJ7lCAd1PIz3Qb0=",
"fileName": `AURORA KILLER ${ngazap(prefix)}`,
"fileEncSha256": "ybdZlRjhY+aXtytT0G2HHN4iKWCFisG2W69AVPLg5yk="
}}}

const fakeprb = { 
    key: {
    fromMe: false, 
    participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "" } : {}) 
    },
    "message": {
    "documentMessage": {
    "url": "https://mmg.whatsapp.net/d/f/Aj85sbZCtNtq1cJ6JupaBUTKfgrl2zXRXGvVNWAbFnsp.enc",
    "mimetype": "application/zip",
    "fileSha256": "TSSZu8gDEAPhp8vjdtJS/DXIECzjrSh3rmcoHN76M9k=",
    "fileLength": "64455",
    "pageCount": 1,
    "mediaKey": "P32GszzU5piUZ5HKluLD5h/TZzubVJ7lCAd1PIz3Qb0=",
    "fileName": `AURORA KILLER`,
    "fileEncSha256": "ybdZlRjhY+aXtytT0G2HHN4iKWCFisG2W69AVPLg5yk="
    }}}
    
    

const q1 = q.split('&')[0];
const q2 = q.split('&')[1];
const q3 = q.split('&')[2];	

const isEmoji = (emo) => {
let emoji_ranges = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;
let regexEmoji = new RegExp(emoji_ranges, 'gi');
return emo.match(regexEmoji)
}

const reply = (teks) => {conn.sendMessage(from, { text: teks }, { quoted: msg })}
const tempButton = async (remoteJid, text, footer, content) => {
    const templateMessage = { viewOnceMessage: { message: { templateMessage: { hydratedTemplate: { hydratedContentText: text, hydratedContentFooter: footer, hydratedButtons: content, }, }, }, }, };
    const sendMsg = await conn.relayMessage(remoteJid, templateMessage, {}); 
    };
if (isGroup && isAntiLink) {
if (!isBotGroupAdmins) return
var linkgce = await conn.groupInviteCode(from)
if (chats.includes(`https://chat.whatsapp.com/${linkgce}`)) {
reply(antilinkmg())
} else if (isUrl(chats)) {
if (isGroupAdmins) return reply(antilinkmga())
if (fromMe) return
if (isOwner) return
await conn.sendMessage(from, { delete: msg.key })
mentions(antilinkmsgk(sender), [sender])
await sleep(3000)
conn.groupParticipantsUpdate(from, [sender], "remove")
} else {
}
}


if (isGroup && isAutoDownTT){
if (chats.match(/(tiktok.com)/gi)){
    reply(mess.wait)
await sleep(3000)
var tt_res = await fetchJson(`https://saipulanuar.ga/api/download/tiktok2?url=${chats}&apikey=jPHjZpQF`)
reply(tiktokautotxt(tt_res,chats))
conn.sendMessage(from,{video:{url:tt_res.result.video.link1}, caption:mess.done}, {quotes:msg})
}}

if (!isCmd && isGroup && isAlreadyResponList(from, chats, db_respon_list)) {
var get_data_respon = getDataResponList(from, chats, db_respon_list)
if (get_data_respon.isImage === false) {
conn.sendMessage(from, { text: sendResponList(from, chats, db_respon_list) }, {
quoted: msg
})
} else {
conn.sendMessage(from, { image: await getBuffer(get_data_respon.image_url), caption: get_data_respon.response }, {
quoted: msg
})
}
}

const sendContact = (_jid, numbers, name, quoted, mn) => {
let number = numbers.replace(/[^0-9]/g, '')
const vcard = 'BEGIN:VCARD\n' 
+ 'VERSION:3.0\n' 
+ 'FN:' + name + '\n'
+ 'ORG:;\n'
+ 'TEL;type=CELL;type=VOICE;waid=' + number + ':+' + number + '\n'
+ 'END:VCARD'
return conn.sendMessage(from, { contacts: { displayName: name, contacts: [{ vcard }] }, mentions : mn ? mn : []},{ quoted: quoted })
}

function toRupiah(angka) {
var saldonyeini = '';
var angkarev = angka.toString().split('').reverse().join('');
for (var i = 0; i < angkarev.length; i++)
if (i % 3 == 0) saldonyeini += angkarev.substr(i, 3) + '.';
return '' + saldonyeini.split('', saldonyeini.length - 1).reverse().join('');
}

let cekUser = (satu, dua) => { 
let x1 = false
Object.keys(db_user).forEach((i) => {
if (db_user[i].id == dua){x1 = i}})
if (x1 !== false) {
if (satu == "id"){ return db_user[x1].id }
if (satu == "name"){ return db_user[x1].name }
if (satu == "seri"){ return db_user[x1].seri }
if (satu == "premium"){ return db_user[x1].premium }
}
if (x1 == false) { return null } 
}

const namensi = `${cekUser("name", sender)}`
const pname = `${packnamestk()}`
const athor = `${authorstk(namensi,footer,ownerName)}`

let setUser = (satu, dua, tiga) => { 
Object.keys(db_user).forEach((i) => {
if (db_user[i].id == dua){
if (satu == "±id"){ db_user[i].id = tiga
fs.writeFileSync('./database/pengguna.json', JSON.stringify(db_user))} 
if (satu == "±name"){ db_user[i].name = tiga 
fs.writeFileSync('./database/pengguna.json', JSON.stringify(db_user))} 
if (satu == "±seri"){ db_user[i].seri = tiga 
fs.writeFileSync('./database/pengguna.json', JSON.stringify(db_user))} 
if (satu == "±premium"){ db_user[i].premium = tiga 
fs.writeFileSync('./database/pengguna.json', JSON.stringify(db_user))}
}})
}

const cekPesan = (satu, dua) => { 
let x2 = false
Object.keys(db_menfes).forEach((i) => {
if (db_menfes[i].id == dua){x2 = i}})
if (x2 !== false) {
if (satu == "id"){ return db_menfes[x2].id }
if (satu == "teman"){ return db_menfes[x2].teman }
}
if (x2 == false) { return null } 
}

const setRoom = (satu, dua, tiga) => { 
Object.keys(db_menfes).forEach((i) => {
if (db_menfes[i].id == dua){
if (satu == "±id"){ db_menfes[i].id = tiga
fs.writeFileSync('./database/menfess.json', JSON.stringify(db_menfes))} 
if (satu == "±teman"){ db_menfes[i].teman = tiga 
fs.writeFileSync('./database/menfess.json', JSON.stringify(db_menfes))} 
}})
}

conn.readMessages([msg.key])

if (command === 'buatroom') {
if (cekPesan("id", sender) !== null) return reply(roommsg())
if (!fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
var deposit_object = {
id: sender,
session: "buatroom",
data: {
penerima: ""
}
}
fs.writeFileSync(PathAuto + sender.split("@")[0] + ".json", JSON.stringify(deposit_object, null, 2))
reply(roommsgn())
} else {
reply(roommsgc())
}
}

if (fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
if (!chats.startsWith(prefix) && !msg.key.fromMe) {
let data_deposit = JSON.parse(fs.readFileSync(PathAuto + sender.split("@")[0] + ".json"))
if (data_deposit.session === "buatroom") {
if (chats.length === 0) return;

if (isNaN(chats)) return reply(mess.OnlyNums)
data_deposit.data.penerima = Number(chats);
if (data_deposit.data.penerima == sender.split('@')[0]) return reply(mess.error.othnum)
if (data_deposit.data.penerima == botNumber.split('@')[0]) return
var cekap = await conn.onWhatsApp(chats+"@s.whatsapp.net")
if (cekap.length == 0) return reply(mess.error.noc)
data_deposit.session = "number_orang";
fs.writeFileSync(PathAuto + sender.split("@")[0] + ".json", JSON.stringify(data_deposit, null, 3));
var penerimanyo = data_deposit.data.penerima +'@s.whatsapp.net'
mentions(roommsgex(penerimanyo), [penerimanyo])
let roomC = `#${makeid(10)}`
fs.unlinkSync(PathAuto + sender.split('@')[0] + '.json')

let btn_room = [{ buttonId: `${prefix}buat_room_chat ${sender}|${data_deposit.data.penerima}@s.whatsapp.net|${roomC}`, buttonText: { displayText: 'Aceptar️' }, type: 1 }]
var but_room = {
text: roommsginvit(),
footer: footerbut,
buttons: btn_room,
mentions: [penerimanyo],
headerType: 1
}
conn.sendMessage(`${data_deposit.data.penerima}@s.whatsapp.net`, but_room)
}
}



} else if (command === 'setnamabot') {
if (!isOwner) return reply(mess.OnlyOwner)
if (!fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
var deposit_object = {
ID: require("crypto").randomBytes(5).toString("hex").toUpperCase(),
session: "setnamebot",
data: {
nama_baru: ""
}
}
fs.writeFileSync(PathAuto + sender.split("@")[0] + ".json", JSON.stringify(deposit_object, null, 2))
reply(setnametxtbot())
} else {
    reply(setnametxtbot())
}
}

if (fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
if (!chats.startsWith(prefix) && !msg.key.fromMe) {
let data_deposit = JSON.parse(fs.readFileSync(PathAuto + sender.split("@")[0] + ".json"))

}
} else if (command === 'bitly_short') {
if (!fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
var deposit_object = {
ID: require("crypto").randomBytes(5).toString("hex").toUpperCase(),
session: "bitly_shortlink",
data: {
trannss: ""
}
}
fs.writeFileSync(PathAuto + sender.split("@")[0] + ".json", JSON.stringify(deposit_object, null, 2))

reply(cuturl())
} else {
reply(mess.errro.Iv)
}
}

if (fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
if (!chats.startsWith(prefix) && !msg.key.fromMe) {
let data_deposit = JSON.parse(fs.readFileSync(PathAuto + sender.split("@")[0] + ".json"))
if (data_deposit.session === "bitly_shortlink") {
if (chats.length === 0) return;
data_deposit.data.trannss = (chats)
let ii = await fetchJson(`https://danzzapi.xyz/api/shortlink/bitly?url=${data_deposit.data.trannss}&apikey=danzz`)
if (ii.status == false) return reply(mess.error.Iv)
data_deposit.session = "input_texttttranss";
fs.writeFileSync(PathAuto + sender.split("@")[0] + ".json", JSON.stringify(data_deposit, null, 3));
reply(cuturlmsg(time,ii,data_deposit))
fs.unlinkSync(PathAuto + sender.split('@')[0] + '.json')
}
}
} else if (command === 'tinyurl_short') {
if (!fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
var deposit_object = {
ID: require("crypto").randomBytes(5).toString("hex").toUpperCase(),
session: "tinyurl_shortlink",
data: {
trannss: ""
}
}
fs.writeFileSync(PathAuto + sender.split("@")[0] + ".json", JSON.stringify(deposit_object, null, 2))
reply(cuturl())
} else {
reply(mess.error.Iv)
}
}

if (fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
if (!chats.startsWith(prefix) && !msg.key.fromMe) {
let data_deposit = JSON.parse(fs.readFileSync(PathAuto + sender.split("@")[0] + ".json"))
if (data_deposit.session === "tinyurl_shortlink") {
if (chats.length === 0) return;
data_deposit.data.trannss = (chats)
let ii = await fetchJson(`https://danzzapi.xyz/api/shortlink/tinyurl?url=${data_deposit.data.trannss}&apikey=danzz`)
if (ii.status == false) return reply(mess.error.Iv)
data_deposit.session = "input_texttttranss";
fs.writeFileSync(PathAuto + sender.split("@")[0] + ".json", JSON.stringify(data_deposit, null, 3));
reply(cuturltini(time,ii,data_deposit))
fs.unlinkSync(PathAuto + sender.split('@')[0] + '.json')
}
}
} else if (command === 'cuttly_short') {
if (!fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
var deposit_object = {
ID: require("crypto").randomBytes(5).toString("hex").toUpperCase(),
session: "cuttly_shortlink",
data: {
trannss: ""
}
}
fs.writeFileSync(PathAuto + sender.split("@")[0] + ".json", JSON.stringify(deposit_object, null, 2))
reply(cuturl())
} else {
reply(mess.error.Iv)
}
}

if (fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
if (!chats.startsWith(prefix) && !msg.key.fromMe) {
let data_deposit = JSON.parse(fs.readFileSync(PathAuto + sender.split("@")[0] + ".json"))
if (data_deposit.session === "cuttly_shortlink") {
if (chats.length === 0) return;
data_deposit.data.trannss = (chats)
let ii = await fetchJson(`https://danzzapi.xyz/api/shortlink/cuttly?url=${data_deposit.data.trannss}&apikey=danzz`)
if (ii.status == false) return reply(mess.error.Iv)
data_deposit.session = "input_texttttranss";
fs.writeFileSync(PathAuto + sender.split("@")[0] + ".json", JSON.stringify(data_deposit, null, 3));
reply(cuturlcut(time,ii,data_deposit))
fs.unlinkSync(PathAuto + sender.split('@')[0] + '.json')
}
}
}
 if (command === 'stalknpm') {
if (!fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
var deposit_object = {
ID: require("crypto").randomBytes(5).toString("hex").toUpperCase(),
session: "stalknpm",
data: {
id_nya: ""
}
}
fs.writeFileSync(PathAuto + sender.split("@")[0] + ".json", JSON.stringify(deposit_object, null, 2))
reply(mess.errpr.ejs)
} else {
reply(usernamew())
}
}

if (fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
if (!chats.startsWith(prefix) && !msg.key.fromMe) {
let data_deposit = JSON.parse(fs.readFileSync(PathAuto + sender.split("@")[0] + ".json"))
if (data_deposit.session === "stalknpm") {
data_deposit.data.id_nya = (chats)

var x = await fetchJson(`https://api.popcat.xyz/npm?q=${data_deposit.data.id_nya}`)
if (x.error) return reply(mess.error.api)
data_deposit.session = "use_npmstalk";
fs.writeFileSync(PathAuto + sender.split("@")[0] + ".json", JSON.stringify(data_deposit, null, 3));
reply(npm_text(x))
fs.unlinkSync(PathAuto + sender.split('@')[0] + '.json')
}
}
} else if (command === 'stalkgithub') {
if (!fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
var deposit_object = {
ID: require("crypto").randomBytes(5).toString("hex").toUpperCase(),
session: "stalkgithub",
data: {
id_nya: ""
}
}
fs.writeFileSync(PathAuto + sender.split("@")[0] + ".json", JSON.stringify(deposit_object, null, 2))
reply(mess.error.ejs)
} else {
reply(usernamew())
}
}

if (fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
if (!chats.startsWith(prefix) && !msg.key.fromMe) {
let data_deposit = JSON.parse(fs.readFileSync(PathAuto + sender.split("@")[0] + ".json"))
if (data_deposit.session === "stalkgithub") {
data_deposit.data.id_nya = (chats)

var git = await fetchJson(`https://api.github.com/users/${data_deposit.data.id_nya}`)
data_deposit.session = "input_username_github";
fs.writeFileSync(PathAuto + sender.split("@")[0] + ".json", JSON.stringify(data_deposit, null, 3));
reply(textGitthub(git))
fs.unlinkSync(PathAuto + sender.split('@')[0] + '.json')
}
}
} else if (command === 'stalkff') {
if (!fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
var deposit_object = {
ID: require("crypto").randomBytes(5).toString("hex").toUpperCase(),
session: "stalkff",
data: {
id_nya: ""
}
}
fs.writeFileSync(PathAuto + sender.split("@")[0] + ".json", JSON.stringify(deposit_object, null, 2))
reply(stkfree())
} else {
reply(stkfree())
}
}


if (fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
if (!chats.startsWith(prefix) && !msg.key.fromMe) {
let data_deposit = JSON.parse(fs.readFileSync(PathAuto + sender.split("@")[0] + ".json"))
if (data_deposit.session === "stalkff") {
if (chats.length === 0) return;
if (isNaN(chats)) return reply("Solo numeros!")
data_deposit.data.id_nya = Number(chats);
let stalk_freefire = await stalkff(data_deposit.data.id_nya)
if (stalk_freefire.status == 404) return reply(mess.error.api)
data_deposit.session = "input_id_ff";
fs.writeFileSync(PathAuto + sender.split("@")[0] + ".json", JSON.stringify(data_deposit, null, 3));
reply(stkfreem(data_deposit,stalk_freefire))
fs.unlinkSync(PathAuto + sender.split('@')[0] + '.json')
}
}
}

msgFilter.ResetSpam(orang_spam)

const spampm = () => {
console.log(color('-[SPAM]-', 'red'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'de', color(pushname))
msgFilter.addSpam(sender, orang_spam)
reply(mess.error.spam)
}

const spamgr = () => {
console.log(color('~>[SPAM]', 'red'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'de', color(pushname), 'en', color(groupName))
msgFilter.addSpam(sender, orang_spam)
reply(mess.error.spam)
}

if (isCmd && msgFilter.isFiltered(sender) && !isGroup) return spampm()
if (isCmd && msgFilter.isFiltered(sender) && isGroup) return spamgr()
if (isCmd && args.length < 1 && !isOwner) msgFilter.addFilter(sender)

//if (sender.startsWith('60')) {
///return conn.updateBlockStatus(sender, 'block')
//}

if (isGroup && isCmd && !fromMe) {
console.log(colors.green.bold("-[Grupo]-") + " " + colors.brightCyan(time,) + " " + colors.black.bgYellow(command) + " " + colors.green("de") + " " + colors.blue(groupName));
}

if (!isGroup && isCmd && !fromMe) {
console.log(colors.green.bold("-[Privado]-") + " " + colors.brightCyan(time,) + " " + colors.black.bgYellow(command) + " " + colors.green("de") + " " + colors.blue(pushname));
}

switch(command) {
    
 case 'verify':{
if (cekUser("id", sender) !== null) return reply(mess.registrado)
var res_us = `${makeid(10)}`
var user_name = `#AR${makeid(5)}`
let object_user = {"id": sender, "name": user_name, "seri": res_us, "premium": false }
db_user.push(object_user)
fs.writeFileSync('./database/pengguna.json', JSON.stringify(db_user, 2, null))
mentions(`Usuario @${sender.split("@")[0]}`, [sender])
var thgxv = '```'
await sleep(1500)
var verify_teks =`${verify_teksi(sender,user_name,res_us,thgxv)}`
var buttonMessage = {
text: verify_teks,
footer: 'Haga clic en el botón para ver el menú.',
mentions: [sender],
buttons: [
{ buttonId: '#menu', buttonText: {displayText: '️⋮☰ 𝗠𝗘𝗡𝗨'}, type: 1}
],
headerType: 1
}
conn.sendMessage(from, buttonMessage, {quoted:msg})
}
break
case 'gcbot':{
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
var menu_list =`${linkgcbot}`
reply(menu_list)
}
break
case 'allmenu':{
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)

var no = 1
var ad = 1
var namenya = `${cekUser("name", sender)}`
var premnya = `${cekUser("premium", sender)? 'Si':'No'}`
var usernya = `${("id", db_user).length}`
var romnya = `${db_menfes.length}`
var moore = String.fromCharCode(8206)
var readmoore = moore.repeat(4001)
var menu_nya =`${listmenu(sender,prefix,ad,namenya,premnya,usernya,romnya,readmoore,tanggal,jam,no)}`
var thumb = fs.readFileSync("./media/theme/menupic.jpg")

var documentsm = [doc1,doc2,doc3,doc4,doc5,doc6]
var docsm = pickRandom(documentsm)
var buttons = [{ buttonId: '#owner', buttonText: { displayText: 'Owner' }, type: 1 },{ buttonId: '#infobot', buttonText: { displayText: 'Info' }, type: 1 },{ buttonId: 'tqto', buttonText: { displayText: 'Creditos' }, type: 1 }]
var menutext =`${textmenu(sender,namenya,premnya,usernya,romnya,tanggal,jam)}`
let buttonMessage = {
document: fs.readFileSync('./media/theme/menudoc.xlsx'),
fileName : `${botName}`,
mimetype: `${docsm}`,
fileLength: '99999999999999',
pageCount: '1000000000',
caption: menutext,
footer: `${readmoore}${menu_nya}`,
//footer: '*_Aurora Multi Device Beta_*',
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: `${ownerName}`,
body: 'Mi canal de YouTube', 
showAdAttribution: true,
thumbnail: thumb,
mediaType: 2,
mediaUrl: youtubel,
sourceUrl: youtubel
}}
}
conn.sendMessage(from, buttonMessage, {quoted: msg})
}
break

case 'infoowner':
case 'ownerinfo':{
reply(infoOwner())
}
break

case 'topanimes':

let animelist = await fetchJson('https://danzzapi.xyz/api/anime/topanime?apikey=danzz')
reply(`#${animelist.result[0].rank} ${animelist.result[0].title}
#${animelist.result[1].rank} ${animelist.result[1].title}
#${animelist.result[2].rank} ${animelist.result[2].title}
#${animelist.result[3].rank} ${animelist.result[3].title}
#${animelist.result[4].rank} ${animelist.result[4].title}`)
break

case 'chatgpt':
    if (cekUser("premium", sender) == false) return reply(mess.OnlyPrem)
    reply(mess.wait)
    let respg = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: q,
        temperature: 0.3,
        max_tokens: 3000,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0
    });
 conn.sendMessage(from, { text: `${chatgpttext()}` + respg.data.choices[0].text }, { quoted: msg })    
break

case 'aurora':
    if (!isOwner) return reply(mess.OnlyOwner)
    if (!q) return reply(mess.aurora.ntext)
const regex = /podrias enviarme una imagen de loli?|quiero loli|quero loli|loli|quiero otra|quiero mas|otra|mas|enviame otra|toi tite|enviame lolis|quiero lolis|loli|quisiera una loli uwu|descarga fotos de lolis y enviame la mejor/
   
   const resultados = regex.test(q)
   if (resultados == true && isOwner) {
    reply(mess.wait)
    let eeks = await fetchJson(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/loli.json`)
let randoma = eeks[Math.floor(Math.random() * eeks.length)]
conn.sendMessage(from, { image: { url: randoma }, caption: `<3` }, { quoted: msg })
} else {
    const regex2 = /házlo sticker|podrías hacerlo sticker?|crea un sticker|sticker|quisiera el sticker|quisiera hacerlo sticker/
    const resultado2 = regex2.test(q)
    if (resultado2 == true && isOwner) {
        reply(mess.wait)
        if (isImage || isQuotedImage){
        await conn.downloadAndSaveMediaMessage(msg, "image", `./sticker/${sender.split("@")[0]}.jpeg`)
        var media = fs.readFileSync(`./sticker/${sender.split("@")[0]}.jpeg`)
        var opt = { packname: pname, author: athor }
        conn.sendImageAsSticker(from, media, msg, opt)
        fs.unlinkSync(`./sticker/${sender.split("@")[0]}.jpeg`)
        } else if (isVideo || isQuotedVideo) {
        var media = await conn.downloadAndSaveMediaMessage(msg, 'video', `./sticker/${sender}.jpeg`)
        var opt = { packname: pname, author: athor }
        conn.sendImageAsSticker(from, media, msg, opt)
        fs.unlinkSync(media)
        } else {
            reply(mess.error.api)
        }
    } else {
        const regex3 = /házla image|podrías enviarme la imagen?|ahora dame la foto|quiero la foto|quisiera que la conviertas en imagen de nuevo/
        const resultado3 = regex3.test(q)
        if (resultado3 == true && isOwner) {

        await conn.downloadAndSaveMediaMessage(msg, "sticker", `./sticker/${sender.split("@")[0]}.webp`)
let bufferw = fs.readFileSync(`./sticker/${sender.split("@")[0]}.webp`)
var rand1 = 'sticker/'+getRandom('.webp')
var rand2 = 'sticker/'+getRandom('.png')
fs.writeFileSync(`./${rand1}`, bufferw)
reply(mess.wait)
exec(`ffmpeg -i ./${rand1} ./${rand2}`, (err) => {
fs.unlinkSync(`./${rand1}`)
if (err) return reply(mess.error.api)
conn.sendMessage(from, {caption: mess.done, image: fs.readFileSync(`./${rand2}`) }, { quoted: msg })
fs.unlinkSync(`./${rand2}`)
fs.unlinkSync(`./sticker/${sender.split("@")[0]}.webp`)
})
        
    } else {
        const regexf = /gracias/
        const resultadof = regexf.test(q)
        if (resultadof == true && isOwner) {
            reply(mess.aurora.vale)            
    } else {
            const regexgpt = /investiga|usa chatgpt|chatgpt|openai|chat gpt|investiga/
            const resultadogpt = regexgpt.test(q)
            if (resultadogpt == true && isOwner) {
                let respg = await openai.createCompletion({
                    model: "text-davinci-003",
                    prompt: q,
                    temperature: 0.3,
                    max_tokens: 3000,
                    top_p: 1.0,
                    frequency_penalty: 0.0,
                    presence_penalty: 0.0
                });
    
 conn.sendMessage(from, { text: `${chatgpttext}` + respg.data.choices[0].text }, { quoted: msg })    
        } else {
        const regexcu = /cuenta que puedes hacer|que sabes hacer|que puedes hacer|tus funciones|dile que sabes hacer|podrias contarle sobre ti?/
        const resultadocu = regexcu.test(q)
        if (resultadocu == true && isOwner) {
           
conn.sendMessage(from, { text: `${aufnc()}` }, { quoted: msg })      
        } else {

        if (isOwner) {
            var simi = await fetchJson(`https://api.simsimi.net/v2/?text=${q}&lc=es`)
var sisuc = simi.success

        reply(`xd ${sisuc}`)
}
    }
}
    }
    
    }
}
}

break



case 'sadcat':
    if (!q) return reply(mess.error.ejs)
    reply(mess.wait)
    conn.sendMessage(from, { image: {url: `https://api.popcat.xyz/sadcat?text=${q}` }, caption: mess.done}, {quoted:msg})    
break    

case 'letra':
    if (!q) return reply(mess.ejyt)
    reply(mess.wait)
    var lyricsa = await fetchJson(`https://api.popcat.xyz/lyrics?song=${q}`)
    var txtliric = `${liricstxt(lyricsa)}`
    if (lyricsa.error == 'Song not found!') return reply(mess.error.api)     
    conn.sendMessage(from, { image: {url: lyricsa.image }, caption: txtliric}, {quoted:msg})    
break    
case 'memepooh':
    if (!q) return reply(mess.error.ejdbtxt)
    reply(mess.wait)
    let q1 = q.split('|')[0]
    let q2 = q.split('|')[1]
        conn.sendMessage(from, { image: {url: `https://api.popcat.xyz/pooh?text1=${q1}&text2=${q2}` }, caption: ''}, {quoted:msg})    
break    
case 'alert':
    if (!q) return reply(mess.error.ejs)
        reply(mess.wait)
        conn.sendMessage(from, { image: {url: `https://api.popcat.xyz/alert?text=${q}` }, caption: ''}, {quoted:msg})    
break    


case 'hladw':
    if (cekUser("premium", sender) == false) return reply(mess.OnlyPrem)
    const cheeerio = require('cheerio');

if(!q) return reply(mess.error.Iv)
const axios = require('axios');

axios.get(q)
  .then(async (responser) => {
    const htmlsex = responser.data;              
    const d = cheeerio.load(htmlsex);

    const mediafireLinkElement = d('a[href*=mediafire]');

   const mediafireLink = mediafireLinkElement.attr('href');


reply(mess.wait)
   axios.get(`https://www-mediafire-com.translate.goog/${mediafireLink.replace('https://www.mediafire.com/','')}?_x_tr_sl=en&_x_tr_tl=fr&_x_tr_hl=en&_x_tr_pto=wapp`)
   .then(async (resr) => {
       const y = cheeerio.load(resr.data)
   const linkr = y('#downloadButton').attr('href')
   const namer = y('body > main > div.content > div.center > div > div.dl-btn-cont > div.dl-btn-labelWrap > div.promoDownloadName.notranslate > div').attr('title').replaceAll(' ','').replaceAll('\n','')
   const dater = y('body > main > div.content > div.center > div > div.dl-info > ul > li:nth-child(2) > span').text()
   const sizer = y('#downloadButton').text().replace('Download', '').replace('(', '').replace(')', '').replace('\n', '').replace('\n', '').replace('                         ', '').replaceAll(' ','')
   let mimer = ''
   let rese = await axios.head(linkr)
   mimer = rese.headers['content-type']
    conn.sendMessage(from, {document:{url:linkr}, fileName:namer, mimetype: mimer}, {quoted:msg}).catch ((_err) => reply(mess.error.api))
  })
  .catch((error) => {
    console.log(error);
  });
})
.catch((error) => {
  console.log(error);
});

break







case 'hentaila':
    if (cekUser("premium", sender) == false) return reply(mess.OnlyPrem)
const cheerrio = require('cheerio');
const adxios = require('axios');
const sections = []  
adxios.get('https://www3.hentaila.com/el-index')
  .then((response) => {
    const $ = cheerrio.load(response.data);
    const episodes = $('.grid.episodes .episode');
    episodes.each((_i, episode) => {
      const numEpisode = $(episode).find('.num-episode').text();
      const hTitle = $(episode).find('.h-title').text();
      const href = $(episode).find('a').attr('href');
      const list = {
  title: numEpisode,
  rows: [
	    {
	     title: hTitle, 
	     rowId: `${prefix}hladw https://www3.hentaila.com${href}`,
      description: numEpisode	     
	    }, 
	    ]
     }
     sections.push(list)   
    });
    conn.sendMessage(
        from, 
        {
         text: `\n*Aquí está la lista de videos, haga clic en el botón de abajo para elegir*`,
         footer: botName,
         title: "HentaiLa Contenido Reciente",
         buttonText: "CLICK👀",
         sections
        }, { quoted : msg });  
})
  .catch((error) => {
    console.log(error);
  });    
    break

case 'cuevana':
    if (cekUser("premium", sender) == false) return reply(mess.OnlyPrem)
    if (!q) return reply(mess.error.ejs)
    const { searchC, searchP } = require('./function/scrapelis')
const cheerio = require('cheerio');

    let aaaa = await searchC(q)
    //if (command == 'pelisplus') aaaa = await searchP(q)
    if (aaaa == '') return reply(mess.error.api) 
    let img = 'https://cinefilosoficial.com/wp-content/uploads/2021/07/cuevana.jpg'
    //if (command == 'pelisplus') img = 'https://elcomercio.pe/resizer/RJM30xnujgfmaODGytH1rRVOrAA=/400x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/BJ2L67XNRRGHTFPKPDOEQ2AH5Y.jpg' 
   
        
    axios.get(`https://cuevana3.mu/?s=${q}`).then(response => {
    const html = response.data;
    const $ = cheerio.load(html);
    const contenidosip = $('.entry-content').first().text();
    const textos = `${aaaa[0].link}`;
    axios.get(textos).then(async lkd => {
    const htmll = lkd.data;
    
    const o = cheerio.load(htmll);
    const timepr = o('.tv-num').first().text();
    
    const linkpl = o('.download-links a').first().attr('href');
    const texto = `${contenidosip}`;


    const trailerUrl = o('li.traileropt').attr('trailer');
  


    const resultado = texto.split(/\.\s*/).pop();
    const sipunt = `${contenidosip}`;
    const sipnosis = sipunt.replace(/\.\s*[^.]+$/, ""); 

    reply(mess.wait)
 
    txtpeli = `${cuevanatxt(q,aaaa,timepr,resultado,sipnosis,linkpl)}`
var traileryt = await fetchJson(`https://saipulanuar.ga/api/download/ytmp4?url=${trailerUrl}&apikey=jPHjZpQF`)
var xx = traileryt.result
if(traileryt.status == '200') {
conn.sendMessage(from, {video:{url:xx.url}, caption:txtpeli}, {quoted:msg})
} else if (traileryt.status == '500') {
    var trailerytt = await fetchJson(`https://saipulanuar.ga/api/yt/playmp4?query=trailer ${q}`)
    var xx = trailerytt.result
conn.sendMessage(from, {video:{url:xx.url}, caption:txtpeli}, {quoted:msg})

if (trailerytt.status == '500') {
conn.sendMessage(from, { image:{url:img}, caption:txtpeli}, {quoted:msg})
}
}
}).catch(error => {
                console.log(error);
              });
            }).catch(error => {
                console.log(error);
              });
               break

               

case 'attp3':
case 'attp':
case 'ttp2':
case 'ttp':{
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (!q) return reply(mess.error.ejs)
var nyz1 = await getBuffer(`https://saipulanuar.ga/api/maker/${command}?text=${encodeURIComponent(`${q}`)}&apikey=jPHjZpQF`)
fs.writeFileSync('getpp.jpeg', nyz1)
await ffmpeg("getpp.jpeg")
.input("getpp.jpeg")
.on('error', function (_error) { only("error", conn, from) })
.on('end', function () {conn.sendMessage(from, { sticker: {url: './getpp.webp'}, mimetype: 'image/webp' })})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save('./getpp.webp')
await sleep(5000)
fs.unlinkSync('./getpp.jpeg')
fs.unlinkSync('./getpp.webp')
}
break

case 'sticksearch':
    if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
    if (!q) return reply(mess.error.ejs)
    var nyz1 = await fetchJson(`https://danzzapi.xyz/api/search/sticker?query=${encodeURIComponent(`${q}`)}&apikey=danzz`)
    var opt = { packname: pname, author: athor }
    var media = pickRandom(nyz1.result.sticker_url)
    conn.sendImageAsSticker(from, media, msg, opt).catch((_error) => { reply(mess.error.api)})
    break


case 'pinterest':
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (!q) return reply(mess.error.ejs)
reply(mess.wait)
fetchJson(`https://saipulanuar.ga/api/search/pinterest?query=${q}&apikey=jPHjZpQF`)
.then(pin =>{
var media = pickRandom(pin.result)
conn.sendMessage(from, { image:{url:media}, caption:mess.done}, {quoted:msg})
})
break
case 'tts':{
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (cekUser("premium", sender) == false) return reply(mess.OnlyPrem)
if (!q) return reply(mess.error.ejs)
var tts = `https://saipulanuar.ga/api/text-to-audio/tts?text=${q}&idbahasa=es&apikey=jPHjZpQF`
conn.sendMessage(from, {audio:{url:tts}, mimetype:'audio/mpeg', ptt:true}, {quoted:msg})
}
break
case 'play':
    var zzz = await fetchJson(`https://saipulanuar.ga/api/yt/playmp3?query=${q}`)
var zzzz = zzz.result
var tulis_pesan = `${playsrch(zzzz)}`
var buttonMessage = {
text: tulis_pesan,
footer: 'Click abajo',
buttons: [{ buttonId: `#playmp3 ${q}`, buttonText: { displayText: 'MP3' }, type: 1 },{ buttonId: `#playmp4 ${q}`, buttonText: { displayText: 'MP4' }, type: 1 }],
headerType: 1
}
conn.sendMessage(from, buttonMessage)
break
case 'playmp3':
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (!q) return reply(mess.error.ejyt)
reply(mess.wait)
var z = await fetchJson(`https://saipulanuar.ga/api/yt/playmp3?query=${q}`)
var zz = z.result
//reply(text_playmp3(zz))
conn.sendMessage(from, {audio:{url:zz.url}, mimetype:'audio/mpeg', fileName: `${sender.split("@")[0]}`+'mp3'}, {quoted:msg}).catch((_error) => { reply(mess.error.api)})
   // reply(mess.error.api)
break
case 'soundcloud':
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (!q) return reply(soundcm())
var yurl = q
reply(mess.wait)
fetchJson(`https://saipulanuar.ga/api/download/soundcloud?url=${yurl}&apikey=jPHjZpQF`).then(sdc =>{
reply(soundctxt(sdc))
conn.sendMessage(from, {audio:{url:sdc.result.download}, mimetype:'audio/mpeg', fileName: sdc.result.title+'mp3'}, {quoted:msg})
})
break


case 'playmp4':
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (cekUser("premium", sender) == false) return reply(mess.OnlyPrem)
if (!q) return reply(mess.error.ejyt)
var trailerytt = await fetchJson(`https://saipulanuar.ga/api/yt/playmp4?query=${q}`)
var xx = trailerytt.result
conn.sendMessage(from, {video:{url:xx.url}, caption:mess.done}, {quoted:msg}).catch((_error) => { reply(mess.error.api)})
break
case 'mediafire':
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (cekUser("premium", sender) == false) return reply(mess.OnlyPrem)
if (!q) return reply('*Ejemplo:*\n#mediafire https://www.mediafire.com/file/xxxxxx')
let isLinks = q.match(/(?:https?:\/{2})?(?:w{3}\.)?mediafire(?:com)?\.(?:com|be)(?:\/www\?v=|\/)([^\s&]+)/)
if (!isLinks) return reply('Link no válido')
const axdios = require('axios');
const cheeriodw = require('cheerio');
axdios.get(`https://www-mediafire-com.translate.goog/${q.replace('https://www.mediafire.com/','')}?_x_tr_sl=en&_x_tr_tl=fr&_x_tr_hl=en&_x_tr_pto=wapp`)
.then(async (resr) => {
    const y = cheeriodw.load(resr.data)
const linkr = y('#downloadButton').attr('href')
const namer = y('body > main > div.content > div.center > div > div.dl-btn-cont > div.dl-btn-labelWrap > div.promoDownloadName.notranslate > div').attr('title').replaceAll(' ','').replaceAll('\n','')
const dater = y('body > main > div.content > div.center > div > div.dl-info > ul > li:nth-child(2) > span').text()
const sizer = y('#downloadButton').text().replace('Download', '').replace('(', '').replace(')', '').replace('\n', '').replace('\n', '').replace('                         ', '').replaceAll(' ','')
let mimer = ''
let rese = await axdios.head(linkr)
mimer = rese.headers['content-type']
reply(mediafiretxt(namer,sizer,mimer,dater))
 conn.sendMessage(from, {document:{url:linkr}, fileName:namer, mimetype: mimer}, {quoted:msg}).catch ((_err) => reply(mess.error.api))
})
.catch((error) => {
 console.log(error);
});
break



case 'yttap':
case 'ytp':
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
reply(`${group.judul}
${group.link}`)
break
case 'infobot':
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
reply(infobott(ownerNumber,ownerName,botName,jam,tanggal,db_user,db_menfes))
break



case 'runtime':
case 'tes':
if (!isOwner) return reply(mess.OnlyOwner)
reply(`*Runtime :* ${runtime(process.uptime())}`)
break
case 'rules':
case 'reglas':{
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
let text_rules =`${rulesBot()}`
conn.sendMessage(from, { text: text_rules })
}
break
case 'user':
case 'db':{
if (!isOwner) return reply(mess.OnlyOwner)
let xx_us = JSON.parse(fs.readFileSync("./database/pengguna.json"));
let no = 1
let teks_db =`*INFO-DASHBOARD*

*• Usuarios :* ( ${("id", db_user).length} )
*• Rooms :* ( ${db_menfes.length} )\n\n`
for (let x of xx_us){
teks_db +=`👤 *Nombre ${x.name}*\n📋 *ID: @${x.id.split('@')[0]}*\n👑 *Premium: ${x.premium? 'Si':'No'}*\n\n`
}
reply(teks_db)
}
break
case 'join': {
                if (!isOwner) return reply(mess.OnlyOwner)
                if (!q) return reply(mess.error.Iv)
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.error.Iv)
                reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await conn.groupAcceptInvite(result).then((res) => m.reply(push(res))).catch((err) => m.reply(push(err)))
            }
            break
case 'addprem':{
if (!isOwner) return reply(mess.OnlyOwner)
if (!q) return reply('*Ejemplo:*\n#addprem 56xxxx')
var number_one = q+'@s.whatsapp.net'
if (cekUser("id", number_one) == null) return reply('El usuario no está registrado en la base de datos.')
if (cekUser("premium", number_one) == true) return reply('El usuario ya es premium')
setUser("±premium", number_one, true)
reply(`👑 *PREMIUM*\n📋 *ID:* @${number_one.split('@')[0]}\n📊 *Estado* Si`)
}
break
case 'delprem':{
if (!isOwner) return reply(mess.OnlyOwner)
if (!q) return reply('*Ejemplo:*\n#delprem 56xxxx')
var number_one = q+'@s.whatsapp.net'
if (cekUser("id", number_one) == null) return reply('El usuario no está registrado en la base de datos.')
if (cekUser("premium", number_one) == false) return reply('El usuario no es premium')
setUser("±premium", number_one, false)
reply(`👑 *PREMIUM*\n📋 *ID:* @${number_one.split('@')[0]}\n📊 *Estado:* No`)
}
break
case 'bot':  
reply(`Holi <3`)
break

case 'owner':{
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
var owner_Nya = ownerNumber
sendContact(from, owner_Nya, ownerName, msg)
reply('El es mi owner :3, se amable')
}
break
case 'room':{
if (cekUser("premium", sender) == false) return reply(mess.OnlyPrem)
var room =`*CHAT ANONIMO*\n\n*ROOMS : ${anonymous.length}*\n\n`
var no = 1
for (let x of anonymous){
room +=`${roomtxt(x)}`
}
reply(room)
}
break
case 'daftarprem':
mentions(`${daftarprem(ChatOwner)}`, [ChatOwner])
break


case 'checkprem':{
mentions(checkpremtxt(cekUser,sender))
}

break
case 'resetdb':{
if (!isOwner) return reply(mess.OnlyOwner)
let para_kos = "[]"
db_user.splice(para_kos)
fs.writeFileSync('./database/pengguna.json', JSON.stringify(db_user, null, 1))
await sleep(1000)
db_menfes.splice(para_kos)
fs.writeFileSync('./database/menfess.json', JSON.stringify(db_menfes, null, 1))
reply('Tarea completada :) olvide a todos mis antiguos amigow')
}
break
case 'resetlist':
db_respon_list.splice('[]')
fs.writeFileSync('./database/db_ListMessage', JSON.stringify(db_respon_list, null, 1))
reply('Listo :)')
break
// OWNER
case 'setexif':
case 'setwm':{
if (!isOwner) return reply(mess.OnlyOwner)
if (!q) return reply('*Ejemplo:*\n#setwm pack|author')
let nama_Pack = q.split('|')[0]
let author_Pack = q.split('|')[1]
if (!nama_Pack) return reply('*Ejemplo:*\n#setwm pack|author')
if (!author_Pack) return reply('*Ejemplo:*\n#setwm pack|author')
exif.create(nama_Pack, author_Pack)
reply('Listo 7w7')
}
break
case 'buat_room_chat':{
var id_satu = q.split('|')[0]
var id_dua = q.split('|')[1]
var id_rom = q.split('|')[2]
db_menfes.push({"id": id_satu, "teman": id_dua})
fs.writeFileSync('./database/menfess.json', JSON.stringify(db_menfes, 2, null))
db_menfes.push({"id": id_dua, "teman": id_satu})
fs.writeFileSync('./database/menfess.json', JSON.stringify(db_menfes, 2, null))
var tulis_pesan = `Chat Anónimo
*Para detenerlo envié el comando #stopchat*

Nota
*Esta sala de chat es anónima. para que no conozcas a tu pareja a menos que use su nombre real o compartir información de él*

*Sin spam/llamadas*
*Castigo: bloqueo permanente*

𝗥𝗼𝗼𝗺 𝗜𝗗 : ${id_rom}`
var buttonMessage = {
text: tulis_pesan,
footer: 'Haga clic en el botón para eliminar la sesión de chat',
buttons: [
{ buttonId: '#stopchat', buttonText: {displayText: '️⋮☰ 𝗦𝗧𝗢𝗣'}, type: 1}
],
headerType: 1
}
conn.sendMessage(id_satu, buttonMessage)
conn.sendMessage(id_dua, buttonMessage)
}
break


case 'gimage':
if(!q) return reply(mess.error.ejs)
const puppeteer = require('puppeteer');
reply(mess.wait)
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`https://www.google.com/search?q=${q}`);
  await page.screenshot({ path: `./media/image/${sender.split("@")[0]}.png`, fullPage: true });
  conn.sendMessage(from, {image: fs.readFileSync(`./media/image/${sender.split("@")[0]}.png`), caption:mess.done})
  fs.unlinkSync(`./media/image/${sender.split("@")[0]}.png`)
  await browser.close();
  
})();

    break

case 'stopchat':
if (cekPesan("id", sender) == null) return reply(`Actualmente no está en una sala de chat. Cree una sala con el ejemplo a continuación..\n\n*Ejemplo:*\n#menfess num|nombre|mensaje\n\n*Ejemplo 2:*\n#menfess 56xxx|Nosequiensoi|Hola\n\n*Nota:*\n568292828282 - Correcto (✅)\n+56 697 8930 47452 - Incorrecto (❌)`)
if (isGroup) return reply(mess.OnlyPM)
var aku = sender
var dia = cekPesan("teman", aku)
var teks_aku = `[✓] Chat detenido con éxito`
setRoom("±id", dia, null)
setRoom("±teman", dia, null)
await sleep(2000)
conn.sendMessage(aku,{text:teks_aku})
setRoom("±id", aku, null)
setRoom("±teman", aku, null)
var teks_dia = `[✓] Las salas de chat han sido descontinuadas\nPor tus amigos del chat👤`
conn.sendMessage(dia,{text:teks_dia})
db_menfes.splice('[]')
fs.writeFileSync('./database/menfess.json', JSON.stringify(db_menfes, null, 1))
break
case 'secretchat':
case 'menfes': case 'menfess':{
if (cekPesan("id", sender) !== null) return reply("Estás en una sala de chat, escribe *#stopchat* para detenerlo.")
if (!q) return reply(`Formato de función Menfess / Enviar un mensaje secreto a alguien a través de el bot\n\n_*Ejemplo*_\n${prefix+command} num|nickfake|texto\n\n_*Ejemplo 2*_\n${prefix+command} 5672838382|Mecánico|TeAmo\n\n*Nota :*\nEl número no debe contener espacio ni símbolo`)
let num = q.split('|')[0]
let nama_pengirim = q.split('|')[1]
let pesan_teman = q.split('|')[2]
var cekap = await conn.onWhatsApp(num+"@s.whatsapp.net")
if (cekap.length == 0) return reply(`Numero +${num}\nNo esta registrado en WhatsApp`)
let roomC = `#${makeid(10)}`
if (num == botNumber.split('@')[0]) return reply('Mi numero no ctm')
if (num == sender.split('@')[0]) return reply('No puedes hacerlo con tu propio número pendej@')
if (!num) return reply(`Todo debe ser llenado !!\nEjemplo : ${prefix+command} 56827xxx|nickfake|mensaje`)
if (!nama_pengirim) return reply(`Todo debe ser llenado !!\nEjemplo : ${prefix+command} 56827xxx|nickfake|mensaje`)
if (!pesan_teman) return reply(`Todo debe ser llenado !!\nEjemplo : ${prefix+command} 56827xxx|nickfake|mensaje`)
let text_menfess = `*CHAT ANÓNIMO*\n_Hola ${ucapanWaktu}_\n_Hay un mensaje *Menfess/Secreto*_\n\n*• De :* ${nama_pengirim}\n*• Mensaje :* ${pesan_teman}\n\n_Este mensaje fue escrito por alguien.\n_El bot solo entrega no escribe._`
let btn_menfes = [{ buttonId: `${prefix}buat_room_chat ${sender}|${num}@s.whatsapp.net|${roomC}`, buttonText: { displayText: '⋮☰ Aceptar' }, type: 1 }]
var button_menfess = {
text: text_menfess,
footer: 'Haga clic en el botón para responder al chat..',
buttons: btn_menfes,
headerType: 1
}
conn.sendMessage(`${num}@s.whatsapp.net`, button_menfess)
reply('Su mensaje de Menfess ha sido enviado, esperando ser recibido.')
if (isGroup) return reply("Su mensaje menfess ha sido enviado.")
}
break

case 'request':
case 'solicitud':
case 'recomendar': {
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (!q) return reply(`*Ejemplo:*\n${prefix+command} Pido una función Anti Link`)
var teks = `*| SOLICITUD |*`
var teks1 = `\n\nNumero : @${sender.split("@")[0]}\nMsg : ${q}`
var teks2 = `\n\nYa le envié a mi owner <3`
var bg_lexxy = '56973856790@s.whatsapp.net'
conn.sendMessage(bg_lexxy, {text: teks + teks1, mentions:[sender]}, {quoted:msg})
conn.sendMessage(from, {text: teks + teks2 + teks1, mentions:[sender]}, {quoted:msg})
}
break
case 'report': {
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (!q) return reply(`*Ejemplo:*\n${prefix+command} Hay un error con el ytmp4`)
var teks = `*| REPORTE |*`
var teks1 = `\n\nNumero : @${sender.split("@")[0]}\nMsg : ${q}`
var teks2 = `\n\nYa le envie a mi owner thanks<3`
var bg_lexxy = '56973856790@s.whatsapp.net'
conn.sendMessage(bg_lexxy, {text: teks + teks1, mentions:[sender]}, {quoted:msg})
conn.sendMessage(from, {text: teks + teks2 + teks1, mentions:[sender]}, {quoted:msg})
}
break

case 'mysesi': case 'sendsesi': case 'session':{
if (!isOwner) return reply(mess.OnlyOwner)
reply('please wait..')
await sleep(3000)
var user_bot = await fs.readFileSync('./database/pengguna.json')
var sesi_bot = await fs.readFileSync(`./${sessionName}.json`)
conn.sendMessage(from, { document: sesi_bot, mimetype: 'document/application', fileName: 'session.json'}, {quoted:msg})
conn.sendMessage(from, { document: user_bot, mimetype: 'document/application', fileName: 'pengguna.json'}, {quoted:msg})
}
break


case 'clear':
case 'clearer':
case 'clearerr':{
if (!isOwner) return reply(mess.OnlyOwner)
server_eror.splice('[]')
fs.writeFileSync('./database/func_error.json', JSON.stringify(server_eror))
reply('Yap :3')
}
break
case 'error':{
if (!isOwner) return reply(mess.OnlyOwner)
var teks =`*ERROR SERVER*\n_Total_ : ${server_eror.length}\n\n`
var NO = 1
for (let i of server_eror){
teks +=`=> *ERROR (${NO++})*\n${i.error}\n\n`
}
reply(teks)
}
break

case 'setppbot':
if (!isOwner && !fromMe) return reply(mess.OnlyOwner)
if (isImage && isQuotedImage) return reply(`Etiqueta una imagen con el comando  *#setppbot*`)
await conn.downloadAndSaveMediaMessage(msg, "image", `./transaksi/${sender.split('@')[0]}.jpg`)
var media = `./transaksi/${sender.split('@')[0]}.jpg`
conn.updateProfilePicture(botNumber, { url: media })
reply('Listo :D')
await sleep(2000)
fs.unlinkSync(media)
break
case 'git': case 'gitclone':{
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (cekUser("premium", sender) == false) return reply(mess.OnlyPrem)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
if (!q) return reply('*Ejemplo:*\n#gitclone https://github.com/Confusion245/xxxxx.git')
var linknya = q
if (!regex1.test(linknya)) return reply('link incorrecto!')
let [, user, repo] = args[0].match(regex1) || []
repo = repo.replace(/.git$/, '')
let url = `https://api.github.com/repos/${user}/${repo}/zipball`
let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
reply(mess.wait)
conn.sendMessage(from, { document: { url: url }, fileName: filename, mimetype: 'application/zip' }, { quoted: msg }).catch((_err) => reply('Lo sentimos, el enlace de github que proporcionaste es privado y no se puede acceder'))
}
break
case 'del':
case 'delete':
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
if (!quotedMsg) return reply(`Responde a un mensaje del bot que quieras eliminar`)
if (!quotedMsg.fromMe) return reply(`Solo se pueden eliminar mensajes mios`)
conn.sendMessage(from, { delete: { fromMe: true, id: quotedMsg.id, remoteJid: from }})
break
case 'linkgrup': case 'linkgc':
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (!isGroup) return reply(mess.OnlyGrup)
if (!isBotGroupAdmins) return reply(mess.BotAdmin)
var url = await conn.groupInviteCode(from).catch(() => reply(mess.error.api))
url = 'https://chat.whatsapp.com/'+url
reply(url)
break
case 'kick':
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins) return reply(mess.GrupAdmin)
if (!isBotGroupAdmins) return reply(mess.BotAdmin)
var number;
if (mentionUser.length !== 0) {
number = mentionUser[0]
conn.groupParticipantsUpdate(from, [number], "remove")
} else if (isQuotedMsg) {
number = quotedMsg.sender
conn.groupParticipantsUpdate(from, [number], "remove")
} else {
reply('*Ejemplo:* #kick @tag')
}
break
case 'setppgrup': case 'setppgc':
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins) return reply(mess.GrupAdmin)
if (!isBotGroupAdmins) return reply(mess.BotAdmin)
if (isImage && isQuotedImage) return reply(`*Etiqueta una imagen con el comando ${prefix}${command}*`)
await conn.downloadAndSaveMediaMessage(msg, "image", `./transaksi/${sender.split('@')[0]}.jpg`)
var media = `./transaksi/${sender.split('@')[0]}.jpg`
await conn.updateProfilePicture(from, { url: media })
await sleep(2000)
reply('Yap <3')
fs.unlinkSync(media)
break
case 'setnamegrup': case 'setnamegc':
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins) return reply(mess.GrupAdmin)
if (!isBotGroupAdmins) return reply(mess.BotAdmin)
if (!q) return reply(`Ejemplo #${command} Grupo de Chat Hot`)
await conn.groupUpdateSubject(from, q)
.then( _res => {
reply(`Listo uwu`)
}).catch(() => reply(mess.error.api))
break
case 'setdesc': case 'setdescription':
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins) return reply(mess.GrupAdmin)
if (!isBotGroupAdmins) return reply(mess.BotAdmin)
if (!q) return reply(`Ejemplo ${command} Reglas No esta permitido acosar a el bot xd`)
await conn.groupUpdateDescription(from, q)
.then( _res => {
reply(`Oki listo :3`)
}).catch(() => reply(mess.error.api))
break
case 'group': case 'grup': case 'grupo':
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins) return reply(mess.GrupAdmin)
if (!isBotGroupAdmins) return reply(mess.BotAdmin)
if (!q) return reply(`Ejemplo #${command} _opciones_\nOpciones : close & open\nEjemplo2 : #${command} close`)
if (args[0] == "close") {
conn.groupSettingUpdate(from, 'announcement')
reply(`Solo los administradores pueden enviar mensajes a este grupo`)
} else if (args[0] == "open") {
conn.groupSettingUpdate(from, 'not_announcement')
reply(`Listo ahora todos los participantes podran enviar mensajes al grupo`)
} else {
reply(`Ejemplo #${command} _opciones_\nOpciones : close & open\nEjemplo2 : #${command} close`)
}
break
case 'revoke':
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins) return reply(mess.GrupAdmin)
if (!isBotGroupAdmins) return reply(mess.BotAdmin)
await conn.groupRevokeInvite(from)
.then( _res => {
reply(`Anule el link de este grupo`)
}).catch(() => reply(mess.error.api))
break
case 'tagall':
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
if (!q) return reply(`Sin texto?`)
let teks_tagall = `══✪〘 *👥 TAG* 👥 〙✪══\n\n${q ? q : 'Nada'}\n\n`
for (let mem of participants) {
teks_tagall += `➲ @${mem.id.split('@')[0]}\n`
}
conn.sendMessage(from, { text: teks_tagall, mentions: participants.map(a => a.id) }, { quoted: msg })
break


case 'scrapenum':
    if (cekUser("premium", sender) == false) return reply(mess.OnlyPrem)
    let apilayers = ['d84829ac16ebc6caa54a7b70c297be3d','0037494de576f1341eb310a420dd5cb0']
    let apilayerskey = apilayers[Math.floor(Math.random() * apilayers.length)]
let numver = await fetchJson(`http://apilayer.net/api/validate?access_key=${apilayerskey}&number=${q}&country_code=&format=1`)
reply(scpnum(numver))
break
case 'hidetag':
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
let mem = [];
groupMembers.map( i => mem.push(i.id) )
conn.sendMessage(from, { text: q ? q : '', mentions: mem })
break
case 'welcome':{
if (!isGroup) return
if (!msg.key.fromMe && !isOwner && !isGroupAdmins) return reply("No eres un admin!")
if (!args[0]) return reply(`Opciones : on & off\nEjemplo : #${command} on`)
if (args[0] == 'ON' || args[0] == 'on' || args[0] == 'On') {
if (isWelcome) return reply('Activado✓')
welcomeJson.push(from)
fs.writeFileSync('./database/welcome.json', JSON.stringify(welcomeJson))
reply('Active la bienvenida en el grupo:\n'+groupName)
} else if (args[0] == 'OFF' || args[0] == 'OF' || args[0] == 'Of' || args[0] == 'Off' || args[0] == 'of' || args[0] == 'off') {
welcomeJson.splice(from, 1)
fs.writeFileSync('./database/welcome.json', JSON.stringify(welcomeJson))
reply('Éxito al desactivar la bienvenida en el grupo:\n'+groupName)
} else { reply('Palabra clave no encontrada!') }
}
break
case 'antilink':{
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
if (!isBotGroupAdmins) return reply(mess.BotAdmin)
if (!args[0]) return reply(`Opciones : on & off\nEjemplo : #${command} on`)
if (args[0] == 'ON' || args[0] == 'on' || args[0] == 'On') {
if (isAntiLink) return reply('Antilink activado')
antilink.push(from)
fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink, null, 2))
reply('Se activo el antilink en este grupo.')
} else if (args[0] == 'OFF' || args[0] == 'OF' || args[0] == 'Of' || args[0] == 'Off' || args[0] == 'of' || args[0] == 'off') {
if (!isAntiLink) return reply('Antilink Desactivado')
antilink.splice(from, 1)
fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink, null, 2))
reply('Se desactivo el antilink en este grupo\n*Lo cual significa que ahora cualquier persona puede enviar enlaces sin ser eliminado :v*')
} else { reply('Palabra clave no encontrada!') }
}
break
case 'promote':
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins) return reply(mess.GrupAdmin)
if (!isBotGroupAdmins) return reply(mess.BotAdmin)
if (mentionUser.length !== 0) {
conn.groupParticipantsUpdate(from, [mentionUser[0]], "promote")
.then( _res => { mentions(`Ahora @${mentionUser[0].split("@")[0]} es administrador`, [mentionUser[0]], true) })
.catch(() => reply(mess.error.api))
} else if (isQuotedMsg) {
conn.groupParticipantsUpdate(from, [quotedMsg.sender], "promote")
.then( _res => { mentions(`Listo ahora @${quotedMsg.sender.split("@")[0]} es administrador`, [quotedMsg.sender], true) })
.catch(() => reply(mess.error.api))
} else {
reply(`*Ejemplo:*\n${prefix+command} @tag`)
}
break
case 'tiktokauto':{
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
if (!isBotGroupAdmins) return reply(mess.BotAdmin)
if (!args[0]) return reply(`Opciones : on & off\nEjemplo : #${command} on`)
if (args[0] == 'ON' || args[0] == 'on' || args[0] == 'On') {
if (isAutoDownTT) return reply('Activado')
auto_downloadTT.push(from)
fs.writeFileSync('./database/tiktokDown.json', JSON.stringify(auto_downloadTT, null, 2))
reply('Descarga automática de tiktok activada con éxito')
} else if (args[0] == 'OFF' || args[0] == 'OF' || args[0] == 'Of' || args[0] == 'Off' || args[0] == 'of' || args[0] == 'off') {
if (!isAutoDownTT) return reply('La descarga automática de Tiktok aún no está activa')
auto_downloadTT.splice(anu, 1)
fs.writeFileSync('./database/tiktokDown.json', JSON.stringify(auto_downloadTT, null, 2))
reply('Se desactivó con éxito la descarga automática para TikTok')
} else { reply('Palabra clave no encontrada!') }
}
break
case 'demote':
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins) return reply(mess.GrupAdmin)
if (!isBotGroupAdmins) return reply(mess.BotAdmin)
if (mentionUser.length !== 0) {
conn.groupParticipantsUpdate(from, [mentionUser[0]], "demote")
.then( _res => { mentions(`Ahora @${mentionUser[0].split("@")[0]} ya no es admin`, [mentionUser[0]], true) })
.catch(() => reply(mess.error.api))
} else if (isQuotedMsg) {
conn.groupParticipantsUpdate(from, [quotedMsg.sender], "demote")
.then( _res => { mentions(`Listo ahora @${quotedMsg.sender.split("@")[0]} dejo de ser admin`, [quotedMsg.sender], true) })
.catch(() => reply(mess.error.api))
} else {
reply(`*Ejemplo:*\n${prefix+command} @tag`)
}
break

case 'infogc':
case 'infogrup':
case 'infogroup':
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (!isGroup) return reply(mess.OnlyGrup)
let cekgcnya =`${infogrupo(from,groupName,groupOwner,groupMembers,groupAdmins,isWelcome,isAntiLink,isAutoDownTT,groupDesc)}`
conn.sendMessage(from, { image: { url: ppgcc}, caption: cekgcnya }, { quoted: msg})
break
case 'text_grup':{
const reactionMessage = { react: { text: "🗿", key: msg.key}}
conn.sendMessage(from, reactionMessage)
}
break
case 'ttp':{
if (!q) return reply(`Ejemplo :\n#${command} Aurora GOD`)
conn.sendMessage(from, {sticker:{url:anu}, mimetype: 'image/webp'})
}
break

case 'tourl': case 'upload':
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)

if (isSticker || isQuotedSticker){
await conn.downloadAndSaveMediaMessage(msg, 'sticker', `./sticker/${sender.split("@")[0]}.webp`)
reply(mess.wait)
let buffer_up = fs.readFileSync(`./sticker/${sender.split("@")[0]}.webp`)
var rand2 = 'sticker/'+getRandom('.webp')
fs.writeFileSync(`./${rand2}`, buffer_up)
var { name, url, size } = await UploadFileUgu(rand2)
let sizeNy = bytesToSize(size)
var teks = `${tourl(url,name,sizeNy)}\n*Tipo:* Sticker`
conn.sendMessage(from, {text:teks}, {quoted:msg})
fs.unlinkSync(`./sticker/${sender.split("@")[0]}.webp`)
fs.unlinkSync(rand2)
} else if (isVideo || isQuotedVideo){
await conn.downloadAndSaveMediaMessage(msg, 'video', `./sticker/${sender.split("@")[0]}.mp4`)
reply(mess.wait)
let buffer_up = fs.readFileSync(`./sticker/${sender.split("@")[0]}.mp4`)
var rand2 = 'sticker/'+getRandom('.mp4')
fs.writeFileSync(`./${rand2}`, buffer_up)
var { name, url, size } = await UploadFileUgu(rand2)
let sizeNy = bytesToSize(size)
var teks = `${tourl(url,name,sizeNy)}\n*Tipo:* Video`
conn.sendMessage(from, {text:teks}, {quoted:msg})
fs.unlinkSync(`./sticker/${sender.split("@")[0]}.mp4`)
fs.unlinkSync(rand2)
} else if (isImage || isQuotedImage){
var mediany = await conn.downloadAndSaveMediaMessage(msg, 'image', `./sticker/${sender.split("@")[0]}.jpg`)
reply(mess.wait)
let buffer_up = fs.readFileSync(mediany)
var rand2 = 'sticker/'+getRandom('.png')
fs.writeFileSync(`./${rand2}`, buffer_up)
var { name, url, size } = await UploadFileUgu(rand2)
let sizeNy = bytesToSize(size)
var teks = `${tourl(url,name,sizeNy)}\n*Tipo:* Imagen`
conn.sendMessage(from, {text:teks}, {quoted:msg})
fs.unlinkSync(mediany)
fs.unlinkSync(rand2)
} else if (isQuotedAudio){
await conn.downloadAndSaveMediaMessage(msg, 'audio', `./sticker/${sender.split("@")[0]}.mp3`)
reply(mess.wait)
let buffer_up = fs.readFileSync(`./sticker/${sender.split("@")[0]}.mp3`)
var rand2 = 'sticker/'+getRandom('.mp3')
fs.writeFileSync(`./${rand2}`, buffer_up)
var { name, url, size } = await UploadFileUgu(rand2)
let sizeNy = bytesToSize(size)
var teks = `${tourl(url,name,sizeNy)}\n*Tipo:* Audio`
conn.sendMessage(from, {text:teks}, {quoted:msg})
fs.unlinkSync(`./sticker/${sender.split("@")[0]}.mp3`)
fs.unlinkSync(rand2)
} else {
reply(`*Etiqueta un audio/video/sticker/imagen con el comando ${prefix+command}*`)
}
break
case 'tomp3':
case 'toaudio':
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (isVideo || isQuotedVideo){
await conn.downloadAndSaveMediaMessage(msg, 'video', `./sticker/${sender.split("@")[0]}.mp4`)
reply(mess.wait)
var media = fs.readFileSync(`./sticker/${sender.split("@")[0]}.mp4`)
let ran = './sticker/'+getRandom('.mp3')
fs.writeFileSync(`./${ran}`, media)
exec(`ffmpeg -i ${media} ${ran}`)
conn.sendMessage(from, { audio: fs.readFileSync(ran),  mimetype: 'audio/mp4', fileName: `${sender.split("@")[0]}ToMp3`, ptt: args[1] == '--ptt' ? true : false }, { quoted: msg })
fs.unlinkSync(ran)
fs.unlinkSync(media)
} else {
reply(`*Etiqueta un video con ${prefix+command}*`)
}
break

// DESCARGA

case 'ytmp4':{
    if (!q) return reply(`Ejemplo:\n${prefix+command} https://youtu.be/xxxxx`)
var ytmp4 = await fetchJson(`https://saipulanuar.ga/api/download/ytmp4?url=${q}&apikey=jPHjZpQF`)
var xx = ytmp4.result
if (ytmp4.status == 500) return reply('*Link invalida*')
reply(ytmp4txtx(xx))

conn.sendMessage(from, {video:{url:xx.url}, caption:mess.done}, {quoted:msg})
}
break
case 'ytmp3':{
    if (!q) return reply(`Ejemplo:\n${prefix+command} https://youtu.be/xxxxx`)
var ytmp3 = await fetchJson(`https://saipulanuar.ga/api/download/ytmp3?url=${q}&apikey=jPHjZpQF`)
var xx = ytmp3.result
if (ytmp3.status == 500) return reply('*Link no valido*')
reply(ytmp3txtx(xx))
conn.sendMessage(from, {audio:{url:xx.url}, mimetype:'audio/mpeg', fileName: `${xx.title}.mp3`}, {quoted:msg})
}
break

// CONVERT
case 'toimg': case 'toimage':
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (isSticker || isQuotedSticker){
await conn.downloadAndSaveMediaMessage(msg, "sticker", `./sticker/${sender.split("@")[0]}.webp`)
let buffer = fs.readFileSync(`./sticker/${sender.split("@")[0]}.webp`)
var rand1 = 'sticker/'+getRandom('.webp')
var rand2 = 'sticker/'+getRandom('.png')
fs.writeFileSync(`./${rand1}`, buffer)
reply(mess.wait)
exec(`ffmpeg -i ./${rand1} ./${rand2}`, (err) => {
fs.unlinkSync(`./${rand1}`)
if (err) return reply(mess.error.api)
conn.sendMessage(from, {caption: mess.done, image: fs.readFileSync(`./${rand2}`) }, { quoted: msg })
fs.unlinkSync(`./${rand2}`)
fs.unlinkSync(`./sticker/${sender.split("@")[0]}.webp`)
})
} else {
reply('*Etiqueta un sticker con #toimg*\n\n*Si el sticker se mueve use #tovideo*')
}
break
case 'tomp4': case 'tovideo':
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (isSticker || isQuotedSticker){
await conn.downloadAndSaveMediaMessage(msg, "sticker", `./sticker/${sender.split("@")[0]}.webp`)
let buffer = `./sticker/${sender.split("@")[0]}.webp`
reply(mess.wait)
let webpToMp4 = await webp2mp4File(buffer)
conn.sendMessage(from, { video: {url:webpToMp4.result}, caption: mess.done}, { quoted: msg })
fs.unlinkSync(buffer)
} else {
reply('*Etiqueta un stickergif con #tovideo*')
}
break

case 'emojimix': case 'mixemoji':
case 'emojmix': case 'emojinua':
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (!q) return reply(`Escribe ${command} emoji1+emoji2\nEjemplo : !${command} 😜+😅`)
if (!q.includes('+')) return reply(`Escribe !${command} 😅+😭`)
var emo1 = q.split("+")[0]
var emo2 = q.split("+")[1]
if (!isEmoji(emo1) || !isEmoji(emo2)) return reply(`Solo emojis!`)
fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emo1)}_${encodeURIComponent(emo2)}`)
.then(data => {
var opt = { packname: pname, author: athor }
conn.sendImageAsSticker(from, data.results[0].url, msg, opt)
}).catch((_e) => reply(mess.error.api))
break
case 'emojimix2': case 'mixemoji2':
case 'emojmix2': case 'emojinua2':{
if (!q) return reply(`Ejemplo : ${prefix + command} 😅`)
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(q)}`)
for (let res of anu.results) {
var opt = { packname: pname, author: athor }
let encmedia = await conn.sendImageAsSticker(from, res.url, msg, opt)
}
}
break
case 'smeme':
case 'stikermeme':
case 'stickermeme':
case 'memestiker':
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
var atas = q.split('|')[0]
var bawah = q.split('|')[1]
if (!atas) return reply(`Etiqueta una imagen con ${prefix+command} texto_superior|texto_inferior`)
if (!bawah) return reply(`Etiqueta una imagen con ${prefix+command} texto_superior|texto_inferior`)
if (isImage || isQuotedImage){
reply(mess.wait)
var media = await conn.downloadAndSaveMediaMessage(msg, 'image', `./sticker/${sender.split('@')[0]}.jpg`)
var media_url = (await UploadFileUgu(media)).url
var meme_url = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${media_url}`
var opt = { packname: pname, author: athor }
conn.sendImageAsSticker(from, meme_url, msg, opt)
fs.unlinkSync(media)
} else {
reply(`Etiqueta una imagen con ${prefix+command} texto_superior|texto_inferior`)
}
break
case 'swm': case 'take': case 'stickerwm': 
if (cekUser("premium", sender) == false) return reply(mess.OnlyPrem) 
    if (isSticker || isQuotedSticker){
        try {

        let media = await conn.downloadAndSaveMediaMessage(msg, "sticker", `./sticker/${sender.split("@")[0]}.webp`)
 let encmedia = await conn.sendImageAsSticker(from, media, msg, { packname: pname, author: athor })
await fs.unlinkSync(`./sticker/${sender.split("@")[0]}.webp`)
        }catch{
    let media = await conn.downloadAndSaveMediaMessage(msg, "sticker", `./sticker/${sender.split("@")[0]}.webp`)
    let webpToMp4 = await webp2mp4File(media)
    let encmedia = await conn.sendVideoAsSticker(from, webpToMp4.result, msg, { packname: pname, author: athor })
    await fs.unlinkSync(`./sticker/${sender.split("@")[0]}.webp`)
        }

} else {  
        reply(mess.error.api)
} 
 break
    case 'sticker':
        case 'stickergif':
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
reply(mess.wait)
if (isImage || isQuotedImage){
await conn.downloadAndSaveMediaMessage(msg, "image", `./sticker/${sender.split("@")[0]}.jpeg`)
var media = fs.readFileSync(`./sticker/${sender.split("@")[0]}.jpeg`)
var opt = { packname: pname, author: athor }
conn.sendImageAsSticker(from, media, msg, opt)
fs.unlinkSync(`./sticker/${sender.split("@")[0]}.jpeg`)
} else {
 if (isVideo || isQuotedVideo) {

var media = await conn.downloadAndSaveMediaMessage(msg, 'video', `./sticker/${sender}.jpeg`)
var opt = { packname: pname, author: athor }
conn.sendImageAsSticker(from, media, msg, opt)
fs.unlinkSync(media)
} else {
    reply(`Etiqueta una imagen oh video con el comando ${prefix+command}`)
}
}
break

case 'checkgay':
case 'checklesbi':
case 'checkputa':
case 'checkidiota':
case 'checkurgido':
case 'checkcornudo':   
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
const eyy =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const yn = eyy[Math.floor(Math.random() * eyy.length)]
conn.sendMessage(from, { text: `Tu porcentaje es... ${yn}%` }, { quoted: msg })
break
// PHOTOOXY
case "metallic":
case "naruto":
case "butterfly":
case "flaming":{
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (!q) return reply(mess.error.ejs)
reply(mess.wait)
let photooxy =`https://api.nataganz.com/api/photooxy/${command}?text=${q}&apikey=Pasha`
conn.sendMessage(from, {image: { url: photooxy }, caption: mess.done}, { quoted: msg})
}
break
case 'mobil': case 'programing': case 'wallhp':
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
const x35  = JSON.parse(fs.readFileSync(`./function/Random_IMAGE/${command}.json`)); 
const x36 = x35[Math.floor(Math.random() * (x35.length))]
conn.sendMessage(from, {image:{url:x36}, caption:mess.done, mentions:[sender]},{quoted:msg})
break


// PREMIUM

case 'desactivar':
    if (cekUser("premium", sender) == false) return reply(mess.OnlyPrem)
    const cheeeerio = require('cheerio');
const froms = q
if (froms === ownerNumberm) return reply(`¡No se puede desverificar a Mi Creador! >:v`)
try {
var axioss = require('axios')
var ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
var email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=2")
var cookie = ntah.headers["set-cookie"].join("; ")
var $ = cheeeerio.load(ntah.data)
var $form = $("form");
var url = new URL($form.attr("action"), "https://www.whatsapp.com").href
var form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "BRASIL")
form.append("phone_number", q,)
form.append("email", email.data[1])
form.append("email_confirm", email.data[1])
form.append("platform", "ANDROID")
form.append("your_message", "Perdido/roubado: desative minha conta")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")

var resdes = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
var payload = String(resdes.data)
if (payload.includes(`"payload":true`)) {
reply(`Listo. Verifique si la cuenta fue desactivada.. en caso de que continue activa esto quiere decir que ya se hizo el intento de desactivar antes y la cuenta ya no permite desactivacion remota ^^
numero ${q}`)
} else if (payload.includes(`"payload":false`)) {
reply(`Gracias por contactarnos. Nos pondremos en contacto con usted por correo electrónico y puede demorar hasta tres días hábiles..`)
} else reply(util.format(resdes.data))
} catch (err) {reply(`${err}`)}
break


case 'blowjob':
case 'ass':
case 'ahegao':
case 'bdsm':{
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)

reply(mess.wait)
conn.sendMessage(from, { image: { url: `https://api-mirip-zeks.hitomimd.repl.co/api/nsfw/${command}?apikey=Alphabot`}, caption: `${command}📸` }, { quoted: msg })
}
break
case 'nloli':{
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)

reply(mess.wait)
conn.sendMessage(from, { image: { url: `https://saipulanuar.ga/api/nsfwloli`}, caption:mess.done }, { quoted: msg})
}
break
case 'waifu':case 'lick':case 'kiss':case 'awoo':case 'hug':case 'cry':case 'cuddle':case 'bully':case 'megumin':case 'shinobu':case 'neko':case 'slap':case 'wink':case 'dance':case 'poke':case 'glomp':case 'bite':case 'nom':case 'handhold':case 'highfive':case 'wave':case 'smile':case 'yeet':case 'bonk':case 'smug':case 'pat':
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)

reply("[❗] EN PROCESO")
fetchJson(`https://api.waifu.pics/sfw/${command}`).then(x => {
conn.sendMessage(from, {image:{url:x.url}, caption:mess.done, mentions:[sender]},{quoted:msg})})
break


// AUDIO
case 'bass':{
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (isQuotedAudio){
var buffer = await conn.downloadAndSaveMediaMessage(msg, 'audio', `./sticker/${command}.mp3`)
let ran = 'sticker/'+getRandom('.mp3')
var kode_js = '-af equalizer=f=54:width_type=o:width=2:g=20'
exec(`ffmpeg -i ${buffer} ${kode_js} ${ran}`, (err, _stderr, _stdout) => {
if (err) return reply(err)
reply(mess.wait)
let buff = fs.readFileSync(ran)
conn.sendMessage(from, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : msg })
fs.unlinkSync(`./${ran}`)
fs.unlinkSync(`./${buffer}`)
})
} else {
reply(`Etiqueta un audio con el comando *#${command}*`)
}
}
break

case 'blown':{
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (isQuotedAudio){
var buffer = await conn.downloadAndSaveMediaMessage(msg, 'audio', `./sticker/${command}.mp3`)
let ran = 'sticker/'+getRandom('.mp3')
var kode_js = '-af acrusher=.1:1:64:0:log'
exec(`ffmpeg -i ${buffer} ${kode_js} ${ran}`, (err, _stderr, _stdout) => {
if (err) return reply(err)
reply(mess.wait)
let buff = fs.readFileSync(ran)
conn.sendMessage(from, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : msg })
fs.unlinkSync(`./${ran}`)
fs.unlinkSync(`./${buffer}`)
})
} else {
reply(`Etiqueta un audio con el comando *#${command}*`)
}
}
break

case 'deep':{
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (isQuotedAudio){
var buffer = await conn.downloadAndSaveMediaMessage(msg, 'audio', `./sticker/${command}.mp3`)
let ran = 'sticker/'+getRandom('.mp3')
var kode_js = '-af atempo=4/4,asetrate=44500*2/3'
exec(`ffmpeg -i ${buffer} ${kode_js} ${ran}`, (err, _stderr, _stdout) => {
if (err) return reply(err)
reply(mess.wait)
let buff = fs.readFileSync(ran)
conn.sendMessage(from, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : msg })
fs.unlinkSync(`./${ran}`)
fs.unlinkSync(`./${buffer}`)
})
} else {
reply(`Etiqueta un audio con el comando *#${command}*`)
}
}
break

case 'earrape':{
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (isQuotedAudio){
var buffer = await conn.downloadAndSaveMediaMessage(msg, 'audio', `./sticker/${command}.mp3`)
let ran = 'sticker/'+getRandom('.mp3')
var kode_js = '-af volume=12'
exec(`ffmpeg -i ${buffer} ${kode_js} ${ran}`, (err, _stderr, _stdout) => {
if (err) return reply(err)
reply(mess.wait)
let buff = fs.readFileSync(ran)
conn.sendMessage(from, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : msg })
fs.unlinkSync(`./${ran}`)
fs.unlinkSync(`./${buffer}`)
})
} else {
reply(`Etiqueta un audio con el comando *#${command}*`)
}
}
break

case 'fast':{
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (isQuotedAudio){
var buffer = await conn.downloadAndSaveMediaMessage(msg, 'audio', `./sticker/${command}.mp3`)
let ran = 'sticker/'+getRandom('.mp3')
var kode_js = '-filter:a "atempo=1.63,asetrate=44100"'
exec(`ffmpeg -i ${buffer} ${kode_js} ${ran}`, (err, _stderr, _stdout) => {
if (err) return reply(err)
reply(mess.wait)
let buff = fs.readFileSync(ran)
conn.sendMessage(from, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : msg })
fs.unlinkSync(`./${ran}`)
fs.unlinkSync(`./${buffer}`)
})
} else {
reply(`Etiqueta un audio con el comando *#${command}*`)
}
}
break

case 'fat':{
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (isQuotedAudio){
var buffer = await conn.downloadAndSaveMediaMessage(msg, 'audio', `./sticker/${command}.mp3`)
let ran = 'sticker/'+getRandom('.mp3')
var kode_js = '-filter:a "atempo=1.6,asetrate=22100"'
exec(`ffmpeg -i ${buffer} ${kode_js} ${ran}`, (err, _stderr, _stdout) => {
if (err) return reply(err)
reply(mess.wait)
let buff = fs.readFileSync(ran)
conn.sendMessage(from, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : msg })
fs.unlinkSync(`./${ran}`)
fs.unlinkSync(`./${buffer}`)
})
} else {
reply(`Etiqueta un audio con el comando *#${command}*`)
}
}
break

case 'nightcore':{
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (isQuotedAudio){
var buffer = await conn.downloadAndSaveMediaMessage(msg, 'audio', `./sticker/${command}.mp3`)
let ran = 'sticker/'+getRandom('.mp3')
var kode_js = '-filter_complex "areverse'
exec(`ffmpeg -i ${buffer} ${kode_js} ${ran}`, (err, _stderr, _stdout) => {
if (err) return reply(err)
reply(mess.wait)
let buff = fs.readFileSync(ran)
conn.sendMessage(from, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : msg })
fs.unlinkSync(`./${ran}`)
fs.unlinkSync(`./${buffer}`)
})
} else {
reply(`Etiqueta un audio con el comando *#${command}*`)
}
}
break

case 'reverse':{
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (isQuotedAudio){
var buffer = await conn.downloadAndSaveMediaMessage(msg, 'audio', `./sticker/${command}.mp3`)
let ran = 'sticker/'+getRandom('.mp3')
var kode_js = '-filter_complex "areverse"'
exec(`ffmpeg -i ${buffer} ${kode_js} ${ran}`, (err, _stderr, _stdout) => {
if (err) return reply(err)
reply(mess.wait)
let buff = fs.readFileSync(ran)
conn.sendMessage(from, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : msg })
fs.unlinkSync(`./${ran}`)
fs.unlinkSync(`./${buffer}`)
})
} else {
reply(`Etiqueta un audio con el comando *#${command}*`)
}
}
break

case 'robot':{
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (isQuotedAudio){
var buffer = await conn.downloadAndSaveMediaMessage(msg, 'audio', `./sticker/${command}.mp3`)
let ran = 'sticker/'+getRandom('.mp3')
var kode_js = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
exec(`ffmpeg -i ${buffer} ${kode_js} ${ran}`, (err, _stderr, _stdout) => {
if (err) return reply(err)
reply(mess.wait)
let buff = fs.readFileSync(ran)
conn.sendMessage(from, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : msg })
fs.unlinkSync(`./${ran}`)
fs.unlinkSync(`./${buffer}`)
})
} else {
reply(`Etiqueta un audio con el comando *#${command}*`)
}
}
break

case 'slow':{
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (isQuotedAudio){
var buffer = await conn.downloadAndSaveMediaMessage(msg, 'audio', `./sticker/${command}.mp3`)
let ran = 'sticker/'+getRandom('.mp3')
var kode_js = '-filter:a "atempo=0.7,asetrate=44100"'
exec(`ffmpeg -i ${buffer} ${kode_js} ${ran}`, (err, _stderr, _stdout) => {
if (err) return reply(err)
reply(mess.wait)
let buff = fs.readFileSync(ran)
conn.sendMessage(from, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : msg })
fs.unlinkSync(`./${ran}`)
fs.unlinkSync(`./${buffer}`)
})
} else {
reply(`Etiqueta un audio con el comando *#${command}*`)
}
}
break

case 'smooth':{
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (isQuotedAudio){
var buffer = await conn.downloadAndSaveMediaMessage(msg, 'audio', `./sticker/${command}.mp3`)
let ran = 'sticker/'+getRandom('.mp3')
var kode_js = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
exec(`ffmpeg -i ${buffer} ${kode_js} ${ran}`, (err, _stderr, _stdout) => {
if (err) return reply(err)
reply(mess.wait)
let buff = fs.readFileSync(ran)
conn.sendMessage(from, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : msg })
fs.unlinkSync(`./${ran}`)
fs.unlinkSync(`./${buffer}`)
})
} else {
reply(`Etiqueta un audio con el comando *#${command}*`)
}
}
break

case 'tupai':{
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (isQuotedAudio){
var buffer = await conn.downloadAndSaveMediaMessage(msg, 'audio', `./sticker/${command}.mp3`)
let ran = 'sticker/'+getRandom('.mp3')
var kode_js = '-filter:a "atempo=0.5,asetrate=65100"'
exec(`ffmpeg -i ${buffer} ${kode_js} ${ran}`, (err, _stderr, _stdout) => {
if (err) return reply(err)
reply(mess.wait)
let buff = fs.readFileSync(ran)
conn.sendMessage(from, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : msg })
fs.unlinkSync(`./${ran}`)
fs.unlinkSync(`./${buffer}`)
})
} else {
reply(`Etiqueta un audio con el comando *#${command}*`)
}
}
break


case 'wallpaperinori':{
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
let kuxe = await fetchJson(`https://raw.githubusercontent.com/qisyana/senku/main/storages/inori-pic.json`)
let random = kuxe[Math.floor(Math.random() * kuxe.length)]
conn.sendMessage(from, { image: { url: random }, caption: mess.done }, { quoted: msg })
}
break
case 'wallpapercyber':{
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
let xpwl = await fetchJson(`https://raw.githubusercontent.com/Aprilia3/RestApi/master/data/CyberSpace.json`)
let random = xpwl[Math.floor(Math.random() * xpwl.length)]
conn.sendMessage(from, { image: { url: random }, caption: mess.done }, { quoted: msg })
}
break

// Random img
case 'waifu':
case 'loli':
case 'husbu':
case 'milf':
case 'cosplay':
case 'wallml':{
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
let eek = await fetchJson(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)
let random = eek[Math.floor(Math.random() * eek.length)]
conn.sendMessage(from, { image: { url: random }, caption: mess.done }, { quoted: msg })
}
break
case 'wallpaperteknologi':{
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
let toth = await fetchJson(`https://raw.githubusercontent.com/Aprilia3/RestApi/master/data/Technology.json`)
let random = toth[Math.floor(Math.random() * toth.length)]
conn.sendMessage(from, { image: { url: random }, caption: mess.done }, { quoted: msg })
}
break
case 'wallpaperanime':{
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
let tozs = await fetchJson(`https://raw.githubusercontent.com/qisyana/senku/main/storages/anime-wallpaper-pic.json`)
let random = tozs[Math.floor(Math.random() * tozs.length)]
conn.sendMessage(from, { image: { url: random }, caption: mess.done }, { quoted: msg })
}
break
case 'wallpapergamer':{
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
let toew = await fetchJson(`https://raw.githubusercontent.com/Aprilia3/RestApi/master/data/GameWallp.json`)
let random = toew[Math.floor(Math.random() * toew.length)]
conn.sendMessage(from, { image: { url: random }, caption: mess.done }, { quoted: msg })
}
break
case 'wallpaperprogamer':{
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
let xeke = await fetchJson(`https://raw.githubusercontent.com/Aprilia3/RestApi/master/data/Programming.json`)
let random = xeke[Math.floor(Math.random() * xeke.length)]
conn.sendMessage(from, { image: { url: random }, caption: mess.done }, { quoted: msg })
}
break
case 'wallpapermeme':{
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
let crkr = await fetchJson(`https://raw.githubusercontent.com/Aprilia3/RestApi/master/data/meme.json`)
let random = crkr[Math.floor(Math.random() * crkr.length)]
conn.sendMessage(from, { image: { url: random }, caption: mess.done }, { quoted: msg })
}
break
case 'wallpaper':{
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
let crpe = await fetchJson(`https://raw.githubusercontent.com/Aprilia3/RestApi/master/data/Mountain.json`)
let random = crpe[Math.floor(Math.random() * crpe.length)]
conn.sendMessage(from, { image: { url: random }, caption: mess.done }, { quoted: msg })
}
break
case 'ppcouple': {
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
let random = anu[Math.floor(Math.random() * anu.length)]
conn.sendMessage(from, { image: { url: random.male }, caption: `Foto minito` }, { quoted: msg })
conn.sendMessage(from, { image: { url: random.female }, caption: `Foto minita` }, { quoted: msg })
}
break

case 'tiktok':{
    if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (!q) return reply('Ejemplo :\n#tiktok https://vt.tiktok.com/xxxxx/')
reply(mess.wait)
fetchJson(`https://saipulanuar.ga/api/download/tiktok2?url=${q}&apikey=dyJhXvqe`)
.then(tt_res => {
reply(tiktoktxt(tt_res,q))
conn.sendMessage(from,{video:{url:tt_res.result.video.link2}, caption:mess.done}, {quotes:msg})
}).catch((_err) => {
reply(mess.error.Iv)
})
}
break




case 'menu': { 
    if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
    let ownernm = ownerNumber + '@s.whatsapp.net'
    let namenya = `${cekUser("name", sender)}`
    let premnya = `${cekUser("premium", sender)? 'Si':'No'}`
    let usernya = `${("id", db_user).length}`
    let romnya = `${db_menfes.length}`
    const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
    let menutext = `${menutxtx()}`
    //let ments = [ownernya, me, ini_mark]        
    
    const thumb = fs.readFileSync("./media/theme/menupic.jpg")
    let documentsm = [doc1,doc2,doc3,doc4,doc5,doc6]
    let docsm = pickRandom(documentsm)
    let buttons = [{ buttonId: '#allmenu', buttonText: { displayText: 'All Menu' }, type: 1 },{ buttonId: '#infobot', buttonText: { displayText: 'Info' }, type: 1 },{ buttonId: 'tqto', buttonText: { displayText: 'Creditos' }, type: 1 }]
    let buttonMessage = {
document: fs.readFileSync('./media/theme/menudoc.xlsx'),
fileName : botName,
mimetype: `${docsm}`,
fileLength: '99999999999999',
pageCount: '1000000000',
caption: menutext,
footer: `${readmore}│└─ 𝘽𝙊𝙏 𝙄𝙉𝙁𝙊        
│𝗕𝗼𝘁 : ${global.botName}
│𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : ${runtime(process.uptime())}
│𝗢𝘄𝗻𝗲𝗿 : @${ownernm.split('@')[0]}
│𝗣𝗿𝗲𝗳𝗶𝘅 : MULTI-PREFIX
│𝗛𝗼𝘀𝘁 : ${os.hostname()}
│𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺𝗮 : ${os.platform()}
│𝗧𝗼𝘁𝗮𝗹 𝗨𝘀𝗲𝗿 :  ${usernya}
│𝗥𝗼𝗼𝗺𝘀 : ${romnya}
│
└─ 𝙐𝙎𝙀𝙍 𝙄𝙉𝙁𝙊 
│𝗡𝗶𝗰𝗸 : ${namenya}
│𝗡𝘂𝗺𝗲𝗿𝗼 : @${sender.split('@')[0]}
│𝗣𝗿𝗲𝗺𝗶𝘂𝗻 : ${premnya}
│𝗟𝗶𝗺𝗶𝘁𝗲 : No Limit
│
└─ 𝙏𝙄𝙈𝙀 𝙄𝙉𝙁𝙊 
│𝗙𝗲𝗰𝗵𝗮 : ${tanggal}
│𝗛𝗼𝗿𝗮 : ${jam}
└┬────────────┈ ⳹
│✑  Por favor selecciona
│✑  Un Boton abajo :)
└─────────────┈ ⳹`,
//footer: '*_Aurora Multi Device Beta_*',
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: ownerName,
body: 'Mi canal de YouTube', 
showAdAttribution: true,
thumbnail: thumb,
mediaType: 2,
mediaUrl: youtubel,
sourceUrl: youtubel
}}
}
conn.sendMessage(from, buttonMessage, {quoted: msg})
}
break



case'changename':
    reply(setnametxtuser(sender,cekUser,q,jam))
    await sleep(1000)
    setUser("±name", sender, q)
    break
    
    
default:

/*━━━━━━━[ Function Menfess ]━━━━━━━*/

// Funcion Menfess Auto

var _0x1a6220=_0x4a33;(function(_0x5b325d,_0xd37330){var _0x15f0df=_0x4a33,_0x17b9a4=_0x5b325d();while(!![]){try{var _0x5034a9=parseInt(_0x15f0df(0x1d3))/0x1*(-parseInt(_0x15f0df(0x1ca))/0x2)+-parseInt(_0x15f0df(0x1d4))/0x3*(parseInt(_0x15f0df(0x1c5))/0x4)+parseInt(_0x15f0df(0x1c7))/0x5*(-parseInt(_0x15f0df(0x1cf))/0x6)+-parseInt(_0x15f0df(0x1d5))/0x7*(parseInt(_0x15f0df(0x1c9))/0x8)+-parseInt(_0x15f0df(0x1cc))/0x9+-parseInt(_0x15f0df(0x1c4))/0xa+parseInt(_0x15f0df(0x1cd))/0xb;if(_0x5034a9===_0xd37330)break;else _0x17b9a4['push'](_0x17b9a4['shift']());}catch(_0x1d82f8){_0x17b9a4['push'](_0x17b9a4['shift']());}}}(_0x351e,0x54a56));function _0x4a33(_0x1e5c04,_0x200f07){var _0x351e1e=_0x351e();return _0x4a33=function(_0x4a33ba,_0x1cdc80){_0x4a33ba=_0x4a33ba-0x1c3;var _0x110a2e=_0x351e1e[_0x4a33ba];return _0x110a2e;},_0x4a33(_0x1e5c04,_0x200f07);}function _0x351e(){var _0x26a0e1=['pesan\x20diteruskan','1103568ZGfugO','sendMessage','message','text','445736reezra','18tskWyb','1168237exHeIM','messages','4186710kRyETk','297452lFwhFR','type','10QPbKSn','teman','16yYTSyk','2wHOPdZ','conversation','2985354kCXAlP','29597029dyJWde'];_0x351e=function(){return _0x26a0e1;};return _0x351e();}if(!isCmd){if(cekPesan('id',sender)==null)return;if(cekPesan(_0x1a6220(0x1c8),sender)==![])return;if(m[_0x1a6220(0x1c3)][0x0][_0x1a6220(0x1c6)]==_0x1a6220(0x1cb)||m[_0x1a6220(0x1c3)][0x0]['type']=='extendedTextMessage'){try{var chat_anonymous=m[_0x1a6220(0x1c3)][0x0][_0x1a6220(0x1d1)]['extendedTextMessage'][_0x1a6220(0x1d2)];}catch(_0x2d0d82){var chat_anonymous=m[_0x1a6220(0x1c3)][0x0][_0x1a6220(0x1d1)][_0x1a6220(0x1cb)];}let text_nya_menfes='*ANONYMOUS\x20CHAT*\x0a💬\x20:\x20'+chat_anonymous;conn[_0x1a6220(0x1d0)](cekPesan(_0x1a6220(0x1c8),sender),{'text':text_nya_menfes}),conn['sendMessage'](from,{'text':_0x1a6220(0x1ce)},{'quoted':msg});}}

}} catch (err) {
console.log(color('[ERROR]', 'red'), err)
server_eror.push({"error": `${err}`})
fs.writeFileSync('./database/func_error.json', JSON.stringify(server_eror))
}}
