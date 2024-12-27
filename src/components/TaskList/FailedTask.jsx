import React from 'react'

const FailedTask = ({ data }) => {
    return (
        <div className='h-full w-[300px] bg-red-400 rounded-xl p-5 flex-shrink-0'>
            <div className='flex justify-between'>
                <h3 className='bg-red-700 px-3 py-1 rounded text-sm'> {data.category} </h3>
                <h4 className='text-sm text-black'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold text-black'>{data.taskTitle}</h2>
            <p className='text-sm mt-2 text-black'>{data.taskDescription}</p>
            <div className='mt-2'>
                <button className='w-full'>Failed</button>
            </div>
        </div>
    )
}

export default FailedTask
