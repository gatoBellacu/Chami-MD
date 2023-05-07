import { smsg } from './lib/simple.js'
import { format } from 'util'
import { fileURLToPath } from 'url'
import path, { join } from 'path'
import { unwatchFile, watchFile } from 'fs'
import chalk from 'chalk'

/**
 * @type {import('@adiwajshing/baileys')}
 */
const { proto } = (await import('@adiwajshing/baileys')).default
const isNumber = x => typeof x === 'number' && !isNaN(x)
const delay = ms => isNumber(ms) && new Promise(resolve => setTimeout(function () {
    clearTimeout(this)
    resolve()
}, ms))

/**
 * Handle messages upsert
 * @param {import('@adiwajshing/baileys').BaileysEventMap<unknown>['messages.upsert']} groupsUpdate 
 */
export async function handler(chatUpdate) {
    this.msgqueque = this.msgqueque || []
    if (!chatUpdate)
        return
    this.pushMessage(chatUpdate.messages).catch(console.error)
    let m = chatUpdate.messages[chatUpdate.messages.length - 1]
    if (!m)
        return
    if (global.db.data == null)
        await global.loadDatabase()
    try {
        m = smsg(this, m) || m
        if (!m)
            return
        m.exp = 0
        m.diamond = false
        try {
            // TODO: use loop to insert data instead of this
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object')
                global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.exp))
                    user.exp = 0
                if (!isNumber(user.diamond))
                    user.diamond = 10
                if (!isNumber(user.lastclaim))
                    user.lastclaim = 0
                if (!('registered' in user))
                    user.registered = false
                    //-- user registered 
                if (!user.registered) {
                    if (!('name' in user))
                        user.name = m.name
                    if (!isNumber(user.age))
                        user.age = -1
                    if (!isNumber(user.regTime))
                        user.regTime = -1
                }
                //--user number
                if (!isNumber(user.afk))
                    user.afk = -1
                if (!('afkReason' in user))
                    user.afkReason = ''
                if (!('banned' in user))
                    user.banned = false
                if (!isNumber(user.warn))
                    user.warn = 0
                if (!isNumber(user.level))
                    user.level = 0
                if (!('role' in user))
                    user.role = 'Novato'
                if (!('autolevelup' in user))
                    user.autolevelup = false
                if (!('chatbot' in user))
                    user.chatbot = false
            } else
                global.db.data.users[m.sender] = {
                    exp: 0,
                    diamond: 10,
                    lastclaim: 0,
                    registered: false,
                    name: m.name,
                    age: -1,
                    regTime: -1,
                    afk: -1,
                    afkReason: '',
                    banned: false,
                    warn: 0,
                    level: 0,
                    role: 'Novato',
                    autolevelup: false,
                    chatbot: false,
                }
            let chat = global.db.data.chats[m.chat]
            if (typeof chat !== 'object')
                global.db.data.chats[m.chat] = {}
            if (chat) {
                if (!('isBanned' in chat))
                    chat.isBanned = false
                if (!('welcome' in chat))
                    chat.welcome = false
                if (!('detect' in chat))
                    chat.detect = false
                if (!('sWelcome' in chat))
                    chat.sWelcome = ''
                if (!('sBye' in chat))
                    chat.sBye = ''
                if (!('sPromote' in chat))
                    chat.sPromote = ''
                if (!('sDemote' in chat))
                    chat.sDemote = ''
                if (!('delete' in chat))
                    chat.delete = true
                if (!('antiLink' in chat))
                    chat.antiLink = false
                if (!('viewonce' in chat))
                    chat.viewonce = false
                if (!('onlyLatinos' in chat))
                    chat.onlyLatinos = false
                 if (!('nsfw' in chat))
                    chat.nsfw = false
                if (!isNumber(chat.expired))
                    chat.expired = 0
            } else
                global.db.data.chats[m.chat] = {
                    isBanned: false,
                    welcome: false,
                    detect: false,
                    sWelcome: '',
                    sBye: '',
                    sPromote: '',
                    sDemote: '',
                    delete: true,
                    antiLink: false,
                    viewonce: false,
                    useDocument: true,
                    onlyLatinos: false,
                    nsfw: false, 
                    expired: 0,
                }
            let settings = global.db.data.settings[this.user.jid]
            if (typeof settings !== 'object') global.db.data.settings[this.user.jid] = {}
            if (settings) {
                if (!('self' in settings)) settings.self = false
                if (!('autoread' in settings)) settings.autoread = false
                if (!('restrict' in settings)) settings.restrict = false
                if (!('status' in settings)) settings.status = 0
            } else global.db.data.settings[this.user.jid] = {
                self: false,
                autoread: false,
                restrict: false, 
                status: 0
            }
        } catch (e) {
            console.error(e)
        }
        if (opts['nyimak'])
            return
        if (!m.fromMe && opts['self'])
            return
        if (opts['pconly'] && m.chat.endsWith('g.us'))
            return
        if (opts['gconly'] && !m.chat.endsWith('g.us'))
            return
        if (opts['swonly'] && m.chat !== 'status@broadcast')
            return
        if (typeof m.text !== 'string')
            m.text = ''

        const isROwner = [conn.decodeJid(global.conn.user.id), ...global.owner.map(([number]) => number)].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isOwner = isROwner || m.fromMe
        const isMods = isOwner || global.mods.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isPrems = isROwner || global.prems.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)

        if (opts['queque'] && m.text && !(isMods || isPrems)) {
            let queque = this.msgqueque, time = 1000 * 5
            const previousID = queque[queque.length - 1]
            queque.push(m.id || m.key.id)
            setInterval(async function () {
                if (queque.indexOf(previousID) === -1) clearInterval(this)
                await delay(time)
            }, time)
        }

        if (m.isBaileys)
            return
        m.exp += Math.ceil(Math.random() * 10)

        let usedPrefix
        let _user = global.db.data && global.db.data.users && global.db.data.users[m.sender]

        const groupMetadata = (m.isGroup ? ((conn.chats[m.chat] || {}).metadata || await this.groupMetadata(m.chat).catch(_ => null)) : {}) || {}
        const participants = (m.isGroup ? groupMetadata.participants : []) || []
        const user = (m.isGroup ? participants.find(u => conn.decodeJid(u.id) === m.sender) : {}) || {} // User Data
        const bot = (m.isGroup ? participants.find(u => conn.decodeJid(u.id) == this.user.jid) : {}) || {} // Your Data
        const isRAdmin = user?.admin == 'superadmin' || false
        const isAdmin = isRAdmin || user?.admin == 'admin' || false // Is User Admin?
        const isBotAdmin = bot?.admin || false // Are you Admin?

        const ___dirname = path.join(path.dirname(fileURLToPath(import.meta.url)), './funciones')
        for (let name in global.funciones) {
            let funcion = global.funciones[name]
            if (!funciones)
                continue
            if (funciones.disabled)
                continue
            const __filename = join(___dirname, name)
            if (typeof funciones.all === 'function') {
                try {
                    await funciones.all.call(this, m, {
                        chatUpdate,
                        __dirname: ___dirname,
                        __filename
                    })
                 } catch (e) {
                    // if (typeof e === 'string') continue
                    console.error(e)
                    for (let [jid] of global.owner.filter(([number, _, isDeveloper]) => isDeveloper && number)) {
                        let data = (await conn.onWhatsApp(jid))[0] || {}
                        if (data.exists)
                            m.reply(`*[ ⚠️ 𝚁𝙴𝙿𝙾𝚁𝚃𝙴 𝙳𝙴 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙲𝙾𝙽 𝙵𝙰𝙻𝙻𝙾𝚂 ⚠️ ]*\n\n*—◉ 𝙿𝙻𝚄𝙶𝙸𝙽:* ${name}\n*—◉ 𝚄𝚂𝚄𝙰𝚁𝙸𝙾:* ${m.sender}\n*—◉ 𝙲𝙾𝙼𝙰𝙽𝙳𝙾:* ${m.text}\n\n*—◉ 𝙴𝚁𝚁𝙾𝚁:*\n\`\`\`${format(e)}\`\`\`\n\n*[❗] 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙲𝚁𝙴𝙰𝙳𝙾𝚁 𝙳𝙴𝙻 𝙱𝙾𝚃 𝙿𝙰𝚁𝙰 𝙳𝙰𝚁𝙻𝙴 𝚄𝙽𝙰 𝚂𝙾𝙻𝚄𝙲𝙸𝙾𝙽, 𝙿𝚄𝙴𝙳𝙴 𝚄𝚂𝙰𝚁 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 #reporte*`.trim(), data.jid)
                    }
                }
            }
            if (!opts['restrict'])
                if (funciones.tags && funciones.tags.includes('admin')) {
                    // global.dfail('restrict', m, this)
                    continue
                }
            const str2Regex = str => str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
            let _prefix = funciones.customPrefix ? funciones.customPrefix : conn.prefix ? conn.prefix : global.prefix
            let match = (_prefix instanceof RegExp ? // RegExp Mode?
                [[_prefix.exec(m.text), _prefix]] :
                Array.isArray(_prefix) ? // Array?
                    _prefix.map(p => {
                        let re = p instanceof RegExp ? // RegExp in Array?
                            p :
                            new RegExp(str2Regex(p))
                        return [re.exec(m.text), re]
                    }) :
                    typeof _prefix === 'string' ? // String?
                        [[new RegExp(str2Regex(_prefix)).exec(m.text), new RegExp(str2Regex(_prefix))]] :
                        [[[], new RegExp]]
            ).find(p => p[1])
            if (typeof funciones.before === 'function') {
                if (await funciones.before.call(this, m, {
                    match,
                    conn: this,
                    participants,
                    groupMetadata,
                    user,
                    bot,
                    isROwner,
                    isOwner,
                    isRAdmin,
                    isAdmin,
                    isBotAdmin,
                    isPrems,
                    chatUpdate,
                    __dirname: ___dirname,
                    __filename
                }))
                    continue
            }
            if (typeof funciones !== 'function')
                continue
            if ((usedPrefix = (match[0] || '')[0])) {
                let noPrefix = m.text.replace(usedPrefix, '')
                let [command, ...args] = noPrefix.trim().split` `.filter(v => v)
                args = args || []
                let _args = noPrefix.trim().split` `.slice(1)
                let text = _args.join` `
                command = (command || '').toLowerCase()
                let fail = funciones.fail || global.dfail // When failed
                let isAccept = funcion.command instanceof RegExp ? // RegExp Mode?
                    funcion.command.test(command) :
                    Array.isArray(funcion.command) ? // Array?
                        funciones.command.some(cmd => cmd instanceof RegExp ? // RegExp in Array?
                            cmd.test(command) :
                            cmd === command
                        ) :
                        typeof funciones.command === 'string' ? // String?
                            funciones.command === command :
                            false

                if (!isAccept)
                    continue
                m.funciones = name
                if (m.chat in global.db.data.chats || m.sender in global.db.data.users) {
                    let chat = global.db.data.chats[m.chat]
                    let user = global.db.data.users[m.sender]
                    if (name != 'owner-unbanchat.js' && chat?.isBanned)
                        return // Except this
                    if (name != 'owner-unbanuser.js' && user?.banned)
                        return
                }
                if (funciones.rowner && funciones.owner && !(isROwner || isOwner)) { // Both Owner
                    fail('owner', m, this)
                    continue
                }
                if (funciones.rowner && !isROwner) { // Real Owner
                    fail('rowner', m, this)
                    continue
                }
                if (funciones.owner && !isOwner) { // Number Owner
                    fail('owner', m, this)
                    continue
                }
                if (funciones.mods && !isMods) { // Moderator
                    fail('mods', m, this)
                    continue
                }
                if (funciones.premium && !isPrems) { // Premium
                    fail('premium', m, this)
                    continue
                }
                if (funciones.group && !m.isGroup) { // Group Only
                    fail('group', m, this)
                    continue
                } else if (funciones.botAdmin && !isBotAdmin) { // You Admin
                    fail('botAdmin', m, this)
                    continue
                } else if (funciones.admin && !isAdmin) { // User Admin
                    fail('admin', m, this)
                    continue
                }
                if (funciones.private && m.isGroup) { // Private Chat Only
                    fail('private', m, this)
                    continue
                }
                if (funciones.register == true && _user.registered == false) { // Butuh daftar?
                    fail('unreg', m, this)
                    continue
                }
                m.isCommand = true
                let xp = 'exp' in funciones ? parseInt(funciones.exp) : 17 // XP Earning per command
                if (xp > 200)
                    m.reply('chirrido -_-') // Hehehe
                else
                    m.exp += xp
                if (!isPrems && funciones.diamond && global.db.data.users[m.sender].diamond < funciones.diamond * 1) {
                    this.sendButton(m.chat, `✳️ Tus diamantes se agotaron \n use el siguiente comando para comprar más diamantes \n*${usedPrefix}buy* <cantidad> \n*${usedPrefix}buyall*`, fgig, null, [['Buy', `${usedPrefix}buy`], ['Buy All', `${usedPrefix}buyall`]], m)
                    continue // Limit habis
                }
                if (funciones.level > _user.level) {
                    this.reply(m.chat, `✳️ nivel requerido ${plugin.level} para usar este comando. \nTu nivel ${_user.level}`, m)
                    continue // If the level has not been reached
                }
                let extra = {
                    match,
                    usedPrefix,
                    noPrefix,
                    _args,
                    args,
                    command,
                    text,
                    conn: this,
                    participants,
                    groupMetadata,
                    user,
                    bot,
                    isROwner,
                    isOwner,
                    isRAdmin,
                    isAdmin,
                    isBotAdmin,
                    isPrems,
                    chatUpdate,
                    __dirname: ___dirname,
                    __filename
                }
                try {
                    await funciones.call(this, m, extra)
                    if (!isPrems)
                        m.diamond = m.diamond || funciones.diamond || false
                                } catch (e) {
                    // Error occured
                    m.error = e
                    console.error(e)
                    if (e) {
                        let text = format(e)
                        for (let key of Object.values(global.APIKeys))
                            text = text.replace(new RegExp(key, 'g'), '#HIDDEN#')
                        if (e.name)
                            for (let [jid] of global.owner.filter(([number, _, isDeveloper]) => isDeveloper && number)) {
                                let data = (await conn.onWhatsApp(jid))[0] || {}
                                if (data.exists)
                                    m.reply(`*[ ⚠️ 𝚁𝙴𝙿𝙾𝚁𝚃𝙴 𝙳𝙴 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙲𝙾𝙽 𝙵𝙰𝙻𝙻𝙾𝚂 ⚠️ ]*\n\n*—◉ 𝙿𝙻𝚄𝙶𝙸𝙽:* ${m.funciones}\n*—◉ 𝚄𝚂𝚄𝙰𝚁𝙸𝙾:* ${m.sender}\n*—◉ 𝙲𝙾𝙼𝙰𝙽𝙳𝙾:* ${usedPrefix}${command} ${args.join(' ')}\n\n\`\`\`${text}\`\`\`\n\n*[❗] 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙲𝚁𝙴𝙰𝙳𝙾𝚁 𝙳𝙴𝙻 𝙱𝙾𝚃 𝙿𝙰𝚁𝙰 𝙳𝙰𝚁𝙻𝙴 𝚄𝙽𝙰 𝚂𝙾𝙻𝚄𝙲𝙸𝙾𝙽, 𝙿𝚄𝙴𝙳𝙴 𝚄𝚂𝙰𝚁 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 #reporte*`.trim(), data.jid)
                            }
                        m.reply(text)
                    }
                } finally {
                    // m.reply(util.format(_user))
                    if (typeof funciones.after === 'function') {
                        try {
                            await funciones.after.call(this, m, extra)
                        } catch (e) {
                            console.error(e)
                        }
                    }
                    if (m.diamond)
                        m.reply(`Utilizaste *${+m.diamond}* 💎`)
                }
                break
            }
        }
    } catch (e) {
        console.error(e)
    } finally {
        if (opts['queque'] && m.text) {
            const quequeIndex = this.msgqueque.indexOf(m.id || m.key.id)
            if (quequeIndex !== -1)
                this.msgqueque.splice(quequeIndex, 1)
        }
        //console.log(global.db.data.users[m.sender])
        let user, stats = global.db.data.stats
        if (m) {
            if (m.sender && (user = global.db.data.users[m.sender])) {
                user.exp += m.exp
                user.diamond -= m.diamond * 1
            }

            let stat
            if (m.funciones) {
                let now = +new Date
                if (m.funciones in stats) {
                    stat = stats[m.funciones]
                    if (!isNumber(stat.total))
                        stat.total = 1
                    if (!isNumber(stat.success))
                        stat.success = m.error != null ? 0 : 1
                    if (!isNumber(stat.last))
                        stat.last = now
                    if (!isNumber(stat.lastSuccess))
                        stat.lastSuccess = m.error != null ? 0 : now
                } else
                    stat = stats[m.funciones] = {
                        total: 1,
                        success: m.error != null ? 0 : 1,
                        last: now,
                        lastSuccess: m.error != null ? 0 : now
                    }
                stat.total += 1
                stat.last = now
                if (m.error == null) {
                    stat.success += 1
                    stat.lastSuccess = now
                }
            }
        }

        try {
            if (!opts['noprint']) await (await import(`./lib/print.js`)).default(m, this)
        } catch (e) {
            console.log(m, m.quoted, e)
        }
        if (opts['autoread'])
            await this.chatRead(m.chat, m.isGroup ? m.sender : undefined, m.id || m.key.id).catch(() => { })
    }
}

/**
 * Handle groups participants update
 * @param {import('@adiwajshing/baileys').BaileysEventMap<unknown>['group-participants.update']} groupsUpdate 
 */
export async function participantsUpdate({ id, participants, action }) {
    if (opts['self'])
        return
    // if (id in conn.chats) return // First login will spam
    if (this.isInit)
        return
    if (global.db.data == null)
        await loadDatabase()
    let chat = global.db.data.chats[id] || {}
    let text = ''
    switch (action) {
        case 'add':
        case 'remove':
            if (chat.welcome) {
                let groupMetadata = await this.groupMetadata(id) || (conn.chats[id] || {}).metadata
                for (let user of participants) {
                    let pp = 'https://i.imgur.com/whjlJSf.jpg'
                    let ppgp = 'https://i.imgur.com/whjlJSf.jpg'
                    try {
                        pp = await this.profilePictureUrl(user, 'image')
                        ppgp = await this.profilePictureUrl(id, 'image')
                        } finally {
                        text = (action === 'add' ? (chat.sWelcome || this.welcome || conn.welcome || 'Bienvenido, @user').replace('@group', await this.getName(id)).replace('@desc', groupMetadata.desc?.toString() || 'Desconocido') :
                            (chat.sBye || this.bye || conn.bye || 'Adiós, @user')).replace('@user', '@' + user.split('@')[0])
                         
                            let wel = API('fgmods', '/api/welcome', {
                                username: await this.getName(user),
                                groupname: await this.getName(id),
                                groupicon: ppgp,
                                membercount: groupMetadata.participants.length,
                                profile: pp,
                                background: 'https://i.imgur.com/bbWbASn.jpg'
                            }, 'apikey')

                            let lea = API('fgmods', '/api/goodbye', {
                                username: await this.getName(user),
                                groupname: await this.getName(id),
                                groupicon: ppgp,
                                membercount: groupMetadata.participants.length,
                                profile: pp,
                                background: 'https://i.imgur.com/klTSO3d.jpg'
                            }, 'apikey')
                            // this.sendFile(id, pp, 'pp.jpg', text, null, false, { mentions: [user] })
                            this.sendButton(id, text, fgig, action === 'add' ? wel : lea, [
                             [(action == 'add' ? '⦙☰ MENU' : 'BYE'), (action == 'add' ? '/help' : 'khajs')], 
                             [(action == 'add' ? '⏍ INFO' : 'ッ'), (action == 'add' ? '/info' : ' ')] ], null, {mentions: [user]})
                          
                    }
                }
            }
            break
        case 'promote':
            text = (chat.sPromote || this.spromote || conn.spromote || '@user ahora es administrador')
        case 'demote':
            let pp = await this.profilePictureUrl(participants[0], 'image').catch(_ => 'https://i.imgur.com/whjlJSf.jpg') 
            if (!text)
                text = (chat.sDemote || this.sdemote || conn.sdemote || '@user ya no es administrador')
            text = text.replace('@user', '@' + participants[0].split('@')[0])
            if (chat.detect)    
            this.sendFile(id, pp, 'pp.jpg', text, null, false, { mentions: this.parseMention(text) })
            //this.sendMessage(id, { text, mentions: this.parseMention(text) })
            break
    }
}

/**
 * Handle groups update
 * @param {import('@adiwajshing/baileys').BaileysEventMap<unknown>['groups.update']} groupsUpdate 
 */
export async function groupsUpdate(groupsUpdate) {
    if (opts['self'])
        return
    for (const groupUpdate of groupsUpdate) {
        const id = groupUpdate.id
        if (!id) continue
        let chats = global.db.data.chats[id], text = ''
        if (!chats?.detect) continue
        if (groupUpdate.desc) text = (chats.sDesc || this.sDesc || conn.sDesc || 'Descripción cambiada a \n@desc').replace('@desc', groupUpdate.desc)
        if (groupUpdate.subject) text = (chats.sSubject || this.sSubject || conn.sSubject || 'El nombre del grupo cambió a \n@group').replace('@subject', groupUpdate.subject)
        if (groupUpdate.icon) text = (chats.sIcon || this.sIcon || conn.sIcon || 'El icono del grupo cambió a').replace('@icon', groupUpdate.icon)
        if (groupUpdate.revoke) text = (chats.sRevoke || this.sRevoke || conn.sRevoke || 'El enlace del grupo cambia a\n@revoke').replace('@revoke', groupUpdate.revoke)
        if (!text) continue
        await this.sendMessage(id, { text, mentions: this.parseMention(text) })
    }
}

export async function callUpdate(callUpdate) {
    let isAnticall = global.db.data.settings[this.user.jid].antiCall
    if (!isAnticall) return
    for (let nk of callUpdate) {
    if (nk.isGroup == false) {
    if (nk.status == "offer") {
    let callmsg = await this.reply(nk.from, `Hola *@${nk.from.split('@')[0]}*, las ${nk.isVideo ? 'videollamadas' : 'llamadas'} no están permitidas, serás bloqueado.\n-\nSi accidentalmente llamaste póngase en contacto con mi creador para que te desbloquee!`, false, { mentions: [nk.from] })
    //let data = global.owner.filter(([id, isCreator]) => id && isCreator)
    //await this.sendContact(nk.from, data.map(([id, name]) => [id, name]), false, { quoted: callmsg })
    let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;𝐁𝐫𝐮𝐧𝐨 𝐒𝐨𝐛𝐫𝐢𝐧𝐨 👑;;;\nFN:𝐁𝐫𝐮𝐧𝐨 𝐒𝐨𝐛𝐫𝐢𝐧𝐨 👑\nORG:𝐁𝐫𝐮𝐧𝐨 𝐒𝐨𝐛𝐫𝐢𝐧𝐨 👑\nTITLE:\nitem1.TEL;waid=5219992095479:+521 999 209 5479\nitem1.X-ABLabel:𝐁𝐫𝐮𝐧𝐨 𝐒𝐨𝐛𝐫𝐢𝐧𝐨 👑\nX-WA-BIZ-DESCRIPTION:[❗] ᴄᴏɴᴛᴀᴄᴛᴀ ᴀ ᴇsᴛᴇ ɴᴜᴍ ᴘᴀʀᴀ ᴄᴏsᴀs ɪᴍᴘᴏʀᴛᴀɴᴛᴇs.\nX-WA-BIZ-NAME:𝐁𝐫𝐮𝐧𝐨 𝐒𝐨𝐛𝐫𝐢𝐧𝐨 👑\nEND:VCARD`
    await this.sendMessage(nk.from, { contacts: { displayName: '𝐁𝐫𝐮𝐧𝐨 𝐒𝐨𝐛𝐫𝐢𝐧𝐨 👑', contacts: [{ vcard }] }}, {quoted: callmsg})
    await this.updateBlockStatus(nk.from, 'block')
    }
    }
    }
}

export async function deleteUpdate(message) {
    try {
        const { fromMe, id, participant } = message
        if (fromMe)
            return
        let msg = this.serializeM(this.loadMessage(id))
        if (!msg)
            return
        let chat = global.db.data.chats[msg.chat] || {}
        if (chat.delete)
            return
        await this.reply(msg.chat, `
╔═✪「 𝙰𝙽𝚃𝙸 𝙳𝙴𝙻𝙴𝚃𝙴 」
║ ■ *𝙽𝙾𝙼𝙱𝚁𝙴 :* @${participant.split`@`[0]} 
╚═════════════✪
Para desactivar esta función, escriba 
*/off antidelete*
*.enable delete*
`.trim(), msg, {
            mentions: [participant]
        })
        this.copyNForward(msg.chat, msg).catch(e => console.log(e, msg))
    } catch (e) {
        console.error(e)
    }
}

global.dfail = (type, m, conn) => {
    let msg = {
        rowner: '[⚠️ 𝐀𝐋𝐄𝐑𝐓𝐀 ⚠️ ] 𝙴𝚂𝚃𝙴 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝚂𝙾𝙻𝙾 𝙿𝚄𝙴𝙳𝙴 𝚂𝙴𝚁 𝚄𝚃𝙸𝙻𝙸𝚉𝙰𝙳𝙾 𝙿𝙾𝚁 𝙴𝙻/𝙻𝙰 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾/𝙰 (𝙾𝚆𝙽𝙴𝚁) 𝙳𝙴𝙻 𝙱𝙾𝚃',
        owner: '[ ⚠️ 𝐀𝐋𝐄𝐑𝐓𝐀 ⚠️ ] 𝙴𝚂𝚃𝙴 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝚂𝙾𝙻𝙾 𝙿𝚄𝙴𝙳𝙴 𝚂𝙴𝚁 𝚄𝚃𝙸𝙻𝙸𝚉𝙰𝙳𝙾 𝙿𝙾𝚁 𝙴𝙻/𝙻𝙰 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾/𝙰 (𝙾𝚆𝙽𝙴𝚁) 𝙳𝙴𝙻 𝙱𝙾𝚃',
        mods: '[⚠️ 𝐀𝐋𝐄𝐑𝐓𝐀 ⚠️ ] 𝙴𝚂𝚃𝙰 𝙵𝚄𝙽𝙲𝙸𝙾𝙽 𝙴𝚂 𝚂𝙾𝙻𝙾 𝙿𝙰𝚁𝙰 𝙼𝙾𝙳𝙴𝚁𝙰𝚃𝙾𝚁/𝙾𝚆𝙽𝙴𝚁 𝙳𝙴𝙻 𝙱𝙾𝚃',
        premium: '[⚠️ 𝐀𝐋𝐄𝐑𝐓𝐀 ⚠️ ]  𝙴𝚂𝚃𝙴 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙴𝚂 𝚂𝙾𝙻𝙾 𝙿𝙰𝚁𝙰 𝙼𝙸𝙴𝙼𝙱𝚁𝙾𝚂 𝙿𝚁𝙴𝙼𝙸𝚄𝙼\n\n𝙴𝚂𝙲𝚁𝙸𝙱𝙸 */premium* 𝙿𝙰𝚁𝙰 𝙼𝙰𝚂 𝙸𝙽𝙵𝙾',
        group: ' [⚠️ 𝐀𝐋𝐄𝐑𝐓𝐀 ⚠️ ] 𝙴𝚂𝚃𝙴 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝚂𝙾𝙻𝙾 𝙿𝚄𝙴𝙳𝙴 𝚂𝙴𝚁 𝚄𝚃𝙸𝙻𝙸𝚉𝙰𝙳𝙾 𝙴𝙽 𝙶𝚁𝚄𝙿𝙾𝚂!',
        private: '[⚠️ 𝐀𝐋𝐄𝐑𝐓𝐀 ⚠️ ] 𝙴𝚂𝚃𝙴 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝚂𝙾𝙻𝙾 𝙿𝚄𝙴𝙳𝙴 𝚂𝙴𝚁 𝚄𝚃𝙸𝙻𝙸𝚉𝙰𝙳𝙾 𝙴𝙽 𝙲𝙷𝙰𝚃 𝙿𝚁𝙸𝚅𝙰𝙳𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃',
        admin: ' [⚠️ 𝐀𝐋𝐄𝐑𝐓𝐀 ⚠️ ] 𝙴𝚂𝚃𝙴 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝚂𝙾𝙻𝙾 𝙿𝚄𝙴𝙳𝙴 𝚂𝙴𝚁 𝚄𝚃𝙸𝙻𝙸𝚉𝙰𝙳𝙾 𝙿𝙾𝚁 𝙰𝙳𝙼𝙸𝙽𝚂 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾',
        botAdmin: '[⚠️ 𝐀𝐋𝐄𝐑𝐓𝐀 ⚠️ ] 𝙿𝙰𝚁𝙰 𝙿𝙾𝙳𝙴𝚁 𝚄𝚂𝙰𝚁 𝙴𝚂𝚃𝙴 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙴𝚂 𝙽𝙴𝙲𝙴𝚂𝙰𝚁𝙸𝙾 𝚀𝚄𝙴 𝙴𝙻 𝙱𝙾𝚃 𝚂𝙴𝙰 𝙰𝙳𝙼𝙸𝙽, 𝙰𝙲𝙴𝙽𝙳𝙴𝚁 𝙰 𝙰𝙳𝙼𝙸𝙽 𝙴𝚂𝚃𝙴 𝙽𝚄𝙼𝙴𝚁𝙾',
        unreg: '[⚠️ 𝐀𝐋𝐄𝐑𝐓𝐀 ⚠️ ] 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙴𝚂𝙴 𝙿𝙰𝚁𝙰 𝚄𝚂𝙰𝚁 𝙴𝚂𝚃𝙰 𝙵𝚄𝙽𝙲𝙸𝙾𝙽 𝙴𝚂𝙲𝚁𝙸𝙱𝙸𝙴𝙽𝙳𝙾:\n\n*/reg nombre.edad*\n\n📌 𝙴𝙹𝙴𝙼𝙿𝙻𝙾 : */reg Curiosity.16*',
        restrict: '[⚠️ 𝐀𝐋𝐄𝐑𝐓𝐀 ⚠️ ] 𝙴𝚂𝚃𝙰 𝙵𝚄𝙽𝙲𝙸𝙾𝙽 𝙴𝚂𝚃𝙰 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝙳𝙾 𝙿𝙾𝚁 𝙼𝙸 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾/𝙾𝚆𝙽𝙴𝚁 𝙳𝙴𝙻 𝙱𝙾𝚃'
    }[type]
    if (msg) return conn.sendButton(m.chat, msg, fgig, null, [['😱 OK', 'khajs'], ['☔️ Menu', '/menu'] ], m)
}

let file = global.__filename(import.meta.url, true)
watchFile(file, async () => {
    unwatchFile(file)
    console.log(chalk.magenta("UPDATE 'handler.js'"))
    if (global.reloadHandler) console.log(await global.reloadHandler())
}) 
