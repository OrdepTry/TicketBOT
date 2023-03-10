const {Permissions, MessageEmbed, MessageActionRow, MessageSelectMenu }=require('discord.js')
module.exports = {
    name: 'interactionCreate',
    async execute(client, interaction) {
        if (!interaction.isSelectMenu()) return;
        
	const row = new MessageActionRow()
                .addComponents(
                    new MessageSelectMenu()
                    .setCustomId('del')
                    .setPlaceholder('Delete Ticket? Click here')
					.addOptions([
						{
							label: '🗑️ Delete Ticket',
							description: 'Delete your Ticket by choosing this option.',
							value: 'delete',
						}
					])
                );
                
                
                
                
        let catégorie = "ID"
        let roleStaff = interaction.guild.roles.cache.get('Staff Role ID')

        let DejaUnChannel = interaction.guild.channels.cache.find(c => c.topic == interaction.user.id)
        
        if(interaction.customId === "del") {
            if (interaction.values[0] == "delete") {
                const channel = interaction.channel
                channel.delete();
            }
        }

        if (interaction.customId == "select") {
            if (DejaUnChannel) return interaction.reply({content: '❌ You already have an open ticket on the server option..', ephemeral: true})
            if (interaction.values[0] == "partnership") {
                interaction.guild.channels.create(`ticket from ${interaction.user.username}`, {
                    type: 'GUILD_TEXT',
                    topic: `${interaction.user.id}`,
                    parent: `${catégorie}`,
                    permissionOverwrites: [
                        {   
                            id: interaction.guild.id,
                            deny: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: interaction.user.id,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: roleStaff,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        }
                    ]
                }).then((c)=>{
                    const partenariat = new MessageEmbed()
                    .setTitle('Ticket to make a recruitment application')
                    .setDescription('Please give details of your application so that\'a server moderator will come to support.')
                    .setFooter('DevFr Support')
                    c.send({embeds: [partenariat], content: `${roleStaff} | ${interaction.user}`, components: [row]})
                    interaction.reply({content: `✔️ Your ticket has been successfully opened for support. <#${c.id}>`, ephemeral: true})
                })
                
            } else if (interaction.values[0] == "geral") {
                interaction.guild.channels.create(`ticket from ${interaction.user.username}`, {
                    type: 'GUILD_TEXT',
                    topic: `${interaction.user.id}`,
                    parent: `${catégorie}`,
                    permissionOverwrites: [
                        {   
                            id: interaction.guild.id,
                            deny: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: interaction.user.id,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: roleStaff,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        }
                    ]
                }).then((c)=>{
                    const plainte = new MessageEmbed()
                    .setTitle('📞 Ticket for General Support successfully created!')
                    .setDescription('Send your doubts in this chat..\'As soon as our moderators are available they will respond.')
                    .setFooter('Accounts Leaks')
                    c.send({embeds: [plainte], content: `${roleStaff} | ${interaction.user}`, components: [row]})
                    interaction.reply({content: `✔️ Your ticket has been opened successfully. <#${c.id}>`, ephemeral: true})
                })
            } else if (interaction.values[0] == "shopping") {
                interaction.guild.channels.create(`ticket from ${interaction.user.username}`, {
                    type: 'GUILD_TEXT',
                    topic: `${interaction.user.id}`,
                    parent: `${catégorie}`,
                    permissionOverwrites: [
                        {   
                            id: interaction.guild.id,
                            deny: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: interaction.user.id,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: roleStaff,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        }
                    ]
                }).then((c)=>{
                    const embed = new MessageEmbed()
                    .setTitle('🛒 Ticket for support Purchases successfully created!')
                    .setDescription('Send here what went wrong with your purchase.\' As soon as our moderators are available they will respond.')
                    .setFooter('Ordep')
                    c.send({embeds: [embed], content: `${roleStaff} | ${interaction.user}`, components: [row]})
                    interaction.reply({content: `✔️ Your ticket has been opened successfully. <#${c.id}>`, ephemeral: true})
                })
                
            
                
            
            }
        }
    }
}
