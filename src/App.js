import "./assets/styles/App.css";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { createContext, useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";

import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Main from './pages/index';
import Dresses from './pages/dresses';
import Dress from './pages/dress'
import Checkout from "./pages/checkout";
import Account from "./pages/account";
import Sidebar from "./pages/sellerProfile/components/Sidebar";
import Dashboard from "./pages/sellerProfile/Dashboard";
import Orders from "./pages/sellerProfile/Orders";
import Comments from "./pages/comments";
import SellerComments from './pages/sellerProfile/Comments'
import SellerProfileDresses from './pages/sellerProfile/Dresses';
import SellerProfileAddDress from './pages/sellerProfile/DressesAdd';
import SellerProfileEditDress from './pages/sellerProfile/DressesEdit';
import Blog from "./pages/blog";
import OneBlog from "./pages/oneBlog";
import Dressmakers from "./pages/dressmakers";
import Dressmaker from "./pages/dressmaker";
import AboutUs from "./components/AboutUs";
import DeliveryPayment from "./pages/DeliveryPayment";
import TermsConditions from "./pages/TermsConditions";
import Favorites from "./pages/favorites";
import OneOrder from "./pages/sellerProfile/OneOrder";
import CommentOne from "./pages/sellerProfile/CommentOne";
import Emails from "./pages/sellerProfile/Emails";
import EmailOne from "./pages/sellerProfile/EmailOne";
import Profile from "./pages/sellerProfile/Profile";
import Search from "./pages/Search";


export const AppContext = createContext();

function App() {
  const [lang, setLang] = useState(localStorage.getItem('lang') ? localStorage.getItem('lang') : 'tm');
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const changeLanguage = lng => {
    localStorage.setItem('lang', lng);
    i18n.changeLanguage(lng);
    setLang(lng)
  };

  useEffect(() => {
    const localLang = localStorage.getItem('lang');
    if (!localLang) {
      localStorage.setItem('lang', lang);
      changeLanguage(lang)
    } else {
      setLang(localLang)
    }
  }, [lang])

  useEffect(() => {
    if (location.pathname.split('/')[1] === 'sellerProfile') {
      const token = localStorage.getItem('lybas-seller-token');
      if (!token) {
        navigate('/');
      }
    }
  }, [location])

  return (<AppContext.Provider value={{
    t: t,
    changeLanguage: changeLanguage,
    lang: lang,
  }}>
    <div className="app">
      <Routes>
        <Route path="/sellerProfile/" element={<Sidebar />}>
          <Route index element={<Dashboard />} />
          <Route path="/sellerProfile/orders" element={<Orders />} />
          <Route path="/sellerProfile/orders/:id" element={<OneOrder />} />
          <Route path="/sellerProfile/dresses" element={<SellerProfileDresses />} />
          <Route path="/sellerProfile/dresses/add" element={<SellerProfileAddDress />} />
          <Route path="/sellerProfile/dresses/:id" element={<SellerProfileEditDress />} />
          <Route path="/sellerProfile/comments" element={<SellerComments />} />
          <Route path="/sellerProfile/comments/:id" element={<CommentOne />} />
          <Route path="/sellerProfile/emails" element={<Emails />} />
          <Route path="/sellerProfile/emails/:id/:type" element={<EmailOne />} />
          <Route path="/sellerProfile/profile" element={<Profile />} />
        </Route>

        <Route path='/' element={(
          <>
            <Header />
            <Main />
            <Footer />
          </>
        )} />
        <Route path='/dresses' element={(
          <>
            <Header />
            <Dresses />
            <Footer />
          </>
        )} />
        <Route path='/blog' element={(
          <>
            <Header />
            <Blog />
            <Footer />
          </>
        )} />
        <Route path='/blog/:id' element={(
          <>
            <Header />
            <OneBlog />
            <Footer />
          </>
        )} />
        
        <Route path='/dressmakers' element={(
          <>
            <Header />
            <Dressmakers />
            <Footer />
          </>
        )} />
        <Route path='/dressmakers/:id' element={(
          <>
            <Header />
            <Dressmaker />
            <Footer />
          </>
        )} />

        <Route path='/dresses/:id' element={(
          <>
            <Header />
            <Dress />
            <Footer />
          </>
        )} />
        <Route path='/checkout' element={(
          <>
            <Header />
            <Checkout />
            <Footer />
          </>
        )} />
        <Route path='/account' element={(
          <>
            <Header />
            <Account />
            <Footer />
          </>
        )} />
        <Route path='/comments/:id' element={(
          <>
            <Header />
            <Comments />
            <Footer />
          </>
        )} />
        <Route path='/aboutUs' element={(
          <>
            <Header />
            <AboutUs />
            <Footer />
          </>
        )} />
        <Route path='/deliveryPayment' element={(
          <>
            <Header />
            <DeliveryPayment />
            <Footer />
          </>
        )} />
        <Route path='/termsCondition' element={(
          <>
            <Header />
            <TermsConditions />
            <Footer />
          </>
        )} />
        <Route path='/favorites' element={(
          <>
            <Header />
            <Favorites />
            <Footer />
          </>
        )} />
        <Route path='/search/:keyword' element={(
          <>
            <Header />
            <Search />
            <Footer />
          </>
        )} />

      </Routes>
    </div>
  </AppContext.Provider>
  );
}

export default App;
