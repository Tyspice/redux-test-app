// import { createStore, compose, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import rootReducer from "./reducers";
import { configureStore } from "@reduxjs/toolkit";
import reducer from "./features/posts/postsSlice";

// export const store = createStore(
// 	rootReducer,
// 	compose(
// 		applyMiddleware(thunk),
// 		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// 	)
// );


export const store = configureStore({
	reducer
})

