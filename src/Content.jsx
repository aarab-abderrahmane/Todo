import { BrowserRouter, Routes, Route } from 'react-router';
import App from './App.jsx';
import Index from './landingPage/indexlanding.jsx';

export default function Content() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/todos" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}
