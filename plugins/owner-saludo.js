//Código Creado Por Niño Piña: wa.me/50557865603

const handler = async (m, {conn, command}) => {
  console.log(`/////////////////////////////////////////////////////////////////\n\nEl único reporte con fallos en este comando, no se presenta aquí.\n\n/////////////////////////////////////////////////////////////////`);
  m.reply('*[🌠] ¡Hola, Saludos!, CrowBot te saludo🥰💛*');
};
handler.command = /^(saludo|saludar|crowsaluda)$/i;
handler.owner = true;
export default handler;