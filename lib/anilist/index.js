const { post } = require('axios');
const Model = require('./model');

module.exports = class AniListClient {
    /**
     * Construct the AniList client
     * 
     * @param {string} ua The user agent
     */
    constructor(ua) {
        this.ua = ua;
        this.queries = {
            ANIME: `
                query($id: Int, $page: Int, $search: String) {
                    Page(page: $page) {
                        pageInfo {
                            total
                        }
                        media(id: $id, search: $search, type: ANIME) {
                            id,
                            title {
                                english
                                romaji
                            }
                            description
                            genres
                            episodes
                            chapters
                            coverImage {
                                large
                            }
                            averageScore
                            characters(role: MAIN) {
                                edges {
                                    node {
                                        id
                                        name {
                                            first
                                            last
                                        }
                                    }
                                    role
                                }
                            }
                        }
                    }
                }
            `,
            MANGO: `
                query($id: Int, $page: Int, $search: String) {
                    Page(page: $page) {
                        pageInfo {
                            total
                        }
                        media(id: $id, search: $search, type: ANIME) {
                            id,
                            title {
                                english
                                romaji
                            }
                            description
                            genres
                            episodes
                            chapters
                            coverImage {
                                large
                            }
                            averageScore
                            characters(role: MAIN) {
                                edges {
                                    node {
                                        id
                                        name {
                                            first
                                            last
                                        }
                                    }
                                    role
                                }
                            }
                        }
                    }
                }
        `
        };
    }

    /**
     * Grabs any anime from the AniList api.
     * 
     * @param {string} query The query
     * @returns {Promise<Model>}
     */
    getAnime(query) {
        return new Promise(async (resolve, reject) => {
            await post('https://graphql.anilist.co', {
                data: JSON.stringify({
                    query: this.queries.ANIME,
                    variables: {
                        search: query
                    }
                }),
                headers: {
                    'Accept': "application/json",
                    'Content-Type': "application/json",
                    'User-Agent': "application/json",
                    'Raise-Rate-Limit': true
                }
            }).then(res => resolve(res.data.data.Page.media[0]))
            .catch(error => reject(error));
        });
    }

    /**
     * Grabs any mango from the AniList api.
     * 
     * @param {string} query The query to search
     * @returns {Promise<Model>}
     */
    getManga(query) {
        return new Promise(async (resolve, reject) => {
            await post('https://graphql.anilist.co', {
                data: JSON.stringify({
                    query: this.queries.MANGO,
                    variables: {
                        search: query
                    }
                }),
                headers: {
                    'Accept': "application/json",
                    'Content-Type': "application/json",
                    'User-Agent': "application/json",
                    'Raise-Rate-Limit': true
                }
            }).then(res => resolve(res.data.data.Page.media[0]))
            .catch(error => reject(error));
        });
    }
};