import {useEffect} from "react";
import {userActions} from "../../redux/slices/userSlice/userSlice.ts";
import {postsActions} from "../../redux/slices/postSlice/postSlice.ts";
import {commentsActions} from "../../redux/slices/commentSlice/commentSlice.ts";
import {ComplexComponentIter} from "./ComplexComponentIter.tsx";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";

export const ComplexComponent = () => {
    const dispatch = useAppDispatch();
    const users = useAppSelector((state) => state.userStoreSlice.users);
    const posts = useAppSelector((state) => state.postStoreSlice.posts);
    const comments = useAppSelector((state) => state.commentStoreSlice.comments);

    useEffect(() => {
        if (!users.length) {
            dispatch(userActions.loadUsers())
        }
        if (!posts.length) {
            dispatch(postsActions.loadPosts())
        }
        if (!comments.length) {
            dispatch(commentsActions.loadComments())
        }
    }, []);
    return (
        <div>
            {users.map((user) => {
                const userPosts = posts.filter(post => post.userId === user.id);

                return (
                    <ComplexComponentIter key={user.id} user={user} posts={userPosts} comment={comments}/>
                );
            })}
        </div>
    );
};