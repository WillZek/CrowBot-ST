import { doc, deleteDoc, getDoc } from "firebase/firestore";
import { db } from "../database/clanes-db.js";

const handler = async (m, { conn, isROwner, args }) => {
    const user = global.db.data.users[m.sender];

    if (!args[0]) throw `⚠️ Por favor, ingresa el ID del clan que deseas eliminar.`;

    const clanRef = doc(db, "clanes", args[0]);
    const clanDoc = await getDoc(clanRef);

    if (!clanDoc.exists()) {
      throw `⚠️ No se encontró un clan con ese ID.`;
    }

    const clanData = clanDoc.data();
    if (m.sender !== clanData.miembros.lider && !isROwner) {
      throw `⚠️ Solo el líder del clan o el propietario del bot pueden eliminar este clan.`;
    }
    await deleteDoc(clanRef);
    await conn.sendMessage(
      m.chat,
      {
        text: `✅ El clan con ID ${args[0]} ha sido eliminado exitosamente.`,
      },
      { quoted: fkontak }
    );
};

handler.tags = ['clanes'];
handler.help = handler.command = ["dclan"];
export default handler;