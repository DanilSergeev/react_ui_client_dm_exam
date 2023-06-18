import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './components/Header';
import HomePage from './page/HomePage';
import NotFoundPage from './page/NotFoundPage';
import Footer from './components/Footer';
import RegisterPage from './page/RegisterPage';
import AuthPage from './page/AuthPage';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import axios from "axios"
import { checkAuthAction } from "./store/auth-reduser"
import AboutUsPage from './page/AboutUsPage';
import CatalogPage from './page/CatalogPage';
import WhereAreWePage from './page/WhereAreWePage';
import AdminPage from './page/AdminPage';
import UpdataProducts from './page/UpdataProducts';
import CreateProductsPage from './page/CreateProductsPage';
import ProductCheck from './page/ProductCheck';






function App() {
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(true)



  useEffect(() => {
    try {
      (async () => {
        if (localStorage.getItem("token")) {
          const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/refresh`, { withCredentials: true })
          dispatch(checkAuthAction({...response, isAuth:true}))
        }
      })()
    } catch (error) {
      console.log(error)
    }
    setIsLoading(false)
  }, [])

  if(isLoading){
    return <div>Загрузка...</div>
  }
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/where_are_we" element={<WhereAreWePage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/product/:id" element={<ProductCheck />} />
        <Route path="/updata_products/:id" element={<UpdataProducts />} />
        <Route path="/create_products/" element={<CreateProductsPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
