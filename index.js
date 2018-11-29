const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function () {
    bot.user.setActivity(".help | SlowelyBot V2");
});

bot.login(process.env.TOKEN);

var prefix = (".");


bot.on("guildMemberAdd", member => {
    member.guild.channels.find("name", "🆕bienvenue🆕").send(`:point_right: Bienvenue, ${member} sur le Discord de **SlowelyGames** :tada::hugging: !`)
})
