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


const token = process.env['TOKEN']
client.login(token)