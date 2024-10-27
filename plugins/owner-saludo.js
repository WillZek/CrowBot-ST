const handler = async (m, {conn, command}) => {

let handler = async (m, { conn }) => {
    // React con un emoji al mensaje
    m.react('🥰');
  console.log(`/////////////////////////////////////////////////////////////////\n\nEl único reporte con fallos en este comando, no se presenta aquí.\n\n/////////////////////////////////////////////////////////////////`);
  m.reply('*[ 🌹 ] Hmm, parece que me necesitas. Qué inesperado... 😒.*');
};
handler.command = /^(saludo)$/i;
handler.owner = true;
export default handler;