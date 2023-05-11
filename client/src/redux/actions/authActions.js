import axios from 'axios';
import { toast } from 'react-toastify';


export const registerAction = (authData) => async (dispatch) => {
    try {
        const { data } = await axios.post('http://localhost:4000/register', authData);
        dispatch({ type: 'REGISTER', payload: data })
        window.location = '/'
    }
    catch (error) {
        toast(error.response.data.msg, {
            position: "top-right",
            autoClose: 3000,
        });
    }
};
export const loginAction = (authData) => async (dispatch) => {
    try {
        const { data } = await axios.post('http://localhost:4000/login', authData);
        dispatch({ type: 'LOGIN', payload: data })
        window.location = '/'
    }
    catch (error) {
        toast(error.response.data.msg, {
            position: "top-right",
            autoClose: 3000,
        });
    }
};
