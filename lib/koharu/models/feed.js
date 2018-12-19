module.exports = class AnimeFeedModel {
    constructor(data) {
        this.name = data.results[0].name[0];
        this.category = data.results[0].category[0];
        this.publishedAt = data.results[0].publishedAt[0];
    }
};