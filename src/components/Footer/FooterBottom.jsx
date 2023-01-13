import React from 'react';



function FooterBottom(props) {
    return (
        <div className='footer-bottom'>
            <div className="container">
                <div className="row">

                    <div className="col-md-6 links footer_block">
                        <div className="copyright">Copyright © <a href="#">Posthemes</a>. All Rights Reserved</div>
                    </div>
                    <div className="col-md-6 links footer_block">
                        <div className="payment">
                            <img src="https://demo2.posthemes.com/pos_mixy/layout2/img/cms/payment.png" alt="" />
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default FooterBottom;