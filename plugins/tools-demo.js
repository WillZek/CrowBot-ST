import { randomBytes } from "crypto"
import axios from "axios"

let handler = async (m, { conn, text }) => {
    if (!text) throw '¿Cómo puedo ayudarte hoy?';
    try {
        conn.reply(m.chat, m);
        let data = await chatGpt(text)
await conn.sendMessage(m.chat, { 
    text: '*Demo:* ' + data,
    contextInfo: {
        forwardingScore: 9999999,
        isForwarded: false, 
        externalAdReply: {
            showAdAttribution: true,
            containsAutoReply: true,
            title: `[ 𝗖𝗛𝗔𝗧𝗚𝗣𝗧 - 𝗗𝗘𝗠𝗢 ]`,
            body: dev,
            previewType: "PHOTO",
            thumbnailUrl: 'https://tinyurl.com/2awg2bch', 
            sourceUrl: channels,
        }
    }
}, { quoted: m });

    } catch (err) {
        m.reply('error cik:/ ' + err);
    }
}

handler.help = ['demo *<texto>*'];
handler.command = ['demo'];
handler.tags = ['ai'];

export default handler;

async function chatGpt(query){
try {

const { id_ }= (await axios.post("https://chat.chatgptdemo.net/new_chat",{user_id: "crqryjoto2h3nlzsg"},{headers:{
"Content-Type": "application/json",

}})).data

const json = {"question":query,"chat_id": id_,"timestamp":new Date().getTime()}


const { data } = await axios.post("https://chat.chatgptdemo.net/chat_api_stream",json,{headers:{
"Content-Type": "application/json",

}})
const cek = data.split("data: ")

let res = []

for (let i=1; i < cek.length; i++){
if (cek[i].trim().length > 0){
res.push(JSON.parse(cek[i].trim()))
}}

return res.map((a) => a.choices[0].delta.content).join("")

} catch (error) {
console.error("Error parsing JSON:",error)
return 404
}
}