const Discord = require("discord.js")
const Command = require("./command")

const prefix = (".")

module.exports = class Sondage extends Command {

    static match(message) {
        if (message.content.startsWith(prefix + "sondage")) {
            return true
        }
    }

    static action(message) {

        let msg = message.content.split(' ')
        msg.shift()
        let question = msg.join(' ')

        var sondage = new Discord.RichEmbed()
            .setTitle("Sondage :")
            .addField(question,)
            .addField('✅ pour oui | ❌ pour non')
            .setColor("0xFFFFFF")
            .setFooter(`Créer par ${message.author.username}`)

        message.channel.send(sondage)
        .then(function(message) {
            message.react("✅")
            message.react("❌")
        })

        message.delete()
    }
}