import React from 'react';

const Login = ({ HandleLogin }) => {
  // console.log(props);
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")


  const submitHandler = (e) => {
    e.preventDefault()
    HandleLogin(email, password)
    setEmail("")
    setPassword("")
  }

  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="border-2 border-green-600 p-6 rounded-lg shadow-lg bg-transparent">
        <form className="flex flex-col space-y-4"
          onSubmit={(e) => submitHandler(e)}>
          <label htmlFor="email" className="text-lg font-medium text-gray-100">
            Email
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            id="email"
            required
            placeholder="Enter your email"
            className="w-full px-4 py-2 border bg-transparent rounded-md focus:ring-2 focus:focus:outline-none"
          />
          <label htmlFor="password" className="text-lg font-medium text-gray-100">
            Password
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 border bg-transparent rounded-md focus:ring-2 focus:focus:outline-none"
            required
          />
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-700 transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
