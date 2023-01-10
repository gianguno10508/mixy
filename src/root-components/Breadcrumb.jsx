const Breadcrumb = ({ pathname }) => {
    return (
        <div className=" page-title-wrapper">
            <div className="container">
                <h1 className="page-header">{pathname}</h1>
                <div className="breadcrumb_container">
                    <ol>
                        <li><a href=''>Home</a></li>
                        <li><i className="fa-solid fa-angle-right"></i></li>
                        <li><a href={pathname}>{pathname}</a></li>
                    </ol>
                </div>
            </div>
        </div>
    )
}
export default Breadcrumb;