import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'

const AllTask = () => {
    const authData = useContext(AuthContext);
    return (
        <div className="h-40">
            <div className="mb-2 p-2 border-yellow-400 border-2 py-2 flex justify-between rounded">
                <h3 className='w-1/6 text-lg text-white'>Employee Name</h3>
                <h3 className='w-1/6 text-lg text-white'>New Task</h3>
                <h3 className='w-1/6 text-lg text-white'>Active Task</h3>
                <h3 className='w-1/6 text-lg text-white'>Completed</h3>
                <h3 className='w-1/6 text-lg text-white'>Failed</h3>
            </div>
            <div id="s" className='h-[100%] overflow-auto'>
                {authData.employees.map(function (elem, index) {
                    return <div key={index} className="mb-2 p-2 border-fuchsia-700 border-2 py-2 flex justify-between rounded">
                        <h3 className='w-1/6 text-lg text-white'>{elem.firstname}</h3>
                        <h3 className='w-1/6 text-lg text-blue-500'>{elem.taskCounts.newTask}</h3>
                        <h3 className='w-1/6 text-lg text-yellow-500'>{elem.taskCounts.active}</h3>
                        <h3 className='w-1/6 text-lg text-green-500'>{elem.taskCounts.completed}</h3>
                        <h3 className='w-1/6 text-lg text-red-500'>{elem.taskCounts.failed}</h3>
                    </div>
                })}
            </div>
        </div>
    )
}

export default AllTask
