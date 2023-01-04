import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import SingleProduct from './components/single-product';
import AboutUs from './pages/about-us';
import CreateAccount from './pages/create-account';
import Delivery from './pages/delivery';
import ForgotPassword from './pages/forgot-password';
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
      {/* <Products />
      <Homepage />
      <Footer /> */}
      {/* <Login /> */}
      <ForgotPassword />
      {/* <CreateAccount /> */}
      {/* <SingleProduct /> */}
      {/* <Delivery /> */}
      {/* <SecurePayment /> */}
      {/* <LegalNotice /> */}
    </div>
  );
}

export default App;
