import { useQuery } from '@apollo/client';
import React from 'react';
import ConponentsSlider from '../Slider';


function PoslistCateProduct({ title, description, slidesToShow, image, slidesPerRow, category, data }) {
    const cate = [
        { title: 'Berries & Cherries' },
        { title: 'Grapes' },
        { title: 'Carrots & Root Vegetables' },
        { title: 'Lettuce & Salad bags' },
        { title: 'Tomatoes' },
        { title: 'Cucumber' },
        { title: 'Spreads & Margarine' },
        { title: 'Fresh Cream & Custard' },
        { title: 'Baking & Cooking' },
    ];
    // const { loading, error, data } = useQuery(CATEGORIES);
    // var categories;
    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>Error : {error.message}</p>;
    // if (data) {
    //     categories = data.productCategories.nodes;
    // }
    return (
        <div className='container'>
            <div className='pos-special-products'>
                <div className='pos_title'>
                    <h2>{title}</h2>
                    <div className="desc_title">
                        {description}
                    </div>
                </div>
                <div className={`content-listcate ${category === true ? 'content-tabcate' : ''}`}>
                    <div class="col-left">
                        {
                            category &&
                            <ul className='tab_cates'>
                                {
                                    cate.map((item, index) => (
                                        <li key={index}>
                                            <span>{item.title}</span>
                                        </li>
                                    ))
                                }

                            </ul>
                        }

                        <div class="banner-box">
                            <a href="#"><img src={image} alt="" /></a>
                        </div>
                    </div>
                    <div className='col-right'>
                        <div className='listcateproduct-products'>
                            <ConponentsSlider
                                slidesToShow={slidesToShow}
                                slidesPerRow={slidesPerRow}
                                data={data}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PoslistCateProduct;