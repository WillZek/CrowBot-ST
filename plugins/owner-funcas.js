const handler = async (m, {conn, command}) => {
  console.log(`/////////////////////////////////////////////////////////////////\n\nEl único reporte con fallos en este comando, no se presenta aquí.\n\n/////////////////////////////////////////////////////////////////`);
  m.reply('*[ 🌠 ] No funca ❤️‍🔥.*');
};
handler.command = /^(funcas)$/i;
handler.owner = true;
export default handler;