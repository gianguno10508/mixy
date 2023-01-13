import { useQuery } from '@apollo/client';
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import CATEGORIES from '../../graphql/categories';
function PopularCategories({ slidesToShow }) {
    const { loading, error, data } = useQuery(CATEGORIES);
    var categories;

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
    if (data) {
        categories = data.productCategories.nodes;

        return (
            <div className='container'>
                <div className='popular-categories-main'>
                    <div className='pos_title'>
                        <h2>Popular Categories</h2>
                        <div className="desc_title">
                            Some of our popular categories include grocery
                        </div>
                    </div>
                    <div className='content-list row'>
                        {
                            categories.map((item, index) => (
                                <div className='item-categories col-lg-3' key={index}>
                                    <div class="thumb-category">
                                        <a href="#">
                                            <img src={item.image.sourceUrl} alt="" /></a>
                                    </div>
                                    <div class="desc-listcategoreis">
                                        <div class="name_categories">
                                            <a href="#"> {item.name}</a>
                                            {
                                                item.products.nodes &&
                                                <span> {item.products.nodes.length} Products</span>
                                            }

                                        </div>
                                    </div>
                                </div>

                            ))
                        }
                    </div>
                </div>
            </div>

        );
    }

}

export default PopularCategories;