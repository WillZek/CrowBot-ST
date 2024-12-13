import { doc, getDoc, getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../database/clanes-db.js";

const handler = async (m, { conn, args, usedPrefix, command }) => {
  try {
    const user = global.db.data.users[m.sender];
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let clanId = null;

    if (args[0]) {
      clanId = args[0];
    } else if (who) {
clanId = await checkClan(who)
    }

    if (!clanId) {
      return conn.sendMessage(
        m.chat,
        { text: "⚠️ No estás en ningún clan o no has proporcionado un ID válido." },
        { quoted: m }
      );
    }

    const clanRef = doc(db, "clanes", clanId);
    const clanSnap = await getDoc(clanRef);
    if (!clanSnap.exists()) {
      return conn.sendMessage(
        m.chat,
        { text: "⚠️ No se encontró un clan con el ID proporcionado." },
        { quoted: m }
      );
    }

    const clanData = clanSnap.data();
    let memberTags = [];
    const isLeader = clanData.miembros.lider === m.sender;
    const isSubLeader = Array.isArray(clanData.miembros.sub_lider) && clanData.miembros.sub_lider.includes(m.sender);
    const isMember = Array.isArray(clanData.miembros.m_ids) && clanData.miembros.m_ids.includes(m.sender);

    if (!isLeader && !isSubLeader && !isMember) {
      return conn.sendMessage(
        m.chat,
        { text: "⚠️ No perteneces a este clan." },
        { quoted: m }
      );
    }

    if (Array.isArray(clanData.miembros.m_ids)) {
      for (const member of clanData.miembros.m_ids) {
        memberTags.push(`• @${member.split('@')[0]}`);
      }
    }

    const membersText = memberTags.length > 0 ? memberTags.join("\n") : "⚠️ Este clan no tiene miembros aún.";

    const subLeaderTag = clanData.miembros.sub_lider ? `@${clanData.miembros.sub_lider.split('@')[0]}` : "No hay sublíder actualmente";

    const clanInfo = `
🛡️ *Nombre del clan:* ${clanData.nombre}

🌱 *Miembros Totales:* ${clanData.m_count}/${clanData.max_usrs}
🏅 *Líder:* @${clanData.miembros.lider.split('@')[0]}
👨‍✈️ *Sub Líder:* ${subLeaderTag}

💻 *Descripción:* ${clanData.desc || "Sin descripción"}

🛷 *Nivel requerido:* ${clanData.lvl_req}
💰 *Beneficios diarios:* ${clanData.bonus_diario}
🎯 *Poder total del clan:* ${clanData.poder}
-------------------------------------------------
⚓ *Miembros del clan ${clanData.nombre}:*
${membersText}
    `;

    if (clanData.imagen) {
      await conn.sendMessage(m.chat, {
        image: { url: clanData.imagen },
        caption: clanInfo,
        mentions: conn.parseMention(clanInfo)
      }, { quoted: fkontak });
    } else {
      await conn.sendMessage(m.chat, {
        text: clanInfo,
        mentions: conn.parseMention(clanInfo)
      }, { quoted: fkontak });
    }

  } catch (error) {
    console.error(error);
    conn.sendMessage(
      m.chat,
      { text: "⚠️ Ocurrió un error al intentar mostrar la información del clan." },
      { quoted: m }
    );
  }
};

handler.tags = ['clanes'];
handler.help = ['cinfo'];
handler.command = ['cinfo'];
export default handler;

async function checkClan(user) {
  try {
    const clanesRef = collection(db, "clanes");
    const snapshot = await getDocs(clanesRef);
    const clanes = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    const clan = clanes.find(clan => 
      clan.miembros.lider === user || 
      clan.miembros.sub_lider === user || 
      (Array.isArray(clan.miembros.m_ids) && clan.miembros.m_ids.includes(user)) 
    );
    if (clan) {
      return clan.id;
    } else {
      console.log(`El usuario ${user} no pertenece a ningún clan.`);
      return null;
    }
  } catch (error) {
    console.error("Error al verificar el clan del usuario:", error);
    return null; 
  }
}