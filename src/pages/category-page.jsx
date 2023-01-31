import { useQuery } from '@apollo/client';
import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import ComponentsListProduct from '../components/components-list-product';
import CATEGORIES from '../graphql/categories';
import Breadcrumb from '../root-components/Breadcrumb';

function CategoryPage(props) {
    const { slug } = useParams();
    const { pathname } = useLocation();
    const { loading, error, data } = useQuery(CATEGORIES);
    var listCategory;
    if (loading) return <p>Loading......</p>;
    if (error) return <p>Error : {error.message}</p>;
    if (data) {
        listCategory = data.productCategories.nodes;;

        const thisProduct = listCategory.find((product) => String(product.slug) === slug) || {};
        let jsonProduct = [];
        if (thisProduct !== null && thisProduct.products !== undefined) {
            jsonProduct = thisProduct.products.nodes;
        }
        return (
            <>
                <Breadcrumb
                    pathname={pathname}
                    background={'https://demo2.posthemes.com/pos_mixy/layout2/themes/theme_mixy2/assets/img/bg_breadcrumb.jpg'}
                />
                <ComponentsListProduct
                    dataPricesDrop={jsonProduct}
                    pathname={null}
                    searchfilters={true}
                    listCategory={listCategory}
                    titleCategory={false}
                />
            </>
        );
    }
}

export default CategoryPage;