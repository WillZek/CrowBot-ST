import { doc, setDoc, getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../database/clanes-db.js";

const handler = async (m, { conn, text, usedPrefix, command, args }) => {
  const user = global.db.data.users[m.sender];

  if (user.level < 15) {
    throw `⚠️ Para poder crear un clan es necesario que seas nivel 15.\n\nNivel actual: ${user.level}`;
  }

  if (!args[0] || args[0].trim().length === 0) {
    throw `*[ 🌱 ] Por favor ingrese un nombre válido para su clan.*`;
  }

  const clanExistente = await verificarClanExistente(m.sender);
  if (clanExistente) {
    throw `⚠️ Ya eres líder de un clan llamado "${clanExistente.nombre}". No puedes crear otro clan.`;
  }

  let ids = await generarID(args[0]);

  async function guardarClan() {
    const clan = {
      nombre: args[0],
      imagen: "",
      lvl_req: 1,
      max_usrs: 10,
      creator: conn.getName(m.sender),
      bonus_diario: 1000,
      desc: "",
      poder: user.level,
      miembros: {
        lider: m.sender,
        sub_lider: null,
        m_ids: {}
      },
      m_count: 1,
      id: ids
    };

    try {
      const clanRef = doc(db, "clanes", clan.id);
      await setDoc(clanRef, clan);
      return clan.id;
    } catch (error) {
      console.error("Error al guardar el clan:", error);
      throw `⚠️ Hubo un error al crear el clan. Por favor, intente de nuevo más tarde.`;
    }
  }

  await guardarClan();
  await conn.sendMessage(
    m.chat,
    {
      text: `\`\`\`🌟 ¡Creaste con éxito un clan!\n\nNombre: ${args[0]}\nLíder: @${m.sender.split('@')[0]}\nID de unión: ${ids}\`\`\``,
      mentions: [m.sender],
    },
    { quoted: fkontak }
  );
};

handler.tags = ['clanes'];
handler.help = handler.command = ["cclan"];
export default handler;

async function generarID(text) {
  const cleanText = text.toUpperCase().replace(/[^A-Z]/g, "");
  let id = "";
  for (let i = 0; i < 6; i++) {
    id += cleanText[Math.floor(Math.random() * cleanText.length)] || "X";
  }
  return id;
}

async function verificarClanExistente(lider) {
  try {
    const clanesRef = collection(db, "clanes");
    const q = query(clanesRef, where("miembros.lider", "==", lider));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      return querySnapshot.docs[0].data();
    }
    return null;
  } catch (error) {
    console.error("Error al verificar clan existente:", error);
    throw `⚠️ Hubo un problema al verificar si ya tienes un clan. Intenta de nuevo más tarde.`;
  }
}