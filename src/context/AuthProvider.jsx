import React, { useState, useEffect } from 'react';
import { getLocalStorage } from '../utils/localStorage';

export const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  // localStorage.clear();
  const [authData, setAuthData] = useState(null);

  useEffect(() => {
    const { employees, admin } = getLocalStorage();
    // You can modify this logic based on the requirements, for example:
    if (admin && admin.length > 0) {
      setAuthData({ employees: employees, admin: admin[0] });
    } else {
      setAuthData({ employees: [], admin: null });
    }
  }, []);

  return (
    <AuthContext.Provider value={authData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
