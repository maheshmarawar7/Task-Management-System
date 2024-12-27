import React from 'react'

const AcceptTask = ({ data }) => {
    console.log(data);
    return (
        <div className='h-full w-[300px] bg-red-400 rounded-xl p-5 flex-shrink-0 '>
            <div className='flex justify-between'>
                <h3 className='bg-red-700 px-3 py-1 rounded text-sm '> {data.category} </h3>
                <h4 className='text-sm text-black'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold text-black'>{data.taskTitle}</h2>
            <p className='text-sm mt-2 text-black'>{data.taskDescription}</p>
            <div className='flex justify-between mt-5'>
                <button className='bg-green-600 py-1 px-1 text-sm text-black'>Mark as Completed</button>
                <button className='bg-red-600 py-1 px-1 text-sm'>Mark as Failed</button>
            </div>
        </div>
    )
}

export default AcceptTask
