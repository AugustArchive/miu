const { get } = require('axios');
const RandomImageModel = require('./models/random-image');

module.exports = class WeebClient {
    constructor(k) {
        this.options = {
            headers: {
                'User-Agent': 'Maika/DiscordBot (https://github.com/auguwu/Maika)',
                'Authorization': `Wolke ${k}`
            }
        };
    }

    /**
     * Grabs an random image
     * 
     * @param {string} type The type of the image
     * @returns {Promise<RandomImageModel>}
     */
    getRandomImage(type) {
        return new Promise(async (resolve, reject) => {
            await get(`https://api.weeb.sh/images/random?type=${type}`, this.options)
            .then(res => resolve(new RandomImageModel(res.data)))
            .catch(ex => reject(ex));
        });
    }
};