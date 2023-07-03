const { Telegraf } = require('telegraf');

module.exports = (app) => {
  const bot = new Telegraf("5829742655:AAE_3YIyLdDAPXrB5j0iXaRe-jvpxMmxK9Q");

  // Set up your bot's commands and listeners
  bot.start((ctx) => ctx.reply('Welcome to the bot!'));

  // Listener for text messages
  bot.on('text', (ctx) => {
    const message = ctx.message.text;
    // Handle the text message and send a reply
    ctx.reply(`You said: ${message}`);
  });

  // Start the bot
  // bot.launch();

  // Use telegraf-express-middleware
  app.use(bot.webhookCallback('/your-webhook-path'));

  return bot;
};
