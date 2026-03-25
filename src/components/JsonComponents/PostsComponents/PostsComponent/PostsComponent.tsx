import {useEffect, useState} from "react";
import type JsonUsersModel from "../../../../models/users/JsonUsersModel.ts";
import {JsonUserService} from "../../../../services/api.service.ts";
import type JsonPostsModel from "../../../../models/posts/JsonPostsModel.ts";
import {PostComponent} from "../PostComponent/PostComponent.tsx";

export const PostsComponent = () => {
    const [posts, setPosts] = useState<JsonPostsModel[]>([]);

    useEffect(() => {
        JsonUserService.getPosts()
            .then((posts) => {
                setPosts(posts);
            });

    }, []);
    return (
        <div>
            {
                posts.map((post: JsonUsersModel) => <PostComponent key={post.id} post={post}/>)
            }
        </div>
    );
};