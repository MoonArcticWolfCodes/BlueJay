const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = 'Jay ';

client.once('ready', () => {
    console.log('BlueJay is online.')
})
client.on('message', message =>{
    let args = message.content.substring(prefix.length).split(" ");
    switch(args[0]){
        case 'kick':
            const user = message.mentions.users.first();
            if(user){
                const member = message.guild.member(user); 
                if(member){
                    member.kick('You were kicked.').then(() =>{
                        message.reply(`Sucessfully kicked ${user.tag}`);
                    }).catch(err => {
                        message.reply(`I was unable to kick the member.`);
                        console.log(err);
                    });
                } else {
                    message.reply("Hm, that user is not in this server.");
                }                
            } else {
                message.reply("Hm, you need to specify a person.");  
            }     
            break;
    }
});
client.login ('NzU0ODk3MDM2OTgxMzA1NDQ0.X17apg.o3y8JG5c32_EZDJyuIFpiYToz_g');