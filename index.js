
//the packages needed for the ascii command

const Discord = require('discord.js');
const client = new Discord.Client();
const figlet = require('figlet');

//bot status and logs

client.on('ready', () => {
  console.log(`${client.user.tag} is now online!`);
  console.log(`=====================================================`);
  console.log(`Loaded ascii command! Took 0ms!`);
  console.log(`=====================================================`);
  console.log(`This is a Discord bot that generate ascii texts.`)
  console.log(`Made with discord.js, figlet packages and with loves!`)
  console.log(`=====================================================`);
  console.log(`© Jxestar#3751`);
      client.user.setPresence({
        status: "dnd",
        game: {
            name: "!help",  
            type: "WATCHING"
        }
    });
});

//commands here

client.on('message', message => {

//prefix

	if (!message.content.startsWith('!') || message.author.bot) return; 

	const args = message.content.slice('!'.length).trim().split(/ +/);

	const command = args.shift().toLowerCase();

//help command
  if (command === 'help') {
  const help = new Discord.MessageEmbed()
	.setTitle('Ascii Bot Help Panel')
	.addFields(
	{ name: 'Ascii', value: '!ascii', inline: true },
	{ name: 'Ping', value: '!ping', inline: true },
        { name: 'Help', value: '!help', inline: true },
	)
	.setTimestamp()
	.setFooter('© Jxestar | Ascii Discord Bot');
   message.channel.send(help);
  }

//ping command
  if (command === 'ping') {
    const ping = Date.now() - message.createdTimestamp
    message.channel.send(`🏓 Pong! Latency is **" + ping + "** ms!`)
  }
	
//ascii command

  if (command === 'ascii') {

//error + data part

        if(!args[0]) return message.channel.send('**Usage**: !ascii (some text)');

        msg = args.join(" ");

        figlet.text(msg, function (err, data){
            if(err){
                console.log('**Unable** to create ascii texts!');
                console.dir(err);
            }

//the bot send generated ascii texts, you can use message.reply

          message.channel.send('```' + data + '```')
        });
       };
     });

//put your bot token here

client.login('token');

// © Jxestar#3751

