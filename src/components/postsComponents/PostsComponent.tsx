import {useEffect} from "react";
import {postsActions} from "../../redux/slices/postSlice/postSlice.ts";
import type IPost from "../../model/IPost.ts";
import {PostComponent} from "./PostComponent.tsx";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";

export const PostsComponent = () => {
    const dispatch = useAppDispatch();
    const posts = useAppSelector((state) => state.postStoreSlice.posts);
    useEffect(() => {
        dispatch(postsActions.loadPosts())
    }, [])

    return (
        <>
            {
                posts.map((post:IPost) => <PostComponent key={post.id} post={post}/>)
            }
        </>
    );
};