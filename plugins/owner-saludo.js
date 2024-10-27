const handler = async (m, {conn, command}) => {
console.log(`/////////////////////////////////////////////////////////////////\n\nEl único reporte con fallos en este comando, no se presenta aquí.\n\n/////////////////////////////////////////////////////////////////`);
const crowImageUrl = 'https://qu.ax/tPREp.jpg'; // Reemplaza esto con la URL de la imagen del cuervo
m.reply(`*[ 🌠 ] CrowBot Te Saluda🥰.*\n![Cuervo](${crowImageUrl})`);
};
handler.command = /^(saludo)$/i;
handler.owner = true;
export default handler;