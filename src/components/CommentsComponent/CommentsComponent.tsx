import {useEffect, useState} from "react";
import type {Comments} from "../../models/CommentModel.ts";
import {loadComments} from "../../service/api.service.ts";
import {CommentComponent} from "../CommentComponent/CommentComponent.tsx";
import './CommentsComponent.css'

export const CommentsComponent = () => {
    const [comment, setComment] = useState<Comments[]>([])
    useEffect(() => {
        loadComments().then(res => setComment(res))
    }, []);
    return (
        <div className={'comments-cards'}>
            {
                comment.map((comment => (<CommentComponent key={comment.id} comment={comment}/>)))
            }
        </div>
    );
};