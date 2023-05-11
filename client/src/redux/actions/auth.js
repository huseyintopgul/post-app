import axios from 'axios';
import { toast } from 'react-toastify';


export const registerAction = (authData) => async (dispatch) => {
    try {
        const { data } = await axios.post('http//localhost:4000/register', authData);
        dispatch({ type: 'KAYIT', payload: data })
        window.location = '/'
    }
    catch (error) {
        toast(error.response.data.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
};

export const loginAction = (authData) => async (dispatch) => {
    try {
        const { data } = await axios.post('http//localhost:4000/login', authData);
        dispatch({ type: 'GİRİŞ', payload: data })
        window.location = '/'
    }
    catch (error) {
        toast(error.response.data.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
}
