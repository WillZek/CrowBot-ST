import { doc, getDoc, updateDoc, getDocs, collection } from "firebase/firestore";
import { db } from "../database/clanes-db.js";

const handler = async (m, { conn, isROwner, args, command, usedPrefix }) => {
  try {
    const user = global.db.data.users[m.sender];

    let clanId = null;
    let clanData = null;

    const clanesSnapshot = await getDocs(collection(db, "clanes"));
    clanesSnapshot.forEach((doc) => {
      const data = doc.data();
      if (data.miembros.lider === m.sender || data.miembros.sub_lider === m.sender || data.miembros.m_ids[m.sender]) {
        clanId = doc.id;
        clanData = data;
      }
    });

    if (!clanId) {
      return conn.sendMessage(
        m.chat,
        {
          text: `⚠️ No perteneces a ningún clan. Únete a un clan o crea uno primero.`,
        },
        { quoted: m }
      );
    }

    const isLeader = m.sender === clanData.miembros.lider;
    const isSublider = m.sender === clanData.miembros.sub_lider;
    const isMember = clanData.miembros.m_ids[m.sender];

    if (!isLeader && !isSublider && !isROwner) {
      return conn.sendMessage(
        m.chat,
        {
          text: `⚠️ Solo el líder, el sublíder o el propietario del bot pueden modificar la información de este clan.`,
        },
        { quoted: m }
      );
    }

    if (!args[0]) {
      return conn.sendMessage(
        m.chat,
        {
          text: `⚠️ Por favor elige una opción para modificar:\n\n
1: Cambiar nombre\n• ${usedPrefix + command} 2 <nuevo nombre>\n
2: Cambiar imagen\n• ${usedPrefix + command} 1 <URL de imagen>\n
3: Cambiar nivel requerido\n• ${usedPrefix + command} 3 <nivel requerido>\n
4: Cambiar beneficios diarios\n• ${usedPrefix + command} 4 <beneficios diarios>\n
5: Cambiar descripción\n• ${usedPrefix + command} 5 <nueva descripción>\n
6: Cambiar usuarios máximos\n• ${usedPrefix + command} 6 <número de usuarios máximos>`,
        },
        { quoted: m }
      );
      return;
    }

    if (args[0] === "1" && (isLeader || isSublider || isROwner)) {
      if (!args[1] || !args[1].startsWith("http")) {
        return conn.sendMessage(
          m.chat,
          { text: "⚠️ Por favor, ingresa un URL válido para la imagen del clan." },
          { quoted: m }
        );
      }

      await updateDoc(doc(db, "clanes", clanId), { imagen: args[1] });

      conn.sendMessage(
        m.chat,
        { text: `✅ Imagen del clan actualizada exitosamente.` },
        { quoted: m }
      );
    } else if (args[0] === "2" && (isLeader || isSublider || isROwner)) {
      if (!args[1]) {
        return conn.sendMessage(
          m.chat,
          { text: "⚠️ Por favor, ingresa el nuevo nombre del clan." },
          { quoted: m }
        );
      }

      await updateDoc(doc(db, "clanes", clanId), { nombre: args[1] });

      conn.sendMessage(
        m.chat,
        { text: `✅ Nombre del clan actualizado a "${args[1]}".` },
        { quoted: m }
      );
    } else if (args[0] === "3" && (isLeader || isSublider || isROwner)) {
      if (!args[1] || isNaN(args[1]) || args[1] <= 0) {
        return conn.sendMessage(
          m.chat,
          { text: "⚠️ Por favor, ingresa un nivel requerido válido." },
          { quoted: m }
        );
      }

      await updateDoc(doc(db, "clanes", clanId), { lvl_req: parseInt(args[1]) });

      conn.sendMessage(
        m.chat,
        { text: `✅ Nivel requerido del clan actualizado a ${args[1]}.` },
        { quoted: m }
      );
    } else if (args[0] === "4" && (isLeader || isSublider || isROwner)) {
      if (!args[1] || isNaN(args[1]) || args[1] <= 0) {
        return conn.sendMessage(
          m.chat,
          { text: "⚠️ Por favor, ingresa un valor válido para los beneficios diarios." },
          { quoted: m }
        );
      }

      await updateDoc(doc(db, "clanes", clanId), { bonus_diario: parseInt(args[1]) });

      conn.sendMessage(
        m.chat,
        { text: `✅ Beneficios diarios del clan actualizados a ${args[1]}.` },
        { quoted: m }
      );
    } else if (args[0] === "5" && (isLeader || isSublider || isROwner)) {
      if (!args.slice(1).join(" ")) {
        return conn.sendMessage(
          m.chat,
          { text: "⚠️ Por favor, ingresa una nueva descripción para el clan." },
          { quoted: m }
        );
      }

      const newDesc = args.slice(1).join(" ");

      await updateDoc(doc(db, "clanes", clanId), { desc: newDesc });

      conn.sendMessage(
        m.chat,
        { text: `✅ Descripción del clan actualizada a: "${newDesc}".` },
        { quoted: m }
      );
    } else if (args[0] === "6" && (isLeader || isSublider || isROwner)) {
      if (!args[1] || isNaN(args[1]) || args[1] <= 0 || args[1] > 10000) {
        return conn.sendMessage(
          m.chat,
          { text: "⚠️ Por favor, ingresa un número válido de usuarios máximos (hasta 10000)." },
          { quoted: m }
        );
      }

      await updateDoc(doc(db, "clanes", clanId), { max_usrs: parseInt(args[1]) });

      conn.sendMessage(
        m.chat,
        { text: `✅ Número máximo de usuarios del clan actualizado a ${args[1]}.` },
        { quoted: m }
      );
    } else {
      return conn.sendMessage(
        m.chat,
        { text: `⚠️ Opción no válida.` },
        { quoted: m }
      );
    }
  } catch (error) {
    console.error(error);
    conn.sendMessage(
      m.chat,
      { text: "⚠️ Ocurrió un error al intentar modificar el clan." },
      { quoted: m }
    );
  }
};

handler.tags = ['clanes'];
handler.help = handler.command = ['cset'];
export default handler;