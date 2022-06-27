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

    const channelCreate = client.channels.cache.get('990644064246452287');
    channelCreate.send({ embeds: [embedChannel] });
});


client.on("roleCreate", async (role) => {
    const embedRole = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setDescription(`el rol ${role} a sido creado`)
	.setTimestamp()
	.setFooter({ text: 'fecha de creación' });

    const roleCreate = client.channels.cache.get('990644064246452287');
    roleCreate.send({ embeds: [embedRole] });
});


client.on("guildMemberAdd", async (member) => {
    if(member.guild.id === "990577877491802132"){
        const Canvas = require("canvas")
        const canvas = Canvas.createCanvas(1018,468)
        const ctx = canvas.getContext("2d")

        const background= await Canvas.loadImage("https://i.imgur.com/Phexq4K.jpeg");
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
        client.channels.cache.get("990593353496285204").send({ files: [attachment] })
    }
    member.roles.add('990721613496475658');
});



client.on("guildMemberRemove", async (member) => {
    if(member.guild.id === "990577877491802132"){
        client.channels.cache.get("990593392041926656").send(`${member.user} abandono el server`)
    }
});





client.on("messageCreate", (message) => {
    if(message.content.startsWith('put')) {
        message.reply(`${message.author} no se admiten malas palabras si sigues con este comportamiento seras sancionado`);
    } else if(message.content.startsWith('Put')) {
        message.reply(`${message.author} no se admiten malas palabras si sigues con este comportamiento seras sancionado`);
    } else if(message.content.startsWith('Sex')) {
        message.reply(`${message.author} no se admiten malas palabras si sigues con este comportamiento seras sancionado`);
    } else if(message.content.startsWith('sex')) {
        message.reply(`${message.author} no se admiten malas palabras si sigues con este comportamiento seras sancionado`);
    } else if(message.content.startsWith('drog')) {
        message.reply(`${message.author} no se admiten malas palabras si sigues con este comportamiento seras sancionado`);
    } else if(message.content.startsWith('gilipo')) {
        message.reply(`${message.author} no se admiten malas palabras si sigues con este comportamiento seras sancionado`);
    } else if(message.content.startsWith('Gilipo')) {
        message.reply(`${message.author} no se admiten malas palabras si sigues con este comportamiento seras sancionado`);
    } else if(message.content.startsWith('pen')) {
        message.reply(`${message.author} no se admiten malas palabras si sigues con este comportamiento seras sancionado`);
    } else if(message.content.startsWith('Pen')) {
        message.reply(`${message.author} no se admiten malas palabras si sigues con este comportamiento seras sancionado`);
    } 
    if(message.channel.id === '990593056933830757') {
        if(message.content === 'Acepto') {
            message.member.roles.add('990579839637520414');
            message.member.roles.add('990617410707021834');
            message.member.roles.remove('990721613496475658');
            message.author.send('gracias por verificarte, disfruta del servidor!');
            message.delete();
        } else {
            message.author.send('Tienes problemas? habla con un admin.');
            message.delete();
        }
    }
});


client.login('OTkwNTkzMzUxMDU5MzgyMjcy.Go47J4.I6ULL3r5L6RBwqJHrEX2fk3OcV-uh7KhePjoq8');