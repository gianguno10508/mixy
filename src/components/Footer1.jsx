import React from 'react';
import '../assets/css/footer.css';
import FooterBottom from './Footer/FooterBottom';
import FooterMiddle from './Footer/FooterMiddle';
import FooterTop from './Footer/FooterTop';
function Footer1() {
    return (
        <div className='section-footer'>
            <FooterTop />
            <FooterMiddle />
            <FooterBottom />
        </div>
    );
}

export default Footer1;