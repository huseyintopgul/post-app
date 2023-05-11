import React from 'react'

const HomeCard = ({ posts }) => {
    return (
        <div className='w-1/4 border rounded-md bg-gray-200 p-4'>
            <div className='font-bold text-xl'>{posts?.title}</div>
        </div>
    )
}

export default HomeCard
