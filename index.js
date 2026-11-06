const { Telegraf } = require('telegraf');

const bot = new Telegraf('9188684122:AAGvf78WGbxxa51127xCxuvYZKgBhiS1jTU');

bot.command('getkey', (ctx) => {
    const m4Link = "https://link4m.net/L7qPXrh";
        
            ctx.reply(
                    "🔗 Chào bạn! Vui lòng bấm vào đường link bên dưới để vượt link và nhận mã key:\n\n" + m4Link + "\n\n*(Sau khi hoàn thành vượt link, bạn sẽ nhận được key)*",
                            { parse_mode: 'Markdown' }
                                );
                                });

                                bot.launch();
                                