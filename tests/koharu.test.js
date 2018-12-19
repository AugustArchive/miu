const { Koharu } = require('../lib');
const client = new Koharu('Maika/DiscordBot (https://github.com/MaikaBot/Miu)');

client
    .getCharacter('maika')
    .then(console.log)
    .catch(console.error);

client
    .getFeed()
    .then(console.log)
    .catch(console.error);

client
    .getSubreddit({
        feed: 'osugame',
        sortedBy: 'new'
    })
    .then(console.log)
    .catch(console.error);