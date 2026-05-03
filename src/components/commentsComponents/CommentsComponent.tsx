import {useEffect} from "react";
import type IComment from "../../model/IComment.ts";
import {CommentComponent} from "./CommentComponent.tsx";
import {commentsActions} from "../../redux/slices/commentSlice/commentSlice.ts";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";

export const CommentsComponent = () => {
    const dispatch = useAppDispatch();
    const comments = useAppSelector((state) => state.commentStoreSlice.comments);
    useEffect(() => {
        dispatch(commentsActions.loadComments())
    }, [])

    return (
        <>
            {
                comments.map((comment:IComment) => <CommentComponent key={comment.id} comment={comment}/>)
            }
        </>
    );
};