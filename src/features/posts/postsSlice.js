import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

export const fetchRemotePosts = createAsyncThunk("fetchRemotePosts", async () => {
	const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
	return response.data;
});

const postsSlice = createSlice({
	name: "posts",
	initialState: {posts: []},
	reducers: {
		createPost(state, action) {
            state.posts.push(action.payload)
        },
		deletePost(state, action) {
            state.posts = state.posts.filter((e) => e.id !== action.payload);
        },
		deleteAllPosts(state, action) {
            state.posts = []
        },
	},
	extraReducers: {
		[fetchRemotePosts.fulfilled]: (state, action) => {
			let newPayload = action.payload.map((e) => {
				e.id = uuidv4();
				return e;
            });
            state.posts.push(...newPayload)
		}
	}
});

console.log(postsSlice);

const { actions, reducer } = postsSlice;

export const { createPost, deletePost, deleteAllPosts } = actions;

export default reducer;

// const postReducer = (state = [], action) => {
// 	switch (action.type) {
// 		case NEW_POST:
// 			return [...state, action.payload];
// 		case DELETE_POST:
// 			let newState = state.filter((e) => e.id !== action.payload);
// 			return newState;
// 		case DELETE_ALL:
// 			return [];
// 		case GET_POST:
// 			let newPayload = action.payload.map((e) => {
// 				e.id = uuidv4();
// 				return e;
// 			});
// 			return [...state, ...newPayload];
// 		default:
// 			return state;
// 	}
// };
