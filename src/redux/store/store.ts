import {configureStore} from "@reduxjs/toolkit";
import {commentSlice} from "../slices/commentSlice/commentSlice.ts";
import {postSlice} from "../slices/postSlice/postSlice.ts";
import {userSlice} from "../slices/userSlice/userSlice.ts";


export const store = configureStore({
    reducer: {
        userStoreSlice: userSlice.reducer,
        postStoreSlice: postSlice.reducer,
        commentStoreSlice: commentSlice.reducer
    },
});


