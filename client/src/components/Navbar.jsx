import React from 'react'
import { CiLogout } from 'react-icons/ci'
import { useDispatch } from 'react-redux'

const Navbar = () => {
    const dispatch = useDispatch()
    const logOut = () => {
        localStorage.clear();
        window.location.href = '/auth';
    }

    const openModal = () => {
        dispatch({ type: "MODAL", payload: true })
    }
    return (
        <div className='h-30 bg-indigo-600 flex justify-between items-center p-5'>
            <div className='text-white font-bold text-2xl cursor-pointer'>POST PAYLAŞ</div>
            <div className='flex items-center space-x-5'>
                <input type="text" placeholder='  Ara...' className='outline-none rounded-lg px-2' />
                <div onClick={openModal} className='w-28 text-white text-center border px-2 cursor-pointer hover:bg-indigo-400 rounded-lg'>Oluştur</div>
                <CiLogout onClick={logOut} size={25} className='text-white cursor-pointer' />
            </div>
        </div>
    )
}

export default Navbar
