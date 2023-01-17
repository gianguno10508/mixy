import React from 'react';
import ConponentsSlider from '../Slider';
function PosSpecialProducts({ slidesToShow, title, description, countdown, slidesPerRow, dataProduct }) {

    return (
        <div className='container'>
            <div className='pos-special-products'>
                <div className='pos_title'>
                    <h2>{title}</h2>
                    <div className="desc_title">
                        {description}
                    </div>
                </div>
                <ConponentsSlider
                    slidesToShow={slidesToShow}
                    countdown={countdown}
                    slidesPerRow={slidesPerRow}
                    dataProduct={dataProduct}
                />
            </div>
        </div>

    );
}

export default PosSpecialProducts;