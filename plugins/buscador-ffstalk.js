
import axios from 'axios'

let handler = async (m, { conn, text }) => {
if (!text) return conn.reply(m.chat, `🍭 Ingresa el ID de un usuario de Free Fire que quieras stalkear`, m)

try {
let api = await axios.get(`https://vapis.my.id/api/ff-stalk?id=${text}`)
let json = api.data
if (!json.status) return conn.reply(m.chat, "No se encontraron resultados", m)

    let { account, pet_info, guild, ketua_guild } = json.data
    let { id, name, level, xp, region, like, bio, create_time,  last_login, honor_score, booyah_pass, booyah_pass_badge, evo_access_badge,  equipped_title, BR_points, CS_points } = account

let { name: petName, level: petLevel, xp: petXP } = pet_info

let { name: guildName, level: guildLevel, member, capacity } = guild

let txt = `*[ INFO - USUARIO ]*
- *Usuario:* ${name}
- *Nivel:* ${level}
- *XP:* ${xp}
- *Región:* ${region}
- *Like:* ${like}
- *Bio:* ${bio || "No disponible"}
- *Fecha de Creación:* ${create_time}
- *Último Inicio de Sesión:* ${last_login}
- *Honor Score:* ${honor_score}
- *Booyah Pass:* ${booyah_pass}
- *Puntos BR:* ${BR_points}
- *Puntos CS:* ${CS_points}

*[ INFO - MASCOTA ]*
  - *Nombre:* ${petName}
  - *Nivel:* ${petLevel}
  - *XP:* ${petXP}

*[ INFO - CLAN ]*
  - *Nombre del clan:* ${guildName}
  - *Nivel del clan:* ${guildLevel}
  - *Miembros:* ${member} / ${capacity} miembros
`

let { name: leaderName, level: leaderLevel, xp: leaderXP, BR_points: leaderBR, CS_points: leaderCS, like: leaderLike } = ketua_guild
txt += `*[ INFO - LIDER CLAN ]*
  - *Nombre:* ${leaderName}
  - *Nivel:* ${leaderLevel}
  - *XP:* ${leaderXP}
  - *Puntos BR:* ${leaderBR}
  - *Puntos CS:* ${leaderCS}
  - *Like:* ${leaderLike}
  - *Fecha de Creación:* ${ketua_guild.create_time}
  - *Último Inicio de Sesión:* ${ketua_guild.last_login}`

await conn.sendMessage(m.chat, { text: txt }, { quoted: m })
} catch (error) {
console.error(error)
}}

handler.command = ['freefirestalk', 'ffstalk']

export default handler;