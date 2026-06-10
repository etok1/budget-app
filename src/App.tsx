import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css'
import Starter from './components/layout/Starter';
import Home from './components/pages/Home';
import Pots from './components/pages/Pots';
import Header from './components/layout/Header';
import Budget from './components/pages/Budget';
import Transactions from './components/pages/Transactions';
import { useEffect, useReducer } from 'react';
import { budgetContext, budgetReducer, initialState } from './context/Context';
import { ProtectedRoute } from './Protected Routes/ProtectedRoute';




export default function App() {
 
const [state, dispatch] = useReducer(budgetReducer, initialState)

useEffect(() => {
  localStorage.setItem('budgetApp', JSON.stringify(state))
}, [state])

  return (
   <budgetContext.Provider value={{ state, dispatch }}>
    <BrowserRouter>
     <Header/>
        <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
<Route path="/login" element={<Starter />} />
          <Route path="/home" element={
          <ProtectedRoute>
            <Home />  </ProtectedRoute>
          } />
         
         <Route path="/pots" element={<ProtectedRoute><Pots /></ProtectedRoute>} />
         <Route path="/budget" element={<ProtectedRoute><Budget /></ProtectedRoute>} />
          <Route path="/transactions" element={<ProtectedRoute><Transactions /></ProtectedRoute>} />
        </Routes>
      
      </BrowserRouter></budgetContext.Provider> 
  )
}



