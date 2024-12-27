import React from "react";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = ({data}) => {
  console.log(data);
  const logOut = () => {
    localStorage.removeItem("loggedInUser");
    // window.location.reload();
  }
  // let userName = "Mahesh";
  return (
    <div className=" overflow-hidden flex flex-col bg-black h-100 rounded-lg shadow-lg mx-auto mt-8">
      <header className="flex justify-between items-center bg-white p-3 shadow-md rounded-t-lg">
        <h1 className="text-lg font-semibold text-gray-800">ID: {data.id}</h1>
        <h1 className="text-lg font-semibold text-gray-800">Hello, {data.firstname}👋</h1>
        <button 
        onClick={logOut}
        className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition">
          Log Out
        </button>
      </header>
      <main className="flex-1 p-4 overflow-hidden">
        <div className="grid grid-cols-2 gap-4 h-full">
          <div className="p-4 bg-blue-500 text-white rounded-lg shadow-md flex flex-col justify-center items-center">
            <h2 className="text-base font-bold text-black">New Task</h2>
            <p className="mt-2 text-3xl font-extrabold text-black">{data.taskCounts.newTask}</p>
          </div>
          <div className="p-4 bg-green-500 text-white rounded-lg shadow-md flex flex-col justify-center items-center">
            <h2 className="text-base font-bold text-black">Completed</h2>
            <p className="mt-2 text-3xl font-extrabold text-black">{data.taskCounts.completed}</p>
          </div>
          <div className="p-4 bg-yellow-500 text-white rounded-lg shadow-md flex flex-col justify-center items-center">
            <h2 className="text-base font-bold text-black">Accepted</h2>
            <p className="mt-2 text-3xl font-extrabold text-black">{data.taskCounts.active}</p>
          </div>
          <div className="p-4 bg-red-500 text-white rounded-lg shadow-md flex flex-col justify-center items-center">
            <h2 className="text-base font-bold text-black">Failed</h2>
            <p className="mt-2 text-3xl font-extrabold text-black">{data.taskCounts.failed}</p>
          </div>
        </div>
      </main>
      <TaskList data={data}/>
    </div>
  );
};

export default EmployeeDashboard;
