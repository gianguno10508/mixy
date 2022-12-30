import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import SingleProduct from './components/single-product';
import AboutUs from './pages/about-us';
import Delivery from './pages/delivery';
import Homepage from './pages/homepage';
import LegalNotice from './pages/legal-notice';
import SecurePayment from './pages/secure-payment';
import Posts from './root-components/posts';
import Products from './root-components/products';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <AboutUs /> */}
      {/* <Posts /> */}
      {/* <Products />
      <Homepage />
      <Footer /> */}
      <SingleProduct />
      {/* <Delivery /> */}
      {/* <SecurePayment /> */}
      {/* <LegalNotice /> */}
    </div>
  );
}

export default App;
