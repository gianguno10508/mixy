import React from 'react';
import MultiRangeSlider from './MultiRangeSlider';

function LeftColumn({ pathname, searchfilters, listCategory, listSize, handleChange }) {
    return (
        <div id="left-column" className="col-xs-12 col-sm-4 col-md-3">
            {
                searchfilters ? (
                    <div className='search_filters'>
                        <p className='text-uppercase h6 hidden-sm-down'>Filter By</p>
                        {listCategory &&
                            <div className='filter-category facet clearfix'>
                                <p className="h6 facet-title hidden-sm-down">Categories</p>
                                {listCategory.map((itemCategory, index) => (
                                    <label key={index}>{itemCategory.name}
                                        <input type='checkbox' className='checked_listcate'
                                            name={itemCategory.name} value={itemCategory.name} onChange={handleChange} />
                                        <span className='checkmark'></span>
                                    </label>
                                ))}
                            </div>
                        }

                        <div className='filter-price facet clearfix'>
                            <p className="h6 facet-title hidden-sm-down">Price</p>
                            <MultiRangeSlider
                                min={0}
                                max={1000}
                                onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
                            />
                        </div>
                        <div className='filter-size facet clearfix'>
                            <p className="h6 facet-title hidden-sm-down">Size</p>
                            {listSize.map((itemSize, index) => (
                                <label key={index}>{itemSize.size}g
                                    <input type='checkbox' className='checked_listcate'
                                        name={itemSize.size} value={itemSize.size} />
                                    <span className='checkmark'></span>
                                </label>
                            ))}
                        </div>

                    </div>
                ) : (null)
            }
            {pathname ? (
                <div className="block-categories">
                    <ul className="category-top-menu">
                        <li><a className="text-uppercase h6" href="#">Home</a></li>
                        <li>
                            <ul className="category-sub-menu">
                                <li style={{ textTransform: 'capitalize' }}><a href="#">{pathname.slice(1).replace(/-/g, ' ')}</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            ) : (
                null
            )}

            <div id="tags_block">
                <h2>tags</h2>
                <ul className="tags_block">
                    <li>
                        <a href="#" title="More about Fresh Fruit" className="tag_level">Fresh Fruit</a>
                    </li>
                    <li>
                        <a href="#" title="More about Fresh Vegetables" className="tag_level">Fresh Vegetables</a>
                    </li>
                    <li>
                        <a href="#" title="More about Baking &amp; Cooking" className="tag_level">Baking &amp; Cooking</a>
                    </li>
                    <li>
                        <a href="#" title="More about Bananas" className="tag_level">Bananas</a>
                    </li>
                </ul>
            </div>

            <div className="advertising-block">
                <a href="#" title="PrestaShop">
                    <img src="https://demo2.posthemes.com/pos_mixy/layout2/modules/ps_advertising/img/advertising-s2.jpg" alt="PrestaShop" title="PrestaShop" />
                </a>
            </div>

        </div>
    );
}

export default LeftColumn;