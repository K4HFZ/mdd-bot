/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

require('./setting.name/config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const { fromBuffer } = require('file-type')
const path = require('path')
const os = require('os')
const moment = require('moment-timezone')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
modelmenu = 'location'
fake1 = 'KahfzXzy'
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
let cmdmedia = JSON.parse(fs.readFileSync('./src/cmdmedia.json'))
let game = JSON.parse(fs.readFileSync("./src/game.json"))
let tebaklagu = game.tebaklagu = []
let _family100 = game.family100 = []
let kuismath = game.math = []
let tebakgambar = game.tebakgambar = []
let tebakkata = game.tebakkata = []
let caklontong = game.lontong = []
let tebakkalimat = game.kalimat = []
let tebaklirik = game.lirik = []
let tebaktebakan = game.tebakan = []

// TIME NYA 
const hour_now = moment().format('HH')
var ucapanWaktu = 'ððð¥ðð¦ðð­ ððð ð¢'//'Pagið'
if (hour_now >= '03' && hour_now <= '10') {
ucapanWaktu = 'ððð¥ðð¦ðð­ ðð¢ðð§ð '//'Pagi ð'
} else if (hour_now >= '10' && hour_now <= '14') {
ucapanWaktu = 'ððð¥ðð¦ðð­ ðð¢ðð§ð '//'Siang ð'
} else if (hour_now >= '14' && hour_now <= '17') {
ucapanWaktu = 'ððð¥ðð¦ðð­ ðð¨ð«ð'//'Soree âï¸'
} else if (hour_now >= '17' && hour_now <= '18') {
ucapanWaktu = 'ððð¥ðð¦ðð­ ððð¥ðð¦'//'Selamat ð '
} else if (hour_now >= '18' && hour_now <= '23') {
ucapanWaktu = 'ððð¥ðð¦ðð­ ððð¥ðð¦'//'Malam ð'
} else {
ucapanWaktu = 'ððð¥ðð¦ðð­ ððð¥ðð¦'//'Selamat Malam!'
}
const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')


module.exports = hisoka = async (hisoka, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[Â°â¢ÏÃ·ÃÂ¶âÂ£Â¢â¬Â¥Â®â¢+â_=|~!?@#$%^&.Â©^]/gi.test(body) ? body.match(/^[Â°â¢ÏÃ·ÃÂ¶âÂ£Â¢â¬Â¥Â®â¢+â_=|~!?@#$%^&.Â©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = hisoka.user.id ? hisoka.user.id.split(":")[0]+"@s.whatsapp.net" : hisoka.user.id
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)
	
        // Group
        const groupMetadata = m.isGroup ? await hisoka.groupMetadata(m.chat).catch(e => {}) : ''
        const isAntiLink = m.isGroup ? antilink.includes(m.chat) : false
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isGroupOwner = m.isGroup ? groupOwner.includes(botNumber) : false
        const isGroupAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false

        // Bot Status
        const used = process.memoryUsage()
        const cpus = os.cpus().map(cpu => {
            cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			return cpu
        })
        const cpu = cpus.reduce((last, cpu, _, { length }) => {
            last.total += cpu.total
			last.speed += cpu.speed / length
			last.times.user += cpu.times.user
			last.times.nice += cpu.times.nice
			last.times.sys += cpu.times.sys
			last.times.idle += cpu.times.idle
			last.times.irq += cpu.times.irq
			return last
        }, {
            speed: 0,
			total: 0,
			times: {
			    user: 0,
			    nice: 0,
			    sys: 0,
			    idle: 0,
			    irq: 0
            }
        })

        // Public & Self
        if (!hisoka.public) {
            if (!m.key.fromMe) return
        }
       
       //FUNGTION
const str2Regex = str => str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
			const match = (prefix instanceof RegExp ? // RegExp Mode?
			[[prefix.exec(m.text), prefix]] :
			Array.isArray(prefix) ? // Array?
            prefix.map(p => {
              let re = p instanceof RegExp ? // RegExp in Array?
                p :
                new RegExp(str2Regex(p))
              return [re.exec(m.text), re]
            }) :
            typeof prefix === 'string' ? // String?
            [[new RegExp(str2Regex(prefix)).exec(m.text), new RegExp(str2Regex(prefix))]] :
            [[[], new RegExp]]
			).find(p => p[1])

       //ANTILINK
if (m.isGroup && isAntiLink && !isGroupAdmins && isBotAdmins){
  if (budy.match(/(https:\/\/chat.whatsapp.com)/)) {
          hisoka.groupParticipantsUpdate(m.chat, [m.sender])
        }
          m.reply(`Maaf Kamu Akan Terkick !!`)
        }
  
       //Create Message
hisoka.createMessage = async (jidnya, kontennya, optionnya) => {
            return await generateWAMessage(jidnya, kontennya, {...optionnya,userJid: hisoka.authState.creds.me.id,upload: hisoka.waUploadToServer})
            }

        //BUAT BROADCAST NYA BUTTON
const sendButton5 = async (id, text1, desc1, yo) => {
// by fabil & rashid
var buatpesan = await generateWAMessageFromContent(m.chat, {
    "templateMessage": {
      "hydratedTemplate": {
        ...yo.message,
        "hydratedContentText": text1,
        "hydratedFooterText": desc1,
        "hydratedButtons": [
          {
            "urlButton": {
              "displayText": "My Youtube",
              "url": "https://youtube.com/Kahfzxzyy"
            }
          },
          {
            "quickReplyButton": {
              "displayText": "Menu",
              "id": `${prefix}menu`,
            }
          },
          {
            "quickReplyButton": {
              "displayText": "Owner",
              "id": `${prefix}owner`
            }
          }
        ]
      }
    }
  }, {})
hisoka.relayMessage(id, buatpesan.message, { messageId: buatpesan.key.id })
}
const sendButton1 = async (id, text1, desc1, yo) => {
// by fabil & rashid
var buatpesan = await generateWAMessageFromContent(m.chat, {
    "templateMessage": {
      "hydratedTemplate": {
        ...yo.message,
        "hydratedContentText": text1,
        "hydratedFooterText": desc1,
        "hydratedButtons": [
          {
            "urlButton": {
              "displayText": "My Youtube",
              "url": "https://youtube.com/Kahfzxzyy"
            }
          },
          {
            "quickReplyButton": {
              "displayText": "Owner",
              "id": `${prefix}owner`
            }
          }
        ]
      }
    }
  }, {})
hisoka.relayMessage(id, buatpesan.message, { messageId: buatpesan.key.id })
}

        // Push Message To Console && Auto Read
        if (m.message) {
        hisoka.sendReadReceipt(m.chat, m.sender, [m.key.id])
            console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }

        // Respon Cmd with media
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in cmdmedia)) {
        let hash = cmdmedia[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: hisoka.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, hisoka.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        hisoka.ev.emit('messages.upsert', msg)
        }
	    
	if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            hisoka.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`ð® Tebak Lagu ð®\n\nJawaban Benar ð\n\nIngin bermain lagi? kirim ${prefix}tebak lagu`)
                delete tebaklagu[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`ð® Kuis Matematika  ð®\n\nJawaban Benar ð\n\nIngin bermain lagi? kirim ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`ð® Tebak Gambar ð®\n\nJawaban Benar ð\n\nIngin bermain lagi? kirim ${prefix}tebak gambar`)
                delete tebakgambar[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`ð® Tebak Kata ð®\n\nJawaban Benar ð\n\nIngin bermain lagi? kirim ${prefix}tebak kata`)
                delete tebakkata[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`ð® Cak Lontong ð®\n\nJawaban Benar ð\n\nIngin bermain lagi? kirim ${prefix}tebak lontong`)
                delete caklontong[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`ð® Tebak Kalimat ð®\n\nJawaban Benar ð\n\nIngin bermain lagi? kirim ${prefix}tebak kalimat`)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`ð® Tebak Lirik ð®\n\nJawaban Benar ð\n\nIngin bermain lagi? kirim ${prefix}tebak lirik`)
                delete tebaklirik[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`ð® Tebak Tebakan ð®\n\nJawaban Benar ð\n\nIngin bermain lagi? kirim ${prefix}tebak tebakan`)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        switch(command) {
	    case 'donasi': case 'sewabot': case 'sewa': case 'buypremium': case 'donate': {
                hisoka.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/74fd634010128be37972c.jpg' }, caption: `*Hai Kak ${m.pushName}*\n\n Bot Rental Prices\nâ­ 13k Per Group via E-Walet 1 Month\nâ­ 18k via pulsa 1 Month\n\n Premium Price Bot\nâ­ 8k per User 1 bulan\n\nPayment can be via Paypal/link aja/pulsa\n\nFor more details, you can chat with the owner\nhttps://wa.me/6288292024190 (Owner)\n\nDonate For Me : \n\nâ­ Paypal : https://www.paypal.me/Cakhaho\nâ­ Saweria : https://saweria.co/DikaArdnt` }, { quoted: m })
            }
            break
case 'tess':
m.reply(` on bang ${m.sender}`)
break
            case 'sc': {
                m.reply('Script : https://github.com/DikaArdnt/Hisoka-Morou\n\n Dont Forget Give Star\n\nDonate : 6281615075793 (Link Aja)\nSaweria : https://saweria.co/DikaArdnt\nPaypal : https://www.paypal.me/Cakhaho\n\n Dont Forget Donate')
            }
            break
            case 'chat': {
                if (!isCreator) throw mess.owner
                if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[0] === 'mute') {
                    hisoka.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    hisoka.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    hisoka.chatModify({  archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    hisoka.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    hisoka.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    hisoka.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    hisoka.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
	    case 'family100': {
                if ('family100'+m.chat in _family100) {
                    m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
                    throw false
                }
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
                _family100['family100'+m.chat] = {
                    id: 'family100'+m.chat,
                    pesan: await hisoka.sendText(m.chat, hasil, m),
                    ...random,
                    terjawab: Array.from(random.jawaban, () => false),
                    hadiah: 6,
                }
            }
            break
            case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
            if (!m.quoted && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            ter = command[1].toLowerCase()
            tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
            m.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            break
            case 'tebak': {
                if (!text) throw `Example : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6.lontong`
                if (args[0] === "lagu") {
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://fatiharridho.my.id/database/games/tebaklagu.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let msg = await hisoka.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
                    hisoka.sendText(m.chat, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
                    tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    m.reply(`Waktu Habis\nJawaban:  ${result.jawaban}\n\nIngin bermain? kirim ${prefix + command} lagu`)
                    delete tebaklagu[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'gambar') {
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    hisoka.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
                    tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    m.reply(`Waktu Habis\nJawaban:  ${result.jawaban}\n\nIngin bermain? kirim ${prefix + command} gambar`)
                    delete tebakgambar[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kata') {
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    hisoka.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    m.reply(`Waktu Habis\nJawaban:  ${result.jawaban}\n\nIngin bermain? kirim ${prefix + command} kata`)
                    delete tebakkata[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kalimat') {
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    hisoka.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    m.reply(`Waktu Habis\nJawaban:  ${result.jawaban}\n\nIngin bermain? kirim ${prefix + command} kalimat`)
                    delete tebakkalimat[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lirik') {
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    hisoka.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
                    tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    m.reply(`Waktu Habis\nJawaban:  ${result.jawaban}\n\nIngin bermain? kirim ${prefix + command} lirik`)
                    delete tebaklirik[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lontong') {
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    hisoka.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
                    caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    m.reply(`Waktu Habis\nJawaban:  ${result.jawaban}\nDeskripsi : ${result.deskripsi}\n\nIngin bermain? kirim ${prefix + command} kalimat`)
                    delete caklontong[m.sender.split('@')[0]]
                    }
                }
            }
            break
            case 'kuismath': case 'math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                let { genMath, modes } = require('./src/math')
                if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`
                let result = await genMath(text.toLowerCase())
                hisoka.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    m.reply("Waktu Habis\nJawaban: " + result.jawaban)
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
            case 'jodohku': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `ð«Jodoh mu adalah

@${me.split('@')[0]} â¤ï¸ @${jodoh.split('@')[0]}`
            hisoka.sendTextWithMentions(m.chat, jawab, m)
            }
            break
            case 'jadian': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `Ciee yang Jadianð Jangan lupa pajak jadiannyað¤

@${orang.split('@')[0]} â¤ï¸ @${jodoh.split('@')[0]}`
            hisoka.sendTextWithMentions(m.chat, jawab, m)
            }
            break
            case 'join': {
                if (!isCreator) throw mess.owner
                if (!text) throw 'Masukkan Link Group!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
                m.reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await hisoka.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'leave': {
                if (!isCreator) throw mess.owner
                await hisoka.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
	case 'kick': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isGroupAdmins && !isGroupOwner) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hisoka.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'add': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isGroupAdmins && !isGroupOwner) throw mess.admin
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hisoka.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
case 'antilink':
	        if (!m.isGroup) return m.reply(`Khusus Grup`)
			if (!isGroupAdmins) return m.reply(`Khusus Admin Om`)
			if (!isBotAdmins) return m.reply(`Jdiin Admin Dlu Bjir`)
					if (args[0] === 'on') {
						if (isAntiLink) return m.reply('Sudah Aktif Kak')
						antilink.push(m.chat)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						m.reply('Sukses mengaktifkan fitur antilink')
						hisoka.sendMessage(m.chat,  {text: `ALLERT!!! Group ini sudah di pasang anti link\nJika Kamu Melanggar Maka Akan Saya Tendang`})
					} else if (args[0] === 'off') {
						if (!isAntiLink) return m.reply('Sudah Mati Kak')
						var ini = antilink.indexOf(m.chat)
						antilink.splice(ini, 1)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						m.reply('Sukses menonaktifkan fitur antilink')
					} else if (!q){
 m.reply(`Pilih Antilink On / Off `)
					}
					break 
	case 'promote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isGroupAdmins && !isGroupOwner) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hisoka.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'demote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isGroupAdmins && !isGroupOwner) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hisoka.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'block': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hisoka.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'unblock': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hisoka.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	    case 'setname': case 'setsubject': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isGroupAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await hisoka.groupUpdateSubject(m.chat, text).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'setprofile': case 'setpp': {
                if (!isCreator) throw mess.owner
                if (!quoted) throw 'Reply Image'
                if (/image/.test(mime)) throw `balas image dengan caption *${prefix + command}*`
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                if (!m.isGroup && !isBotAdmins && !isGroupAdmins && !isGroupOwner) {
                    await hisoka.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
		    await fs.unlinkSync(media)
                } else if (!isCreator) {
                    await hisoka.updateProfilePicture(hisoka.user.id, { url: media }).catch((err) => fs.unlinkSync(media))
		    await fs.unlinkSync(media)
                }
            }
            break
            case 'group': case 'grup': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isGroupAdmins) throw mess.admin
                if (args[0].toLowerCase() === 'close') {
                    await hisoka.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`Sukses Menutup Group`)).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0].toLowerCase() === 'open') {
                    await hisoka.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`Sukses Membuka Group`)).catch((err) => m.reply(jsonformat(err)))
                } else {
                m.reply(`Option : open/close`)
             }
            }
            break
            case 'editinfo': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isGroupAdmins) throw mess.admin
             if (args[0] === 'open'){
                await hisoka.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`Sukses Membuka Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
             } else if (args[0] === 'close'){
                await hisoka.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`Sukses Menutup Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
             } else {
             m.reply(`Option : open/close`)
            }
            }
            break
            case 'linkgroup': case 'linkgc': {
                if (!m.isGroup) throw mess.group
                let response = await hisoka.groupInviteCode(m.chat)
                hisoka.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
            case 'ephemeral': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isGroupAdmins) throw mess.admin
                if (!text) throw 'Masukkan value enable/disable'
                if (args[0] === 'enable') {
                    await hisoka.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'disable') {
                    await hisoka.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
            case 'delete': case 'del': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                hisoka.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'bcgc': case 'bcgroup': {
                if (!isCreator) throw mess.owner
                let getGroups = await hisoka.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                cc = await hisoka.serializeM(text ? m : m.quoted ? await m.quoted.fakeObj : false || m)
                cck = text ? text : cc.text
                m.reply(`Mengirim Broadcast Ke ${anu.length} Chat, Waktu Selesai ${anu.length * 1.5} detik`)
                for (let i of anu) {
                    await sleep(1500)
                    await hisoka.copyNForward(i, hisoka.cMod(m.chat, cc, /bc|broadcast|bcgc/i.test(cck) ? cck : `ã *${hisoka.user.name} Broadcast* ã\n\n ${cck}`), true).catch(_ => _)
                }
                m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
            }
            break
            case 'bc': case 'broadcast': case 'bcall': {
                if (!isCreator) throw mess.owner
                let anu = await store.chats.all().map(v => v.id)
                cc = await hisoka.serializeM(q ? m : m.quoted ? await m.getQuotedObj() : false || m)
                cck = q ? q : cc.text
                m.reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
		for (let yoi of anu) {
		    await sleep(1500)
		    await sendButton5(yoi, 'ã  *BROADCAST* ã\n\n'+cck, `Broadcast`, await hisoka.createMessage(yoi, {image: fs.readFileSync('./immage/fake.jpg'), caption: 'ã  *BROADCAST* ã\n\n'+cck}))
		}
		m.reply('Sukses Broadcast')
            }
            break
case 'setmenu':
if (!isCreator) throw mess.owner
                            if (!q) return m.reply(`Masukan opts :\nâ­location\nâ­simple`)
                            if (q == "location") {
                            modelmenu = "location"
                            m.reply("Done change menu to "+q)
                            } 

                            else if (q == "gif") {
                          modelmenu = "image"
                            m.reply("Done change menu to "+q)
                            } 
                            
                              else if (q == "simple") {
                          modelmenu = "simple"
                            m.reply("Done change menu to "+q)
                            } 

                            else {
                            m.reply(`Masukan opts :\nâ­location\nâ­simple`)
                            }
                            break
            case 'infochat': {
                if (!m.quoted) m.reply('Reply Pesan')
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += `â­ @${i.userJid.split('@')[0]}\n`
                    teks += ` âââ­ *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} â­ *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
                }
                hisoka.sendTextWithMentions(m.chat, teks, m)
            }
            break
            case 'q': case 'quoted': {
		if (!m.quoted) return m.reply('Reply Pesannya!!')
		let wokwol = await hisoka.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) return m.reply('Pesan Yang anda reply tidak mengandung reply')
		await wokwol.quoted.copyNForward(m.chat, true)
            }
	    break
            case 'listpc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `â¬£ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `â¬¡ *Nama :* ${nama}\nâ¬¡ *User :* @${i.split('@')[0]}\nâ¬¡ *Chat :* https://wa.me/${i.split('@')[0]}\n\nââââââââââââââââââââââââ\n\n`
                 }
                 hisoka.sendTextWithMentions(m.chat, teks, m)
             }
             break
                case 'listgc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `*--LIST GROUP CHAT--*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await hisoka.groupMetadata(i)
                     teks += `â¬¡ *Nama :* ${metadata.subject}\nâ¬¡ *Owner :* @${metadata.owner.split('@')[0]}\nâ¬¡ *ID :* ${metadata.id}\nâ¬¡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\nâ¬¡ *Member :* ${metadata.participants.length}\n\nââââââââââââââââââââââââ\n\n`
                 }
                 hisoka.sendTextWithMentions(m.chat, teks, m)
             }
             break
             case 'listonline': case 'liston': {
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), hisoka.user.id]
                    hisoka.sendText(m.chat, 'List Online:\n\n' + online.map(v => 'â­ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
            case 'sticker': case 's': case 'stickergif': case 'sgif': {
            if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await hisoka.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
                let media = await quoted.download()
                let encmedia = await hisoka.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
                }
            }
            break
            case 'ebinary': {
            if (!m.quoted.text && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            let { eBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let eb = await eBinary(teks)
            m.reply(eb)
        }
        break
            case 'dbinary': {
            if (!m.quoted.text && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            let { dBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let db = await dBinary(teks)
            m.reply(db)
        }
        break
            case 'emojimix': {
	        if (!text) throw `Example : ${prefix + command} ð+ð¤`
		let [emoji1, emoji2] = text.split`+`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await hisoka.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
            case 'toimage': case 'toimg': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    hisoka.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
	        case 'tomp4': case 'tovideo': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
		let { webp2mp4File } = require('./lib/scraper')
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await hisoka.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'togif': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
		let { webp2mp4File } = require('./lib/scraper')
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await hisoka.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
	        case 'tourl': {
                m.reply(mess.wait)
		let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    m.reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    m.reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
            case 'imagenobg': case 'removebg': case 'remove-bg': {
	    if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await hisoka.downloadAndSaveMediaMessage(quoted, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    m.reply(mess.wait)
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    hisoka.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, {quoted:m})
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break
	    case 'yts': case 'ytsearch': {
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `â­ No : ${no++}\nâ­ Type : ${i.type}\nâ­ Video ID : ${i.videoId}\nâ­ Title : ${i.title}\nâ­ Views : ${i.views}\nâ­ Duration : ${i.timestamp}\nâ­ Upload At : ${i.ago}\nâ­ Author : ${i.author.name}\nâ­ Url : ${i.url}\n\nâââââââââââââââââ\n\n`
                }
                hisoka.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
        case 'google': {
                if (!text) throw `Example : ${prefix + command} fatih arridho`
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                teks += `â­ *Title* : ${g.title}\n`
                teks += `â­ *Description* : ${g.snippet}\n`
                teks += `â­ *Link* : ${g.link}\n\nââââââââââââââââââââââââ\n\n`
                } 
                m.reply(teks)
                })
                }
                break
        case 'gimage': {
        if (!text) throw `Example : ${prefix + command} kaori cicak`
        let gis = require('g-i-s')
        gis(text, async (error, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)].url
        let buttons = [
                    {buttonId: `gimage ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*-------ã GIMAGE SEARCH ã-------*
ð¤  *Query* : ${text}
ð *Media Url* : ${images}`,
                    footer: 'Bot Created By : KahfzXzy',
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
        })
        }
        break
	    case 'play': case 'ytplay': {
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                    ngen = `
â­ Title : ${anu.title}
â­ Ext : Search
â­ ID : ${anu.videoId}
â­ Duration : ${anu.timestamp}
â­ Viewers : ${anu.views}
â­ Upload At : ${anu.ago}
â­ Author : ${anu.author.name}
â­ Channel : ${anu.author.url}
â­ Description : ${anu.description}
`
message = await prepareWAMessageMedia({ image : { url: anu.thumbnail } }, { upload:   hisoka.waUploadToServer })
                template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message.imageMessage,
                            hydratedContentText: ngen,
                            hydratedFooterText: `Playing To ${text}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'Source Code Vidio',
                                    url: `${anu.url}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Audio',
                                    id: `ytmp3 ${anu.url} 128kbps`
                                    }
                                },{quickReplyButton: {
                                    displayText: 'VIdeo',
                                    id: `ytmp4 ${anu.url} 360p`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat, quoted: m })
                  hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
	    case 'ytmp3': case 'ytaudio': {
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
		let { aiovideodl } = require('./lib/scraper')
                let result = await aiovideodl(isUrl(text)[0])
                let { url, title, thumbnail, duration, medias } = result
                let quality = args[1] ? args[1] : '128kbps'                
                let media = medias.filter(v => v.videoAvailable == false && v.audioAvailable == true && v.quality == quality).map(v => v)
                if (media[0].formattedSize.split('MB')[0] >= 100.00) return m.reply('File Melebihi Batas'+util.format(media))
                hisoka.sendImage(m.chat, thumbnail, `â­ Title : ${title}\nâ­ File Size : ${media[0].formattedSize}\nâ­ Url : ${url}\nâ­ Ext : MP3\nâ­ Resolusi : ${args[1] || '128kbps'}`, m)
                hisoka.sendMessage(m.chat, { audio: { url: media[0].url }, mimetype: 'audio/mp4', fileName: `${title}.mp3` }, { quoted: m })
            }
            break
            case 'ytmp4': case 'ytvideo': {
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
		let { aiovideodl } = require('./lib/scraper')
                let result = await aiovideodl(isUrl(text)[0])
                let { url, title, thumbnail, duration, medias } = result
                let quality = args[1] ? args[1] : '360p'                
                let media = medias.filter(v => v.videoAvailable == true && v.audioAvailable == false && v.quality == quality).map(v => v)
                if (media[0].formattedSize.split('MB')[0] >= 100.00) return m.reply('File Melebihi Batas'+util.format(media))
                hisoka.sendMessage(m.chat, { video: { url: media[0].url }, fileName: `${title}.mp4`, mimetype: 'video/mp4', caption: `â­ Title : ${title}\nâ­ File Size : ${media[0].formattedSize}\nâ­ Url : ${url}\nâ­ Ext : MP4\nâ­ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
	    case 'getmusic': {
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return m.reply('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
		let { aiovideodl } = require('./lib/scraper')
                let result = await aiovideodl(urls[text - 1])
                let { url, title, thumbnail, duration, medias } = result
                let quality = args[1] ? args[1] : '128kbps'                
                let media = medias.filter(v => v.videoAvailable == false && v.audioAvailable == true && v.quality == quality).map(v => v)
                if (media[0].formattedSize.split('MB')[0] >= 100.00) return m.reply('File Melebihi Batas'+util.format(media))
                hisoka.sendImage(m.chat, thumbnail, `â­ Title : ${title}\nâ­ File Size : ${media[0].formattedSize}\nâ­ Url : ${url}\nâ­ Ext : MP3\nâ­ Resolusi : ${args[1] || '128kbps'}`, m)
                hisoka.sendMessage(m.chat, { audio: { url: media[0].url }, mimetype: 'audio/mp4', fileName: `${title}.mp3` }, { quoted: m })
            }
            break
            case 'getvideo': {
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return m.reply('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
		let { aiovideodl } = require('./lib/scraper')
                let result = await aiovideodl(urls[text - 1])
                let { url, title, thumbnail, duration, medias } = result
                let quality = args[1] ? args[1] : '360p'                
                let media = medias.filter(v => v.videoAvailable == true && v.audioAvailable == false && v.quality == quality).map(v => v)
                if (media[0].formattedSize.split('MB')[0] >= 100.00) return m.reply('File Melebihi Batas'+util.format(media))
                hisoka.sendMessage(m.chat, { video: { url: media[0].url }, fileName: `${title}.mp4`, mimetype: 'video/mp4', caption: `â­ Title : ${title}\nâ­ File Size : ${media[0].formattedSize}\nâ­ Url : ${url}\nâ­ Ext : MP4\nâ­ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
            case 'pinterest': {
                m.reply(mess.wait)
		let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                hisoka.sendMessage(m.chat, { image: { url: result }, caption: 'â­ Media Url : '+result }, { quoted: m })
            }
            break
            case 'anime': case 'waifu': case 'husbu': case 'neko': case 'shinobu': case 'megumin': {
                m.reply(mess.wait)
                let anu = await getBuffer(api('zenz', '/api/random/anime/'+command, 'apikey'))
                hisoka.sendMessage(m.chat, { image: anu, caption: `Download From ${text}` }, { quoted: m})
            }
            break
            case 'coffe': case 'kopi': {
            let buttons = [
                    {buttonId: `coffe`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: `â Random Coffe`,
                    footer: 'Bot Created By : KahfzXzy',
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wallpaper': {
                if (!text) throw 'Masukkan Query Title'
		let { wallpaper } = require('./lib/scraper')
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `wallpaper ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `â­ Title : ${result.title}\nâ­ Category : ${result.type}\nâ­ Detail : ${result.source}\nâ­ Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: 'Bot Created By : KahfzXzy',
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wikimedia': {
                if (!text) throw 'Masukkan Query Title'
		let { wikimedia } = require('./lib/scraper')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `wikimedia ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `â­ Title : ${result.title}\nâ­ Source : ${result.source}\nâ­ Media Url : ${result.image}`,
                    footer: 'Bot Created By : KahfzXzy',
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'quotesanime': case 'quoteanime': {
		let { quotesAnime } = require('./lib/scraper')
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `quotesanime`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	        case 'motivasi': case 'dilanquote': case 'bucinquote': case 'katasenja': case 'puisi': {
                let anu = await fetchJson(api('zenz', '/api/'+command, {}, 'apikey'))
                let buttons = [
                    {buttonId: `motivasi`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: anu.result.message,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	    case 'nomerhoki': case 'nomorhoki': {
                if (!Number(text)) throw `Example : ${prefix + command} 6288292024190`
                let anu = await primbon.nomer_hoki(Number(text))
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `â­ *Nomor HP :* ${anu.message.nomer_hp}\nâ­ *Angka Shuzi :* ${anu.message.angka_shuzi}\nâ­ *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\nâ­ *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
            }
            break
            case 'artimimpi': case 'tafsirmimpi': {
                if (!text) throw `Example : ${prefix + command} belanja`
                let anu = await primbon.tafsir_mimpi(text)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `â­ *Mimpi :* ${anu.message.mimpi}\nâ­ *Arti :* ${anu.message.arti}\nâ­ *Solusi :* ${anu.message.solusi}`, m)
            }
            break
            case 'ramalanjodoh': case 'ramaljodoh': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `â­ *Nama Anda :* ${anu.message.nama_anda.nama}\nâ­ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\nâ­ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\nâ­ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\nâ­ *Hasil :* ${anu.message.result}\nâ­ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalanjodohbali': case 'ramaljodohbali': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `â­ *Nama Anda :* ${anu.message.nama_anda.nama}\nâ­ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\nâ­ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\nâ­ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\nâ­ *Hasil :* ${anu.message.result}\nâ­ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'suamiistri': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `â­ *Nama Suami :* ${anu.message.suami.nama}\nâ­ *Lahir Suami :* ${anu.message.suami.tgl_lahir}\nâ­ *Nama Istri :* ${anu.message.istri.nama}\nâ­ *Lahir Istri :* ${anu.message.istri.tgl_lahir}\nâ­ *Hasil :* ${anu.message.result}\nâ­ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalancinta': case 'ramalcinta': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `â­ *Nama Anda :* ${anu.message.nama_anda.nama}\nâ­ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\nâ­ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\nâ­ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\nâ­ *Sisi Positif :* ${anu.message.sisi_positif}\nâ­ *Sisi Negatif :* ${anu.message.sisi_negatif}\nâ­ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artinama': {
                if (!text) throw `Example : ${prefix + comman} Dika Ardianta`
                let anu = await primbon.arti_nama(text)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `â­ *Nama :* ${anu.message.nama}\nâ­ *Arti :* ${anu.message.arti}\nâ­ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'kecocokannama': case 'cocoknama': {
                if (!text) throw `Example : ${prefix + comman} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `â­ *Nama :* ${anu.message.nama}\nâ­ *Lahir :* ${anu.message.tgl_lahir}\nâ­ *Life Path :* ${anu.message.life_path}\nâ­ *Destiny :* ${anu.message.destiny}\nâ­ *Destiny Desire :* ${anu.message.destiny_desire}\nâ­ *Personality :* ${anu.message.personality}\nâ­ *Persentase :* ${anu.message.persentase_kecocokan}`, m)
            }
            break
            case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
                if (!text) throw `Example : ${prefix + command} Dika|Novia`
                let [nama1, nama2] = text.split`|`
                let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendImage(m.chat,  anu.message.gambar, `â­ *Nama Anda :* ${anu.message.nama_anda}\nâ­ *Nama Pasangan :* ${anu.message.nama_pasangan}\nâ­ *Sisi Positif :* ${anu.message.sisi_positif}\nâ­ *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
            }
            break
            case 'jadianpernikahan': case 'jadiannikah': {
                if (!text) throw `Example : ${prefix + command} 6, 12, 2020`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `â­ *Tanggal Pernikahan :* ${anu.message.tanggal}\nâ­ *karakteristik :* ${anu.message.karakteristik}`, m)
            }
            break
            case 'sifatusaha': {
                if (!ext)throw `Example : ${prefix+ command} 28, 12, 2021`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `â­ *Lahir :* ${anu.message.hari_lahir}\nâ­ *Usaha :* ${anu.message.usaha}`, m)
            }
            break
            case 'rejeki': case 'rezeki': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `â­ *Lahir :* ${anu.message.hari_lahir}\nâ­ *Rezeki :* ${anu.message.rejeki}\nâ­ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'pekerjaan': case 'kerja': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `â­ *Lahir :* ${anu.message.hari_lahir}\nâ­ *Pekerjaan :* ${anu.message.pekerjaan}\nâ­ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalannasib': case 'ramalnasib': case 'nasib': {
                if (!text) throw `Example : 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.ramalan_nasib(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `â­ *Analisa :* ${anu.message.analisa}\nâ­ *Angka Akar :* ${anu.message.angka_akar}\nâ­ *Sifat :* ${anu.message.sifat}\nâ­ *Elemen :* ${anu.message.elemen}\nâ­ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
            }
            break
            case 'potensipenyakit': case 'penyakit': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `â­ *Analisa :* ${anu.message.analisa}\nâ­ *Sektor :* ${anu.message.sektor}\nâ­ *Elemen :* ${anu.message.elemen}\nâ­ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artitarot': case 'tarot': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendImage(m.chat, anu.message.image, `â­ *Lahir :* ${anu.message.tgl_lahir}\nâ­ *Simbol Tarot :* ${anu.message.simbol_tarot}\nâ­ *Arti :* ${anu.message.arti}\nâ­ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'fengshui': {
                if (!text) throw `Example : ${prefix + command} Dika, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
                let [nama, gender, tahun] = text.split`,`
                let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `â­ *Nama :* ${anu.message.nama}\nâ­ *Lahir :* ${anu.message.tahun_lahir}\nâ­ *Gender :* ${anu.message.jenis_kelamin}\nâ­ *Angka Kua :* ${anu.message.angka_kua}\nâ­ *Kelompok :* ${anu.message.kelompok}\nâ­ *Karakter :* ${anu.message.karakter}\nâ­ *Sektor Baik :* ${anu.message.sektor_baik}\nâ­ *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
            }
            break
            case 'haribaik': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.petung_hari_baik(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `â­ *Lahir :* ${anu.message.tgl_lahir}\nâ­ *Kala Tinantang :* ${anu.message.kala_tinantang}\nâ­ *Info :* ${anu.message.info}\nâ­ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harisangar': case 'taliwangke': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `â­ *Lahir :* ${anu.message.tgl_lahir}\nâ­ *Hasil :* ${anu.message.result}\nâ­ *Info :* ${anu.message.info}\nâ­ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harinaas': case 'harisial': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `â­ *Hari Lahir :* ${anu.message.hari_lahir}\nâ­ *Tanggal Lahir :* ${anu.message.tgl_lahir}\nâ­ *Hari Naas :* ${anu.message.hari_naas}\nâ­ *Info :* ${anu.message.catatan}\nâ­ *Catatan :* ${anu.message.info}`, m)
            }
            break
            case 'nagahari': case 'harinaga': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `â­ *Hari Lahir :* ${anu.message.hari_lahir}\nâ­ *Tanggal Lahir :* ${anu.message.tgl_lahir}\nâ­ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\nâ­ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'arahrejeki': case 'arahrezeki': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `â­ *Hari Lahir :* ${anu.message.hari_lahir}\nâ­ *tanggal Lahir :* ${anu.message.tgl_lahir}\nâ­ *Arah Rezeki :* ${anu.message.arah_rejeki}\nâ­ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'peruntungan': {
                if (!text) throw `Example : ${prefix + command} DIka, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
                let [nama, tgl, bln, thn, untuk] = text.split`,`
                let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `â­ *Nama :* ${anu.message.nama}\nâ­ *Lahir :* ${anu.message.tgl_lahir}\nâ­ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\nâ­ *Hasil :* ${anu.message.result}\nâ­ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'weton': case 'wetonjawa': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.weton_jawa(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `â­ *Tanggal :* ${anu.message.tanggal}\nâ­ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\nâ­ *Watak Hari :* ${anu.message.watak_hari}\nâ­ *Naga Hari :* ${anu.message.naga_hari}\nâ­ *Jam Baik :* ${anu.message.jam_baik}\nâ­ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
            }
            break
            case 'sifat': case 'karakter': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `â­ *Nama :* ${anu.message.nama}\nâ­ *Lahir :* ${anu.message.tgl_lahir}\nâ­ *Garis Hidup :* ${anu.message.garis_hidup}`, m)
            }
            break
            case 'keberuntungan': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `â­ *Nama :* ${anu.message.nama}\nâ­ *Lahir :* ${anu.message.tgl_lahir}\nâ­ *Hasil :* ${anu.message.result}`, m)
            }
            break
            case 'memancing': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `â­ *Tanggal :* ${anu.message.tgl_memancing}\nâ­ *Hasil :* ${anu.message.result}\nâ­ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'masasubur': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`
                let [tgl, bln, thn, siklus] = text.split`,`
                let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `â­ *Hasil :* ${anu.message.result}\nâ­ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'zodiak': case 'zodiac': {
                if (!text) throw `Example : ${prefix+ command} 7 7 2005`
                let zodiak = [
                    ["capricorn", new Date(1970, 0, 1)],
                    ["aquarius", new Date(1970, 0, 20)],
                    ["pisces", new Date(1970, 1, 19)],
                    ["aries", new Date(1970, 2, 21)],
                    ["taurus", new Date(1970, 3, 21)],
                    ["gemini", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leo", new Date(1970, 6, 23)],
                    ["virgo", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["scorpio", new Date(1970, 9, 23)],
                    ["sagittarius", new Date(1970, 10, 22)],
                    ["capricorn", new Date(1970, 11, 22)]
                ].reverse()

                function getZodiac(month, day) {
                    let d = new Date(1970, month - 1, day)
                    return zodiak.find(([_,_d]) => d >= _d)[0]
                }
                let date = new Date(text)
                if (date == 'Invalid Date') throw date
                let d = new Date()
                let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
                let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

                let zodiac = await getZodiac(birth[1], birth[2])
                
                let anu = await primbon.zodiak(zodiac)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `â­ *Zodiak :* ${anu.message.zodiak}\nâ­ *Nomor :* ${anu.message.nomor_keberuntungan}\nâ­ *Aroma :* ${anu.message.aroma_keberuntungan}\nâ­ *Planet :* ${anu.message.planet_yang_mengitari}\nâ­ *Bunga :* ${anu.message.bunga_keberuntungan}\nâ­ *Warna :* ${anu.message.warna_keberuntungan}\nâ­ *Batu :* ${anu.message.batu_keberuntungan}\nâ­ *Elemen :* ${anu.message.elemen_keberuntungan}\nâ­ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\nâ­ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'shio': {
                if (!text) throw `Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
                let anu = await primbon.shio(text)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `â­ *Hasil :* ${anu.message}`, m)
            }
            break
	        case 'tiktok': case 'tiktoknowm': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/tiktok', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktokwm ${text}`, buttonText: {displayText: 'âº With Watermark'}, type: 1},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: 'â« Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.nowatermark },
                    caption: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'tiktokwm': case 'tiktokwatermark': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/tiktok', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: 'âº No Watermark'}, type: 1},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: 'â« Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.watermark },
                    caption: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'tiktokmp3': case 'tiktokaudio': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/tiktok', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: 'âº No Watermark'}, type: 1},
                    {buttonId: `tiktokwm ${text}`, buttonText: {displayText: 'âº With Watermark'}, type: 1}
                ]
                let buttonMessage = {
                    text: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                let msg = await hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
                hisoka.sendMessage(m.chat, { audio: { url: anu.result.audio } }, { quoted: msg })
            }
            break
	        case 'igdl': case 'ig': case 'instagram': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/instagram2', { url: text }, 'apikey'))
                hisoka.sendMessage(m.chat, { video: { url: anu.data[0] }, caption: `Download From ${text}` }, { quoted: m})
            } 
            break
            case 'igdltv': case 'igreels': case 'igdl2': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/instagram', { url: text }, 'apikey'))
                hisoka.sendMessage(m.chat, { video: { url: anu.result.link }, caption: `â­ Desc : ${anu.result.caption.desc}`}, { quoted: m })
            }
            break
	        case 'twitdl': case 'twitter': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twittermp3 ${text}`, buttonText: {displayText: 'âº Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.HD || anu.result.SD },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'twittermp3': case 'twitteraudio': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twitter ${text}`, buttonText: {displayText: 'âº Video'}, type: 1}
                ]
                let buttonMessage = {
		    image: { url: anu.result.thumb },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 4
                }
                let msg = await hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
                hisoka.sendMessage(m.chat, { audio: { url: anu.result.audio } }, { quoted: msg })
            }
            break
	        case 'fbdl': case 'fb': case 'facebook': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/facebook', { url: text }, 'apikey'))
                hisoka.sendMessage(m.chat, { video: { url: anu.result.url }, caption: `â­ Title : ${anu.result.title}`}, { quoted: m })
            }
            break
	        case 'pindl': case 'pinterestdl': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/pinterestdl', { url: text }, 'apikey'))
                hisoka.sendMessage(m.chat, { video: { url: anu.result }, caption: `Download From ${text}` }, { quoted: m })
            }
            break
            case 'setcmd': {
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                if (!text) throw `Untuk Command Apa?`
                let hash = m.quoted.fileSha256.toString('base64')
                if (cmdmedia[hash] && cmdmedia[hash].locked) throw 'You have no permission to change this sticker command'
                cmdmedia[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                fs.writeFileSync('./src/cmdmedia.json', JSON.stringify(cmdmedia))
                m.reply(`Done!`)
            }
            break
            case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) throw `Tidak ada hash`
                if (cmdmedia[hash] && cmdmedia[hash].locked) throw 'You have no permission to delete this sticker command'              
                delete cmdmedia[hash]
                fs.writeFileSync('./src/cmdmedia.json', JSON.stringify(cmdmedia))
                m.reply(`Done!`)
            }
            break
            case 'listcmd': {
                let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(cmdmedia).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                hisoka.sendText(m.chat, teks, m, { mentions: Object.values(cmdmedia).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'lockcmd': {
                if (!isCreator) throw mess.owner
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in cmdmedia)) throw 'Hash not found in database'
                cmdmedia[hash].locked = !/^un/i.test(command)
                fs.writeFileSync('./src/cmdmedia.json', JSON.stringify(cmdmedia))
                m.reply('Done!')
            }
            break
            case 'addmsg': {
                if (!m.quoted) throw 'Reply Message Yang Ingin Disave Di Database'
                if (!text) throw `Example : ${prefix + command} nama file`
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
                if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
                msgs[text.toLowerCase()] = quoted.fakeObj
                fs.writeFileSync('./src/database.json', JSON.stringify(msgs))
m.reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'
    
Akses dengan ${prefix}getmsg ${text}

Lihat list Pesan Dengan ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
                if (!text) throw `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
                if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
                hisoka.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
	        let seplit = Object.entries(msgs).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = 'ã LIST DATABASE ã\n\n'
		for (let i of seplit) {
		    teks += `â¬¡ *Name :* ${i.nama}\nâ¬¡ *Type :* ${Object.keys(i.message)[0]}\nââââââââââââââââââââââââ\n\n`
	        }
	        m.reply(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': {
	        let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
	        if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' tidak terdaftar didalam list pesan`)
		delete msgs[text.toLowerCase()]
                fs.writeFileSync('./src/database.json', JSON.stringify(msgs))
		m.reply(`Berhasil menghapus '${text}' dari list pesan`)
            }
	    break
	    case 'anonymous': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				this.anonymous = this.anonymous ? this.anonymous : {}
				let buttons = [
                    { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                ]
                hisoka.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await hisoka.getName(m.sender)} Welcome To Anonymous Chat\n\nKlik Button Dibawah Ini Untuk Mencari Partner\`\`\``, `Bot Created By : KahfzXzy`, m)
            }
			break
            case 'keluar': case 'leave': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner \`\`\``)
                    throw false
                }
                m.reply('_You Stoping Match_')
                let other = room.other(m.sender)
                if (other) await hisoka.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[room.id]
                if (command === 'leave') break
            }
            case 'sendkontak': case 'sendcontact': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner \`\`\``)
                    throw false
                }
                let profile = await hisoka.profilePictureUrl(room.b)
                let status = await hisoka.fetchStatus(room.b)
                let msg = await hisoka.sendImage(room.a, profile, `Nama : ${await hisoka.getName(room.b)}\nBio : ${status.status}\nUser : @${room.b.split("@")[0]}`, m, { mentions: [room.b] })
                hisoka.sendContact(room.a, [room.b.split("@")[0]], msg)
            }
            break
            case 'mulai': case 'start': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `\`\`\`Kamu Masih Berada Di dalam Sesi Anonymous, Tekan Button Dibawah Ini Untuk Menghentikan Sesi Anonymous Anda\`\`\``, hisoka.user.name, m)
                    throw false
                }
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, hisoka.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await hisoka.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, hisoka.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, hisoka.user.name, m)
                }
                break
            }
            case 'next': case 'lanjut': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner\`\`\``)
                    throw false
                }
                let other = romeo.other(m.sender)
                if (other) await hisoka.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, hisoka.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await hisoka.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, hisoka.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, hisoka.user.name, m)
                }
                break
            }
            case 'public': {
                if (!isCreator) throw mess.owner
                hisoka.public = true
                m.reply('Sukse Change To Public Usage')
            }
            break
            case 'self': {
                if (!isCreator) throw mess.owner
                hisoka.public = false
                m.reply('Sukses Change To Self Usage')
            }
            break
            case 'ping': case 'botstatus': case 'statusbot': {
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

ð» Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                m.reply(respon)
            }
            break
            case 'owner': case 'creator': {
                hisoka.sendContact(m.chat, global.owner, m)
            }
            break
case 'thanksto': {
                hisoka.sendContact(m.chat, `6281365814200`, `6281382420312`, m)
            }
            break
            case 'list': case 'menu': case 'help': case '?': {
            	if (modelmenu == 'location') {
                anu = `
                
Hi ${pushname} 
                
*INFO TIME*
_Wib : ${wib}_
_Wit : ${wit}_
_Wita : ${wita}
                
  *Group Menu*
  
  ${prefix}linkgroup
  ${prefix}ephemeral [option]
  ${prefix}setpp
  ${prefix}setname [text]
  ${prefix}group [option]
  ${prefix}editinfo [option]
  ${prefix}add @user
  ${prefix}kick @user
  ${prefix}promote @user
  ${prefix}demote @user

  *Downloader Menu*
  
  ${prefix}tiktoknowm [url]
  ${prefix}tiktokwm [url]
  ${prefix}tiktokmp3 [url]
  ${prefix}instagram [url]
  ${prefix}ig2 [url]
  ${prefix}igreels [url]
  ${prefix}igtv [url]
  ${prefix}twitter [url]
  ${prefix}twittermp3 [url]
  ${prefix}facebook [url]
  ${prefix}pinterestdl [url]
  ${prefix}ytmp3 [url]
  ${prefix}ytmp4 [url]
  ${prefix}getmusic [query]
  ${prefix}getvideo [query]  
  
  *Search Menu*
  
  ${prefix}play [query]
  ${prefix}yts [query]
  ${prefix}google [query]
  ${prefix}gimage [query]
  ${prefix}pinterest [query]
  ${prefix}wallpaper [query]
  ${prefix}wikimedia [query]
  ${prefix}ytsearch [query]
  
  *Random Menu*
  
  ${prefix}coffe
  ${prefix}porno
  ${prefix}hentai
  ${prefix}quotesanime
  ${prefix}motivasi
  ${prefix}dilanquote
  ${prefix}bucinquote
  ${prefix}katasenja
  ${prefix}puisi
  
  *Image Menu*
  
  ${prefix}anime
  ${prefix}waifu
  ${prefix}husbu
  ${prefix}neko
  ${prefix}shinobu
  ${prefix}megumin

  *Fun Menu*
  
  ${prefix}halah
  ${prefix}hilih
  ${prefix}huluh
  ${prefix}heleh
  ${prefix}holoh
  ${prefix}jadian
  ${prefix}jodohku
  ${prefix}family100
  ${prefix}tebak [option]
  ${prefix}math [mode]  

  *Primbon Menu*
  
  ${prefix}nomorhoki
  ${prefix}artimimpi
  ${prefix}artinama
  ${prefix}ramaljodoh
  ${prefix}ramaljodohbali
  ${prefix}suamiistri
  ${prefix}ramalcinta
  ${prefix}cocoknama
  ${prefix}pasangan
  ${prefix}jadiannikah
  ${prefix}sifatusaha
  ${prefix}rezeki
  ${prefix}pekerjaan
  ${prefix}nasib
  ${prefix}penyakit
  ${prefix}tarot
  ${prefix}fengshui
  ${prefix}haribaik
  ${prefix}harisangar
  ${prefix}harisial
  ${prefix}nagahari
  ${prefix}arahrezeki
  ${prefix}peruntungan
  ${prefix}weton
  ${prefix}karakter
  ${prefix}keberuntungan
  ${prefix}memancing
  ${prefix}masasubur
  ${prefix}zodiak
  ${prefix}shio
 
  *Convert Menu*
  
  ${prefix}toimage
  ${prefix}removebg
  ${prefix}sticker
  ${prefix}emojimix
  ${prefix}tovideo
  ${prefix}togif
  ${prefix}tourl
  ${prefix}ebinary
  ${prefix}dbinary

  *Main Menu*
  
  ${prefix}ping
  ${prefix}owner
  ${prefix}menu / ${prefix}help / ${prefix}?
  ${prefix}delete
  ${prefix}infochat
  ${prefix}quoted
  ${prefix}listpc
  ${prefix}listgc
  ${prefix}listonline
  
  *Database Menu*
  
  ${prefix}setcmd
  ${prefix}listcmd
  ${prefix}delcmd
  ${prefix}lockcmd
  ${prefix}addmsg
  ${prefix}listmsg
  ${prefix}getmsg
  ${prefix}delmsg
 
  *Anonymous Menu*
  
  ${prefix}anonymous
  ${prefix}start
  ${prefix}next
  ${prefix}keluar
  ${prefix}sendkontak
 
  *Owner Menu*
  
  ${prefix}chat [option]
  ${prefix}join [link]
  ${prefix}leave
  ${prefix}block @user
  ${prefix}unblock @user
  ${prefix}bcgroup
  ${prefix}bcall
  
  
`
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./immage/kahfz.jpg')},
                            hydratedFooterText: `KahfzXzy`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'My Youtube',
                                    url: 'https://youtube.com/c/KahfzXzyy'
                                }
                            }, {
                            	urlButton: {
                                displayText: 'My Instagram',
                                    url:   'https://instagram.com/Kahfz_13'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Status Bot',
                                    id: `${prefix}ping`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Donasi',
                                    id: `${prefix}donasi`
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
                }
                else if (modelmenu == 'gif') 

       {
       	anu = `
  *Group Menu*
  
  ${prefix}linkgroup
  ${prefix}ephemeral [option]
  ${prefix}setpp
  ${prefix}setname [text]
  ${prefix}group [option]
  ${prefix}editinfo [option]
  ${prefix}add @user
  ${prefix}kick @user
  ${prefix}promote @user
  ${prefix}demote @user

  *Downloader Menu*
  
  ${prefix}tiktoknowm [url]
  ${prefix}tiktokwm [url]
  ${prefix}tiktokmp3 [url]
  ${prefix}instagram [url]
  ${prefix}ig2 [url]
  ${prefix}igreels [url]
  ${prefix}igtv [url]
  ${prefix}twitter [url]
  ${prefix}twittermp3 [url]
  ${prefix}facebook [url]
  ${prefix}pinterestdl [url]
  ${prefix}ytmp3 [url]
  ${prefix}ytmp4 [url]
  ${prefix}getmusic [query]
  ${prefix}getvideo [query]  
  
  *Search Menu*
  
  ${prefix}play [query]
  ${prefix}yts [query]
  ${prefix}google [query]
  ${prefix}gimage [query]
  ${prefix}pinterest [query]
  ${prefix}wallpaper [query]
  ${prefix}wikimedia [query]
  ${prefix}ytsearch [query]
  
  *Random Menu*
  
  ${prefix}coffe
  ${prefix}porno
  ${prefix}hentai
  ${prefix}quotesanime
  ${prefix}motivasi
  ${prefix}dilanquote
  ${prefix}bucinquote
  ${prefix}katasenja
  ${prefix}puisi
  
  *Image Menu*
  
  ${prefix}anime
  ${prefix}waifu
  ${prefix}husbu
  ${prefix}neko
  ${prefix}shinobu
  ${prefix}megumin

  *Fun Menu*
  
  ${prefix}halah
  ${prefix}hilih
  ${prefix}huluh
  ${prefix}heleh
  ${prefix}holoh
  ${prefix}jadian
  ${prefix}jodohku
  ${prefix}family100
  ${prefix}tebak [option]
  ${prefix}math [mode]  

  *Primbon Menu*
  
  ${prefix}nomorhoki
  ${prefix}artimimpi
  ${prefix}artinama
  ${prefix}ramaljodoh
  ${prefix}ramaljodohbali
  ${prefix}suamiistri
  ${prefix}ramalcinta
  ${prefix}cocoknama
  ${prefix}pasangan
  ${prefix}jadiannikah
  ${prefix}sifatusaha
  ${prefix}rezeki
  ${prefix}pekerjaan
  ${prefix}nasib
  ${prefix}penyakit
  ${prefix}tarot
  ${prefix}fengshui
  ${prefix}haribaik
  ${prefix}harisangar
  ${prefix}harisial
  ${prefix}nagahari
  ${prefix}arahrezeki
  ${prefix}peruntungan
  ${prefix}weton
  ${prefix}karakter
  ${prefix}keberuntungan
  ${prefix}memancing
  ${prefix}masasubur
  ${prefix}zodiak
  ${prefix}shio
 
  *Convert Menu*
  
  ${prefix}toimage
  ${prefix}removebg
  ${prefix}sticker
  ${prefix}emojimix
  ${prefix}tovideo
  ${prefix}togif
  ${prefix}tourl
  ${prefix}ebinary
  ${prefix}dbinary

  *Main Menu*
  
  ${prefix}ping
  ${prefix}owner
  ${prefix}menu / ${prefix}help / ${prefix}?
  ${prefix}delete
  ${prefix}infochat
  ${prefix}quoted
  ${prefix}listpc
  ${prefix}listgc
  ${prefix}listonline
  
  *Database Menu*
  
  ${prefix}setcmd
  ${prefix}listcmd
  ${prefix}delcmd
  ${prefix}lockcmd
  ${prefix}addmsg
  ${prefix}listmsg
  ${prefix}getmsg
  ${prefix}delmsg
 
  *Anonymous Menu*
  
  ${prefix}anonymous
  ${prefix}start
  ${prefix}next
  ${prefix}keluar
  ${prefix}sendkontak
 
  *Owner Menu*
  
  ${prefix}chat [option]
  ${prefix}join [link]
  ${prefix}leave
  ${prefix}block @user
  ${prefix}unblock @user
  ${prefix}bcgroup
  ${prefix}bcall
  `
      await sendButton1(m.chat, anu, fake1, await hisoka.createMessage(m.chat, {video: {url: "./vidio/KahfzXzy.mp4", caption: anu}, gifPlayback: true, gifAttribution: "GIPHY"}))
       } 
                else if (modelmenu == 'simple') 

       {
anu = `
  Hi ${pushname} 
  Ucapan Waktu : ${ucapanWaktu}
  My Name KahfzXzy Bot ( Md Beta ) Jika ada Yang Bisa Saya Bantu silahkan Pilih Command Di bawah !!!
  
`
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./immage/kahfz.jpg')},
                            hydratedFooterText: `KahfzXzy`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'My Youtube',
                                    url: 'https://youtube.com/c/KahfzXzyy'
                                }
                            }, {
                            	urlButton: {
                                displayText: 'My Instagram',
                                    url:   'https://instagram.com/Kahfz_13'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'List Menu',
                                    id: `${prefix}command`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
                }
            }
            break
case 'allmenu': {
                anu = `
  *Group Menu*
  
  ${prefix}linkgroup
  ${prefix}ephemeral [option]
  ${prefix}setpp
  ${prefix}setname [text]
  ${prefix}group [option]
  ${prefix}editinfo [option]
  ${prefix}add @user
  ${prefix}kick @user
  ${prefix}promote @user
  ${prefix}demote @user

  *Downloader Menu*
  
  ${prefix}tiktoknowm [url]
  ${prefix}tiktokwm [url]
  ${prefix}tiktokmp3 [url]
  ${prefix}instagram [url]
  ${prefix}ig2 [url]
  ${prefix}igreels [url]
  ${prefix}igtv [url]
  ${prefix}twitter [url]
  ${prefix}twittermp3 [url]
  ${prefix}facebook [url]
  ${prefix}pinterestdl [url]
  ${prefix}ytmp3 [url]
  ${prefix}ytmp4 [url]
  ${prefix}getmusic [query]
  ${prefix}getvideo [query]  
  
  *Search Menu*
  
  ${prefix}play [query]
  ${prefix}yts [query]
  ${prefix}google [query]
  ${prefix}gimage [query]
  ${prefix}pinterest [query]
  ${prefix}wallpaper [query]
  ${prefix}wikimedia [query]
  ${prefix}ytsearch [query]
  
  *Random Menu*
  
  ${prefix}coffe
  ${prefix}porno
  ${prefix}hentai
  ${prefix}quotesanime
  ${prefix}motivasi
  ${prefix}dilanquote
  ${prefix}bucinquote
  ${prefix}katasenja
  ${prefix}puisi
  
  *Image Menu*
  
  ${prefix}anime
  ${prefix}waifu
  ${prefix}husbu
  ${prefix}neko
  ${prefix}shinobu
  ${prefix}megumin

  *Fun Menu*
  
  ${prefix}halah
  ${prefix}hilih
  ${prefix}huluh
  ${prefix}heleh
  ${prefix}holoh
  ${prefix}jadian
  ${prefix}jodohku
  ${prefix}family100
  ${prefix}tebak [option]
  ${prefix}math [mode]  

  *Primbon Menu*
  
  ${prefix}nomorhoki
  ${prefix}artimimpi
  ${prefix}artinama
  ${prefix}ramaljodoh
  ${prefix}ramaljodohbali
  ${prefix}suamiistri
  ${prefix}ramalcinta
  ${prefix}cocoknama
  ${prefix}pasangan
  ${prefix}jadiannikah
  ${prefix}sifatusaha
  ${prefix}rezeki
  ${prefix}pekerjaan
  ${prefix}nasib
  ${prefix}penyakit
  ${prefix}tarot
  ${prefix}fengshui
  ${prefix}haribaik
  ${prefix}harisangar
  ${prefix}harisial
  ${prefix}nagahari
  ${prefix}arahrezeki
  ${prefix}peruntungan
  ${prefix}weton
  ${prefix}karakter
  ${prefix}keberuntungan
  ${prefix}memancing
  ${prefix}masasubur
  ${prefix}zodiak
  ${prefix}shio
 
  *Convert Menu*
  
  ${prefix}toimage
  ${prefix}removebg
  ${prefix}sticker
  ${prefix}emojimix
  ${prefix}tovideo
  ${prefix}togif
  ${prefix}tourl
  ${prefix}ebinary
  ${prefix}dbinary

  *NoCategory Menu*
  
  ${prefix}ping
  ${prefix}owner
  ${prefix}menu / ${prefix}help / ${prefix}?
  ${prefix}delete
  ${prefix}infochat
  ${prefix}quoted
  ${prefix}listpc
  ${prefix}listgc
  ${prefix}listonline
  
  *Database Menu*
  
  ${prefix}setcmd
  ${prefix}listcmd
  ${prefix}delcmd
  ${prefix}lockcmd
  ${prefix}addmsg
  ${prefix}listmsg
  ${prefix}getmsg
  ${prefix}delmsg
 
  *Anonymous Menu*
  
  ${prefix}anonymous
  ${prefix}start
  ${prefix}next
  ${prefix}keluar
  ${prefix}sendkontak
 
  *Owner Menu*
  
  ${prefix}chat [option]
  ${prefix}join [link]
  ${prefix}leave
  ${prefix}block @user
  ${prefix}unblock @user
  ${prefix}bcgroup
  ${prefix}bcall
  
  
`
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./immage/kahfz.jpg')},
                            hydratedFooterText: `KahfzXzy`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'My Youtube',
                                    url: 'https://youtube.com/c/KahfzXzyy'
                                }
                            }, {
                            	urlButton: {
                                displayText: 'My Instagram',
                                    url:   'https://instagram.com/Kahfz_13'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Status Bot',
                                    id: `${prefix}ping`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Donasi',
                                    id: `${prefix}donasi`
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
case 'command':{
let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                listMessage :{
                    title: `Hi ${pushname}`,
                    description: "List Bot !!! JANGAN SPAM YA KALO GAK ADA YANG WORK !!",
                    buttonText: "LIST",
                    footerText: "KahfzXzy",
                    listType: "SINGLE_SELECT",
                    sections: [{
								"title": "Fitur Grup",
								"rows": [
									{
										"title": "Grup Fitur",
										"description": "Menampilkan Fitur Grup",
										"rowId": `${prefix}grupmenu`
									}
								]
							},
							{
								"title": "Bot Menu",
								"rows": [
									{
										"title": "ALL Fitur",
										"description": "Menampilkan Semua Fitur!",
										"rowId": `${prefix}allmenu`
									},
									{
										"title": "Download Fitur",
										"description": "Menampilkan Download Menu",
										"rowId": `${prefix}downloadmenu`
									},
									{
										"title": "Search Fitur",
										"description": "Menampilkan Search Fitur",
										"rowId": `${prefix}searchmenu`
									},
									{
										"title": "Random Fitur",
										"description": "Menampilkan random Fitur",
										"rowId": `${prefix}randommenu`
										},
										{
											"title": "Image Fitur",
										"description": "Menampilkan image Fitur",
										"rowId": `${prefix}imagemenu`
										},
										{
											"title": "Fun",
										"description": "Menampilkan Fun Fitur",
										"rowId": `${prefix}funmenu`
										},
										{
										"title": "primbon Fitur",
										"description": "Menampilkan Primbon Fitur",
										"rowId": `${prefix}primbonmenu`
										},
										{
											"title": "Convert Fitur",
										"description": "Menampilkan Convert Fitur",
										"rowId": `${prefix}convertmenu`
										},
										{
										"title": "No Category",
										"description": "Menampilkan NoCategory Fitur",
										"rowId": `${prefix}nocategorymenu`
										},
										{
											"title": "Database Fitur",
										"description": "Menampilkan Database Fitur",
										"rowId": `${prefix}databasemenu`
										}
								]
							},
							{
								"title": "Chating Sesama Userð",
								"rows": [
									{
										"title": "Anonymous Chat",
										"description": "menampilkan Fitur Anonymous Chat",
										"rowId": `${prefix}anonymouschatmenu`
									}
								]
							},
							{
								"title": "Owner Command",
								"rows": [
									{
										"title": "Owner Fitur",
										"description": "menampilkan Owner Fitur ( Khusus Owner )",
										"rowId": `${prefix}ownermenu`
									}
								]
							},
							{
								"title": "Thanks To",
								"rows": [
									{
										"title": "Contributor",
										"description": "menampilkan Nama Teman - Teman Saya Yang Sudah Membantu Merakit Bot Ini !!",
										"rowId": `${prefix}tqtt`
									}
								]
							}
						],
          listType: 1
                }
            }), {})
            hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
case 'grupmenu': {
	            anu = `
  *Group Menu*
  
  ${prefix}linkgroup
  ${prefix}ephemeral [option]
  ${prefix}setpp
  ${prefix}setname [text]
  ${prefix}group [option]
  ${prefix}editinfo [option]
  ${prefix}add @user
  ${prefix}kick @user
  ${prefix}promote @user
  ${prefix}demote @user
  `
  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./immage/kahfz.jpg')},
                            hydratedFooterText: `KahfzXzy`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'My Youtube',
                                    url: 'https://youtube.com/c/KahfzXzyy'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'downloadmenu': {
	kahfzz = `
	*Downloader Menu*
  
  ${prefix}tiktoknowm [url]
  ${prefix}tiktokwm [url]
  ${prefix}tiktokmp3 [url]
  ${prefix}instagram [url]
  ${prefix}ig2 [url]
  ${prefix}igreels [url]
  ${prefix}igtv [url]
  ${prefix}twitter [url]
  ${prefix}twittermp3 [url]
  ${prefix}facebook [url]
  ${prefix}pinterestdl [url]
  ${prefix}ytmp3 [url]
  ${prefix}ytmp4 [url]
  ${prefix}getmusic [query]
  ${prefix}getvideo [query]  
  `
  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: kahfzz,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./immage/kahfz.jpg')},
                            hydratedFooterText: `KahfzXzy`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'My Youtube',
                                    url: 'https://youtube.com/c/KahfzXzyy'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break 
            case 'searchmenu': {
            	anu = `
              *Search Menu*
  
  ${prefix}play [query]
  ${prefix}yts [query]
  ${prefix}google [query]
  ${prefix}gimage [query]
  ${prefix}pinterest [query]
  ${prefix}wallpaper [query]
  ${prefix}wikimedia [query]
  ${prefix}ytsearch [query]
  `
  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./immage/kahfz.jpg')},
                            hydratedFooterText: `KahfzXzy`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'My Youtube',
                                    url: 'https://youtube.com/c/KahfzXzyy'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'randommenu': {
	anu = `
	*Random Menu*
  
  ${prefix}coffe
  ${prefix}porno
  ${prefix}hentai
  ${prefix}quotesanime
  ${prefix}motivasi
  ${prefix}dilanquote
  ${prefix}bucinquote
  ${prefix}katasenja
  ${prefix}puisi
  `
  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./immage/kahfz.jpg')},
                            hydratedFooterText: `KahfzXzy`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'My Youtube',
                                    url: 'https://youtube.com/c/KahfzXzyy'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'imagemenu': {
	anu = `
	*Image Menu*
  
  ${prefix}anime
  ${prefix}waifu
  ${prefix}husbu
  ${prefix}neko
  ${prefix}shinobu
  ${prefix}megumin
  `
  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./immage/kahfz.jpg')},
                            hydratedFooterText: `KahfzXzy`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'My Youtube',
                                    url: 'https://youtube.com/c/KahfzXzyy'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'funmenu': {
	anu = `
	*Fun Menu*
  
  ${prefix}halah
  ${prefix}hilih
  ${prefix}huluh
  ${prefix}heleh
  ${prefix}holoh
  ${prefix}jadian
  ${prefix}jodohku
  ${prefix}family100
  ${prefix}tebak [option]
  ${prefix}math [mode]  
  `
  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./immage/kahfz.jpg')},
                            hydratedFooterText: `KahfzXzy`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'My Youtube',
                                    url: 'https://youtube.com/c/KahfzXzyy'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'primbonmenu': {
	anu = `
	*Primbon Menu*
  
  ${prefix}nomorhoki
  ${prefix}artimimpi
  ${prefix}artinama
  ${prefix}ramaljodoh
  ${prefix}ramaljodohbali
  ${prefix}suamiistri
  ${prefix}ramalcinta
  ${prefix}cocoknama
  ${prefix}pasangan
  ${prefix}jadiannikah
  ${prefix}sifatusaha
  ${prefix}rezeki
  ${prefix}pekerjaan
  ${prefix}nasib
  ${prefix}penyakit
  ${prefix}tarot
  ${prefix}fengshui
  ${prefix}haribaik
  ${prefix}harisangar
  ${prefix}harisial
  ${prefix}nagahari
  ${prefix}arahrezeki
  ${prefix}peruntungan
  ${prefix}weton
  ${prefix}karakter
  ${prefix}keberuntungan
  ${prefix}memancing
  ${prefix}masasubur
  ${prefix}zodiak
  ${prefix}shio
  `
  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./immage/kahfz.jpg')},
                            hydratedFooterText: `KahfzXzy`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'My Youtube',
                                    url: 'https://youtube.com/c/KahfzXzyy'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'convertmenu': {
	anu = `
	*Convert Menu*
  
  ${prefix}toimage
  ${prefix}removebg
  ${prefix}sticker
  ${prefix}emojimix
  ${prefix}tovideo
  ${prefix}togif
  ${prefix}tourl
  ${prefix}ebinary
  ${prefix}dbinary
  `
  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./immage/kahfz.jpg')},
                            hydratedFooterText: `KahfzXzy`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'My Youtube',
                                    url: 'https://youtube.com/c/KahfzXzyy'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'nocategorymenu': {
	anu = `
	*Main Menu*
  
  ${prefix}ping
  ${prefix}owner
  ${prefix}menu / ${prefix}help / ${prefix}?
  ${prefix}delete
  ${prefix}infochat
  ${prefix}quoted
  ${prefix}listpc
  ${prefix}listgc
  ${prefix}listonline
  `
  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./immage/kahfz.jpg')},
                            hydratedFooterText: `KahfzXzy`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'My Youtube',
                                    url: 'https://youtube.com/c/KahfzXzyy'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'databasemenu': {
	anu = `
	*Database Menu*
  
  ${prefix}setcmd
  ${prefix}listcmd
  ${prefix}delcmd
  ${prefix}lockcmd
  ${prefix}addmsg
  ${prefix}listmsg
  ${prefix}getmsg
  ${prefix}delmsg
  `
  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./immage/kahfz.jpg')},
                            hydratedFooterText: `KahfzXzy`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'My Youtube',
                                    url: 'https://youtube.com/c/KahfzXzyy'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'anonymouschatmenu': {
	anu = `
	${prefix}start ( Memulai Chating )
	${prefix}next ( Next user )
	${prefix}stop ( stop anonymous chat )
	${prefix}sendkontak ( Khusus Di Dalam Room Anonymous chat )
	`
	  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./immage/kahfz.jpg')},
                            hydratedFooterText: `KahfzXzy`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'My Youtube',
                                    url: 'https://youtube.com/c/KahfzXzyy'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
  case 'ownermenu': {
  	anu = `
  *Owner Menu*
  
  ${prefix}chat [option]
  ${prefix}join [link]
  ${prefix}leave
  ${prefix}block @user
  ${prefix}unblock @user
  ${prefix}bcgroup
  ${prefix}bcall
  `
    const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./immage/kahfz.jpg')},
                            hydratedFooterText: `KahfzXzy`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'My Youtube',
                                    url: 'https://youtube.com/c/KahfzXzyy'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'tqtt': 
m.reply(`Thanks To 
DikaArdnt.
Fatih Arridho.
Dan All Friend Yang Membantu Merakit Sc ini !!!`)
break
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        m = String(err)
                        await m.reply(m)
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
		    if (!(budy.toLowerCase() in msgs)) return
		    hisoka.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
