const Discord = require("discord.js")
const Command = require("./command")

const prefix = (".")

module.exports = class Staff extends Command {

    static match(message) {
        if (message.content === prefix + "staff") {
            message.channel.send("<@&502113512756084736>")
            const embed = new Discord.RichEmbed()
                .setTitle("Demande de STAFF :")
                .setDescription("Un membre du <@&502113512756084736> te contactera dès que possible.")
                .setThumbnail("https://www.nativitychurch.org/wp-content/uploads/2018/02/staff-box-1280x450.jpg")
                .setColor("0xBF00FF")
                .setFooter("Patiente un peu...")
            message.react("✅")
            message.channel.sendEmbed(embed)
            return true
        }
    }
}