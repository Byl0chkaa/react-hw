import type IUser from "../../model/IUser.ts";
import type IPost from "../../model/IPost.ts";
import type IComment from "../../model/IComment.ts";

interface ComplexComponentIterProps {
    user: IUser;
    posts: IPost[];
    comment: IComment[];
}

export const ComplexComponentIter = ({user, posts, comment}: ComplexComponentIterProps) => {
    return (
        <div>
            <h2>User: {user.name}</h2>

            <div>
                <h3>Posts:</h3>
                {posts.map((post) => {

                    const postComments = comment.filter(comment => comment.postId === post.id);

                    return (
                        <div key={post.id}>
                            <h3>Title: {post.title}</h3>
                            <p>Post: {post.body}</p>

                            <div>
                                <h3>Comments:</h3>
                                <ul>
                                    {postComments.map((postComment) => (
                                        <li key={postComment.id}>
                                            {postComment.email}: {postComment.body}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <hr/>
                        </div>
                    );
                })}
            </div>
            <hr/>
        </div>
    );
};