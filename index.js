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
            .addField(".infos", "Affiche les informations du serveur Discord")
            .setThumbnail("http://portaildoc-veto.vetagro-sup.fr/wp-content/uploads/2018/05/brain.png")
            .setColor("0xFF9933")
            .setFooter("Le BOT est encore en développement ; d'autres commandes seront bientôt disponible.")
        message.react("👌")
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

    if (message.content === prefix + "infos") {
        var embed = new Discord.RichEmbed()
            .setDescription("Informations sur le Discord :")
            .addField("Nom du Discord", message.guild.name)
            .addField("Crée le", "Mardi 10 Juillet 2018 à 15h38 (Heure de Paris)")
            .addField("Tu as rejoint le", message.member.joinedAt)
            .addField("Nombres de membres sur le Discord", message.guild.memberCount)
            .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Info_icon_002.svg/768px-Info_icon_002.svg.png")
            .setColor("0x3333FF")
        message.react("👀")
        message.channel.sendEmbed(embed)
    }
})
