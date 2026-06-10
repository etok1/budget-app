import {  createContext, useContext, useState } from "react";

type AuthContextType = {
  isAuthenticate: boolean,
  login: () => void,
  logout: () => void
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('isAuthenticated') === 'true')

  const signUp = (user) => {
    const users = localStorage.getItem('users')
    users.push(user)
    localStorage.setItem('users', users)
  }

  const login = () => {
     localStorage.setItem("isAuthenticated", 'true');
     setIsAuthenticated(true)
       console.log('login')
  };

  const logout = () => {
    console.log('logout')
    localStorage.removeItem("isAuthenticated"); 
    setIsAuthenticated(false);
  };

  return(
    <AuthContext.Provider
      value={{ isAuthenticated, login, logout, signUp }}
    >
      {children}
    </AuthContext.Provider>  
  )
}

export const useAuth = () => useContext(AuthContext)