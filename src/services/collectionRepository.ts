import type { CollectionItem } from '../types';
export interface CollectionRepository { list():Promise<CollectionItem[]>; save(items:CollectionItem[]):Promise<void> }
export class LocalCollectionRepository implements CollectionRepository {constructor(private key='mycollection-store'){}async list(){const raw=localStorage.getItem(this.key);return raw?JSON.parse(raw).state?.items||[]:[]}async save(items:CollectionItem[]){const raw=localStorage.getItem(this.key);const doc=raw?JSON.parse(raw):{state:{},version:0};doc.state.items=items;localStorage.setItem(this.key,JSON.stringify(doc))}}
// A Supabase/Firebase repository can implement this interface without changing the UI.
