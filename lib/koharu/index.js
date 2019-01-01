const { get } = require('axios');
const CharacterModel = require('./models/character');
const AnimeFeedModel = require('./models/feed');
const SubredditModel = require('./models/subreddit');

module.exports = class KoharuClient {
    /**
     * Construct the Koharu client
     * 
     * @param {string} ua The user agent
     */
    constructor(ua) {
        this.ua = ua;
    }

    /**
     * Grabs an random character
     * 
     * @param {"akari" | "hinako" | "noel" | "ren" | "sagiri" | "maika" | "mitsuha"} character The character
     * @returns {Promise<CharacterModel>}
     */
    getCharacter(character) {
        return new Promise(async (resolve, reject) => {
            await get(`https://lolis.services/api/characters?type=${character}`, {
                headers: { 'User-Agent': this.ua }
            })
            .then(res => resolve(new CharacterModel(res.data)))
            .catch(ex => reject(ex));
        });
    }

    /**
     * Fetches the newest anime feeds
     * 
     * @returns {Promise<AnimeFeedModel>}
     */
    getFeed() {
        return new Promise(async (resolve, reject) => {
            await get('https://lolis.services/api/feed', { headers: { 'User-Agent': this.ua } })
            .then(res => resolve(new AnimeFeedModel(res.data)))
            .catch(ex => reject(ex));
        });
    }

    /**
     * Grabs the newest/spiciest/hottest thread in a Subreddit
     * 
     * @param {ISubredditOptions} options The options to deconstruct
     * @returns {Promise<SubredditModel>}
     */
    getSubreddit(options) {
        return new Promise(async (resolve, reject) => {
            await get(`https://lolis.services/api/subreddit?subreddit=${options.feed}&sort=${options.sortedBy}`, {
                headers: { 'User-Agent': this.ua }
            })
            .then(res => resolve(new SubredditModel(res.data)))
            .catch(ex => reject(ex));
        });
    }
};

/**
 * @typedef {Object} ISubredditOptions
 * @prop {string} feed The feed that you wanna see the spiciest thread!
 * @prop {"new" | "top" | "hot"} sortedBy If you wanna see the newest/spiciest/hottest thread
 */