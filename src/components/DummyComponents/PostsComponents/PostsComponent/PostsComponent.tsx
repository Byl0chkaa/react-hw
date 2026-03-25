import {useEffect, useState} from "react";
import {DummyUserService} from "../../../../services/api.service.ts";
import {PostComponent} from "../PostComponent/PostComponent.tsx";
import type DummyPostsModel from "../../../../models/posts/DummyPostsModel.ts";
import type {DummyResponsePostsModel} from "../../../../models/posts/DummyResponsePostsModel.ts";

export const PostsComponent = () => {
    const [posts, setPosts] = useState<DummyPostsModel[]>([]);

    useEffect(() => {
        DummyUserService.getPosts()
            .then((response: DummyResponsePostsModel) => {
                setPosts(response.posts);
            });
    }, []);
    return (
        <div>
            {
                posts.map((post: DummyPostsModel) => <PostComponent key={post.id} post={post}/>)
            }
        </div>
    );
};