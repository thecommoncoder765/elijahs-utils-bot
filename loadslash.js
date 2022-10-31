const Discord = require("discord.js")

require("dotenv").config()

const client = new Discord.Client({
  intents: [
    "Guilds",
    "GuildMessages",
    "MessageContent",
 //   "GuildMembers"
  ],
})

let bot = {
  client
}

const guildId = "1034240157815156776"

client.slashcommands = new Discord.Collection()

client.loadSlashCommands = (bot, reload) => require("./handlers/slashcommands")(bot, reload)
client.loadSlashCommands(bot, false)

client.on("ready", async () => {
  const guild = client.guilds.cache.get(guildId)
  if (!guild)
    return console.error("Target guild not found")

  await guild.commands.set([...client.slashcommands.values()])
  console.log(`Successfully loaded in ${client.slashcommands.size}`)
  process.exit(0)
})

const token = process.env['TOKEN']
client.login(token)