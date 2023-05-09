export async function all(m) {
	
    // cuando alguien envía un enlace de un grupo al dm del bot
    if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('https://chat') || m.text.startsWith('Abre este enlace')) && !m.isBaileys && !m.isGroup) {
     this.sendButton(m.chat, `*🍧 INVITAR BOT A SU GRUPO 🍧* 
        
 👋🏻 Hola @${m.sender.split('@')[0]}
*🤖 puedes invitar el bot para que se una a un grupo más info click en el botón*
`.trim(), wm, null, [['✅ Invitar', '.buyprem']] , m, { mentions: [m.sender] })
  } 
  
   return !0
}
