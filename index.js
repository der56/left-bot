const { loadImage } = require('canvas');
const Discord = require('discord.js');
const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "DIRECT_MESSAGE_REACTIONS",
        "DIRECT_MESSAGES",
        "DIRECT_MESSAGE_TYPING",
        "GUILD_BANS",
        "GUILD_MESSAGE_REACTIONS",
        "GUILD_EMOJIS_AND_STICKERS",
        "GUILD_INTEGRATIONS",
        "GUILD_INVITES",
        "GUILD_MEMBERS"
    ]
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


client.on("channelCreate", async (channel) => {
    const embedChannel = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setDescription(`el canal ${channel} a sido creado`)
	.setTimestamp()
	.setFooter({ text: 'fecha de creación' });

    const channelCreate = client.channels.cache.get(process.env.CHANNEL_CREATE);
    channelCreate.send({ embeds: [embedChannel] });
});


client.on("roleCreate", async (role) => {
    const embedRole = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setDescription(`el rol ${role} a sido creado`)
	.setTimestamp()
	.setFooter({ text: 'fecha de creación' });

    const roleCreate = client.channels.cache.get(process.env.ROLE_CREATE);
    roleCreate.send({ embeds: [embedRole] });
});


client.on("guildMemberAdd", async (member) => {
    if(member.guild.id === process.env.SERVER_ID){
        const Canvas = require("canvas")
        const canvas = Canvas.createCanvas(1018,468)
        const ctx = canvas.getContext("2d")

        const background= await Canvas.loadImage("https://www.ladymakeup.com/js/lightbox/img/demopage/image-3.jpg");
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height)

        ctx.fillStyle = "#ffffff"
        ctx.font = "100px Arial"

        ctx.fillText("Bienvenido", 460, 260)
        ctx.fillText(`${member.user.username}`, 460, 340)

        ctx.beginPath()
        ctx.arc(247, 238, 175, 0, Math.PI * 2, true)
        ctx.closePath()
        ctx.clip()

        const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ size: 1024, dynamic: true }))
        ctx.drawImage(avatar, 72, 63, 350, 350)

        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), "bienbenida.png")
        client.channels.cache.get(pocess.env.WELCOME_CHANNEL).send({ files: [attachment] })
    }
    member.roles.add(procces.env.VERIFICATE_ROLE);
});



client.on("guildMemberRemove", async (member) => {
    if(member.guild.id === process.env.SERVER_ID){
        client.channels.cache.get(process.env.BYE_CHANNEL).send(`${member.user} abandono el server`)
    }
});





client.on("messageCreate", (message) => {
    if(message.channel.id === process.env.VERIFICATE_CHANNEL) {
        if(message.content === 'Acepto') {
            message.member.roles.add(process.env.VERIFICATE_ROLE);
            message.author.send('gracias por verificarte, disfruta del servidor!');
            message.delete();
        } else {
            message.author.send('Tienes problemas? habla con un admin.');
            message.delete();
        }
    }
});


client.login(procces.env.TOKEN);
