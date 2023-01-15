require('dotenv').config();
const { Client, IntentsBitField, EmbedBuilder, ActivityType, SlashCommandBuilder } = require('discord.js');
const dbConfig = require('./dbconfig');
const mysql = require('mysql');

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ]
});

const connection = mysql.createConnection(dbConfig);

client.on('ready', (botuser) => {
  console.log(`${botuser.user.username} Is Now Online`);
  client.user.setActivity('Servers for Profanity', { type: ActivityType.Watching });
});

let referenceWords = [];

connection.connect(err => {
    if (err) throw err;
    console.log("Connected to database");
    connection.query("SELECT * FROM bad_words", (err, rows) => {
        if (err) throw err;
        referenceWords = rows.map(row => row.word.toLowerCase());
    });
});

client.on('messageCreate', async message => {
  if(message.author.bot) return;
  let foundWord;
  const words = message.content.toLowerCase().split(" ");
  for(let i = 0; i < words.length; i++) {
    if (referenceWords.includes(words[i])) {
      foundWord = words[i];
      try {
        await message.delete();
        const profanityEmbed = new EmbedBuilder()
	        .setColor(0xFF0000)
	        .setDescription('**❌ Profanity DETECTED. Message Deleted**')
          const matchFoundMessage = await message.channel.send({ embeds: [profanityEmbed] });
        setTimeout(() => {
          matchFoundMessage.delete();
        }, 2000);
      } catch (error) {
        console.log(`Error deleting message: ${error}`);
      }
      break; // exit the loop
    }
  }
  if (foundWord) {
    console.log(`Found word: ${foundWord}`);
  } else {
    console.log("No match found.");
  }
});

client.on('messageCreate', message => {
  if (message.content === 'ping') {
    const latencyEmbed = new EmbedBuilder()
	    .setColor(0xD9BA44)
	    .setDescription(`Bot Latency is **${client.ws.ping}** ms`)
      message.reply({ embeds: [latencyEmbed] });
  }
});
  
  client.on('error', error => {
    console.log(`Error: ${error}`);
  });

client.login(process.env.TOKEN);
