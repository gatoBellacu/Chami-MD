let handler = async (m, { conn, text}) => {
if (!text) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙸𝙽𝙶𝚁𝙴𝚂𝙰 𝙴𝙻 @𝚝𝚊𝚐 𝙳𝙴 𝙰𝙻𝙶𝚄𝙽 𝚄𝚂𝚄𝙰𝚁𝙸𝙾*'
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙸𝙽𝙶𝚁𝙴𝚂𝙰 𝙴𝙻 @𝚝𝚊𝚐 𝙳𝙴 𝙰𝙻𝙶𝚄𝙽 𝚄𝚂𝚄𝙰𝚁𝙸𝙾*'
let users = global.db.data.users
users[who].banned = false
conn.reply(m.chat, `*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 𝙵𝚄𝙴 𝙳𝙴𝚂𝙱𝙰𝙽𝙴𝙰𝙳𝙾 𝙲𝙾𝙽 𝙴𝚇𝙸𝚃𝙾*\n*—◉ 𝙴𝙻 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 𝚈𝙰 𝙿𝚄𝙴𝙳𝙴 𝚄𝚂𝙰𝚁 𝙴𝙻 𝙱𝙾𝚃*`, m)
}
handler.help = ['unbanuser']
handler.tags = ['owner']
handler.command = /^unbanuser$/i
handler.rowner = true
export default handler

/* mejorado por @DIEGO-OFC 
Dejen el credito putas 

import PhoneNumber from "awesome-phonenumber"

let handler = async (m, {conn, text, command, usedPrefix}) => {
  //prems

  const fkontak = {
    key: {
      participants: "0@s.whatsapp.net",
      remoteJid: "status@broadcast",
      fromMe: false,
      id: "Halo",
    },
    message: {
      contactMessage: {
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split("@")[0]}:${
          m.sender.split("@")[0]
        }\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
      },
    },
    participant: "0@s.whatsapp.net",
  };

  let who;
  let menu = './storage/Menu1.jpg'
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
  else who = m.chat;
  if (!who) throw `*[❕] ETIQUETA A LA PERSONA QUE SERA BANEADA*`
  let user = global.db.data.users[who]
  let name = conn.getName(who)
  let txt = text.replace(name).trim()
  if (!txt) return conn.reply(m.chat, `*ESCRIBA EL MOTIVO DEL BANEO*\n` + `*${usedPrefix + command} @${who.split`@`[0]} *Motivo*`, fkontak, m)
  let chatstext = text.replace(who.split("@")[0], "").replace("@", "");
  let users = global.db.data.users;
  let pp = await conn.profilePictureUrl(who, "image").catch((_) => "https://telegra.ph/file/9b1353deceded7f387713.jpg")
  let banu = `Tal vez el ban los haga reflexionar`;
  let banea = `*✅ USUARIO BANEADO*\n*NOMBRE:* ${name}\n*NUMERO:* ${PhoneNumber("+" + who.replace("@s.whatsapp.net", "")).getNumber(
    "international"
  )}\n*RAZÓN: ${chatstext}*`
  users[who].banned = true
  conn.sendFile(m.chat, menu, 'Curiosity.jpg', banea, banu, fkontak)}
//  await conn.sendButton(m.chat, banea, banu, pp, [["𝙼𝙴𝙽𝚄", `#menusimple`]], m)
};
handler.help = ["banuser"]
handler.tags = ["owner"]
handler.command = /^banuser$/i
handler.owner = true
export default handler*/
