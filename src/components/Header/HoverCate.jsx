const HoverCate = ({ data }) => {
    // console.log(data);
    return (
        <>
            <ul className="menu-dropdown sub-menu">
                {data.categorys.map((item, index) => (
                    <li key={index}><a href="#">{item.titleCategory}</a></li>
                ))}
            </ul>

        </>

    )
}
export default HoverCate;