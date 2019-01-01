import { ADD_POST, DELETE_POST, FETCH_POST } from './types';
import axios from 'axios';

const apiURL = 'http://localhost:4000/posts';

//Sync action returns an object that contains action type and payload.
//Async action send a network request to the server 
//and wait for the promise to resolve. When the promise resolves, 
//it fires a sync action with the action type and payload.

//ASYNC ACTION
export const createPost = ({ title, startDate, firstName, body }) => {
    return (dispatch) => {
        return axios.post(`${apiURL}/add`, {
            title, 
            startDate, 
            firstName, 
            body    
        })
        .then(response => {
            dispatch(createPostSuccess(response.data))
            const postObject = JSON.stringify(response.data);
            console.log("createPost => " + postObject);
        })
        .catch(error => {
            throw(error);
        });
    };
};

//SYNC ACTION
export const createPostSuccess = (data) => {
    return {
        type: ADD_POST,
        payload: {
            _id: data._id,
            title: data.title,
            startDate: data.startDate,
            firstName: data.firstName,
            body: data.body
        }
    }
};

//ASYNC ACTION
export const deletePost = id => {
    return (dispatch) => {
        return axios.get(`${apiURL}/delete/${id}`)
            .then(response => {
                dispatch(deletePostSuccess(response.data))
                console.log("deletePost=> " + JSON.stringify(response.data))
        })
        .catch(error => {
            throw(error);
        });
    };
};

//SYNC ACTION
export const deletePostSuccess = id => {
  return {
    type: DELETE_POST,
    payload: {
      id
    }
  }
};

//ASYNC ACTION
export const fetchAllPosts = () => {
    return (dispatch) => {
        return axios.get(apiURL)
            .then(response => {
                dispatch(fetchPosts(response.data))
                console.log("fetchAllPosts => " + JSON.stringify(response.data));
        })
        .catch(error => {
            throw(error);
        });
    };
};

//SYNC ACTION
export const fetchPosts = (posts) => {
  return {
    type: FETCH_POST,
    posts
  }
};

