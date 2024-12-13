import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../database/clanes-db.js";

const handler = async (m, { conn, command, text, args }) => {
    const clanesRef = collection(db, "clanes");
    const q = query(clanesRef, orderBy("poder", "desc"));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      throw `⚠️ Actualmente no existen clanes registrados.`;
    }

    let mensaje = "*🌟 Lista de Clanes:*\n\n";
    let index = 1;
    let menciones = [];

    querySnapshot.forEach((doc) => {
      const clan = doc.data();
      mensaje += `*${index} - ${clan.nombre}*\n`;
      mensaje += `🛡️ *Poder:* ${clan.poder}\n`;
      mensaje += `🌱 *Miembros:* ${clan.m_count}\n`;
      mensaje += `🌠 *ID de unión:* ${clan.id}\n`;
      mensaje += `💻 *Descripción:* ${clan.desc || "Sin descripción"}\n`;
      mensaje += `🛷 *Nivel requerido:* ${clan.lvl_req}\n`;
      mensaje += `👑 *Líder:* @${clan.miembros.lider.split("@")[0]}\n`;
      mensaje += `-------------------------------------------------------\n`;
      menciones.push(clan.miembros.lider);
      index++;
    });

    await conn.sendMessage(
      m.chat,
      { text: mensaje,
      mentions: conn.parseMention(mensaje)
      },
      { quoted: fkontak }
    );
};

handler.tags = ['clanes'];
handler.help = handler.command = ["topc"];
export default handler;