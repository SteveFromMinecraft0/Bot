const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NjY4MjkwMDY3MjE0NzYyMDA3.XiTr3Q.Ylf7VBKGlrOhcPD0QIbgR9RpZoY';

const PREFIX = '!';

var website_link = 'http://www.example.com/index.html';
var schedule_link = 'https://www.robotevents.com/';
var forum_link = 'https://www.vexforum.com/';

var numAwards = 1;

var current_code = 'Im not working';

bot.login(token);

bot.on('ready', () =>{
    console.log('This bot is online!')
    bot.user.setActivity('Netflix and Chill', { type: 'WATCHING' }).catch(console.error);
})


bot.on('message', message=>{

    let args = message.content.substring(PREFIX.lenth).split(" ");

    switch(args[0]){
        case '!paste':
            const attachment = new Attachment('./Code.txt');
        message.channel.send(message.author, attachment);
        break;
    case '!forum':
        message.channel.send(forum_link);
    break;
    case '!schedule':
        message.channel.send(schedule_link);
    break;
    case '!website':
        message.channel.send(website_link);
    break;
    case '!clear':
        if(!args[1]) return message.reply('Error please define second argument')
        message.channel.bulkDelete(args[1]);
        break;
    case '!info':
        if(!args[1]) return message.reply('Error please define second argument')
        if(args[1] === 'team'){
        const embed = new Discord.RichEmbed()
        .setTitle('Team 1320C')
        .addField('Requested By', message.author.username)
        .addField('Number of Awards', numAwards)
        .addField('Info', 'https://www.robotevents.com/teams/VRC/1320C')
        .setColor(0x5DADE2)
        .setThumbnail('https://media.discordapp.net/attachments/523639230367531012/664526023320404018/Robotiger.png')
        message.channel.sendEmbed(embed);}
        break;
    }

})


