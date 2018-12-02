const Discord = require("discord.js")
const bot = new Discord.Client()

bot.on("ready", function () {
    bot.user.setActivity(".help | SlowelyBot V2")
})

bot.login(process.env.TOKEN)


const Command = require("./command/command")
const Ping = require("./command/ping")
const Infos = require("./command/infos")

bot.on("message", message => {

    Ping.parse(message)
    Infos.parse(message)
})