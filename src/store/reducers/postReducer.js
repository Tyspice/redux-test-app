import { DELETE_POST, GET_POST, NEW_POST, DELETE_ALL } from "../actionTypes";
import { v4 as uuidv4 } from "uuid";

const postReducer = (state = [], action) => {
	switch (action.type) {
		case NEW_POST:
			return [...state, action.payload];
		case DELETE_POST:
			let newState = state.filter((e) => e.id !== action.payload);
			return newState;
		case DELETE_ALL:
			return [];
		case GET_POST:
			let newPayload = action.payload.map((e) => {
				e.id = uuidv4();
				return e;
			});
			return [...state, ...newPayload];
		default:
			return state;
	}
};

export default postReducer;
