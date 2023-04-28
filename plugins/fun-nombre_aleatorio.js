function handler(m, { text }) {
    let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
    m.reply(teks.replace(/[a-z]/gi, v => {
        return {
            'a': 'aa',
            'b': 'ba',
            'c': 'ca',
            'd': 'da',
            'e': 'ea',
            'f': 'fa',
            'g': 'ga',
            'h': 'ha',
            'i': 'ia',
            'j': 'ja',
            'k': 'ka',
            'l': 'la',
            'm': 'ma',
            'n': 'na',
            'ñ': 'ña',
            'o': 'oa',
            'p': 'pa',
            'q': 'qa',
            'r': 'ra',
            's': 'sa',
            't': 'ta',
            'u': 'ua',
            'v': 'va',
            'w': 'wa',
            'x': 'xa',
            'y': 'ya',
            'z': 'za'
        }[v.toLowerCase()] || v
    }))
}
handler.help = ['nombaleator <teks>']
handler.tags = ['fun']
handler.command =  /^(nombaleator|nl)$/i

export default handler
