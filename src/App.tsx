import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Starter from './components/layout/Starter';
import Home from './components/Home';

export const ONBOARDING_KEY = "hasSeenOnboarding";


function App() {
  const hasSeenOnboarding = localStorage.getItem(ONBOARDING_KEY) === "true";

  return (
    <BrowserRouter>
     
        <Routes>
          {!hasSeenOnboarding && <Route path="/start" element={<Starter />} />}
          {hasSeenOnboarding && <Route path="/" element={<Home />} />}
         
        </Routes>
      
      </BrowserRouter>
  )
}

export default App
