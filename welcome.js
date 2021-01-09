const fs = require('fs-extra')

module.exports = welcome = async (tobz, event) => {
    //console.log(event.action)
    const welkom = JSON.parse(fs.readFileSync('./lib/database/welcome.json'))
    const isWelkom = welkom.includes(event.chat)
    try {
        if (event.action == 'add' && isWelkom) {
            const gChat = await tobz.getChatById(event.chat)
            const pChat = await tobz.getContact(event.who)
            const { contact, groupMetadata, name } = gChat
            const pepe = await tobz.getProfilePicFromServer(event.who)
            const capt = `\n●─────🎍WELCOME🎍─────●

Sᴇʟᴀмᴀт ᴅᴀтᴀɴԍ *@${event.who.replace('@c.us', '')}* ᴅι ԍʀouᴘ *${name}* 🎉мᴇмʙᴇʀ ʙᴀʀu sιʟᴀнκᴀɴ ᴘᴇʀκᴇɴᴀʟκᴀɴ ᴅιʀι 📝

●─────────────────────●

⫷🌹🎋 INTRO 🎋🌹⫸

 • 🎋NAMA / NICK :
 • 🎋UMUR :
 • 🎋ASAL :

⫷🌹Sᴀʟᴀм κᴇɴᴀʟ sᴇмuᴀɴʏᴀ🌹⫸

●─────────────────────●\n`
            if (pepe == '' || pepe == undefined) {
                await tobz.sendFileFromUrl(event.chat, 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQcODjk7AcA4wb_9OLzoeAdpGwmkJqOYxEBA&usqp=CAU', 'profile.jpg', capt)
            } else {
                await tobz.sendFileFromUrl(event.chat, pepe, 'profile.jpg', capt)
            }

        }
    } catch (err) {
        console.log(err)
    }
}
