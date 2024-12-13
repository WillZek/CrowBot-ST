import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../media/database/clanes-db.js";

const handler = async (m, { conn, args, usedPrefix, command }) => {
    const user = global.db.data.users[m.sender];

    if (!args[0]) {
        return conn.sendMessage(
            m.chat,
            { text: `⚠️ Por favor ingresa el ID del clan al que deseas unirte.\nUso: ${usedPrefix + command} <ID del clan>` },
            { quoted: m }
        );
    }

    const clanId = args[0];
    const clanRef = doc(db, "clanes", clanId);
    const clanSnap = await getDoc(clanRef);

    if (!clanSnap.exists()) {
        return conn.sendMessage(
            m.chat,
            { text: `⚠️ No se encontró un clan con el ID ${clanId}.` },
            { quoted: m }
        );
    }

    const clanData = clanSnap.data();
    let userRank = null;

    if (clanData.miembros.lider === m.sender) {
        userRank = 'Líder';
    } else if (clanData.miembros.sub_lider === m.sender) {
        userRank = 'Sublíder';
    } else if (Array.isArray(clanData.miembros.m_ids) && clanData.miembros.m_ids.includes(m.sender)) {
        userRank = 'Miembro';
    }

    if (userRank) {
        return conn.sendMessage(
            m.chat,
            { text: `⚠️ Ya eres parte del clan **${clanData.nombre}** como **${userRank}**.` },
            { quoted: m }
        );
    }

    if (clanData.m_count >= clanData.max_usrs) {
        return conn.sendMessage(
            m.chat,
            { text: `⚠️ El clan **${clanData.nombre}** ya ha alcanzado el número máximo de miembros.` },
            { quoted: m }
        );
    }

    const userDoc = doc(db, "users", m.sender);
    const userData = (await getDoc(userDoc)).data();

    if (user.level < clanData.lvl_req) {
        return conn.sendMessage(
            m.chat,
            { text: `⚠️ Tu nivel es demasiado bajo para unirte al clan **${clanData.nombre}**. El nivel requerido es **${clanData.lvl_req}**.` },
            { quoted: m }
        );
    }

    const miembros_m_ids = Array.isArray(clanData.miembros.m_ids) ? clanData.miembros.m_ids : [];
    await updateDoc(clanRef, {
        [`miembros.m_ids`]: [...miembros_m_ids, m.sender],
        m_count: clanData.m_count + 1,
        poder: clanData.poder + user.level,
    });
let bnus = clanData.bonus_diario

    return conn.sendMessage(
        m.chat,
        { text: `✅ Te has unido exitosamente al clan **${clanData.nombre}** como **Miembro**.\n\n🎆 Se añadieron ${bnus} coins como bonus!` },
        { quoted: m }
    );
    global.db.data.users[m.sender].coin += bnus
};

handler.tags = ['clanes'];
handler.help = handler.command = ['cjoin'];
export default handler;