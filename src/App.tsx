import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Starter from './components/layout/Starter';
import Home from './components/pages/Home';
import Pots from './components/pages/Pots';
import Header from './components/layout/Header';
import Budget from './components/pages/Budget';
import Transactions from './components/pages/Transactions';
import { useEffect, useReducer } from 'react';
import { budgetContext, budgetReducer, initialState } from './context/Context';




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
      <Route path="/" element={<Starter />} />
         <Route path="/home" element={<Home /> } />
         
         <Route path="/pots" element={<Pots />} />
         <Route path="/budget" element={<Budget />} />
          <Route path="/transactions" element={<Transactions />} />
        </Routes>
      
      </BrowserRouter></budgetContext.Provider> 
  )
}



