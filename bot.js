require('dotenv').config()

const { Client, Intents } = require('discord.js');
const client = new Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
intents: ['DIRECT_MESSAGES', 'DIRECT_MESSAGE_REACTIONS', 'GUILD_MESSAGES', 'GUILD_MESSAGE_REACTIONS', 'GUILDS'] });

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  })
  
  client.on('messageCreate', msg => { 
    if (msg.content === 'water') {
       msg.reply('Drink Up!');
    }
  });

client.login(process.env.BOT_TOKEN)