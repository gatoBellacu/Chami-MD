let handler = async (m, { conn }) => {
let msg = `
*👋 Hola @${m.sender.split`@`[0]} aquí tienes los grupos oficiales de CuriobugBot-MD.*

 Mmm sin diseño XD`
conn.sendPayment(m.chat, '99999999', wm, m)
}
handler.command = handler.help = ['grupos']
handler.tags = ['info']
export default handler
