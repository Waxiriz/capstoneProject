import './App.css';
import Header from './Header';
import Footer from './Footer';

import { Routes, Route } from 'react-router-dom';

import HomePage from './components/HomePage';
import BookingPage from './components/BookingPage';
import AboutPage from './components/AboutPage';
import MenuPage from './components/MenuPage';
import OrderPage from './components/OrderPage';
import LoginPage from './components/LoginPage';
import ConfirmedBooking from './components/ConfirmedBooking';

function App() {
  return (
    <>
      <Header/>

      <Routes> 
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/menu" element={<MenuPage />}></Route>
        <Route path="/online" element={<OrderPage/>}></Route>
        <Route path="/login" element={<LoginPage/>}></Route>
        <Route path='confirmed' element={<ConfirmedBooking></ConfirmedBooking>}></Route>
      </Routes>

      <Footer/>

    </>
  );
}

export default App;
