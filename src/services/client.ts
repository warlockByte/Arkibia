const cache = new Map<string,{expires:number;value:unknown}>();
export class ApiError extends Error { constructor(message:string, public kind:'config'|'network'|'rate-limit'|'provider'='provider'){super(message)} }
export async function cachedJson<T>(url:string, options?:RequestInit, ttl=300_000):Promise<T>{
  const hit=cache.get(url); if(hit&&hit.expires>Date.now()) return hit.value as T;
  let response:Response; try{response=await fetch(url,options)}catch{throw new ApiError('We could not reach this media provider. Check your connection and try again.','network')}
  if(response.status===429)throw new ApiError('This provider is receiving too many requests. Please wait a moment and try again.','rate-limit');
  if(!response.ok)throw new ApiError(`The media provider returned an error (${response.status}).`);
  const value=await response.json() as T; cache.set(url,{expires:Date.now()+ttl,value}); return value;
}
export const yearOf=(date?:string)=>date?Number(date.slice(0,4))||0:0;
export const stripHtml=(html?:string)=>html?.replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim()||'';
