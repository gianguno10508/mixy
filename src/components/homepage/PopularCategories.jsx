import React from 'react';
function PopularCategories({ popularCategories }) {
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
                        popularCategories.map((item, index) => (
                            <div className='item-categories col-lg-3' key={index}>
                                <div class="thumb-category">
                                    <a href="#">
                                        <img src={item.image} alt="" /></a>
                                </div>
                                <div class="desc-listcategoreis">
                                    <div class="name_categories">
                                        <a href="#"> {item.title}</a>
                                        <span>{item.length} Products</span>
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

export default PopularCategories;