let handler = async m => {

let krtu = `Kartu Intro`
m.reply(`
╭─── *「 Tarjeta de introducción 」*
│       
│ *Nombre     :* 
│ *Género   :* 
│ *Edad      :* 
│ *Poli    :* 
│ *Clase      :* 
│ *Origen         :* 
│ *Religión    :* 
│ *Estado     :* 
╰──────────────
`.trim()) 
}
handler.command = /^(intro)$/i

module.exports = handler
