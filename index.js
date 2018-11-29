const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function () {
    bot.user.setActivity(".help | SlowelyBot V2");
});

bot.login(process.env.TOKEN));

var prefix = (".");
