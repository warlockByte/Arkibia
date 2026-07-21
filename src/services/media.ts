import type { Category,MediaMetadata,MediaSearchResult } from '../types';import { searchMovies,getMovie } from './tmdb';import { searchGames,getGame } from './rawg';import { searchBooks,getBook } from './openLibrary';import { searchMusic,getMusic } from './musicBrainz';
export const searchMedia=(c:Category,q:string):Promise<MediaSearchResult[]>=>({movies:searchMovies,games:searchGames,books:searchBooks,music:searchMusic}[c](q));
export const getMedia=(c:Category,id:string):Promise<MediaMetadata>=>({movies:getMovie,games:getGame,books:getBook,music:getMusic}[c](id));
