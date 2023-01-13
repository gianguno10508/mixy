import React, { useState } from 'react';
import Navbar from '../../root-components/nav-menu';
function FooterMiddle(props) {

    return (
        <div className='footer_middle'>
            <div className='footer_middle-up'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12 links footer_block'>
                            <div className="static_info">
                                <div className="row">
                                    <div className="col-info col-xs-12 col-sm-6 col-md-6 col-lg-3">
                                        <div className="box_info">
                                            <i className="fa-solid fa-truck-fast"></i>
                                            <div className="txt_info">
                                                <h2>Free Shipping</h2>
                                                <p>Online Only. Exclusions Apply</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-info col-xs-12 col-sm-6 col-md-6 col-lg-3">
                                        <div className="box_info">
                                            <i className="fa-solid fa-money-bill-wave"></i>
                                            <div className="txt_info">
                                                <h2>Best Price Guarantee</h2>
                                                <p>If You Find a Lower Price</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-info col-xs-12 col-sm-6 col-md-6 col-lg-3">
                                        <div className="box_info">
                                            <i className="fa-solid fa-gift"></i>
                                            <div className="txt_info">
                                                <h2>Free Curbside Pickup</h2>
                                                <p>Grab Your Gear and Go</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-info col-xs-12 col-sm-6 col-md-6 col-lg-3">
                                        <div className="box_info">
                                            <i className="fa-regular fa-life-ring"></i>
                                            <div className="txt_info">
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
                        <div className="col-md-3 links footer_block">
                            <div className="logo-footer">
                                <img src="https://demo2.posthemes.com/pos_mixy/layout2/img/cms/logo-footer.png" alt="" />
                            </div>

                            <ul className="social_follow">
                                <li className="facebook"><a href="#" ><i className="fa-brands fa-facebook"></i></a></li>
                                <li className="twitter"><a href="#" ><i className="fa-brands fa-twitter"></i></a></li>
                                <li className="youtube"><a href="#" ><i className="fa-brands fa-youtube"></i></a></li>
                                <li className="instagram"><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                            </ul>

                        </div>
                        <div className='col-md-3 links footer_block'>
                            <Navbar location={"SECONDARY_MENU"} isTitle={true} classUL={'footer_list'} />
                        </div>
                        <div className='col-md-3 links footer_block'>
                            <Navbar location={"FOOTER_MENU"} isTitle={true} classUL={'footer_list'} />
                        </div>
                        <div className='col-md-3 links footer_block'>
                            <h3 className=" hidden-sm-down">Information</h3>
                            <div className="get_app">
                                <p>Fast &amp; Convenient Access</p>
                                <div className="img_app">
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