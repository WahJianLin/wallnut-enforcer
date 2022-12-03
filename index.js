const {
  ActivityType,
  Client,
  GatewayIntentBits,
  EmbedBuilder,
  PermissionsBitField,
  Permissions,
} = require(`discord.js`);

//determines what users need to use to start a discord command
const prefix = "!";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("ready", () => {
  console.log("bot is online");

  // Set the client user's activity
  client.user.setActivity("discord.js", { type: ActivityType.Watching });
});

//command handler
client.on("messageCreate", (message) => {
  //ignores if there is no message
  if (!message.content.startsWith(prefix || message.author.bot)) {
    return null;
  }

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLocaleLowerCase();

  //message array

  const messageArray = message.content.split("");
  const argument = messageArray.slice(1);
  const cmd = messageArray[0];

  //commands

  //test command
  if (command == "test") {
    message.channel.send("hello world");
  }
});

client.login(
  "{token}"
);
