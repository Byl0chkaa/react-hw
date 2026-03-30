import {useEffect, useState} from "react";
import type IPost from "../../models/IPost.ts";
import type {IBaseResponseModel} from "../../models/IBaseResponseModel.ts";
import {getAll} from "../../services/general.api.service.ts";
import {PostComponent} from "./PostComponent.tsx";

export const PostsComponent = () => {
    const [posts, setPosts] = useState<IPost[]>([])
    useEffect(() => {
        getAll<IBaseResponseModel & {posts: IPost[]}>('/posts')
            .then(res => setPosts(res.posts))
    }, []);
    return (
        <div>
            {
                posts.map(post => <PostComponent key={post.id} post={post}/>)
            }
        </div>
    );
};