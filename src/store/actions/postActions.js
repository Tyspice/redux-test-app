import { NEW_POST, DELETE_POST, GET_POST, DELETE_ALL } from "../actionTypes";
import axios from 'axios';

export const newPost = payload => {
    return {
        type: NEW_POST,
        payload
    }
}

export const deletePost = payload => {
    return {
        type: DELETE_POST,
        payload
    }
}

export const deleteAll = () => {
    return {
        type: DELETE_ALL
    }
}

export const altGetPostAsync = () => async dispatch => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    dispatch({
        type: GET_POST,
        payload: response.data
    });
}