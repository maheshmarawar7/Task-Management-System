import React from 'react'

const CreateTask = () => {
  const [taskTitle, setTaskTitle] = React.useState("")
  const [taskDate, setTaskDate] = React.useState("")
  const [taskDescription, setTaskDescription] = React.useState("")
  const [asignTo, setAsignTo] = React.useState("")
  const [Category, setCategory] = React.useState("")
  const submitHandler = (e) => {
    e.preventDefault()
    // console.log(taskTitle, taskDate, taskDescription, asignTo, Category);
    setTaskTitle("")
    setTaskDate("")
    setTaskDescription("")
    setAsignTo("")
    setCategory("")
  }
  return (

    <div className="p-2 bg-black-100 min-h-screen">
      <form
        onSubmit={(e) => { submitHandler(e) }}
        className="bg-black shadow-md rounded-lg p-4 space-y-4 text-white">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="text-sm font-medium  text-white-700 mb-1">Task Title</label>
            <input
            value={taskTitle}
            onChange={(e) => { setTaskTitle(e.target.value) }}
              type="text"
              className="border bg-black border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2"
              placeholder="Enter task title"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium text-white-700 mb-1">Date</label>
            <input
            value={taskDate}
            onChange={(e) => { setTaskDate(e.target.value) }}
              type="date"
              className="border bg-black border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 "
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium text-white-700 mb-1">Assign To</label>
            <input
            value={asignTo}
            onChange={(e) => { setAsignTo(e.target.value) }}
              type="text"
              className="border bg-black border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2"
              placeholder="Enter assignee name"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium text-white-700 mb-1">Category</label>
            <input
            value={Category}
            onChange={(e) => { setCategory(e.target.value) }}
              type="text"
              className="border bg-black border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2"
              placeholder="dev, design, etc."
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium text-white-700 mb-1">Description</label>
          <textarea
            value={taskDescription}
            onChange={(e) => { setTaskDescription(e.target.value) }}
            cols="30"
            rows="3"
            className="border bg-black border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2"
            placeholder="Enter task description"
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            onClick={submitHandler}
            className="mt-3 w-[200px] px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-800 transition">
            Create Task
          </button>
        </div>
      </form>
      <AllTask />
    </div>
  )
}

export default CreateTask
