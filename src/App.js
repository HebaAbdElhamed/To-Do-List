import './App.css';
import Header from "./components/Header";
import Welcome from './pages/Welcome';  // الصفحة الرئيسية
import Tody from './pages/Tody';  // صفحة تانية (Tody)
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  // استخدام useLocation داخل الـ Router
  return (
    <Router>
      <AppWithLocation />
    </Router>
  );
}

function AppWithLocation() {
  const location = useLocation();

  useEffect(() => {
    const pageTitle = location.pathname.split('/')[1];
    const title = pageTitle ? `Tody | ${pageTitle.charAt(0).toUpperCase() + pageTitle.slice(1)}` : 'Tody';
    document.title = title;
  }, [location]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/tody" element={<Tody />} />
      </Routes>
    </>
  );
}

export default App;
