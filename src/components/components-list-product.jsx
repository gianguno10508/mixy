import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import '../assets/css/components-list-product.css';
import CATEGORIES from '../graphql/categories';
import LeftColumn from './PageListProduct/LeftColumn';
import RightColumn from './PageListProduct/RightColumn';
function ComponentsListProduct({ pathname, dataPricesDrop, searchfilters }) {
    const [productCategory, setproductCategory] = useState([]);
    // console.log(productCategory);
    const datalist = dataPricesDrop.filter(ite => ite.onSale === true);
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
                    />
                    <RightColumn
                        data={datalist}
                        productCategory={productCategory}
                    />
                </div>
            </div>
        </div>
    );
}

export default ComponentsListProduct;