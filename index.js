//require('dotenv-safe').config();
const { Telegraf } = require('telegraf')
 
const bot = new Telegraf("5829742655:AAE_3YIyLdDAPXrB5j0iXaRe-jvpxMmxK9Q");

bot.telegram.sendMessage(1576094152, 'buscardados.com.br');
bot.telegram.sendMessage(1414329504, 'buscardados.com.br');
bot.telegram.sendMessage(-1001616468107, 'buscardados.com.br');

const replyMarkup = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [
        {
          text: 'Visite nosso site',
          url: 'https://www.buscardados.com.br',
        },
      ],
    ],
  }),
};

bot.hears(['/start', '/placa', '/cpf', '/menu@placagrupobot', '/cpf@buscacpfbot'], (ctx) => {
  ctx.reply('Entre no melhor site de buscas de placa: buscardados.com', replyMarkup);
});

bot.on('text', (ctx) => {
  const text = ctx.message.text;
  if (text.includes('/placa')) {
    bot.telegram.sendMessage(ctx.chat.id, 'Entre no site buscardados.com.br para completar a sua pesquisa de placa.', replyMarkup);
    bot.telegram.sendMessage(ctx.chat.id, 'As consultas completas estão apenas no melhor site: buscardados.com.br!', replyMarkup);
    bot.telegram.sendMessage(ctx.chat.id, 'Pague somente pelo pv admin deste grupo ou no whatsapp do site oficial: buscardados.com.br!, o restante são golpistas e você vai perder seu dinheiro!', replyMarkup);
  } else if (text.includes('/cpf') || text.includes('/telefone') || text.includes('/cpf1') || text.includes('/cpf2')) {
    bot.telegram.sendMessage(ctx.chat.id, 'Entre no site buscardados.com.br para completar a sua pesquisa de CPF.', replyMarkup);
    bot.telegram.sendMessage(ctx.chat.id, 'As consultas completas estão apenas no melhor site: buscardados.com.br!', replyMarkup);
    bot.telegram.sendMessage(ctx.chat.id, 'Pague somente pelo pv admin deste grupo ou no whatsapp do site oficial: buscardados.com.br!, o restante são golpistas e você vai perder seu dinheiro!', replyMarkup);
  }
});

bot.launch();

console.log('Bot rodando');
