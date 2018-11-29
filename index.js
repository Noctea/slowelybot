const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function () {
    bot.user.setActivity("SlowelyBot V2 | EN DEV");
});

bot.login(process.env.TOKEN);

var prefix = (".");
