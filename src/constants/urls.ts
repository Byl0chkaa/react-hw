const baseUrlJSON = 'https://jsonplaceholder.typicode.com';
const baseUrlDummy = 'https://dummyjson.com';

export const urls = {
    users: {
        allUsersJson: baseUrlJSON + '/users',
        allUsersDummy: baseUrlDummy + '/users',
    },
    posts: {
        allPostsJson: baseUrlJSON + '/posts',
        allPostsDummy: baseUrlDummy + '/posts',
    },
    comments: {
        allCommentsJson: baseUrlJSON + '/comments',
        allCommentsDummy: baseUrlDummy + '/comments',
    }
}