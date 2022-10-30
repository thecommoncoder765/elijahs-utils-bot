const Discord = require("discord.js")

require("dotenv").config()

const client = new Discord.Client({
  intents: ["GUILDS"]
})

let bot = {
  client
}

const guildId = "1034240157815156776"

client.slashcommands = new Discord.Collection()

client.loadSlashCommands = (bot, reload) => require("./handlers/slashcommands")(bot, reload)
client.loadSlashCommands(bot, false)

client.on("ready", () => {
  const guild = client.guilds.cache.get(guildId)
  if (!guild)
    return console.error("Target guild not found")
})

const token = process.env['TOKEN']
client.login(token)