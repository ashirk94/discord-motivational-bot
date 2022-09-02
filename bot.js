require('dotenv').config()
const axios = require('axios')

const options = {
	method: 'POST',
	url: 'https://motivational-quotes1.p.rapidapi.com/motivation',
	headers: {
		'content-type': 'application/json',
		'X-RapidAPI-Key': '30cb036f00msh6e18bbb6eb2f798p10dd84jsn1382d5ed4e88',
		'X-RapidAPI-Host': 'motivational-quotes1.p.rapidapi.com'
	},
	data: '{"key1":"value","key2":"value"}'
}

const { Client } = require('discord.js')
const client = new Client({
	partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
	intents: [
		'DIRECT_MESSAGES',
		'DIRECT_MESSAGE_REACTIONS',
		'GUILD_MESSAGES',
		'GUILD_MESSAGE_REACTIONS',
		'GUILDS'
	]
})

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`)
})

client.on('messageCreate', (msg) => {
	if (msg.content === '!motivate') {
		axios
			.request(options)
			.then(function (response) {
				msg.reply(response.data)
			})
			.catch(function (error) {
				console.error(error)
			})
	}
})

client.login(process.env.BOT_TOKEN)