import Navbar from "../root-components/nav-menu";

const Footer = () => {
    return(
        <footer>
            <Navbar location={"FOOTER_MENU"} isTitle={true} />
            <Navbar location={"SECONDARY_MENU"} isTitle={true} />
        </footer>
    )
};
export default Footer;
