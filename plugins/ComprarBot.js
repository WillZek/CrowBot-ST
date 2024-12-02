const handler = async (m, {conn}) => {
  m.reply(global.ComprarBot);
};
handler.command = /^(ComprarBot|Comprar|comprar|ComprarBot)$/i;
export default handler;

global.ComprarBot = `
〔 *CROW - BOT* 〕

*BOT PARA GRUPO* :
> wa.me/50557865603

*BOT PERZONALIZADO* :
> wa.me/50557865603
`;