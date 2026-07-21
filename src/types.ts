export type Category = 'movies' | 'games' | 'books' | 'music';
export interface CollectionItem {
  id: string; category: Category; title: string; creator: string; genre: string; year: number;
  rating: number; status: string; favorite: boolean; image: string; notes: string; dateAdded: string;
  detail?: string; externalId?: string; backdrop?: string; overview?: string; releaseDate?: string;
  platforms?: string[]; publishers?: string[]; trackList?: string[]; communityRating?: number;
  hoursPlayed?: number; dateUpdated?: string; dateCompleted?: string; tags?: string[];
}

export interface MediaSearchResult { id:string; category:Category; title:string; subtitle:string; year?:number; image?:string; }
export interface MediaMetadata { externalId:string; category:Category; title:string; creator:string; genre:string; year:number; image:string; backdrop?:string; overview?:string; releaseDate?:string; detail?:string; platforms?:string[]; publishers?:string[]; trackList?:string[]; communityRating?:number; }
