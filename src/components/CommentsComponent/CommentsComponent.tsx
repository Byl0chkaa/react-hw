import {useEffect, useState} from "react";
import type {CommentsModel} from "../../models/CommentsModel.ts";
import {loadComments} from "../../service/api.service.ts";
import {CommentComponent} from "../CommentComponent/CommentComponent.tsx";
import './CommentsComponent.css'

export const CommentsComponent = () => {
    const [comment, setComment] = useState<CommentsModel[]>([])
    useEffect(() => {
        loadComments().then(result => setComment(result))
    },[])
    return (
        <div className="comments-cards">
            {comment.map((comment) => (<CommentComponent key={comment.id} comment={comment}/>))}
        </div>
    );
};