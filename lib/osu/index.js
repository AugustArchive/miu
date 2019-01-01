const { get } = require('axios');
const UserModel = require('./models/user');
const BeatmapModel = require('./models/beatmap');

module.exports = class OsuClient {
    constructor(key) {
        this.key = key;
        this.options = {
            headers: {
                'User-Agent': 'Maika/DiscordBot (https://github.com/auguwu/Maika)'
            }
        };
    }

    /**
     * Grabs a osu!user's profile
     * 
     * @param {string} user The user
     * @param {0 | 1 | 2 | 3} mode The mode number
     * @returns {Promise<UserModel>}
     */
    getUser(user, mode) {
        return new Promise(async (resolve, reject) => {
            await get(`https://osu.ppy.sh/api/get_user?k=${this.key}&u=${user}&m=${mode}`, this.options)
            .then(res => resolve(new UserModel(res.data[0])))
            .catch(ex => reject(ex));
        });
    }

    /**
     * Grabs an osu!beatmap
     * 
     * @param {string} id The beatmap ID
     * @returns {Promise<BeatmapModel>}
     */
    getBeatmap(id) {
        return new Promise(async (resolve, reject) => {
            await get(`https://osu.ppy.sh/api/get_beatmaps?k=${this.key}&b=${id}`, this.options)
            .then(res => resolve(new BeatmapModel(res.data[0])))
            .catch(ex => reject(ex));
        });
    }
};