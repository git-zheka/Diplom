import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CoursesPage from './pages/cousesPage/CousesPage';
import HomePage from './pages/homepage/HomePage';
import LoginPage from './pages/loginPage/LoginPage';


const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/loginpage" element={<LoginPage/> } />
        <Route path="/coursespage" element={<CoursesPage/> } />
      </Routes>
    </Router>
  );
};

export default AppRoutes;