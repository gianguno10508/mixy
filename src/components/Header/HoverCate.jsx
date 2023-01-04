const HoverCate = ({ data }) => {
    // console.log(data);
    return (
        <>
            {data.image ? (
                <div className="sub-menu col-xs-12 col-lg-12 ">
                    <div className="popup_vertical">
                        <div className="pos-menu-row row">
                            {
                                data.categorys.map((item, index) => (
                                    <div className="pos-menu-col col-xs-6 col-lg-3" key={index}>
                                        <ul className="ul-column">
                                            <li className="submenu-item"><a href="#">{item.titleCategory}</a>
                                                <ul className="category-sub-menu">
                                                    {item.content.map((ite, i) => (
                                                        <li key={i}><a href="#">{ite.category}</a></li>
                                                    ))}

                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="pos-menu-row row">
                            <div className="pos-menu-col col-xs-12 col-lg-12  ">
                                <a href="#">
                                    <img src={data.image} alt="img"></img>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <ul className="menu-dropdown sub-menu">
                    {data.categorys.map((item, index) => (
                        <li key={index}><a href="#">{item.titleCategory}</a></li>
                    ))}
                </ul>
            )
            }

        </>

    )
}
export default HoverCate;