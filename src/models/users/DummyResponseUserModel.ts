import type DummyUsersModel from "./DummyUsersModel.ts";

export interface DummyResponseUserModel {
    total: number;
    limit: number;
     skip: number;
     users: DummyUsersModel[];
}