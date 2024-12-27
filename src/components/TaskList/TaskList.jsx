import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import FailedTask from './FailedTask'
import CompleteTask from './CompleteTask'

const TaskList = ({ data }) => {
  return (
    <div id='taskList' className='h-[300px] w-[98vw] py-5 mt-8 mx-3 my-3 flex items-center justify-start gap-5 flex-no-wrap overflow-x-auto'>
      {data.tasks.map((elem, index) => {
        if(elem.active){
          return <AcceptTask key={index} data={elem}/>
        }
        if(elem.newTask){
          return <NewTask key={index} data={elem}/>
        }
        if(elem.completed){
          return <CompleteTask key={index} data={elem}/>
        }
        if(elem.failed){
          return <FailedTask key={index} data={elem}/>
        }
      })}
    </div>
  )
}

export default TaskList
