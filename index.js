const Discord = require("discord.js")

require("dotenv").config()

const client = new Discord.Client({
  intents: ["GUILDS"]
})

let bot = {
  client
}

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`)
})

client.slashcommands = new Discord.Collection()

const token = process.env['TOKEN']
client.login(token)