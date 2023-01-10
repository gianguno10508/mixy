import React from 'react';
import ConponentsSlider from '../Slider';
function PosSpecialProducts({ slidesToShow, title, description, countdown, slidesPerRow }) {
    return (
        <div className='container'>
            <div className='pos-special-products'>
                <div className='pos_title'>
                    <h2>{title}</h2>
                    <div className="desc_title">
                        {description}
                    </div>
                </div>
                <ConponentsSlider slidesToShow={slidesToShow} countdown={countdown} slidesPerRow={slidesPerRow} />
            </div>
        </div>

    );
}

export default PosSpecialProducts;