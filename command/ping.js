const Discord = require("discord.js")
const Command = require("./command")

const prefix = (".")

module.exports = class Ping extends Command {

    static match(message) {
        if (message.content === prefix + "ping") {
            return true
        }
    }

    static action(message) {
        message.channel.send("pong")
    }
}