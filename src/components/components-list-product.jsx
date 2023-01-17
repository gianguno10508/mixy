import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import '../assets/css/components-list-product.css';
import CATEGORIES from '../graphql/categories';
import LeftColumn from './PageListProduct/LeftColumn';
import RightColumn from './PageListProduct/RightColumn';
function ComponentsListProduct({ pathname, dataPricesDrop, searchfilters }) {
    const [productCategory, setproductCategory] = useState([]);
    const [productSize, setproductSize] = useState([]);
    const [pricemin, setPriceMin] = useState();
    const [pricemax, setPriceMax] = useState();
    // console.log(productSize);

    const listSize = [
        { size: 100 },
        { size: 300 },
        { size: 500 },
        { size: 1000 },
    ]

    const { loading, error, data } = useQuery(CATEGORIES);
    var listCategory;
    if (loading) return <p>Loading......</p>;
    if (error) return <p>Error : {error.message}</p>;
    if (data) {
        listCategory = data.productCategories.nodes;;
    }

    // ______FilterCategory____
    const handleChange = e => {
        if (e.target.checked) {
            setproductCategory([...productCategory, e.target.value]);

        } else {
            setproductCategory(productCategory.filter(id => id !== e.target.value));

        }
    };
    //  _______Filter Price~_______
    const price = dataPricesDrop.map((p) => {
        if (p.variations !== undefined && p.variations.nodes !== undefined) {
            if (p.variations.nodes[0].salePrice == null) {
                return p.variations.nodes[0].salePrice.slice(1);
            } else {
                return p.variations.nodes[0].regularPrice.slice(1);
            }
        } else {
            if (p.salePrice === null) {
                return p.regularPrice.slice(1);
            } else {
                return p.salePrice.slice(1);
            }
        }
    });
    // console.log(price);
    var maxInNumbers = Math.max.apply(Math, price);
    var minInNumbers = Math.min.apply(Math, price);
    const handleInput = (min, max) => {
        setPriceMin(min);
        setPriceMax(max)
    };
    // console.log('min', pricemin);
    // console.log('max', pricemax);


    // ______Filter Size____
    const handleChangeSize = e => {
        if (e.target.checked) {
            setproductSize([...productSize, e.target.value]);

        } else {
            setproductSize(productSize.filter(id => id !== e.target.value));

        }
    };
    return (
        <div className='container'>
            <div className='list-product'>
                <div className='row'>
                    <LeftColumn
                        pathname={pathname}
                        searchfilters={searchfilters}
                        listCategory={listCategory}
                        listSize={listSize}
                        handleChange={handleChange}
                        handleChangeSize={handleChangeSize}
                        maxInNumbers={maxInNumbers}
                        minInNumbers={minInNumbers}
                        handleInput={handleInput}
                    />
                    <RightColumn
                        data={dataPricesDrop}
                        productCategory={productCategory}
                        productSize={productSize}
                        pricemin={pricemin}
                        pricemax={pricemax}
                    />
                </div>
            </div>
        </div>
    );
}

export default ComponentsListProduct;