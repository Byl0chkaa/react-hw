import type IPost from "../../model/IPost.ts";

interface PostComponentProps {
    post: IPost;
}

export const PostComponent = ({post}: PostComponentProps) => {
    return (
        <div>
            <p>Title of post: {post.title}</p>
            <p>Post: {post.body}</p>
            <hr/>
        </div>
    );
};