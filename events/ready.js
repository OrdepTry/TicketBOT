module.exports = {
    name: 'ready',
    once: true,

    async execute(client) {
        console.log(`Bot Online - Developer -> Ordep ${client.user.username}`)

        var compteurStatus = 1
        setInterval(async () => {
            status =  [`Ordep - TicketBOT`]
            compteurStatus = (compteurStatus + 1) % (status.length);
            client.user.setPresence({
                activities: [{
                    name: `${status[compteurStatus]}`,
                    type: "STREAMING",
                    url: "https://www.twitch.tv/ordep"
                  }],
                  status: "online"})
        }, 5000);
    }
}
