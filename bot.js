// Run dotenv
require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

const farenheitToCelsius = (farenheit) => {
    return ((farenheit - 32) / 1.8).toFixed(2)
}

const celsiusToFarenheit = (celsius) => {
    return (celsius * 1.8 + 32).toFixed(2)
}

const handleCommand = (message) => {
    const messageData = message.content.split(" ");
    switch (messageData[0]) {
        case "!ping":
            message.channel.send('ponk.');
            break;
        case "!help":
            message.channel.send('List of commands ^^');
            break;
        case "!ftc":
            // TODO: make sure the argument is in a proper number
            // TODO: make sure that there is a an argument
            message.channel.send(`${messageData[1]}F is ${farenheitToCelsius(messageData[1])}C`);
            break;
        case "!ctf":
            // TODO: make sure the argument is in a proper number
            // TODO: make sure that there is a an argument
            message.channel.send(`${messageData[1]}F is ${celsiusToFarenheit(messageData[1])}C`);
            break;
        default:
            message.channel.send(`Command ${messageData[0]} not found`);
            break;
    }
}

client.on('message', message => {
    //console.log(message);
    if (message.content[0] === '!') {

        handleCommand(message);
    }

});

client.login(process.env.DISCORD_TOKEN);
