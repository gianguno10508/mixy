import { useQuery } from '@apollo/client';
import React from 'react';
import ComponentsListProduct from '../components/components-list-product';
import PRODUCTS from '../graphql/products';
import Breadcrumb from '../root-components/Breadcrumb';
import LoadingImg from '../assets/images/Loading_icon.gif'
import { useLocation } from 'react-router-dom';
function PricesDrop(props) {
    // const pathname = 'Prices drop'
    const { pathname } = useLocation();
    const { loading, error, data } = useQuery(PRODUCTS);

    if (loading) return <p>Loading......</p>;
    if (error) return <p>Error : {error.message}</p>;
    if (data) {
        const dataPricesDrop = data.products.nodes
        console.log(dataPricesDrop);
        return (
            <>

                <Breadcrumb pathname={pathname} />
                <ComponentsListProduct
                    pathname={pathname}
                    dataPricesDrop={dataPricesDrop}
                />
            </>

        );

    }
}

export default PricesDrop;