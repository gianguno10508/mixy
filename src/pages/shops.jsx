import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ComponentsListProduct from '../components/components-list-product';
import CATEGORIES from '../graphql/categories';
import PRODUCTS from '../graphql/products';
import Breadcrumb from '../root-components/Breadcrumb';

function Shops(props) {
    const { pathname } = useLocation();
    const { loading, error, data } = useQuery(PRODUCTS);
    if (loading) return <p>Loading......</p>;
    if (error) return <p>Error : {error.message}</p>;
    if (data) {
        const dataPricesDrop = data.products.nodes
        return (
            <>
                <Breadcrumb
                    pathname={pathname}
                    background={'https://demo2.posthemes.com/pos_mixy/layout2/themes/theme_mixy2/assets/img/bg_breadcrumb.jpg'}

                />
                <ComponentsListProduct
                    dataPricesDrop={dataPricesDrop}
                    pathname={null}
                    searchfilters={true}
                />
            </>
        );
    }
}

export default Shops;