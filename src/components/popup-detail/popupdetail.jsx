import React from 'react';
import '../../assets/css/detail-product.css';
import FormAddCartPopup from './form-add-cart.-popup';
import SliderPopUpDetailProduct from './slider-detail-product-popup';

function Popupdetail({ item }) {
    // console.log(item[0].galleryImages.nodes);
    return (
        <div className="detail-product popup-detail">
            <div className="container">
                <div className="row">

                    <div className="col-lg-6 col-md-6 col-sm-12 col-left-product-details">
                        <SliderPopUpDetailProduct
                            slidesArr={item[0].galleryImages.nodes}
                        />

                    </div>
                    <FormAddCartPopup data={item[0]} />
                </div>
            </div>
        </div>
    );
}

export default Popupdetail;