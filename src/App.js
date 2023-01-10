import './App.css';
import Footer from './components/footer';
import Footer1 from './components/Footer1';
import Header from './components/header';
import Header1 from './components/Header1';
import SingleProduct from './components/single-product';
import AboutUs from './pages/about-us';
import ContactUs from './pages/ContactUs';
import Delivery from './pages/delivery';
import Homepage from './pages/homepage';
import LegalNotice from './pages/legal-notice';
import Login from './pages/login';
import SecurePayment from './pages/secure-payment';
import Stores from './pages/stores';
import Posts from './root-components/posts';
import Products from './root-components/products';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      {/* <AboutUs /> */}
      {/* <Posts /> */}
      {/* <Products /> */}
      {/* <Homepage /> */}
      {/* <Footer /> */}
      {/* <Login /> */}
      {/* <SingleProduct /> */}
      {/* <Delivery /> */}
      {/* <SecurePayment /> */}
      {/* <LegalNotice /> */}

      {/* _____ */}
      <Header1 />
      {/* <ContactUs /> */}

      <Homepage />
      <Footer1 />
    </div>
  );
}

export default App;
