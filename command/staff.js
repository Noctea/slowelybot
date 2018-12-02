const Discord = require("discord.js")
const Command = require("./command")

const prefix = (".")

module.exports = class Staff extends Command {

    static match(message) {
        if (message.content === prefix + "staff") {
            message.channel.send("<@&468174150394183690>")
            const embed = new Discord.RichEmbed()
                .setTitle("Demande de STAFF :")
                .setDescription("Un membre du <@&468174150394183690> te contactera dès que possible.")
                .setThumbnail("https://www.nativitychurch.org/wp-content/uploads/2018/02/staff-box-1280x450.jpg")
                .setColor("0xBF00FF")
                .setFooter("Patiente un peu...")
            message.react("✅")
            message.channel.sendEmbed(embed)
            return true
        }
    }
}