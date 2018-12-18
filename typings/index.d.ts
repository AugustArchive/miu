declare module '@maika.xyz/miu'
{
    // lib/anilist
    export class AniListClient {}
    export interface AniListAnime {}
    export interface AniListManga {}
    export interface AniListCharacter {}
    
    // lib/dateformat
    export function dateformat(date, mask, utc, gmt): any;

    // lib/humanize
    export function humanize(ms: number): string;

    // lib/osu
    export class OsuClient {}
    export interface OsuBeatmap {}
    export interface OsuUser {}
    export interface OsuRecent {}
    
    // lib/weeb.sh
    export class WeebClient {}
    export interface RandomImage {}
}