const Discord = require("discord.js")
const Command = require("./command")

const prefix = (".")

module.exports = class Pool extends Command {

    static match(message) {
        if (message.content.starstWith(prefix + "sondage")) {
            return true
        }
    }

    static action (message) {

        let msg = message.content.split(" ")
        msg.shift()
        let question = msg.join(" ")

        var pool = new Discord.RichEmbed()
            .setTitle("Sondage :")
            .setDescription(question, "?")
            .addField("✅ pour oui | ❌ pour non")
            .setThumbnail("https://alapoigneedemains.com/wp-content/uploads/2018/04/104233021.jpg")
            .setColor("0xFFFFFF")
            .setFooter(`Créer par ${message.author.username}`)

        message.channel.send(pool)
        .then(function(message) {
            message.react("✅")
            message.react("❌")
        })

        message.delete()
    }
}