const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = 'Jay ';

client.once('ready', () => {
    console.log('BlueJay is online.')
    bot.user.setActivity('Coding~');
})
client.on('guildMemberAdd', member =>{
    const channel = member.guild.channels.cache.find(channel => channel.name === '✧･ﾟ✨🍀welcome');
    if(!channel) return;
        channel.send(`Welcome to ~Home Sweet Home~, ${member}, please read the rules, verify, read the map when you are lost, and just enjoy your stay!`)
});
client.on('guildMemberRemove', member =>{
    const channel = member.guild.channels.cache.find(channel => channel.name === '😢goodbye😢');
    if(!channel) return;
        channel.send(`Goodbye, ${member}, hope you enjoyed your stay!`)
});

client.on('message', message =>{
    let args = message.content.substring(prefix.length).split(" ");
    switch(args[0]){
        case 'ping':
            message.channel.send('pong~');
        case 'subscribe':
            message.channel.send("There isn't a channel for BlueJay right now.");
            message.channel.send('However you can wait for the channel when it comes!');
        case 'info':
            if(args[1] === 'version'){
                message.channel.send('This current version is version 1.0.1');
            } else {
                message.channel.send('How did u get here?');
            }
        break;
    }
});

client.login ('NzU0ODk3MDM2OTgxMzA1NDQ0.X17apg.o3y8JG5c32_EZDJyuIFpiYToz_g');


