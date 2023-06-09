import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './components/Header';
import HomePage from './page/HomePage';
import NotFoundPage from './page/NotFoundPage';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
    <Header />

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>

    <Footer />
  </BrowserRouter>
  );
}

export default App;
