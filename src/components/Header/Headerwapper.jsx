import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/header/mixy-responsive-prestashop-theme-logo-1631611858.jpg';
import { isUserLoggedIn } from '../../untils/functions';
import { connect } from "react-redux";




function Headerwapper(props, showNavbar) {
    const auth = isUserLoggedIn();
    return (
        <div className='header-wapper'>
            <div className='container'>
                <button className='mobile-header' onClick={(event) => showNavbar(event)}>  <i className="fa-solid fa-bars"></i></button>
                <div className='header-wapper-inner d-flex'>

                    <div className='header-logo'>
                        <Link to={'/'}><img src={logo} alt='logo' /></Link>
                    </div>

                    <div className='header-search'>
                        <form id='search'>
                            <input className='search' placeholder='Search for products...' />
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </form>
                    </div>

                    <div className='header-buttons'>
                        <div className='header-login'>
                            {auth !== null?
                            <Link to='/my-account'>
                                <i className="fa-regular fa-user"></i>
                            </Link>
                            :
                            <Link to='/'>
                                <i className="fa-regular fa-user"></i>
                            </Link>}
                        </div>
                        <div className='header-wish'>
                            <div className='number-wish'>
                                <span>0</span>
                            </div>
                            <a href='#'>
                                <i className="fa-regular fa-heart"></i>
                            </a>
                        </div>
                        <div className='header-cart'>
                            <div className='button-icon'>
                                <a href='#'>
                                    <i className="fa-solid fa-bag-shopping"></i>
                                </a>
                            </div>
                            <div className='cart-number'>
                                <span>10</span>
                            </div>
                        </div>

                        <div className='cart-price'>
                            <span>$0.00</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
const mapDispatchToProps = (dispatch) => {
    return {
    };
};
const mapStateToProps = (state, ownProps) => {
    return {
        dataUserLogin: state.userAuth
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Headerwapper);  