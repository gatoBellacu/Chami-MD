let handler = async (m, { conn, usedPrefix, isOwner }) => {
	let groups = Object.values(await conn.groupFetchAllParticipating()),
		txt = `*GROUPS LIST*\n\n*Total:* ${groups.length}\n\n`
	for (let i = 0; i < groups.length; i++) {
		txt += `*• Subject:* ${groups[i].subject}\n`
			+ `*• ID:* ${groups[i].id}\n`
			+ `${isOwner ? `*• Participants:* ${groups[i].participants.length}\n` : ''}`
			+ `${isOwner ? `*• isBotAdmin:* ${!!groups[i].participants.find(v => v.id == conn.user.jid).admin}\n` : ''}\n`
	}
	m.reply(txt.trim())
}
handler.help = ['groups', 'grouplist']
handler.tags = ['info']
handler.command = /^(groups|grouplist|listadegrupo|gruposlista|listagrupos)$/i
export default handler
