import { ADD_POST, DELETE_POST, FETCH_POST } from '../actions/types';

//This file contains pure functions and does not relate 
//to backend service. Reducers must be pure functions.
//So, if the action type is matched with fired action, 
//then it will modify the store and change the current state.
export default function postReducer(state = [], action) {
    switch (action.type) {
        case ADD_POST:
            return [...state, action.payload];
        case DELETE_POST:
            return state.filter(post => post._id !== action.payload.id);
        case FETCH_POST:
            return action.posts;
        default:
            return state;
    }
}