const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function () {
    bot.user.setActivity("SlowelyBot | EN DEV");
});

bot.login(process.env.TOKEN);

var prefix = (".");
