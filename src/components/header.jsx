import Categories from "../root-components/categories";
import Navbar from "../root-components/nav-menu";

const Header = () => {
    return(
        <>
            <Categories />
            <Navbar location={"PRIMARY"}/>
        </>
    )
};
export default Header;
