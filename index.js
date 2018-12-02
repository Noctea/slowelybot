const Discord = require("discord.js")
const bot = new Discord.Client()

bot.on("ready", function () {
    bot.user.setActivity(".help | SlowelyBot V2")
})

bot.login(process.env.TOKEN)


const Command = require("./command/command")
const Ping = require("./command/ping")

bot.on("message", message => {

    Ping.parse(message)
})