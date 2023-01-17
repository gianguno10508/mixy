import { useQuery } from '@apollo/client';
import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import ComponentsListProduct from '../components/components-list-product';
import PRODUCTS from '../graphql/products';

function NewProducts(props) {
    const { pathname } = useLocation();
    const { loading, error, data } = useQuery(PRODUCTS);

    if (loading) return <p>Loading......</p>;
    if (error) return <p>Error : {error.message}</p>;
    if (data) {
        const dataPricesDrop = data.products.nodes
        const datalist = dataPricesDrop.filter(ite => ite.onSale === true);
        return (
            <>
                <Breadcrumb pathname={pathname} />
                <ComponentsListProduct
                    pathname={pathname}
                    dataPricesDrop={datalist}
                />
            </>
        );
    }
}

export default NewProducts;