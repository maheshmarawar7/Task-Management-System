const employees = [
    {
        "id": 1,
        "firstname": "Arjun",
        "email": "employee1@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Prepare Report",
                "taskDescription": "Complete the sales report for Q4",
                "taskDate": "2024-12-26",
                "category": "Documentation",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Team Meeting",
                "taskDescription": "Discuss the project milestones",
                "taskDate": "2024-12-27",
                "category": "Meeting",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Code Review",
                "taskDescription": "Review code for the new feature implementation",
                "taskDate": "2024-12-28",
                "category": "Development",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ],
        "taskCounts": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 4
        }
    },
    {
        "id": 2,
        "firstname": "Vikram",
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Data Cleanup",
                "taskDescription": "Organize the database records",
                "taskDate": "2024-12-26",
                "category": "Database",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Client Presentation",
                "taskDescription": "Present the project proposal to the client",
                "taskDate": "2024-12-27",
                "category": "Presentation",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "taskTitle": "System Testing",
                "taskDescription": "Test the new system functionalities",
                "taskDate": "2024-12-28",
                "category": "Testing",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Bug Fixing",
                "taskDescription": "Resolve critical bugs in the application",
                "taskDate": "2024-12-29",
                "category": "Development",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": true
            }
        ],
        "taskCounts": {
            "active": 2,
            "newTask": 2,
            "completed": 1,
            "failed": 1
        }
    },
    {
        "id": 3,
        "firstname": "Rohan",
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Market Research",
                "taskDescription": "Conduct a survey for market trends",
                "taskDate": "2024-12-26",
                "category": "Research",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Feedback Analysis",
                "taskDescription": "Analyze feedback from users",
                "taskDate": "2024-12-27",
                "category": "Analysis",
                "active": true,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "taskTitle": "UI Enhancement",
                "taskDescription": "Improve the user interface for the homepage",
                "taskDate": "2024-12-28",
                "category": "Design",
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true
            },
            {
                "taskTitle": "Training Session",
                "taskDescription": "Conduct a training session for new recruits",
                "taskDate": "2024-12-29",
                "category": "Training",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            }
        ],
        "taskCounts": {
            "active": 1,
            "newTask": 2,
            "completed": 1,
            "failed": 1
        }
    },
    {
        "id": 4,
        "firstname": "Ananya",
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Server Maintenance",
                "taskDescription": "Perform routine maintenance for the servers",
                "taskDate": "2024-12-26",
                "category": "IT",
                "active": true,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "taskTitle": "Update Documentation",
                "taskDescription": "Update the project documentation with recent changes",
                "taskDate": "2024-12-27",
                "category": "Documentation",
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true
            },
            {
                "taskTitle": "API Testing",
                "taskDescription": "Test the new APIs for edge cases",
                "taskDate": "2024-12-28",
                "category": "Testing",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            }
        ],
        "taskCounts": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 1
        }
    },
    {
        "id": 5,
        "firstname": "Priya",
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Event Planning",
                "taskDescription": "Plan the annual team-building event",
                "taskDate": "2024-12-26",
                "category": "Event",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Security Audit",
                "taskDescription": "Perform a security audit for the system",
                "taskDate": "2024-12-27",
                "category": "Security",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "taskTitle": "Social Media Campaign",
                "taskDescription": "Launch a social media campaign for product awareness",
                "taskDate": "2024-12-28",
                "category": "Marketing",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": true
            },
            {
                "taskTitle": "Inventory Check",
                "taskDescription": "Verify inventory levels in the warehouse",
                "taskDate": "2024-12-29",
                "category": "Operations",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            }
        ],
        "taskCounts": {
            "active": 1,
            "newTask": 2,
            "completed": 1,
            "failed": 1
        }
    }
];


const admin = [
    {
        "id": 1,
        "email": "admin@example.com",
        "password": "123"
    }
];

export const setLocalStorage = () => {
    if (!localStorage.getItem("employees") || !localStorage.getItem("admin")) {
        localStorage.setItem("employees", JSON.stringify(employees));
        localStorage.setItem("admin", JSON.stringify(admin));
    }
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem("employees")) || [];
    const admin = JSON.parse(localStorage.getItem("admin")) || [];
    return { employees, admin };
};
