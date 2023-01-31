import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import CATEGORIES from '../../graphql/categories';
import ConponentsSlider from '../Slider';
import $ from "jquery";

function PoslistCateProduct({ title, description, slidesToShow, image, slidesPerRow, category, dataProduct, categories, filterItems }) {
    // const cate = [
    //     { title: 'Berries & Cherries' },
    //     { title: 'Grapes' },
    //     { title: 'Carrots & Root Vegetables' },
    //     { title: 'Lettuce & Salad bags' },
    //     { title: 'Tomatoes' },
    //     { title: 'Cucumber' },
    //     { title: 'Spreads & Margarine' },
    //     { title: 'Fresh Cream & Custard' },
    //     { title: 'Baking & Cooking' },
    // ];
    // const [productCategory, setproductCategory] = useState([]);
    // console.log(productCategory);
    // const { loading, error, data } = useQuery(CATEGORIES);
    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>Error : {error.message}</p>;
    // if (data) {
    //     const categories = data.productCategories.nodes;
    //     // console.log(categories); 
    //     const filterItems = (category) => {

    //         const newItems = categories.filter((item) =>
    //             item.name === category);
    //         setproductCategory(newItems);
    //     };
    $(document).ready(function () {
        var selector = ".tab_cates li";

        $(selector).on("click", function () {
            $(selector).removeClass("active");
            $(this).addClass("active");
        });
    });


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
                    <div className="col-left">
                        {
                            category &&
                            <ul className='tab_cates'>
                                {
                                    categories.map((item, index) => (
                                        <li key={index} onClick={() => filterItems(item.name)}>
                                            <span >{item.name}</span>
                                        </li>
                                    ))
                                }

                            </ul>
                        }

                        <div className="banner-box">
                            <a href="#"><img src={image} alt="" /></a>
                        </div>
                    </div>
                    <div className='col-right'>
                        <div className='listcateproduct-products'>
                            <ConponentsSlider
                                slidesToShow={slidesToShow}
                                slidesPerRow={slidesPerRow}
                                dataProduct={dataProduct}
                            // productCategory={productCategory}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    // }
}

export default PoslistCateProduct;