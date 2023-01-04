import React, { useState } from 'react';
function FooterMiddle(props) {

    return (
        <div className='footer_middle'>
            <div className='footer_middle-up'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12 links footer_block'>
                            <div class="static_info">
                                <div class="row">
                                    <div class="col-info col-xs-12 col-sm-6 col-md-6 col-lg-3">
                                        <div class="box_info">
                                            <i className="fa-solid fa-truck-fast"></i>
                                            <div class="txt_info">
                                                <h2>Free Shipping</h2>
                                                <p>Online Only. Exclusions Apply</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-info col-xs-12 col-sm-6 col-md-6 col-lg-3">
                                        <div class="box_info">
                                            <i className="fa-solid fa-money-bill-wave"></i>
                                            <div class="txt_info">
                                                <h2>Best Price Guarantee</h2>
                                                <p>If You Find a Lower Price</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-info col-xs-12 col-sm-6 col-md-6 col-lg-3">
                                        <div class="box_info">
                                            <i className="fa-solid fa-gift"></i>
                                            <div class="txt_info">
                                                <h2>Free Curbside Pickup</h2>
                                                <p>Grab Your Gear and Go</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-info col-xs-12 col-sm-6 col-md-6 col-lg-3">
                                        <div class="box_info">
                                            <i class="fa-regular fa-life-ring"></i>
                                            <div class="txt_info">
                                                <h2>Support 24/7</h2>
                                                <p>Contact us 24 hours a day</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer_middle-down'>
                <div className='container'>
                    <div className='row'>
                        <div class="col-md-3 links footer_block">
                            <div class="logo-footer">
                                <img src="https://demo2.posthemes.com/pos_mixy/layout2/img/cms/logo-footer.png" alt="" />
                            </div>

                            <ul class="social_follow">
                                <li class="facebook"><a href="#" ><i className="fa-brands fa-facebook"></i></a></li>
                                <li class="twitter"><a href="#" ><i className="fa-brands fa-twitter"></i></a></li>
                                <li class="youtube"><a href="#" ><i className="fa-brands fa-youtube"></i></a></li>
                                <li class="instagram"><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                            </ul>

                        </div>
                        <div className='col-md-3 links footer_block'>
                            <h3 class=" hidden-sm-down">Information</h3>
                            <ul className='footer_list'>
                                <li><a href='#'>Delivery</a></li>
                                <li><a href='#'>Delivery</a></li>
                                <li><a href='#'>Delivery</a></li>
                                <li><a href='#'>Delivery</a></li>
                                <li><a href='#'>Delivery</a></li>
                            </ul>


                        </div>
                        <div className='col-md-3 links footer_block'>
                            <h3 class=" hidden-sm-down">Information</h3>
                            <ul className='footer_list'>
                                <li><a href='#'>Delivery</a></li>
                                <li><a href='#'>Delivery</a></li>
                                <li><a href='#'>Delivery</a></li>
                                <li><a href='#'>Delivery</a></li>
                                <li><a href='#'>Delivery</a></li>
                            </ul>
                        </div>
                        <div className='col-md-3 links footer_block'>
                            <h3 class=" hidden-sm-down">Information</h3>
                            <div class="get_app">
                                <p>Fast &amp; Convenient Access</p>
                                <div class="img_app">
                                    <a href="#"><img src="https://demo2.posthemes.com/pos_mixy/layout2/img/cms/app_store.png" alt="" /></a>
                                    <a href="#"><img src="https://demo2.posthemes.com/pos_mixy/layout2/img/cms/google_play.png" alt="" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default FooterMiddle;