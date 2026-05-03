import type IPost from "../../../model/IPost.ts";
import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import {getAll} from "../../../services/api.service.ts";

interface PostSliceType {
    posts: IPost[];
}

const initPostSliceState: PostSliceType = {posts: []};

const loadPosts = createAsyncThunk('loadPosts', async (_, thunkAPI) => {
    try {

        const posts = await getAll<IPost[]>('/posts');
        return thunkAPI.fulfillWithValue(posts);
    } catch (e) {
        return thunkAPI.rejectWithValue(e);
    }
})

export const postSlice = createSlice
({
    name: 'postStoreSlice',
    initialState: initPostSliceState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(loadPosts.fulfilled, (state, action: PayloadAction<IPost[]>) => {
            state.posts = action.payload
        }),
});


export const postsActions = {...postSlice.actions, loadPosts};