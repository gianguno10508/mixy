import React from 'react';


function FooterTop() {
    return (
        <div className='footer-top'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-9 links footer_block'>
                        <div class="block_newsletter">
                            <div class="pos_title left">
                                <i className="fa-regular fa-envelope-open"></i>
                                <h2>Sign up to Newsletter</h2>
                                <p>...and receive $20 coupon for first shopping</p>
                            </div>
                            <form method="post">
                                <button class="btn-sub" name="submitNewsletter" type="submit">Subscribe&nbsp;&nbsp;<i className="fa-solid fa-arrow-right"></i></button>
                                <div class="input-wrapper">
                                    <input name="email" type="email" value="" placeholder="Your email address" />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='col-md-3 links footer_block'>
                        <div class="contact-footer">
                            <i className="fa-brands fa-whatsapp"></i>
                            <div class="txt_contact">
                                <p>Call Us 24/7</p>
                                <h2><a href="tel:+8 88 55 4168">+8 88 55 4168</a></h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FooterTop;