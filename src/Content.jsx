import { BrowserRouter, Routes, Route ,useNavigate,useLocation } from 'react-router';
import App from './App.jsx';
import Index from './landingPage/indexlanding.jsx';
import ErrorPage from './components/error_404.jsx'

import { useEffect } from 'react';


export default function Content() {



  return (
    <BrowserRouter>
      <RouterHandler />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/todos" element={<App />} />
        <Route  path='/*' element={<ErrorPage/>} />
      </Routes>
    </BrowserRouter>
  );
}


function RouterHandler() {
  const navigate = useNavigate();
  const location = useLocation()

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');
    if (hasVisited && location.pathname === '/') {
      navigate('/todos');
    }
  }, [navigate]);

  return null; // no UI
}