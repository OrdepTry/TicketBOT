const {MessageActionRow, MessageSelectMenu} = require('discord.js')
module.exports = {
    name: 'ticket',
    usage: 'template',
    category: "mod",
    description: `Commande template.`,
    async execute(client, message, args) {
		message.delete()
        const row = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId('select')
					.setPlaceholder('Select category for support.')
					.addOptions([
						{
							label: '📞 Support for Doubts.',
							description: 'Have a question about the server? Click here.',
							value: 'general',
						},
						{
							label: '🛒 Purchasing Support.',
							description: 'Did something go wrong with your purchase? Click here.',
							value: 'shopping',
						},
					]),
			);

        message.channel.send({
            embeds: [{
                author: ({ name: 'Shop', iconURL: 'https://i.imgur.com/xNEiJXM.jpg', url: 'https://www.youtube.com/channel/UCNN9f5bO0-ef6g9UQN6vunQ' }),
                description: '*To get **SUPPORT** select the button below!*',
                footer: ({ text: 'Ordep', iconURL: 'https://i.imgur.com/5vx159O.jpg' })
            }],
            components: [row]
        })
    }
}
