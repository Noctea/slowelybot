const Discord = require("discord.js")
const Command = require("./command")

const prefix = (".")

module.exports = class Staff extends Command {

    static match(message) {
        if (message.content === prefix + "staff") {
            return true
        }
    }

    static action(message) {

        message.channel.send("<@&502113512756084736>")

        var staff = new Discord.RichEmbed()
            .setTitle("Demande de STAFF :")
            .setDescription("Un membre du <@&502113512756084736> te contactera dès que possible.")
            .setThumbnail("https://www.nativitychurch.org/wp-content/uploads/2018/02/staff-box-1280x450.jpg")
            .setColor("0xBF00FF")
            .setFooter(`Demande de **${message.author.username}**`)

        message.channel.sendEmbed(staff)
        .then(function(message) {
            message.react("✅")
        })
    }
}