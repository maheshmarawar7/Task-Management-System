import React, { useState } from "react";
import AllTask from "../../pages/AllTask";

const AdminDashboard = ({ data }) => {
    console.log(data);
    // let name = "Mahesh";
    const logOut = () => {
        localStorage.removeItem("loggedInUser");
        window.location.reload();
    }
    return (
        <div className=" overflow-hidden flex flex-col bg-black rounded-lg shadow-lg mx-auto mt-8 h-[95vh]">
            <div>
                <header className="flex justify-between items-center bg-white p-3 shadow-md rounded-t-lg">
                    {/* <h1 className="text-lg font-semibold text-gray-800">{data.id}</h1> */}
                    <h1 className="text-lg font-semibold text-gray-800">Hello, Admin👋</h1>
                    <button
                        onClick={logOut}
                        className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition">
                        Log Out
                    </button>
                </header>
            </div>

            <div className="p-2 bg-black-100 min-h-screen">
                <form className="bg-black shadow-md rounded-lg p-4 space-y-4 text-white">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col">
                            <label className="text-sm font-medium  text-white-700 mb-1">Task Title</label>
                            <input
                                type="text"
                                className="border bg-black border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2"
                                placeholder="Enter task title"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-sm font-medium text-white-700 mb-1">Date</label>
                            <input
                                type="date"
                                className="border bg-black border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 "
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-sm font-medium text-white-700 mb-1">Assign To</label>
                            <input
                                type="text"
                                className="border bg-black border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2"
                                placeholder="Enter assignee name"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-sm font-medium text-white-700 mb-1">Category</label>
                            <input
                                type="text"
                                className="border bg-black border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2"
                                placeholder="dev, design, etc."
                            />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-white-700 mb-1">Description</label>
                        <textarea
                            cols="30"
                            rows="3"
                            className="border bg-black border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2"
                            placeholder="Enter task description"
                        ></textarea>
                    </div>
                    <div className="text-center">
                        <button className="mt-3 w-[200px] px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-800 transition">
                            Create Task
                        </button>
                    </div>
                </form>
                <AllTask />
            </div>
        </div>
    );
};

export default AdminDashboard;
