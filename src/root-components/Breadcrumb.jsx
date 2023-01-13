import '../assets/images/header/bg_breadcrumb.jpg';
const Breadcrumb = ({ pathname, background }) => {

    return (
        <div className={`page-title-wrapper ${background ? 'wrapper-background' : ''}`} >
            <div className="container">
                <h1 className="page-header">{pathname.slice(1).replace(/-/g, ' ')}</h1>
                <div className="breadcrumb_container">
                    <ol>
                        <li><a href=''>Home</a></li>
                        <li><i className="fa-solid fa-angle-right"></i></li>
                        <li><a href={pathname}>{pathname.slice(1).replace(/-/g, ' ')}</a></li>
                    </ol>
                </div>
            </div>
        </div>


    )
}
export default Breadcrumb;