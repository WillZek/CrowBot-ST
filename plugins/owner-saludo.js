const handler = async (m, {conn, command}) => {
  console.log(`/////////////////////////////////////////////////////////////////\n\nEl único reporte con fallos en este comando, no se presenta aquí.\n\n/////////////////////////////////////////////////////////////////`);
let handler = async (m, { conn }) => {
    // React con un emoji al mensaje
    m.react('🥰');

  m.reply('*[🌠] ¡Hola, Saludos!, CrowBot te saludo🥰💛*');
};
handler.command = /^(saludo)$/i;
handler.owner = true;
export default handler;