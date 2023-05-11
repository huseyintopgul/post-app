import React, { useState } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { createPostAction } from '../redux/actions/postAction'

const Modal = () => {
    const dispatch = useDispatch()
    const [postData, setPostData] = useState({ user: "", title: "", description: "" })

    const onChangeFunc = (e) => {
        setPostData({ ...postData, [e.target.name]: e.target.value })
    }
    const postCreate = () => {
        dispatch(createPostAction(postData))
        dispatch({ type: "MODAL", payload: false })
    }
    return (
        <div className='w-full h-screen bg-opacity-50 bg-black fixed m-0 flex items-center justify-center'>
            <div className='bg-white w-1/3 p-2 rounded-md'>
                <div className='flex justify-between items-center '>
                    <h1 className='text-xl font-bold'>POST PAYLAŞ</h1>
                    <AiOutlineCloseCircle size={25} className='m-2 cursor-pointer hover:text-red-700' />
                </div>
                <div className='my-4 flex flex-col space-y-4'>
                    <input value={postData.user} name='user' onChange={onChangeFunc} className='inputStyle' type="text" placeholder='Kullanıcı' />
                    <input value={postData.title} name='title' onChange={onChangeFunc} className='inputStyle' type="text" placeholder='Başlık' />
                    <input value={postData.description} name='description' onChange={onChangeFunc} className='inputStyle' type="text" placeholder='Açıklama' />
                </div>
                <div onClick={postCreate} className='w-full p-2 text-center bg-indigo-600 text-white cursor-pointer hover:bg-indigo-400'>Paylaş</div>
            </div>
        </div>
    )
}

export default Modal
