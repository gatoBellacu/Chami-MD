import didyoumean from 'didyoumean'

export function before(m, { match }) {
	let usedPrefix
	if ((usedPrefix = (match[0] || '')[0])) {
		let noPrefix = m.text.replace(usedPrefix, '')
		let args = noPrefix.trim().split` `.slice(1)
		let text = args.join` `
		let alias = Object.values(plugins).filter(v => v.alias && !v.disabled).map(v => v.alias).flat(1)
		if (alias.includes(noPrefix)) return
		let mean = didyoumean(noPrefix, alias)
		if (mean) this.sendButton(m.chat, `Quisiste decir: ${usedPrefix + mean}?\n`, null, null, [['Si', `${usedPrefix + mean} ${text}`.trim()], ['No', usedPrefix + '.say ª vale' ]], m)
	}
}
export const disabled = false
