const handler = async (m, {conn}) => {
m.reply(global.ComprarBot);
await conn.sendImage(m.chat, 'https://i.ibb.co/qJNL5Bg/file.jpg', 'Aquí tienes una imagen festiva 🎉', m);
};
handler.command = /^(ComprarBot|Comprar|comprar|ComprarBot)$/i;
export default handler;
global.ComprarBot = `
〔⛄ *CROW - BOT* ❄️〕\n\n> *🦌FELIZ NAVIDAD🎄*
*BOT PARA GRUPO* :
> wa.me/50557865603
*BOT PERZONALIZADO* :
> wa.me/50557865603
`;