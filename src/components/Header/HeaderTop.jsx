import React from 'react';
function HeaderTop() {
    return (
        <div className='header-top'>
            <div className='container'>
                <div className='header-top-inner'>
                    <div className='topbar-notice'>
                        <span>Free shipping on orders over $25. </span>
                        <a href='#'>Read more.</a>
                    </div>
                    <div className='text-content'>
                        <i className="fa-solid fa-phone"></i>&nbsp;&nbsp;Need help? Call Us: &nbsp;<a href='tel:+888554168'>+888554168</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderTop;