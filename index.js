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


bot.on("message", message => {
    if (message.content === prefix + "help") {
        var embed = new Discord.RichEmbed()
            .setTitle("Commandes :")
            .setDescription("Commandes Disponible avec <@517662031026061314>")
            .addField(".help", "Affiche cette page")
            .addField(".staff", "Mentionne le Staff (ne pas spam sous peine de bannissement)")
            .setThumbnail("http://portaildoc-veto.vetagro-sup.fr/wp-content/uploads/2018/05/brain.png")
            .setColor("0xFF9933")
            .setFooter("Le BOT est encore en développement, d'autres commandes seront bientôt disponible.")
        message.channel.sendEmbed(embed);
    }

    if(message.content === prefix + "staff") {
        message.channel.send("<@&468174150394183690>")
        var embed = new Discord.RichEmbed()
            .setTitle("Demande de STAFF")
            .setDescription("Un membre du <@&468174150394183690> te contactera dès que possible.")
        message.react("✅")
        message.channel.sendEmbed(embed);
    }
})
