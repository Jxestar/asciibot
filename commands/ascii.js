const figlet = require('figlet');

module.exports = {
    name: "ascii",
    description: "Converts text to ascii",

    async run (client, message, args){
        if(!args[0]) return message.channel.send('Dude wtf r u doing just give me some text.');

        msg = args.join(" ");

        figlet.text(msg, function (err, data){
            if(err){
                console.log('o no kidz the command is broken :c');
                console.dir(err);
            }
            if(data.length > 2000) return message.channel.send('2000 characters... \n ```diff \n - Goodbye world, frick this im noob. \n ```')

            message.channel.send('```' + data + '```')
        })
    }
}