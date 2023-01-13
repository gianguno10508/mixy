import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import FilterProduct from '../filter-product';
import SingleProductCopy from '../single-product-copy';

function RightColumn({ data, productCategory }) {
    const [showGird, setshowGrid] = useState('grid')
    const handClickShowGrid = (event) => {
        if (showGird == 'grid') {
            setshowGrid('grid')
        } else {
            setshowGrid('grid');
            event.stopPropagation();
        }
    };
    const handClickShowList = (event) => {
        if (showGird == 'list') {
            setshowGrid('list')
        } else {
            setshowGrid('list');
            event.stopPropagation();
        }
    };

    const test = {

    }
    // _____Filter_____
    const [dataProduct, setdataProduct] = useState(data)
    const [dt, setdt] = useState()
    console.log(dataProduct);

    const lengthProduct = dataProduct.length;
    const sortPlayers = (selectEvent) => {
        const options = {
            "nameaz": [...dataProduct].sort((a, b) => (a.name < b.name ? -1 : 1)),
            "nameza": [...dataProduct].sort((a, b) => (a.name > b.name ? -1 : 1)),
            "pricelowtohigh": [...dataProduct].sort((a, b) => (a.regularPrice < b.regularPrice ? -1 : 1)),
            "pricehightolow": [...dataProduct].sort((a, b) => (a.regularPrice > b.regularPrice ? -1 : 1)),
        };
        setdataProduct(options[selectEvent.target.value]);
    };

    // ______category_____
    useEffect(() => {
        if (productCategory.length === 0) {
            setdt(data);
        } else {
            setdt(
                data.filter(movie =>
                    productCategory.some(categoty => [movie.name].flat().includes(categoty))
                )
            );
        }
    }, [productCategory]);

    console.log(productCategory);
    console.log('list', dt);

    const [pageNumber, setPageNumber] = useState(0);
    const usersperPage = 7;
    const pagesVisited = pageNumber * usersperPage;
    const pageCount = Math.ceil(dataProduct.length / usersperPage);
    const onPageChange = ({ selected }) => {
        setPageNumber(selected)
    }


    const displayUsers = dataProduct.slice(pagesVisited, pagesVisited + usersperPage)
        .map((item, index) => (
            <div
                className={`item-list-product animated ${showGird == 'grid' ? 'product_per_4 col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 zoomIn' : 'col-xs-12 fadeInRight'}`}
                key={index}
            >
                <SingleProductCopy
                    showGird={showGird}
                    data={item}
                />
            </div>
        ))
    return (
        <div id='right-column' className='col-xs-12 col-sm-8 col-md-9'>
            <div className='product-list'>
                <FilterProduct
                    showGird={showGird}
                    handClickShowGrid={handClickShowGrid}
                    handClickShowList={handClickShowList}
                    sortPlayers={sortPlayers}
                    lengthProduct={lengthProduct}

                />

                <div className='product-list-content'>
                    <div className={`row product-content-wapper ${showGird}`}>
                        {displayUsers}
                    </div>
                    <div className='navigation-pagination'
                        onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}
                    >
                        {
                            dataProduct.length > usersperPage ? (
                                <ReactPaginate
                                    previousLabel={<i className="fa-solid fa-angle-left"></i>}
                                    nextLabel={<i className="fa-solid fa-angle-right"></i>}
                                    pageCount={pageCount}
                                    onPageChange={onPageChange}
                                    containerClassName={'paginationBttns'}
                                    previousLinkClassName={'previousBttn'}
                                    nextLinkClassName={'nextBttn'}
                                    disabledClassName={'paginationDisabled'}
                                    activeClassName={'paginationActive'}
                                />
                            ) : null
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RightColumn;