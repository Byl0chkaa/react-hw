import type DummyCommentsModel from "./DummyCommentsModel.ts";

export interface DummyResponseCommentsModel {
    total: number;
    limit: number;
    skip: number;
    comments: DummyCommentsModel[];
}