import type DummyPostsModel from "./DummyPostsModel.ts";

export interface DummyResponsePostsModel {
    total: number;
    limit: number;
    skip: number;
    posts: DummyPostsModel[];
}