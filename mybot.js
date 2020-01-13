const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  }
});

client.login("NjU0NjYzODc2MTAwNjIwMzEx.XfI8Fw.IvKQvm8oiCHZ7n-BQyWjC_hWosM");
