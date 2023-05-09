export async function all(m) {
	
    // cuando alguien envía un enlace de un grupo al dm del bot
    if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('https://chat') || m.text.startsWith('Abre este enlace')) && !m.isBaileys && !m.isGroup) {
	   //let fkontak2 = { key: { participant: '0@s.whatsapp.net' }, message: { contactMessage: { displayName: packname, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:XL;${author},;;;\nFN:${author},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, jpegThumbnail: fs.readFileSync('./media/menus/Menu1.jpg'), thumbnail: fs.readFileSync('./media/menus/Menu1.jpg'), sendEphemeral: true }}}

     this.sendButton(m.chat, `*🍧 INVITAR BOT A SU GRUPO 🍧* 
        
 👋🏻 Hola @${m.sender.split('@')[0]}
*🤖 puedes invitar el bot para que se una a un grupo más info click en el botón*
`.trim(), wm2, null, [['✅ Invitar', '.buyprem']] , m, { mentions: [m.sender] })
  } 
  
   return !0
}
