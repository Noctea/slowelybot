const Discord = require("discord.js")
const Command = require("./command")

const prefix = (".")

module.exports = class Poll extends Command {

    static match(message) {
        if (message.content.startWith(prefix + "ping")) {
            return true
        }
    }

    static action(message) {
        
        let msg = message.content.split(" ")
        msg.shift()
        let question = msg.join(" ")
        
        if(message.guild.channel.find("name", "👌sondage👌")) {
            message.delete()
        }

        var pool = new Discord.RichEmbed()
            .setTitle("Sondage")
            .setDescription(question, "✅ pour oui | ❌ pour non")
            .setThumbnail("https://alapoigneedemains.com/wp-content/uploads/2018/04/104233021.jpg")
            .setColor("0xFFFFFF")
            .setFooter(`Créer par ${message.author.username}`)

        message.channel.send(pool)
        .then(function(message) {
            message.react("✅")
            message.react("❌")
        })
    }
}