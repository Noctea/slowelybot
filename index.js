const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function () {
    bot.user.setActivity("SlowelyBot V2 | EN DEV");
});

bot.login(process.env.TOKEN);

var prefix = (".");


bot.on("guildMemberAdd", member => {
    member.guild.channels.find("name", "🆕bienvenue🆕").send(`:point_right: Bienvenue, ${member} sur le Discord de **SlowelyGames** :tada::hugging: !`)
})


bot.on('message', message => {
    if(message.content === prefix + "staff") {
        message.channel.send("<@&468174150394183690>")
        console.log(`${message.author.username} contact le Staff!`);
        let serverembed = new Discord.RichEmbed()
        .setTitle("Demande de STAFF")
        .setDescription("Un membre du <@&468174150394183690> te contactera dans quelque instants.")
        message.react("✅")
        message.channel.send(serverembed);
    }
})
