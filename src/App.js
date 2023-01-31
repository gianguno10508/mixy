import { useQuery } from '@apollo/client';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer';
import Footer1 from './components/Footer1';
import Header from './components/header';
import Header1 from './components/Header1';
import SingleProduct from './components/single-product';
import Page404 from './pages/404';
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
import LoadingImg from '../src/assets/images/Loading_icon.gif'
import MyAccount from './pages/my-account';
import DetailBlog from './pages/detail-blog';
import DetailProduct from './pages/detail-product';
import PAGES from './graphql/pages';
import CreateAccount from './pages/create-account';
import Categories from './root-components/categories';
import Shops from './pages/shops';
import PricesDrop from './pages/prices-drop';
import CartPage from './pages/cart-page';
import ForgotPassword from './pages/forgot-password';
import NewProducts from './pages/new-products';
import BestSales from './pages/best-sales';
import ComponentsListProduct from './components/components-list-product';
import CategoryPage from './pages/category-page';
function App() {
  // const { loading, error, data } = useQuery(PAGES);

  // if (loading) return <img className='loading' src={LoadingImg} />;
  // if (error) return <Page404 />;
  return (
    <div className="App">
      <Header1 />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/create' element={<CreateAccount />} />
        <Route path='/my-account' element={<MyAccount />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/delivery' element={<Delivery />} />
        <Route path='/login' element={<Login />} />
        <Route path='/create' element={<CreateAccount />} />
        <Route path='/stores' element={<Stores />} />
        <Route path='/secure-payment' element={<SecurePayment />} />
        <Route path='/legal-notice' element={<LegalNotice />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/shop-list' element={<Shops />} />
        <Route path='/detail-post/:id' element={<DetailBlog />} />
        <Route path='/detail-product/:id' element={<DetailProduct />} />
        <Route path='/prices-drop' element={<PricesDrop />} />
        <Route path='/forgot-pass' element={<ForgotPassword />} />
        <Route path='/new-products' element={<NewProducts />} />
        <Route path='/best-sales' element={<BestSales />} />
        <Route path='/:slug' element={<CategoryPage />} />
      </Routes>
      <Footer1 />
    </div>
  );
}

export default App;
