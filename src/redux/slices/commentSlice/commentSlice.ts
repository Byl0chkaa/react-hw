import type IComment from "../../../model/IComment.ts";
import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import {getAll} from "../../../services/api.service.ts";

interface CommentSliceType {
    comments: IComment[];
}

const initCommentSliceState: CommentSliceType = {comments: []};


const loadComments = createAsyncThunk('loadComments', async (_, thunkAPI) => {
    try {
        const comments = await getAll<IComment[]>('/comments');
        return thunkAPI.fulfillWithValue(comments);
    } catch (e) {
        return thunkAPI.rejectWithValue(e);
    }
})

export const commentSlice = createSlice({
    name: 'commentStoreSlice',
    initialState: initCommentSliceState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(loadComments.fulfilled, (state, action: PayloadAction<IComment[]>) => {
            state.comments = action.payload
        }),
});

export const commentsActions = {...commentSlice.actions, loadComments};
