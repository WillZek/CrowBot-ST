import axios from 'axios'
import fetch from 'node-fetch'
import cheerio from 'cheerio'
import {mediafiredl} from '@bochilteam/scraper'

let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) return conn.reply(m.chat, '🚩 Ingrese el enlace de un archivo de Mediafire.', m, rcanal)
if (!args[0].match(/mediafire/gi)) return conn.reply(m.chat, '🌸 El enlace deve ser de un archivo de Mediafire.', m, rcanal)
try {
await m.react(rwait)
let { title, ext, aploud, size, dl_url } = await mediafiredl(args[0])
let txt = `乂  *¡MEDIAFIRE - DESCARGAS!*  乂\n\n`
    txt += `✩ *Nombre* : ${title}\n`
    txt += `✩ *Peso* : ${size}\n`
    txt += `✩ *Publicado* : ${aploud}\n`
    txt += `✩ *MimeType* : ${ext}\n\n`
    txt += `*- ↻ El archivo se esta enviando espera un momento, soy lenta. . .*`
let img = await (await fetch('https://i.ibb.co/wLQFn7q/logo-mediafire.jpg')).buffer()
await conn.sendFile(m.chat, img, 'thumbnail.jpg', txt, fkontak, null, rcanal)
await conn.sendFile(m.chat, dl_url, title, null, fkontak, null, { mimetype: ext, asDocument: true })
await m.react(done)
} catch {
await m.react(error)
}}
handler.help = ['mediafire']
handler.tags = ['descargas']
handler.command = ['mediafire', 'mdfire', 'mf']
handler.premium = false

export default handler
