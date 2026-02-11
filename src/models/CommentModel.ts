import type { User } from "./UserModel";

export interface Comments {
    id: number;
    body: string;
    postId: number;
    likes: number;
    user: User;
}