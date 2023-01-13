import React from 'react';

function BannerTwo() {
    return (
        <div className='container'>
            <div className="home-banner-two">
                <div className="row">
                    <div className="col col-md-6 col-xs-12">
                        <div className="banner-box"><a href="#"><img src="https://demo2.posthemes.com/pos_mixy/layout2/img/cms/1_1.jpg" alt="" /></a>
                            <div className="text-banner">
                                <p >Chocolate Cookies</p>
                                <h3>Best Sweets In Town</h3>
                                <h4 className="custom-font">From 20% off</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col col-md-6 col-xs-12">
                        <div className="banner-box"><a href="#"><img src="https://demo2.posthemes.com/pos_mixy/layout2/img/cms/2_1.jpg" alt="" /></a>
                            <div className="text-banner">
                                <p>Capture The</p>
                                <h3>Delicious Moments</h3>
                                <h4 className="custom-font">UP to 30% off</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default BannerTwo;