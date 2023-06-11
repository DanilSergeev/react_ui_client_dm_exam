import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './components/Header';
import HomePage from './page/HomePage';
import NotFoundPage from './page/NotFoundPage';
import Footer from './components/Footer';
import RegisterPage from './page/RegisterPage';
import AuthPage from './page/AuthPage';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
