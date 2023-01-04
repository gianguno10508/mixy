import React, { useRef } from 'react';
import logo from '../../assets/images/header/mixy-responsive-prestashop-theme-logo-1631611858.jpg';
function Headerwapper({ showNavbar }) {

    return (
        <div className='header-wapper'>
            <div className='container'>
                <button className='mobile-header' onClick={(event) => showNavbar(event)}>  <i className="fa-solid fa-bars"></i></button>
                <div className='header-wapper-inner d-flex'>

                    <div className='header-logo'>
                        <img src={logo} alt='logo' />
                    </div>

                    <div className='header-search'>
                        <form id='search'>
                            <input className='search' placeholder='Search for products...' />
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </form>

                    </div>

                    <div className='header-buttons'>
                        <div className='header-login'>
                            <a href='#'>
                                <i className="fa-regular fa-user"></i>
                            </a>
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

export default Headerwapper;