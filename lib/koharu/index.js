const fetch = require('node-fetch');
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
        return new Promise((resolve, reject) => {
            fetch(`https://lolis.services/api/characters?type=${character}`, {
                method: 'GET',
                headers: { 'User-Agent': this.ua }
            })
            .then(resp => resp.json())
            .then(json => resolve(new CharacterModel(json)))
            .catch(error => reject(error.message));
        });
    }

    /**
     * Fetches the newest anime feeds
     * 
     * @returns {Promise<AnimeFeedModel>}
     */
    getFeed() {
        return new Promise((resolve, reject) => {
            fetch(`https://lolis.services/api/feed`, { method: 'GET', headers: { 'User-Agent': this.ua } })
            .then(r => r.json())
            .then(json => resolve(new AnimeFeedModel(json)))
            .catch(error => reject(error.message));
        });
    }

    /**
     * Grabs the newest/spiciest/hottest thread in a Subreddit
     * 
     * @param {ISubredditOptions} options The options to deconstruct
     * @returns {Promise<SubredditModel>}
     */
    getSubreddit(options) {
        return new Promise((resolve, reject) => {
            fetch(`https://lolis.services/api/subreddit?subreddit=${options.feed}&sort=${options.sortedBy}`, {
                method: 'GET',
                headers: { 'User-Agent': this.ua }
            })
            .then(r => r.json())
            .then(json => resolve(new SubredditModel(json)))
            .catch(error => reject(error.message));
        });
    }
};

/**
 * @typedef {Object} ISubredditOptions
 * @prop {string} feed The feed that you wanna see the spiciest thread!
 * @prop {"new" | "top" | "hot"} sortedBy If you wanna see the newest/spiciest/hottest thread
 */