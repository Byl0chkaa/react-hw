import {useEffect, useState} from "react";
import type {PostModel} from "../../models/PostModel.ts";
import {loadPosts} from "../../service/api.service.ts";
import {PostComponent} from "../PostComponent/PostComponent.tsx";
import './PostsComponent.css'

export const PostsComponent = () => {
    const [post, setPost] = useState<PostModel[]>([])
    useEffect(() => {
        loadPosts().then(result => setPost(result))
    }, []);
    return (
        <div className={'posts-cards'}>
            {
                post.map((post ) => (<PostComponent key={post.id} post={post}/>))
            }
        </div>
    );
};