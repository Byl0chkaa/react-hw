import {useEffect, useState} from "react";
import type {PostModel} from '../../models/PostModel.ts'
import {loadPosts} from "../../service/api.service.ts";
import {PostComponent} from "../PostComponent/PostComponent.tsx";
import './PostsComponent.css'

export const PostsComponent = () => {
    const [posts, setPosts] = useState<PostModel[]>([])
    useEffect(() => {
      loadPosts().then(response => setPosts(response))
    },[])
    return (
        <div className={'posts-cards'}>
            {
                posts.map(post => <PostComponent key={post.id} post={post}/>)
            }
        </div>
    );
};