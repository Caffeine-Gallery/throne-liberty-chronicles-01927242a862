import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface BlogPost {
  'title' : string,
  'content' : string,
  'imageUrl' : string,
}
export interface Weapon { 'name' : string, 'description' : string }
export interface _SERVICE {
  'getBlogPosts' : ActorMethod<[], Array<BlogPost>>,
  'getWeapons' : ActorMethod<[], Array<Weapon>>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
