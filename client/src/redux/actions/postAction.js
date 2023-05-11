import axios from 'axios';
import { toast } from 'react-toastify';


export const getPostAction = () => async (dispatch) => {
    try {
        const { data } = await axios.get('http://localhost:4000/getPosts');
        dispatch({ type: 'GET_POSTS', payload: data })
        window.location = '/'
    }
    catch (error) {
        toast(error.response.data.msg, {
            position: "top-right",
            autoClose: 3000,
        });
    }
};
export const createPostAction = (postData) => async (dispatch) => {
    try {
        const { data } = await axios.post('http://localhost:4000/createPost', postData);
        dispatch({ type: 'CREATE_POST', payload: data })
        window.location = '/'
    }
    catch (error) {
        toast(error.response.data.msg, {
            position: "top-right",
            autoClose: 3000,
        });
    }
};
export const updatePostAction = (id, postData) => async (dispatch) => {
    try {
        const { data } = await axios.patch(`http://localhost:4000/updatePost/${id}`, postData);
        dispatch({ type: 'UPDATE_POST', payload: data })
        window.location = '/'
    }
    catch (error) {
        toast(error.response.data.msg, {
            position: "top-right",
            autoClose: 3000,
        });
    }
};
export const deletePostAction = (id) => async (dispatch) => {
    try {
        await axios.delete(`http://localhost:4000/deletePost/${id}`);
        dispatch({ type: 'DELETE_POST', payload: id })
        window.location = '/'
    }
    catch (error) {
        toast(error.response.data.msg, {
            position: "top-right",
            autoClose: 3000,
        });
    }
};
