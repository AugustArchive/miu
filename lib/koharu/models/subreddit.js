module.exports = class SubredditModel {
    constructor(data) {
        this.title = data.data.title;
        this.url = data.data.url;
        this.image = data.data.image.url;
        this.description = data.data.description;
        this.createdAt = data.data.createdAt;
    }
};