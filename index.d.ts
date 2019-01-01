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
    function dateformat(date: any, mask: any, utc?: any, gmt?: any): any;

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
    }

    /**
     * Parses or gets the `val` string.
     * @param x The value to parse
     * @param options The options
     * @returns The number
     */
    function ms(x: string | number, options: any): number;

    /** the osu!client for accessing the osu!api. */
    export class OsuClient {}

    /** The wolke client for accessing the weeb.sh API */
    export class WeebClient {}

    // Models
    /** The anilist model */
    export interface AniListModel {}

    /** The character model for lolis.services */
    export interface CharacterModel {}

    /** The subreddit model for lolis.services */
    export interface SubredditModel {}

    /** The anime feed model for lolis.services */
    export interface AnimeFeedModel {}

    /** The osu!user model for the osu!api */
    export interface UserModel {}

    /** The osu!beatmap model for the osu!api */
    export interface BeatmapModel {}

    /** The random image model for weeb.sh */
    export interface RandomImageModel {}
}