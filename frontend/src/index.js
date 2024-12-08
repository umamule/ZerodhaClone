import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
//import reportWebVitals from './reportWebVitals';
import HomePage from './landing_page/home/HomePage';
import PricingPage from './landing_page/pricing/PricingPage';
import SupportPage from './landing_page/support/SupportPage';
import ProductsPage from './landing_page/products/ProductsPage';
import AboutPage from './landing_page/about/AboutPage';
import SignUp from './landing_page/signup/SignUp';
import Footer from './landing_page/Footer';
import Navbar from './landing_page/Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar />
  <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/pricing" element={<PricingPage/>}/>
    <Route path="/support" element={<SupportPage/>}/>
    <Route path="/products" element={<ProductsPage/>}/>
    <Route path="/about" element={<AboutPage/>}/>
    <Route path="/signup" element={<SignUp/>}/>
  </Routes>
  <Footer/>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
