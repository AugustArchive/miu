// Typescript Typings for component: @maika.xyz/miu
declare module '@maika.xyz/miu' {
    /** The version of the component: Miu */
    export const version: string;

    /** The anilist API client */
    export class AniListClient {
        constructor(ua: string);

        /**
         * Queries anime from the AniList api
         * @param query The query to search
         * @returns The promised anilist model
         */
        public getAnime(query: string): Promise<AniListModel>;

        /**
         * Queries mango from the AniList api
         * @param query The query to search
         * @returns The promised anilist model
         */
        public getManga(query: string): Promise<AniListModel>;
    }

    /**
     * Format an epoch to a date string
     * @param date The date to convert to
     * @param mask The mask
     * @param utc UTC conversion
     * @param gmt GMT conversion
     */
    function dateformat(date: string | number | Date, mask: string, utc?: boolean, gmt?: boolean): string;

    /** Entities module; maybe use `require('@maika.xyz/miu/entities')`? */
    export namespace entities {
        function decode(data: any, level: number): any;
        function decodeStrict(data: any, level: number): any;
        function encode(data: any, level: number): any;
    }

    /** valid-url module; use `require('@maika.xyz/miu/validurl')`? */
    export namespace validurl {
        function isUri(value: any): boolean;
        function isHttpUri(value: any, allowHttps: boolean): boolean;
        function isHttpsUri(value: any): boolean;
        function isWebUri(value: any): boolean;
    }

    /**
     * Convert numbers to a uptime string
     * @param ms The number of milliseconds
     * @returns The string converted
     */
    function humanize(ms: number): string;

    /** The koharu client for lolis.services */
    export class KoharuClient {
        constructor(ua: string);

        public getCharacter(character: "akari" | "hinako" | "noel" | "ren" | "sagiri" | "maika" | "mitsuha"): Promise<CharacterModel>;
        public getSubreddit(subreddit: string, sortedBy: 'new' | 'top' | 'hot'): Promise<SubredditModel>;
        public getFeed(): Promise<AnimeFeedModel>;
    }

    /**
     * Parses or gets the `val` string.
     * @param x The value to parse
     * @param options The options
     * @returns The number
     */
    function ms(x: string | number, options: any): number;

    /** the osu!client for accessing the osu!api. */
    export class OsuClient {
        constructor(key: string);

        public getUser(user: string, mode: 0 | 1 | 2 | 3): Promise<UserModel>;
        public getBeatmap(id: string): Promise<BeatmapModel>;
    }

    /** The wolke client for accessing the weeb.sh API */
    export class WeebClient {
        constructor(key: string);

        public getRandomImage(type: string): Promise<RandomImageModel>;
    }

    // Models
    /** The anilist model */
    export interface AniListModel {
        id: string;
        title: string;
        description: string;
        genres: string[];
        images: {
            large: string;
        };
        score: string;
        characters: string;
        episodes: string;
    }

    /** The character model for lolis.services */
    export interface CharacterModel {
        url: string;
        anime: string;
    }

    /** The subreddit model for lolis.services */
    export interface SubredditModel {
        title: string;
        url: string;
        image: string;
        description: string;
        createdAt: string;
    }

    /** The anime feed model for lolis.services */
    export interface AnimeFeedModel {
        name: string;
        genre: string;
        publishedAt: string;
    }

    /** The osu!user model for the osu!api */
    export interface UserModel {
        id: string;
        username: string;
        joinedAt: string;
        counts: {
            300: number;
            100: number;
            50: number;
        };
        playcount: string;
        scores: {
            ranked: string;
            total: string;
        }
        pp: number;
        rank: string;
        level: number;
        accuracy: number;
        count_ranks: {
            SSH: number;
            SS: number;
            SH: number;
            S: number;
            A: number;
        };
        country: string;
        countryRank: number;
    }

    /** The osu!beatmap model for the osu!api */
    export interface BeatmapModel {
        id: string;
        state: string;
        cs: number;
        od: number;
        ar: number;
        hd: number;
        mode: string;
        artist: string;
        title: string;
        creator: string;
        bpm: number;
        source: string;
        language: string;
        favourites: number;
        plays: {
            passed: number;
            played: number;
        }
        maxCombo: number;
        difficulty: number;
    }

    /** The random image model for weeb.sh */
    export interface RandomImageModel {
        id: string;
        type: string;
        nsfw: boolean;
        hidden: boolean;
        url: string;
        tags: string;
    }
}