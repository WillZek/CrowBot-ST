import { doc, getDoc, getDocs, updateDoc, collection } from "firebase/firestore";
import { db } from "../database/clanes-db.js";

const handler = async (m, { conn, args, usedPrefix, command }) => {
  try {
    const user = global.db.data.users[m.sender];
    let who = m.quoted
      ? m.quoted.sender
      : m.mentionedJid && m.mentionedJid[0]
      ? m.mentionedJid[0]
      : m.fromMe
      ? conn.user.jid
      : m.sender;

    const lider = await clider(m.sender);
    if (m.sender !== lider) {
      return conn.sendMessage(
        m.chat,
        { text: "⚠️ Solo el líder de un clan puede asignar un sublíder." },
        { quoted: m }
      );
    }
    const clanesRef = collection(db, "clanes");
    const snapshot = await getDocs(clanesRef);
    const clanes = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    const clan = clanes.find((clan) => clan.miembros.lider === m.sender);

    if (!clan) {
      return conn.sendMessage(
        m.chat,
        { text: "⚠️ No se encontró el clan al que perteneces." },
        { quoted: m }
      );
    }
    if (who !== m.sender && !clan.miembros.m_ids.includes(who)) {
      return conn.sendMessage(
        m.chat,
        { text: "⚠️ El usuario no pertenece a tu clan." },
        { quoted: m }
      );
    }
    if (clan.miembros.sub_lider) {
      return conn.sendMessage(
        m.chat,
        { text: "⚠️ Este clan ya tiene un sublíder asignado." },
        { quoted: m }
      );
    }
    const clanRef = doc(db, "clanes", clan.id);
    await updateDoc(clanRef, {
      "miembros.sub_lider": who,
    });

    return conn.sendMessage(
      m.chat,
      {
        text: `✅ El usuario @${who.split("@")[0]} ha sido asignado como sublíder del clan **${clan.nombre}**.`,
      },
      { quoted: m, mentions: [who] }
    );
  } catch (error) {
    console.error(error);
    conn.sendMessage(
      m.chat,
      { text: "⚠️ Ocurrió un error al intentar asignar un sublíder." },
      { quoted: m }
    );
  }
};
handler.tags = ['clanes'];
handler.help = handler.command = ["csubir"];
export default handler;

async function clider(user) {
  try {
    const clanesRef = collection(db, "clanes");
    const snapshot = await getDocs(clanesRef);
    const clanes = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    const clan = clanes.find(
      (clan) =>
        clan.miembros.lider === user ||
        clan.miembros.sub_lider === user ||
        (Array.isArray(clan.miembros.m_ids) &&
          clan.miembros.m_ids.includes(user))
    );
    if (clan) {
      return clan.miembros.lider;
    } else {
      console.log(`El usuario ${user} no pertenece a ningún clan.`);
      return null;
    }
  } catch (error) {
    console.error("Error al verificar el clan del usuario:", error);
    return null;
  }
}