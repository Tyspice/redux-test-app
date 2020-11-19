import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

//this is the redux toolkit function for creating thunks and dealing with async code
export const fetchRemotePosts = createAsyncThunk("fetchRemotePosts", async () => {
	const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
	return response.data;
});

const postsSlice = createSlice({
	name: "posts",
	initialState: [],
	reducers: {
		createPost(state, action) {
            //this would normally create bugs in redux but the toolkit allows you to mutate state directly
			state.push(action.payload);
		},
		deletePost(state, action) {
            //this also mutates state but works
			state = state.filter((e) => e.id !== action.payload);
			return state;
		},
		deleteAllPosts() {
			return [];
		},
	},
	extraReducers: {
        // this is where you can write logic and error handeling for async functions.
        // createAsyncThunk will generate three different action types (pending, fulfilled and rejected).
        // Here I only wrote the logic for the fulfilled request but you can add pending and reject logic
        // for error handeling as well
		[fetchRemotePosts.fulfilled]: (state, action) => {
			let newPayload = action.payload.map((e) => {
				e.id = uuidv4();
				return e;
			});
			state.push(...newPayload);
		},
	},
});

export const { createPost, deletePost, deleteAllPosts } = postsSlice.actions;
export const postsReducer = postsSlice.reducer;