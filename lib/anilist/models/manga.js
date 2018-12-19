module.exports = class MangoModel {
    constructor(data) {
        this.id = data.id;
        this.title = (data.title.english !== data.title.romaji ? `${data.title.romaji} [${data.title.english}]` : data.title.romaji);
        this.description = data.description
            .replace(/<br>/g, '')
            .replace(/\n|\\n/g, ' ')
            .replace(/&mdash;g/, '')
            .replace(/&#039;/g, '')
            .split('.')
            .join('.\n');
        this.genres = data.genres;
        this.images = {
            large: data.coverImage.large
        };
        this.score = `${data.averageScore}/100`;
        this.characters = data.characters.edges.map(
            s => `• [**${s.node.name.first}${s.node.name.last ? ` ${s.node.name.last}` : ''}**](https://anilist.co/character/${s.node.id})`
        ).join('\n');
        this.episodes = (data.episodes ? data.episodes : data.chapters);
    }

    /**
     * Turns the data into a Discord embed
     */
    toEmbed() {
        return {
            title: `${this.title} (${this.id})`,
            description: this.description,
            fields: [{
                name: '❯ Genres',
                value: this.genres.join(', '),
                inline: true
            },
            {
                name: '❯ Episode Count',
                value: this.episodes,
                inline: true
            },
            {
                name: '❯ Characters',
                value: this.characters,
                inline: true
            }],
            footer: {
                text: `Score: ${this.score}`
            },
            color: 0xE67EDE
        };
    }
};