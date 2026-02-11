import type { Reactions } from "./ReactionModel";

export interface PostModel {
    id: number;
    title: string;
    body: string;
    tags: string[];
    reactions: Reactions;
    views: number;
    userId: number;
}