const Discord = require("discord.js")
const Command = require("./command")

const prefix = (".")

module.exports = class Sondage extends Command {

    static match(message) {
        if (message.content.startWith (prefix + "ping")) {
            return true
        }
    }

    static action(message) {
        
        let msg = message.content.split(" ")
        msg.shift()
        question = msg.join(" ")

        var sondage = new Discord.RichEmbed
    }
}