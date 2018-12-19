const { AniList } = require('../lib');
const client = new AniList('Maika/DiscordBot (https://github.com/MaikaBot/Maika)');

client
    .getAnime('Kiniro Mosaic')
    .then(_ => console.log('Success?'))
    .catch(console.error);