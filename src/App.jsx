import { useState, useEffect, useContext } from 'react';
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { getLocalStorage, setLocalStorage } from './utils/localStorage';
import { AuthContext } from './context/AuthProvider';

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const authData = useContext(AuthContext);

useEffect(() => {
  const loggedInUser = localStorage.getItem("loggedInUser");
  if (loggedInUser) {
    const userData = JSON.parse(loggedInUser);
    setUser(userData.role);
    setLoggedInUserData(userData.data);
  }
}, []);

const handleLogin = (email, password) => {
  if (email == "admin@example.com" && password == "123") {
    setUser("admin");
    localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
  } else if (authData) {
    const employee = authData.employees.find((e) => email == e.email && password == e.password);
    if (employee) {
      setUser("employee");
      setLoggedInUserData(employee);
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee", data: employee }));
    }
  } else {
    alert("Invalid email or password");
  }
};

  // Fetching AuthContext data
  const data = useContext(AuthContext);
  // console.log('AuthContext Data:', data);

  useEffect(() => {
    setLocalStorage(); // Store data in localStorage (only once if data doesn't exist)
    const data = getLocalStorage(); // Retrieve data from localStorage
    // console.log('Retrieved Data:', data); // Verify data is retrieved properly
  }, []);

  return (
    <>
      {!user ? (
        <Login HandleLogin={handleLogin} />
      ) : user === "admin" ? (
        <AdminDashboard data={loggedInUserData} />
      ) : (
        <EmployeeDashboard data={loggedInUserData} />
      )}
    </>
  )
}

export default App;
